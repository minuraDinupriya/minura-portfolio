import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '@fontsource/space-grotesk/latin-400.css'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import './design/design.css'

const mountPoint = document.getElementById('root')

if (!mountPoint) {
  throw new Error('Missing portfolio mount point.')
}

createRoot(mountPoint).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
