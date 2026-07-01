import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Calendar, Loader2, Users } from 'lucide-react'

const Contact = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const [formTimedOut, setFormTimedOut] = useState(false)

  useEffect(() => {
    const checkFormLoaded = setInterval(() => {
      const formContainer = document.querySelector('.hs-form-frame iframe, .hs-form-frame form')
      if (formContainer) {
        setIsFormLoaded(true)
        clearInterval(checkFormLoaded)
      }
    }, 200)

    const timeout = setTimeout(() => {
      clearInterval(checkFormLoaded)
      setFormTimedOut(true)
    }, 10000)

    return () => {
      clearInterval(checkFormLoaded)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Contact | Exergy</title>
        <meta name="description" content="Contact Exergy in Denver, CO. Email contact@exergyheat.com or book a free consultation to explore building-integrated mining for your property." />
        <meta name="keywords" content="contact Exergy, building integrated mining consultation, Denver mining company, bitcoin mining heat contact" />
        <link rel="canonical" href="https://exergyheat.com/contact" />
        <meta property="og:title" content="Contact Exergy | Building-Integrated Mining" />
        <meta property="og:description" content="Contact Exergy in Denver, CO. Email contact@exergyheat.com or book a free consultation to explore building-integrated mining." />
        <meta property="og:url" content="https://exergyheat.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Exergy | Building-Integrated Mining" />
        <meta name="twitter:description" content="Contact Exergy in Denver, CO. Email contact@exergyheat.com or book a free consultation." />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch — we'll point you in the right direction.
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
              <div className="flex items-center">
                <Users className="h-6 w-6 text-primary-600" />
                <a href="https://meet.jit.si/ExergyHomeAssistant" target="_blank" rel="noopener noreferrer" className="ml-4 text-primary-600 dark:text-primary-400 hover:underline">Weekly office hours — Wednesdays at 10am MT, free and open to everyone</a>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Office Hours</h3>
              <div className="space-y-2 text-surface-600 dark:text-surface-400">
                <p>We respond to emails within 1 business day</p>
                <p>Free 15-min intro calls available — book via calendar above</p>
                <p>
                  <a href="https://meet.jit.si/ExergyHomeAssistant" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                    Join weekly office hours →
                  </a>{' '}
                  Wednesdays at 10am Mountain Time
                </p>
              </div>
            </div>
          </div>

          {/* HubSpot Contact Form */}
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6">Send us a Message</h2>

            {/* Loading State */}
            {!isFormLoaded && !formTimedOut && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 text-primary-600 animate-spin mb-4" />
                <p className="text-surface-600 dark:text-surface-400">Loading form...</p>
              </div>
            )}

            {/* Fallback if form never loads */}
            {formTimedOut && !isFormLoaded && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-surface-600 dark:text-surface-400 mb-2">Form not loading?</p>
                <a href="mailto:contact@exergyheat.com" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  contact@exergyheat.com
                </a>
              </div>
            )}

            {/* HubSpot Form Container */}
            <div
              className={`hs-form-frame transition-opacity duration-300 ${isFormLoaded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
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