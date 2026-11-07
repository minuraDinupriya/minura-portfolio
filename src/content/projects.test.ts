import { describe, expect, it } from 'vitest'
import { projectPath } from '../features/projects/project-path'
import { findProject, projects } from './projects'

describe('project URLs', () => {
  it('gives each case study a distinct URL and resolves it back to the same project', () => {
    const paths = projects.map(({ slug }) => projectPath(slug))
    expect(new Set(paths).size).toBe(projects.length)

    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(findProject(project.slug)).toBe(project)
    }
  })

  it('leaves unknown or missing slugs unresolved for the not-found page', () => {
    expect(findProject('unlisted-project')).toBeUndefined()
    expect(findProject(undefined)).toBeUndefined()
  })
})
