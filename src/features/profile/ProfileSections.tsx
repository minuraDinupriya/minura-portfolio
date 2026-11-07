import { resumeDownload } from '../../app/site'
import { ExternalLink } from '../../components/ExternalLink'
import { education, internship, profile } from '../../content/profile'

export function AboutSection() {
  return (
    <section aria-labelledby="about">
      <h2 id="about" tabIndex={-1}>
        About
      </h2>
      <p>{profile.summary}</p>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience">
      <h2 id="experience" tabIndex={-1}>
        Experience
      </h2>
      <h3>{internship.role}</h3>
      <p>
        {internship.organization} · {internship.duration}
      </p>
      <ul>
        {internship.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  )
}

export function EducationSection() {
  return (
    <section aria-labelledby="education">
      <h2 id="education" tabIndex={-1}>
        Education
      </h2>
      {education.map((item) => (
        <article key={item.qualification}>
          <h3>{item.qualification}</h3>
          <p>{item.institution}</p>
          {item.detail && <p>{item.detail}</p>}
          {item.gpa && <p>{item.gpa}</p>}
          {item.graduation && <p>{item.graduation}</p>}
        </article>
      ))}
    </section>
  )
}

export function ContactSection({
  includeResume = true,
}: {
  includeResume?: boolean
}) {
  return (
    <section aria-labelledby="contact">
      <h2 id="contact" tabIndex={-1}>
        Contact
      </h2>
      <p>
        {profile.availability}. I’m based in {profile.location}.
      </p>
      <ul className="link-list">
        <li>
          <a href={'mailto:' + profile.email}>{profile.email}</a>
        </li>
        <li>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        </li>
        {includeResume && (
          <li>
            <a href={resumeDownload} download>
              Download résumé (PDF)
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}
