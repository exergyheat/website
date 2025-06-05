import React from 'react'
import { Link } from 'react-router-dom'
import { Laptop, Github, X, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-surface-900 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Laptop className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">EXERGY</span>
            </div>
            <p className="mt-4 text-surface-400">
              Heat That Pays
            </p>
          </div>

          {/* Home Links */}
          <div>
            <Link to="/" className="text-lg font-semibold mb-4 text-surface-100 hover:text-surface-200 transition-colors">Home</Link>
            <ul className="space-y-2 mt-4">
              <li>
                <Link to="/products" className="text-surface-400 hover:text-surface-200 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-surface-400 hover:text-surface-200 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-surface-400 hover:text-surface-200 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-surface-400 hover:text-surface-200 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-surface-400 hover:text-surface-200 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <Link to="/learn" className="text-lg font-semibold mb-4 text-surface-100 hover:text-surface-200 transition-colors">Learn</Link>
            <ul className="space-y-2 mt-4">
              <li>
                <Link to="/calculators" className="text-surface-400 hover:text-surface-200 transition-colors">Calculators</Link>
              </li>
              <li>
                <Link to="/education" className="text-surface-400 hover:text-surface-200 transition-colors">Education</Link>
              </li>
              <li>
                <a 
                  href="https://heatpunks.org"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-surface-400 hover:text-surface-200 transition-colors"
                >
                  Forum
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-surface-400 hover:text-surface-200 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:admin@exergyheat.com" className="ml-2 text-surface-400 hover:text-surface-200 transition-colors">
                  admin@exergyheat.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-400" />
                <a 
                  href="https://maps.app.goo.gl/bp9d8a3GEpfzv3Kg7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-2 text-surface-400 hover:text-surface-200 transition-colors"
                >
                  3700 N Franklin St. Denver, CO 80205
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-surface-400 hover:text-surface-200 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://x.com" className="text-surface-400 hover:text-surface-200 transition-colors">
                <X className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-surface-400 hover:text-surface-200 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-800 text-center text-surface-400">
          <p>&copy; {new Date().getFullYear()} EXERGY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer