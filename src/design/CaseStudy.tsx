import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { projects } from './data'

import { usePageMetadata } from '../app/use-page-metadata'
import { Github } from './Icons'
import { ProjectVisual } from './ProjectVisual'
export function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  usePageMetadata(
    project
      ? project.title + ' | Minura Ranaweera'
      : 'Page not found | Minura Ranaweera',
    project?.description,
  )
  if (!project) return <NotFound />
  return (
    <main
      id="main"
      className="case-study"
      style={{ '--project': project.color } as React.CSSProperties}
    >
      <header className="case-hero">
        <Link to="/#work">
          <ArrowLeft /> Back to selected work
        </Link>
        <div className="case-index">{project.number} / CASE STUDY</div>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <div className="case-tags">
          {project.stack.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <div className="case-hero-visual">
          <ProjectVisual slug={project.slug} />
        </div>
      </header>
      <section className="case-intro">
        <span>OVERVIEW</span>
        <h2>{project.description}</h2>
        <div>
          <h3>My contribution</h3>
          <p>{project.contribution}</p>
        </div>
      </section>
      <section className="case-content">
        <aside>
          <span>ON THIS PAGE</span>
          {['Problem', 'Features', 'Architecture', 'Testing', 'Learnings'].map(
            (x) => (
              <a key={x} href={`#${x.toLowerCase()}`}>
                {x}
              </a>
            ),
          )}
        </aside>
        <div>
          <CaseBlock id="problem" index="01" title="Problem being addressed">
            <p>
              {project.slug === 'tradesphere'
                ? 'Business operations need coordinated product, customer, warehouse, and order information. TradeSphere brings those workflows into one system while protecting inventory consistency.'
                : project.slug === 'smart-lost-and-found-sl'
                  ? 'Lost-and-found coordination involves disconnected information, trust, privacy, and communication. The platform supports a more structured path from report to verified return.'
                  : project.slug === 'focuspilot'
                    ? 'Productivity tools can become dependent on constant connectivity and fragmented workflows. FocusPilot keeps essential planning and focus tools available locally.'
                    : 'A study environment changes throughout the day. LumoSense explores how physical sensors can adapt lighting and support comfort without constant manual adjustment.'}
            </p>
          </CaseBlock>
          <CaseBlock id="features" index="02" title="Real features">
            <div className="feature-grid">
              {project.features.map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </CaseBlock>
          <CaseBlock id="architecture" index="03" title="Architecture">
            <p>
              This diagram communicates the confirmed technology flow at a
              conceptual level. It does not imply unverified production
              infrastructure.
            </p>
            <div className="architecture">
              {project.architecture.map((x, i) => (
                <div key={x}>
                  <span>{x}</span>
                  {i < project.architecture.length - 1 && <ArrowRight />}
                </div>
              ))}
            </div>
          </CaseBlock>
          <CaseBlock id="testing" index="04" title="Testing & workflows">
            <p>{project.testing}</p>
          </CaseBlock>
          <CaseBlock id="learnings" index="05" title="Engineering learnings">
            <p>{project.learnings}</p>
          </CaseBlock>
          {project.repo && (
            <a
              className="repo-cta"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github /> Explore source on GitHub <ArrowUpRight />
            </a>
          )}
        </div>
      </section>
      <div className="next-project">
        <span>NEXT CASE STUDY</span>
        {(() => {
          const next =
            projects[(projects.indexOf(project) + 1) % projects.length] ??
            project
          return (
            <Link to={`/projects/${next.slug}`}>
              {next.title}
              <ArrowRight />
            </Link>
          )
        })()}
      </div>
    </main>
  )
}

function CaseBlock({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <article id={id} className="case-block">
      <span>{index}</span>
      <h2>{title}</h2>
      {children}
    </article>
  )
}

export function NotFound() {
  return (
    <main className="not-found" id="main">
      <span>404 / LOST NODE</span>
      <h1>
        This route left
        <br />
        the system.
      </h1>
      <Link to="/">
        Return to portfolio <ArrowRight />
      </Link>
    </main>
  )
}
