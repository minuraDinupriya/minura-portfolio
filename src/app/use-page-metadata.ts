import { useEffect } from 'react'
import { siteDescription, siteTitle } from './site'

export function usePageMetadata(
  title = siteTitle,
  description = siteDescription,
) {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
