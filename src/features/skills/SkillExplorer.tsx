import { useState } from 'react'
import { skillGroups } from '../../content/skills'

type SkillFilter = 'all' | (typeof skillGroups)[number]['id']
const filters = [{ id: 'all', title: 'All skills' }, ...skillGroups] as const

export function SkillExplorer() {
  const [selected, setSelected] = useState<SkillFilter>('all')
  const visibleGroups =
    selected === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === selected)

  return (
    <section aria-labelledby="skills">
      <h2 id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skill-filters" role="group" aria-label="Filter skills">
        {filters.map(({ id, title }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selected === id}
            aria-controls="skill-results"
            onClick={() => setSelected(id)}
          >
            {title}
          </button>
        ))}
      </div>
      <div id="skill-results" className="skill-grid">
        {visibleGroups.map(({ id, title, skills }) => (
          <section key={id} aria-labelledby={'skill-' + id}>
            <h3 id={'skill-' + id}>{title}</h3>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
