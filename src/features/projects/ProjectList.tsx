import { Link } from 'react-router'
import { ExternalLink } from '../../components/ExternalLink'
import { projects } from '../../content/projects'
import { projectPath } from './project-path'

export function ProjectList() {
  return (
    <section aria-labelledby="projects">
      <h2 id="projects" tabIndex={-1}>
        Featured projects
      </h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <article aria-labelledby={'project-' + project.slug}>
              <p>{project.category}</p>
              <h3 id={'project-' + project.slug}>{project.name}</h3>
              <p>{project.summary}</p>
              <p>{project.stack.join(' · ')}</p>
              <div className="link-list">
                <Link to={projectPath(project.slug)}>
                  Read case study
                  <span className="sr-only">: {project.name}</span>
                </Link>
                {project.repository && (
                  <ExternalLink href={project.repository}>
                    Source<span className="sr-only">: {project.name}</span>
                  </ExternalLink>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
