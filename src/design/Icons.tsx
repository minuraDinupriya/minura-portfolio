import { Link } from 'react-router'

export function Github({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-7 0C5.1-.4 3.9 0 3.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4.2-2" />
    </svg>
  )
}

export function Linkedin({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="4" height="12" />
      <path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM11 21v-7a4 4 0 0 1 8 0v7M11 9v12M19 21v-7" />
    </svg>
  )
}

export function Monogram() {
  return (
    <Link className="monogram" to="/" aria-label="MR. Minura Ranaweera home">
      <span>M</span>R.
    </Link>
  )
}
