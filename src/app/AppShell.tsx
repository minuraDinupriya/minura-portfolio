import { useEffect, useRef } from 'react'
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router'
import { profile } from '../content/profile'
import { SiteHeader } from './SiteHeader'

export function AppShell() {
  const { pathname, hash, search, key } = useLocation()
  const previousKey = useRef<string | undefined>(undefined)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    const before = previousKey.current
    previousKey.current = key

    if (hash) {
      // ScrollRestoration handles the position; focus announces the target for keyboard users.
      document.getElementById(hash.slice(1))?.focus({ preventScroll: true })
    } else if (before && before !== key) {
      main.current?.focus({ preventScroll: true })
    }
  }, [hash, key])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main className="shell" id="main-content" ref={main} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>
            {profile.name} · {profile.location}
          </p>
          <Link to={{ pathname, search, hash: '#top' }}>Back to top</Link>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  )
}
