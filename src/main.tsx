import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

// Prerendered pages ship with server HTML in #root. The homepage's chunk is
// eager, so it hydrates cleanly; other routes are lazy (their chunk isn't
// loaded when hydration starts), so they render client-side — the prerendered
// HTML stays visible until React takes over either way.
if (container.hasChildNodes() && window.location.pathname === '/') {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}