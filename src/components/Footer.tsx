import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-surface-900 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/Logo1_black_horizontal.png"
                alt="EXERGY"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="mt-4 font-body text-surface-400">
              Heat That Pays
            </p>
          </div>

          {/* Home Links */}
          <div>
            <Link to="/" className="text-lg font-subheading mb-4 text-surface-100 hover:text-surface-200 transition-colors">Home</Link>
            <ul className="space-y-2 mt-4">
              <li>
                <Link to="/products" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="font-body text-surface-400 hover:text-surface-200 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <Link to="/learn" className="text-lg font-subheading mb-4 text-surface-100 hover:text-surface-200 transition-colors">Learn</Link>
            <ul className="space-y-2 mt-4">
              <li>
                <Link to="/calculators" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Calculators</Link>
              </li>
              <li>
                <a 
                  href="https://docs.exergyheat.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-body text-surface-400 hover:text-surface-200 transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <Link to="/content" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Content</Link>
              </li>
              <li>
                <Link to="/blog" className="font-body text-surface-400 hover:text-surface-200 transition-colors">Blog</Link>
              </li>
                <Link to="/faq" className="font-body text-surface-400 hover:text-surface-200 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-subheading mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:contact@exergyheat.com" className="ml-2 font-body text-surface-400 hover:text-surface-200 transition-colors">
                  contact@exergyheat.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-500" />
                <a 
                  href="https://maps.app.goo.gl/bp9d8a3GEpfzv3Kg7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-2 font-body text-surface-400 hover:text-surface-200 transition-colors"
                >
                  3700 N Franklin St. Denver, CO 80205
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/exergy_llc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-surface-400 hover:text-surface-200 transition-colors"
              >
                <svg 
                  className="h-6 w-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/exergyheat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-surface-400 hover:text-surface-200 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-800 text-center font-body text-surface-400">
          <p>&copy; {new Date().getFullYear()} EXERGY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer