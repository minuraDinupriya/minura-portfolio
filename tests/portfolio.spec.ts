import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('opens a case study from the homepage and preserves browser history', async ({
  page,
}) => {
  await page.goto('/')
  await page.locator('a.button-primary[href="#work"]').click()
  await expect(page).toHaveURL(/\/#work$/)
  const projects = page.locator('#work')
  await expect(projects).toBeInViewport()

  await page
    .getByRole('article', { name: 'TradeSphere' })
    .getByRole('link', { name: /^View case study/ })
    .click()
  await expect(page).toHaveURL(/\/projects\/tradesphere$/)
  await expect(page).toHaveTitle('TradeSphere | Minura Ranaweera')
  await expect(
    page.getByRole('heading', { level: 1, name: 'TradeSphere' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: /Explore source on GitHub/ }),
  ).toHaveAttribute('href', 'https://github.com/minuraDinupriya/tradesphere')

  await page.goBack()
  await expect(projects).toBeFocused()
  await page.goForward()
  await expect(
    page.getByRole('heading', { level: 1, name: 'TradeSphere' }),
  ).toBeVisible()
})

test('loads a deep link on refresh and handles an unknown case study', async ({
  page,
}) => {
  await page.goto('/projects/focuspilot')
  const heading = page.getByRole('heading', { level: 1, name: 'FocusPilot' })
  await expect(heading).toBeVisible()
  await page.reload()
  await expect(heading).toBeVisible()

  await page.goto('/projects/not-a-project')
  await expect(
    page.getByRole('heading', { name: /This route left/ }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Return to portfolio' }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: /Minura\s*Ranaweera/i }),
  ).toBeVisible()
})

test('the résumé is downloadable and contact actions use the correct destinations', async ({
  page,
}) => {
  await page.goto('/resume')
  await expect(
    page.getByRole('heading', { level: 1, name: 'Résumé' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'minuraranaweera@gmail.com' }),
  ).toHaveAttribute('href', 'mailto:minuraranaweera@gmail.com')
  const contact = page.getByRole('region', { name: 'Contact' })
  await expect(contact.getByRole('link', { name: /^GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/minuraDinupriya',
  )
  const linkedIn = contact.getByRole('link', { name: /^LinkedIn/ })
  await expect(linkedIn).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/minura-ranaweera',
  )
  await expect(linkedIn).toHaveAttribute('rel', /\bnoopener\b/)

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download résumé (PDF)' }).click(),
  ])
  expect(download.suggestedFilename()).toBe('minura-ranaweera-resume.pdf')
  expect(await download.failure()).toBeNull()
})

test('the narrow-screen menu opens with the keyboard, closes with Escape, and navigates', async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === 'desktop',
    'The desktop navigation stays visible',
  )

  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Open menu', exact: true })
  const close = page.getByRole('button', { name: 'Close menu' })
  const navigation = page.getByRole('navigation', { name: 'Mobile' })
  await expect(navigation).toBeHidden()

  await menu.focus()
  await page.keyboard.press('Enter')
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await expect(close).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  await expect(navigation).toBeHidden()

  await page.keyboard.press('Enter')
  await navigation.getByRole('link', { name: /Expertise/ }).click()
  await expect(page).toHaveURL(/\/#expertise$/)
  await expect(navigation).toBeHidden()
  await expect(page.locator('#expertise')).toBeFocused()
})

test('the homepage fits the viewport and passes automated accessibility checks', async ({
  page,
}, testInfo) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { level: 1, name: /Minura\s*Ranaweera/i }),
  ).toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(() => {
    const root = document.documentElement
    return root.scrollWidth > root.clientWidth
  })
  expect(hasHorizontalOverflow).toBe(false)

  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze()
  expect(
    violations.map(({ id, nodes }) => ({
      id,
      targets: nodes.map(({ target }) => target),
    })),
  ).toEqual([])

  if (process.env.PLAYWRIGHT_CAPTURE === '1') {
    await page.screenshot({
      path: testInfo.outputPath('homepage.png'),
      fullPage: true,
      animations: 'disabled',
    })
  }
})

test('steps through the engineering demo and accepts terminal commands', async ({
  page,
}) => {
  await page.goto('/')
  await page.getByRole('button', { name: /Step through/ }).click()
  await expect(page.locator('.lab-result')).toContainText('processing: true')
  await page.getByRole('button', { name: /Reset/ }).click()
  await expect(page.locator('.lab-result')).toContainText('waiting')
  const command = page.getByRole('textbox', { name: 'Terminal command' })
  await command.fill('help')
  await command.press('Enter')
  await expect(page.locator('.terminal-body')).toContainText('Commands:')
})
