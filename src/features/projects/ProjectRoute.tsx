import { Link, useParams } from 'react-router'
import { NotFoundPage } from '../../app/NotFoundPage'
import { usePageMetadata } from '../../app/use-page-metadata'
import { ExternalLink } from '../../components/ExternalLink'
import { findProject } from '../../content/projects'
import type { Project } from '../../content/projects'
import { profile } from '../../content/profile'

function ProjectDetail({ project }: { project: Project }) {
  usePageMetadata(project.name + ' | ' + profile.name, project.summary)

  return (
    <article className="route-content">
      <Link to="/#projects">Back to featured projects</Link>
      <header>
        <p>{project.category}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      <section aria-labelledby="overview">
        <h2 id="overview">Overview</h2>
        <p>{project.overview}</p>
      </section>
      <section aria-labelledby="engineering">
        <h2 id="engineering">Engineering decisions</h2>
        {project.highlights.map(({ title, detail }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
        ))}
      </section>
      <section aria-labelledby="stack">
        <h2 id="stack">Technology</h2>
        <ul className="skill-list">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
      {project.repository && (
        <ExternalLink href={project.repository}>
          View {project.name} on GitHub
        </ExternalLink>
      )}
    </article>
  )
}

export function Component() {
  const { slug } = useParams()
  const project = findProject(slug)
  return project ? <ProjectDetail project={project} /> : <NotFoundPage />
}
