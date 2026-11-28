import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('the skip link moves keyboard focus to the main content on every route', async ({
  page,
}) => {
  for (const path of [
    '/',
    '/projects/tradesphere',
    '/resume',
    '/not-a-route',
  ]) {
    await test.step(path, async () => {
      await page.goto(path)
      const main = page.getByRole('main')
      await expect(main).toBeVisible()

      await page.keyboard.press('Tab')
      const skipLink = page.getByRole('link', { name: 'Skip to content' })
      await expect(skipLink).toBeFocused()

      await page.keyboard.press('Enter')
      await expect(main).toBeFocused()
      await expect(page).toHaveURL(/#main$/)
    })
  }
})

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

test('loads a case study deep link on refresh', async ({ page }) => {
  await page.goto('/projects/focuspilot')
  const heading = page.getByRole('heading', { level: 1, name: 'FocusPilot' })
  await expect(heading).toBeVisible()
  await page.reload()
  await expect(heading).toBeVisible()
  await expect(page).toHaveTitle('FocusPilot | Minura Ranaweera')
})

test('missing pages set their own metadata and link back to the portfolio', async ({
  page,
}) => {
  for (const path of ['/not-a-route', '/projects/not-a-project']) {
    await test.step(path, async () => {
      await page.goto(path)
      await expect(
        page.getByRole('heading', { name: /This route left/ }),
      ).toBeVisible()
      await expect(page).toHaveTitle('Page not found | Minura Ranaweera')
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        'This portfolio page is unavailable.',
      )
      await page.getByRole('link', { name: 'Return to portfolio' }).click()
      await expect(page).toHaveTitle(
        'Minura Ranaweera | Software Engineering Portfolio',
      )
    })
  }
})

test('case study section links move focus and support browser history', async ({
  page,
}) => {
  await page.goto('/projects/tradesphere?ref=portfolio#architecture')

  const architecture = page.getByRole('heading', { name: 'Architecture' })
  const testing = page.getByRole('heading', { name: 'Testing & workflows' })
  await expect(architecture).toBeFocused()
  await expect(architecture).toBeInViewport()

  const sectionLinks = page.getByRole('navigation', { name: 'On this page' })
  const testingLink = sectionLinks.getByRole('link', { name: 'Testing' })
  await expect(testingLink).toBeVisible()
  await testingLink.press('Enter')
  await expect(page).toHaveURL('/projects/tradesphere?ref=portfolio#testing')
  await expect(testing).toBeFocused()
  await expect(testing).toBeInViewport()

  await page.goBack()
  await expect(architecture).toBeFocused()
  await page.goForward()
  await expect(testing).toBeFocused()
})

test('reopening the current case study section returns focus to its heading', async ({
  page,
}) => {
  await page.goto('/projects/tradesphere#architecture')

  const heading = page.getByRole('heading', { name: 'Architecture' })
  await expect(heading).toBeFocused()
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await expect(heading).not.toBeInViewport()

  const sectionLink = page
    .getByRole('navigation', { name: 'On this page' })
    .getByRole('link', { name: 'Architecture' })
  await sectionLink.press('Enter')

  await expect(heading).toBeFocused()
  await expect(heading).toBeInViewport()
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

test('homepage section links move keyboard focus to their destinations', async ({
  page,
}, testInfo) => {
  await page.goto('/resume')
  const isDesktop = testInfo.project.name === 'desktop'
  const navigation = page.getByRole('navigation', {
    name: isDesktop ? 'Primary' : 'Mobile',
  })

  for (const name of ['About', 'Experience', 'Contact']) {
    await test.step(name, async () => {
      if (!isDesktop) {
        await page.getByRole('button', { name: 'Open menu' }).press('Enter')
        await expect(
          page.getByRole('button', { name: 'Close menu' }),
        ).toBeFocused()
      }
      const link = navigation.getByRole('link', { name })
      await link.focus()
      await expect(link).toBeFocused()
      await page.keyboard.press('Enter')

      const hash = `#${name.toLowerCase()}`
      await expect(page).toHaveURL(`/${hash}`)
      await expect(page.locator(`section${hash}`)).toBeFocused()
    })
  }
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
