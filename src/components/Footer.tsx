import { Link, useLocation } from 'react-router-dom'
import { LINKS } from '../lib/site'
import { Button } from './Button'
import { Plate } from './Plate'
import { Tagline } from './Tagline'

const WORK = [
  { to: '/commercial', label: 'Commercial' },
  { to: '/partners', label: 'Partners' },
  { to: '/operations', label: 'Operations' },
]

const COMPANY = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const TOOLS = [
  { href: LINKS.calculators, label: 'Calculators' },
  { href: LINKS.homeAssistant, label: 'Home Assistant' },
  { href: LINKS.github, label: 'GitHub' },
]

export default function Footer() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const contact = pathname === '/contact'
  const operations = pathname === '/operations'

  if (contact) {
    return (
      <footer className="site-footer">
        <div className="legal label">
          <p>© 2026 Exergy — Denver, CO — Open source first</p>
          <Link to="/privacy-policy">Privacy</Link>
        </div>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      {home && (
        <div className="tagline-band">
          <div className="frame">
            <Tagline />
            <p className="label definition">EXERGY (n.) THE PART OF ENERGY THAT CAN STILL DO USEFUL WORK</p>
          </div>
        </div>
      )}
      <div className="skyline">
        <Plate
          slug="footer-denver-skyline"
          plain
          ratio="ratio-21-8"
          sizes="100vw"
          alt="Copperplate engraving of a Denver skyline, snow-dusted Front Range mountains, and brick buildings with rooftop solar."
        />
        <nav className="foot-links" aria-label="Footer">
          <div>
            <p className="label">Work:</p>
            <ul>
              {WORK.map((item) => (
                <li key={item.to}><Link to={item.to} className="body-3">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Company:</p>
            <ul>
              {COMPANY.map((item) => (
                <li key={item.to}><Link to={item.to} className="body-3">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Open tools:</p>
            <ul>
              {TOOLS.map((item) => (
                <li key={item.label}>
                  <a className="body-3" href={item.href} rel="noopener noreferrer">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Homeowner?</p>
            <ul>
              <li><Link to="/contact?intent=pilot" className="body-3">Apply for the pilot</Link></li>
            </ul>
            <p className="body-3 homeowner-note">Homes can use the same kind of energy system, and the software that runs it. Application only.</p>
          </div>
        </nav>
        {!operations && (
          <div className="foot-cta">
            <Button variant="primary" size="md" to="/contact?intent=feasibility">
              Get a free feasibility check
            </Button>
          </div>
        )}
      </div>
      <div className="legal label">
        <p>© 2026 Exergy — Denver, CO — Open source first</p>
        <Link to="/privacy-policy">Privacy</Link>
      </div>
    </footer>
  )
}
