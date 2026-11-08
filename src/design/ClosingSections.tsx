import { ArrowDown, ArrowUpRight, Mail, Send } from 'lucide-react'
import { projects } from './data'

import { resumeDownload as resumePath } from '../app/site'
import { Github, Linkedin } from './Icons'
import { SectionHead } from './SectionHead'
export function OpenSource() {
  return (
    <section className="section open-source">
      <SectionHead
        index="07"
        label="OPEN SOURCE / ENGINEERING ACTIVITY"
        title={
          <>
            THE CODE IS
            <br />
            <em>PART OF THE STORY.</em>
          </>
        }
        copy="Real repositories, accurate summaries, and no invented statistics."
      />
      <div className="repo-list">
        {projects
          .filter((p) => p.repo)
          .map((p) => (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              key={p.slug}
            >
              <div>
                <Github size={20} />
                <span>PUBLIC REPOSITORY</span>
              </div>
              <h3>{p.repo?.split('/').pop()}</h3>
              <p>{p.description}</p>
              <footer>
                <span>{p.stack.slice(0, 3).join(' · ')}</span>
                <ArrowUpRight />
              </footer>
            </a>
          ))}
      </div>
    </section>
  )
}

export function Behind() {
  return (
    <section className="section behind">
      <div className="behind-number">05</div>
      <div>
        <span>BEHIND THIS PORTFOLIO</span>
        <h2>
          The experience is
          <br />
          part of the evidence.
        </h2>
      </div>
      <div>
        <p>
          Built as a component-based React and TypeScript application with
          routed case studies, native SVG visualizations, responsive layouts,
          keyboard-operable controls, and reduced-motion support.
        </p>
        <ul>
          <li>React Router data-mode navigation</li>
          <li>Typed, centralized portfolio content</li>
          <li>CSS and SVG motion without a heavy 3D runtime</li>
          <li>Accessible interactive simulations</li>
          <li>Responsive desktop, tablet, and mobile compositions</li>
        </ul>
        <small>
          No performance, testing, or deployment result is claimed without
          measured evidence.
        </small>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-orbit" />
      <span>AVAILABLE FOR INTERNSHIPS · JANUARY 2027</span>
      <h2>
        LET’S BUILD
        <br />
        <em>WHAT’S NEXT.</em>
      </h2>
      <p>
        I’m currently exploring Software Engineering and Full-Stack Development
        internship opportunities starting January 2027. If your team is building
        meaningful software, I’d love to connect.
      </p>
      <a className="talk" href="mailto:minuraranaweera@gmail.com">
        LET’S TALK. <Send />
      </a>
      <div className="contact-links">
        <a href="mailto:minuraranaweera@gmail.com">
          <Mail /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/minura-ranaweera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/minuraDinupriya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github /> GitHub
        </a>
        <a href={resumePath} download>
          <ArrowDown /> Resume
        </a>
      </div>
      <footer>
        <span>DESIGNED & ENGINEERED BY MINURA RANAWEERA</span>
        <span>© {new Date().getFullYear()}</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP <ArrowDown />
        </button>
      </footer>
    </section>
  )
}
