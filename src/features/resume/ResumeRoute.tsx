import { resumeDownload } from '../../app/site'
import { usePageMetadata } from '../../app/use-page-metadata'
import { ExternalLink } from '../../components/ExternalLink'
import { profile } from '../../content/profile'
import { projects } from '../../content/projects'
import { skillGroups } from '../../content/skills'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
} from '../profile/ProfileSections'

export function Component() {
  usePageMetadata(
    'Résumé | ' + profile.name,
    'Education, experience, and contact information for Minura Ranaweera.',
  )

  return (
    <article className="route-content">
      <h1>Résumé</h1>
      <p>
        {profile.name} · {profile.title}
      </p>
      <a href={resumeDownload} download>
        Download résumé (PDF)
      </a>
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <section aria-labelledby="resume-projects">
        <h2 id="resume-projects">Selected projects</h2>
        <ul>
          {projects.map(({ slug, name, repository, summary, stack }) => (
            <li key={slug}>
              {repository ? (
                <ExternalLink href={repository}>{name}</ExternalLink>
              ) : (
                <strong>{name}</strong>
              )}
              <p>
                {summary} {stack.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="resume-skills">
        <h2 id="resume-skills">Technical skills</h2>
        <dl>
          {skillGroups.map(({ id, title, skills }) => (
            <div key={id}>
              <dt>{title}</dt>
              <dd>{skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
      <ContactSection includeResume={false} />
    </article>
  )
}
