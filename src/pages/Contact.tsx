import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Calendar } from 'lucide-react'

// Declare HubSpot types
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const Contact = () => {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    
    script.onload = () => {
      // Create the form once the script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "3834775",
          formId: "8ff88733-6d79-4010-9359-e8cd934a874e",
          region: "na1",
          target: "#hubspot-form-container"
        })
      }
    }
    
    document.head.appendChild(script)
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            It's time to monetize your heat
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-600" />
                <a 
                  href="mailto:contact@exergyheat.com" 
                  className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors"
                >
                  contact@exergyheat.com
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-primary-600" />
                <Link to="/book-call" className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors">
                  Book a Call with Our Team
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary-600" />
                <a 
                  href="https://maps.app.goo.gl/bp9d8a3GEpfzv3Kg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors"
                >
                  3700 N Franklin St. Denver, CO 80205
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Office Hours</h3>
              <div className="space-y-2 text-surface-600 dark:text-surface-400">
                <p>Monday - Friday: 8:00 AM - 5:00 PM Mountain Time</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* HubSpot Form Container */}
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6">Send us a Message</h2>
            
            {/* HubSpot Form will be injected here */}
            <div id="hubspot-form-container" className="hubspot-form-wrapper">
              {/* Loading state while form loads */}
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <span className="ml-3 text-surface-600 dark:text-surface-400">Loading form...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for HubSpot form */}
      <style jsx>{`
        .hubspot-form-wrapper .hs-form {
          font-family: 'Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', sans-serif !important;
        }
        
        .hubspot-form-wrapper .hs-form-field > label {
          color: var(--text-color) !important;
          font-weight: 500 !important;
          margin-bottom: 0.5rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.025em !important;
        }
        
        .hubspot-form-wrapper .hs-input {
          width: 100% !important;
          padding: 0.75rem !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.375rem !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          background-color: white !important;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
        }
        
        .hubspot-form-wrapper .hs-input:focus {
          outline: none !important;
          border-color: #4970A5 !important;
          box-shadow: 0 0 0 3px rgba(73, 112, 165, 0.1) !important;
        }
        
        .hubspot-form-wrapper .hs-button {
          background-color: #4970A5 !important;
          color: white !important;
          padding: 0.75rem 1.5rem !important;
          border: none !important;
          border-radius: 0.375rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.025em !important;
          cursor: pointer !important;
          transition: background-color 0.15s ease-in-out !important;
          width: 100% !important;
          font-family: 'Futura PT', 'Futura', 'Avenir', 'Helvetica Neue', sans-serif !important;
        }
        
        .hubspot-form-wrapper .hs-button:hover {
          background-color: #3D5A8A !important;
        }
        
        .hubspot-form-wrapper .hs-error-msgs {
          color: #dc2626 !important;
          font-size: 0.875rem !important;
          margin-top: 0.25rem !important;
        }
        
        .hubspot-form-wrapper .hs-form-field {
          margin-bottom: 1.5rem !important;
        }
        
        /* Dark mode styles */
        .dark .hubspot-form-wrapper .hs-form-field > label {
          color: #f3f4f6 !important;
        }
        
        .dark .hubspot-form-wrapper .hs-input {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
          color: #f3f4f6 !important;
        }
        
        .dark .hubspot-form-wrapper .hs-input:focus {
          border-color: #4970A5 !important;
          box-shadow: 0 0 0 3px rgba(73, 112, 165, 0.2) !important;
        }
      `}</style>
    </div>
  )
}

export default Contact