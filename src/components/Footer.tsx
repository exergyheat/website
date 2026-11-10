import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, LINKS } from '../lib/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-frame">
        <div className="footer-row">
          <p className="body-3">
            <Link to="/contact?intent=pilot">Homeowner? We run a small, application only pilot.</Link>
          </p>
          <div className="footer-links caption-2">
            <Link to="/privacy-policy">Privacy</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={LINKS.calculators} target="_blank" rel="noopener noreferrer">
              Calculators
            </a>
          </div>
          <p className="caption-5 muted">© {new Date().getFullYear()} Exergy</p>
        </div>
      </div>
    </footer>
  )
}
