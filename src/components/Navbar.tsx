import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../theme'
import { NAV } from '../lib/site'
import { CtaPair } from './Button'
import { GridLines } from './GridLines'

export default function Navbar() {
  const { effectiveTheme, setTheme } = useTheme()
  const dark = effectiveTheme === 'dark'
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="site-header">
      <GridLines />
      <div className="header-bar">
        <a className="logo-link" href="/" aria-label="Exergy">
          <span className="logo-wordmark" />
        </a>
        <div className="header-end">
          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav-link label">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={dark}
            aria-label={dark ? 'Use light theme' : 'Use dark theme'}
            onClick={() => setTheme(dark ? 'light' : 'dark')}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              {dark ? (
                <path d="M9.2 1.4a6.2 6.2 0 1 0 5.4 9.2A5.2 5.2 0 0 1 9.2 1.4Z" stroke="currentColor" strokeWidth="1.2" />
              ) : (
                <>
                  <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M8 1.4v1.6M8 13v1.6M1.4 8h1.6M13 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                </>
              )}
            </svg>
          </button>
          <div className="nav-desktop cta-desktop">
            <CtaPair size="sm" />
          </div>
          <button
            type="button"
            className="menu-button label"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div
        id={menuId}
        ref={panelRef}
        className={open ? 'menu is-open' : 'menu'}
        hidden={!open}
      >
        <GridLines />
        <div className="menu-inner">
          <nav aria-label="Mobile" className="menu-links">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav-link label">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <CtaPair size="md" />
        </div>
      </div>
    </header>
  )
}
