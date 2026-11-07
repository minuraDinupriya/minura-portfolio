import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/base.css'

const mountPoint = document.getElementById('root')

if (!mountPoint) {
  throw new Error('Missing portfolio mount point.')
}

createRoot(mountPoint).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
