import { ArrowDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

import { resumeDownload as resumePath } from '../app/site'
import { Monogram } from './Icons'
function Nav() {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const close = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (open) close.current?.focus()
  }, [open])
  function closeMenu() {
    setOpen(false)
    trigger.current?.focus()
  }
  const links = ['Work', 'Expertise', 'About', 'Experience', 'Contact']

  const href = (label: string) => `/#${label.toLowerCase()}`
  return (
    <>
      <header className="nav-shell">
        <Monogram />
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((label) => (
            <Link key={label} to={href(label)} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="nav-resume" href={resumePath} download>
          Resume <ArrowDown size={13} />
        </a>
        <button
          className="menu-button"
          ref={trigger}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </header>
      <div
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
        id="mobile-menu"
        onKeyDown={(event) => {
          if (event.key === 'Escape') closeMenu()
        }}
      >
        <div className="mobile-menu-top">
          <Monogram />
          <button ref={close} onClick={closeMenu} aria-label="Close menu">
            <X />
          </button>
        </div>
        <nav aria-label="Mobile">
          {links.map((label, i) => (
            <Link
              key={label}
              to={href(label)}
              onClick={() => setOpen(false)}
              style={{ '--i': i } as React.CSSProperties}
            >
              <small>0{i + 1}</small>
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-social">
          <a href="https://github.com/minuraDinupriya">GitHub</a>
          <a href="https://www.linkedin.com/in/minura-ranaweera">LinkedIn</a>
        </div>
      </div>
    </>
  )
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dot.current)
        dot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <div className="cursor" ref={dot} aria-hidden="true">
      <span>VIEW</span>
    </div>
  )
}

export function AppShell() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
    else {
      const target = document.getElementById(location.hash.slice(1))
      target?.scrollIntoView()
      target?.focus({ preventScroll: true })
    }
  }, [location.pathname, location.hash])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Cursor />
      <Nav />
      <Outlet />
    </>
  )
}
