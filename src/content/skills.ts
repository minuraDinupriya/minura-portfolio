type SkillGroup = {
  readonly id: string
  readonly title: string
  readonly skills: readonly string[]
}

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks and runtimes',
    skills: ['Spring Boot', 'React', 'Node.js', 'Express.js', 'Flutter'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'GitHub Actions',
      'Jira',
      'Postman',
      'Figma',
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    skills: ['JUnit', 'Vitest', 'Playwright', 'Flutter Testing'],
  },
  {
    id: 'practices',
    title: 'Practices',
    skills: ['REST APIs', 'OOP', 'CI/CD', 'Agile', 'Scrum'],
  },
] as const satisfies readonly SkillGroup[]
