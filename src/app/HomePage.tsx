import { Link } from 'react-router'
import { profile } from '../content/profile'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
} from '../features/profile/ProfileSections'
import { ProjectList } from '../features/projects/ProjectList'
import { SkillExplorer } from '../features/skills/SkillExplorer'
import { usePageMetadata } from './use-page-metadata'

export function HomePage() {
  usePageMetadata()

  return (
    <div className="home-content">
      <section className="intro" aria-labelledby="intro">
        <p>
          {profile.location} · {profile.availability}
        </p>
        <h1 id="intro">{profile.name}</h1>
        <p>{profile.title}</p>
        <div className="link-list">
          <Link to="/#projects">Explore projects</Link>
          <Link to="/resume">View résumé</Link>
        </div>
      </section>
      <AboutSection />
      <ProjectList />
      <SkillExplorer />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
