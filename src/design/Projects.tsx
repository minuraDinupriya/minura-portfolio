import { Github } from './Icons'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { projects } from './data'

import { ProjectVisual } from './ProjectVisual'
import { SectionHead } from './SectionHead'
export function Projects() {
  return (
    <section id="work" tabIndex={-1} className="section projects-section">
      <SectionHead
        index="02"
        label="SELECTED WORK"
        title={
          <>
            REAL PROBLEMS.
            <br />
            <em>ENGINEERED SOLUTIONS.</em>
          </>
        }
        copy="Four projects across full-stack, mobile, and embedded engineering. Built with intent, tested through practice."
      />
      <div className="project-list">
        {projects.map((p, i) => (
          <article
            aria-label={p.title}
            className={`project project-${p.slug}`}
            key={p.slug}
          >
            <div className="project-meta">
              <span>{p.number} / 04</span>
              <span>{p.type}</span>
            </div>
            <div className="project-title">
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
            </div>
            <div className="project-visual">
              <ProjectVisual slug={p.slug} />
            </div>
            <div className="project-bottom">
              <p>{p.description}</p>
              <div className="tags">
                {p.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <div className="project-actions">
                <Link
                  className="button button-light"
                  to={`/projects/${p.slug}`}
                >
                  View case study <ArrowRight size={16} />
                </Link>
                {p.repo && (
                  <a
                    className="circle-link"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            {i === 0 && <span className="flagship">FLAGSHIP PROJECT</span>}
          </article>
        ))}
      </div>
    </section>
  )
}
