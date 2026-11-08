import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import portraitSrc from './assets/minura-portrait.webp'

import { resumeDownload as resumePath } from '../app/site'
export function Intro() {
  const [active, setActive] = useState(
    () =>
      !matchMedia('(prefers-reduced-motion: reduce)').matches &&
      !sessionStorage.getItem('intro-seen'),
  )
  useEffect(() => {
    if (!active) return
    const timer = setTimeout(() => {
      sessionStorage.setItem('intro-seen', '1')
      setActive(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [active])
  if (!active) return null
  return (
    <div className="intro" role="dialog" aria-label="Portfolio introduction">
      <button
        onClick={() => {
          sessionStorage.setItem('intro-seen', '1')
          setActive(false)
        }}
      >
        Skip intro <ArrowRight size={14} />
      </button>
      <div className="intro-mark">
        MR<span>.</span>
      </div>
      <div className="intro-copy">
        <span>INITIALIZING PORTFOLIO EXPERIENCE</span>
        <div>
          <i />
        </div>
      </div>
    </div>
  )
}

export function CoreVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r || !ref.current) return
    ref.current.style.setProperty(
      '--rx',
      `${((e.clientY - r.top) / r.height - 0.5) * -12}deg`,
    )
    ref.current.style.setProperty(
      '--ry',
      `${((e.clientX - r.left) / r.width - 0.5) * 12}deg`,
    )
  }
  return (
    <div
      className="core-stage"
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => ref.current?.removeAttribute('style')}
      aria-label="Interactive computational core illustration"
    >
      <div className="orbit orbit-a">
        <i />
        <i />
        <i />
      </div>
      <div className="orbit orbit-b">
        <i />
        <i />
      </div>
      <div className="core-object">
        <div className="core-face face-front">
          <span>01</span>
          <b>MR/SYS</b>
        </div>
        <div className="core-face face-back" />
        <div className="core-face face-left" />
        <div className="core-face face-right" />
        <div className="core-inner">
          <i />
          <i />
          <i />
        </div>
      </div>
      <svg className="core-lines" viewBox="0 0 600 600" aria-hidden="true">
        <path d="M62 302H182L222 260M378 260l46-62h112M379 342h70l44 88" />
        <circle cx="62" cy="302" r="5" />
        <circle cx="536" cy="198" r="5" />
        <circle cx="493" cy="430" r="5" />
      </svg>
      <div className="core-label label-a">DATA FLOW / 01</div>
      <div className="core-label label-b">SYSTEM ONLINE</div>
    </div>
  )
}

function HeroPortrait() {
  const ref = useRef<HTMLElement>(null)
  const move = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r || !ref.current) return
    ref.current.style.setProperty(
      '--tx',
      `${((e.clientY - r.top) / r.height - 0.5) * -6}deg`,
    )
    ref.current.style.setProperty(
      '--ty',
      `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`,
    )
  }
  return (
    <figure
      className="hero-portrait"
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => ref.current?.removeAttribute('style')}
    >
      <div className="portrait-frame">
        <img
          src={portraitSrc}
          alt="Portrait of Minura Ranaweera"
          width={900}
          height={1125}
          fetchPriority="high"
          decoding="async"
        />
        <span className="portrait-scanline" aria-hidden="true" />
        <span className="portrait-corner tl" aria-hidden="true" />
        <span className="portrait-corner tr" aria-hidden="true" />
        <span className="portrait-corner bl" aria-hidden="true" />
        <span className="portrait-corner br" aria-hidden="true" />
        <span className="portrait-tag" aria-hidden="true">
          MR / PROFILE_01
        </span>
      </div>
      <figcaption>
        <span>
          <small>ROLE</small>Full-Stack Developer
        </span>
        <span>
          <small>STATUS</small>
          <i className="portrait-status" />
          Open to internships
        </span>
      </figcaption>
      <span className="portrait-axis" aria-hidden="true">
        SOFTWARE TECHNOLOGY · USJ
      </span>
    </figure>
  )
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" />
      <div className="hero-copy">
        <div className="eyebrow">
          <span>SRI LANKA</span>
          <span>SOFTWARE ENGINEER</span>
        </div>
        <h1 id="hero-title">
          <span>MINURA</span>
          <span>RANAWEERA</span>
        </h1>
        <h2>
          I ENGINEER SYSTEMS.
          <br />I CRAFT <em>EXPERIENCES.</em>
        </h2>
        <p>
          Software Engineering Undergraduate & Full-Stack Developer building
          thoughtful, scalable digital solutions — from backend architecture to
          immersive user experiences.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            Explore my work <ArrowDown size={17} />
          </a>
          <a href={resumePath} download className="button button-ghost">
            Download resume <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-social">
          <a
            href="https://github.com/minuraDinupriya"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/minura-ranaweera"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <HeroPortrait />
      <div className="availability">
        <i /> OPEN TO INTERNSHIPS <span>JANUARY 2027</span>
        <b>SRI LANKA</b>
      </div>
      <div className="scroll-cue">
        SCROLL TO EXPLORE <ArrowDown size={13} />
      </div>
    </section>
  )
}
