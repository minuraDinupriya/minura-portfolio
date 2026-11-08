import { useEffect } from 'react'

import { usePageMetadata } from '../app/use-page-metadata'
import { About } from './About'
import { Behind, Contact, OpenSource } from './ClosingSections'
import { EngineeringLab } from './EngineeringLab'
import { Hero, Intro } from './Hero'
import { Projects } from './Projects'
import { Terminal } from './Terminal'
import { Constellation, Journey } from './Toolkit'
export function Home() {
  usePageMetadata()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && e.target.classList.add('visible'),
        ),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((x) => observer.observe(x))
    return () => observer.disconnect()
  }, [])
  return (
    <main id="main">
      <Intro />
      <Hero />
      <About />
      <Projects />
      <EngineeringLab />
      <Constellation />
      <Journey />
      <Terminal />
      <OpenSource />
      <Behind />
      <Contact />
    </main>
  )
}
