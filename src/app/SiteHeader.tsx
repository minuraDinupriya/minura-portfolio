import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { profile } from '../content/profile'

const navigation = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Résumé', to: '/resume' },
] as const

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header
      className="site-header"
      id="top"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (menuOpen && event.key === 'Escape') {
          setMenuOpen(false)
          menuButton.current?.focus()
        }
      }}
    >
      <div className="shell header-inner">
        <Link className="site-name" to="/" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </Link>
        <button
          className="menu-toggle"
          type="button"
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close menu' : 'Menu'}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          data-open={menuOpen ? 'true' : undefined}
        >
          <ul className="link-list">
            {navigation.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
