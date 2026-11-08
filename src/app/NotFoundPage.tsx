import { Link } from 'react-router'
import { profile } from '../content/profile'
import { usePageMetadata } from './use-page-metadata'

export function NotFoundPage() {
  usePageMetadata(
    'Page not found | ' + profile.name,
    'This portfolio page is unavailable.',
  )

  return (
    <section className="route-content" aria-labelledby="not-found">
      <h1 id="not-found">Page not found</h1>
      <p>The address may have changed or been entered incorrectly.</p>
      <Link to="/">Return to the portfolio</Link>
    </section>
  )
}
