import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { projects, techGroups, techProjectMap } from './data'

import { SectionHead } from './SectionHead'
export function Constellation() {
  const all = techGroups.flatMap((g) => g.items)
  const [selected, setSelected] = useState('Spring Boot')
  const evidence = techProjectMap[selected] || []
  return (
    <section className="section toolkit">
      <SectionHead
        index="04"
        label="TECHNICAL TOOLKIT"
        title={
          <>
            THE TOOLS BEHIND
            <br />
            <em>THE IDEAS.</em>
          </>
        }
        copy="No arbitrary percentages. Select a technology to see real project evidence."
      />
      <div className="constellation">
        <div
          className="constellation-map"
          role="group"
          aria-label="Technology constellation"
        >
          {all.slice(0, 24).map((tech, i) => (
            <button
              aria-pressed={selected === tech}
              onClick={() => setSelected(tech)}
              className={
                selected === tech
                  ? 'selected'
                  : evidence.some((p) => techProjectMap[tech]?.includes(p))
                    ? 'related'
                    : ''
              }
              style={
                {
                  '--x': `${8 + ((i * 37) % 86)}%`,
                  '--y': `${10 + ((i * 53) % 78)}%`,
                } as React.CSSProperties
              }
              key={tech}
            >
              {tech}
            </button>
          ))}
          <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M70 100L310 210 580 75 720 300 460 420 220 370Z" />
            <path d="M310 210L460 420M580 75L220 370M70 100L720 300" />
          </svg>
        </div>
        <div className="tech-detail">
          <span>SELECTED TECHNOLOGY</span>
          <h3>{selected}</h3>
          <p>
            {evidence.length
              ? `Used in ${evidence.join(' and ')}.`
              : 'Part of my documented technical toolkit and engineering practice.'}
          </p>
          <small>PROJECT EVIDENCE</small>
          {evidence.length ? (
            evidence.map((p) => (
              <Link
                key={p}
                to={`/projects/${projects.find((x) => x.title === p)?.slug || 'tradesphere'}`}
              >
                {p}
                <ArrowUpRight size={14} />
              </Link>
            ))
          ) : (
            <i>Explore the project case studies for context.</i>
          )}
        </div>
      </div>
      <div className="toolkit-list">
        {techGroups.map((g) => (
          <div key={g.title}>
            <span>{g.title}</span>
            <p>{g.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <section id="experience" className="section journey">
      <SectionHead
        index="05"
        label="EXPERIENCE & EDUCATION"
        title={
          <>
            FROM LEARNING
            <br />
            <em>TO BUILDING.</em>
          </>
        }
      />
      <div className="journey-grid">
        <div className="journey-feature">
          <span>INDUSTRY EXPERIENCE / 6 MONTHS</span>
          <h3>Software Development Intern</h3>
          <h4>iCET Sri Lanka</h4>
          <p>
            Gained practical experience in web application development, layered
            architecture, and software engineering practices. Collaborated with
            development teams using Jira, Slack, and GitHub, reviewed technical
            documentation and SRS requirements, and contributed to software
            solutions based on identified client needs.
          </p>
          <div className="tags">
            <span>Layered architecture</span>
            <span>Jira</span>
            <span>GitHub</span>
            <span>SRS</span>
          </div>
        </div>
        <div className="timeline">
          <article>
            <span>2024 — PRESENT</span>
            <h3>BICT (Hons) — Software Technology</h3>
            <p>
              University of Sri Jayewardenepura
              <br />
              Faculty of Technology
            </p>
            <b>Current GPA · 3.80 / 4.00</b>
            <small>
              Expected graduation: March 2028 — pending confirmation
            </small>
          </article>
          <article>
            <span>JUN 2023 — AUG 2024</span>
            <h3>Diploma in Software Engineering</h3>
            <p>Institute of Computer Engineering Technology (iCET)</p>
          </article>
          <article>
            <span>JUL 2025 — OCT 2026</span>
            <h3>Diploma in Human Resource Management</h3>
            <p>University of Colombo</p>
            <small>
              An additional dimension in communication, collaboration, and
              organizational understanding.
            </small>
          </article>
        </div>
      </div>
    </section>
  )
}
