import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BOOKING_URL, NAV } from '../lib/site'
import { ctasFor } from '../lib/ctas'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { primary, call } = ctasFor(location.pathname, location.search)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const header = headerRef.current
    if (!header) return
    const focusable = () =>
      [...header.querySelectorAll<HTMLElement>('a, button')].filter(
        (node) => node.tabIndex !== -1 && node.getClientRects().length > 0,
      )
    const list = focusable()
    const firstLink = list.find((node) => node.classList.contains('menu-link'))
    firstLink?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const menuItems = [
    ...NAV.map((item) => ({ ...item, external: false as const })),
    { to: primary.to, label: primary.label, external: false as const },
    { to: BOOKING_URL, label: call, external: true as const },
  ]
  const step = menuItems.length > 1 ? Math.min(60, 400 / (menuItems.length - 1)) : 0

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="site-nav" aria-label="Primary">
        <Link to="/" className="wordmark title-3" aria-current={location.pathname === '/' ? 'page' : undefined}>
          Exergy
        </Link>
        <div className="nav-links">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link title-4"
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-ctas">
          <Link className="btn btn-copper button-sm" to={primary.to}>
            {primary.label}
          </Link>
          <a className="btn btn-copper button-sm" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            {call}
          </a>
        </div>
        <ThemeToggle />
        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>
      <div id="mobile-menu" className={open ? 'mobile-menu is-open' : 'mobile-menu'} aria-hidden={!open}>
        {NAV.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className="menu-item menu-link heading-5"
            aria-current={location.pathname === item.to ? 'page' : undefined}
            style={{ ['--d' as string]: `${index * step}ms` }}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="menu-ctas">
          <Link
            className="menu-item btn btn-copper button-md"
            to={primary.to}
            style={{ ['--d' as string]: `${NAV.length * step}ms` }}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {primary.label}
          </Link>
          <a
            className="menu-item btn btn-copper button-md"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ['--d' as string]: `${(NAV.length + 1) * step}ms` }}
            tabIndex={open ? 0 : -1}
          >
            {call}
          </a>
        </div>
      </div>
    </header>
  )
}
