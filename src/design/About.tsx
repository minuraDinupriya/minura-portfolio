import { CoreVisual } from './Hero'

import { SectionHead } from './SectionHead'
export function About() {
  return (
    <section id="about" className="section about">
      <SectionHead
        index="01"
        label="THE ENGINEER"
        title={
          <>
            CURIOUS BY NATURE.
            <br />
            <em>ENGINEER BY CHOICE.</em>
          </>
        }
      />
      <div className="about-grid">
        <div className="about-statement">
          <p>
            I’m Minura Ranaweera, a Software Engineering Undergraduate at the
            University of Sri Jayewardenepura, specializing in{' '}
            <strong>Software Technology.</strong>
          </p>
          <p>
            I care about how software works as a system: how requirements become
            architecture, how data moves through an application, and how
            thoughtful engineering creates a better experience.
          </p>
        </div>
        <div className="about-core">
          <span className="about-core-label">SYSTEM CORE · INTERACTIVE</span>
          <CoreVisual />
        </div>
        <div className="gpa-card">
          <span>
            CURRENT CUMULATIVE
            <br />
            UNIVERSITY GPA
          </span>
          <b>
            3.80<small>/4.00</small>
          </b>
          <i>BICT (Hons) · 2024—Present</i>
        </div>
        <div className="identity-panel">
          <span>ENGINEERING INTERESTS</span>
          {[
            'Full-stack development',
            'Backend engineering',
            'Mobile applications',
            'System architecture',
            'Software testing',
            'Modern workflows',
          ].map((x, i) => (
            <div key={x}>
              <small>0{i + 1}</small>
              {x}
            </div>
          ))}
        </div>
        <blockquote>
          “I enjoy translating requirements into technical solutions and
          improving applications through thoughtful engineering practices.”
        </blockquote>
      </div>
    </section>
  )
}
