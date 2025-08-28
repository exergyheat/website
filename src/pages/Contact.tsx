import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Calendar } from 'lucide-react'

const Contact = () => {
  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/243159145.js"]')
    
    if (!existingScript) {
      // Create and load the HubSpot script
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/243159145.js'
      script.defer = true
      script.async = true
      document.body.appendChild(script)
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/243159145.js"]')
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Contact EXERGY | Get Started with Hashrate Heating</title>
        <meta name="description" content="Contact EXERGY for hashrate heating solutions. Located in Denver, CO. Email us at contact@exergyheat.com or schedule a consultation to get started with heat that pays." />
        <meta name="keywords" content="contact EXERGY, hashrate heating consultation, Denver heating company, bitcoin mining heat contact" />
      </Helmet>
      
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
                  Book a Call with someone at Exergy
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
                <p>Saturday - Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* HubSpot Contact Form */}
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6">Send us a Message</h2>
            
            {/* HubSpot Form Container */}
            <div 
              className="hs-form-frame" 
              data-region="na2" 
              data-form-id="106749ae-0515-4d1a-925d-edf71b3bfcae" 
              data-portal-id="243159145"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact