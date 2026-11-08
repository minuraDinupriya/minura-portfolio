// @vitest-environment jsdom

import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it } from 'vitest'
import { SkillExplorer } from './SkillExplorer'

afterEach(cleanup)

it('filters to one skill group and restores the full list with the keyboard', async () => {
  const user = userEvent.setup()
  render(<SkillExplorer />)

  const filters = screen.getByRole('group', { name: 'Filter skills' })
  const all = within(filters).getByRole('button', { name: 'All skills' })
  const databases = within(filters).getByRole('button', { name: 'Databases' })

  expect(all).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByText('Spring Boot')).toBeVisible()
  await user.click(databases)

  expect(databases).toHaveFocus()
  expect(databases).toHaveAttribute('aria-pressed', 'true')
  expect(all).toHaveAttribute('aria-pressed', 'false')
  expect(screen.getByText('PostgreSQL')).toBeVisible()
  expect(screen.queryByText('Spring Boot')).not.toBeInTheDocument()

  all.focus()
  await user.keyboard('{Enter}')
  expect(all).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByText('Spring Boot')).toBeVisible()
})
