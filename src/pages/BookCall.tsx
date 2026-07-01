import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Loader2 } from 'lucide-react'

const BookCall = () => {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false)
  const [calendarTimedOut, setCalendarTimedOut] = useState(false)

  useEffect(() => {
    const checkCalendarLoaded = setInterval(() => {
      const calendarContainer = document.querySelector('.meetings-iframe-container iframe')
      if (calendarContainer) {
        setIsCalendarLoaded(true)
        clearInterval(checkCalendarLoaded)
      }
    }, 200)

    const timeout = setTimeout(() => {
      clearInterval(checkCalendarLoaded)
      setCalendarTimedOut(true)
    }, 10000)

    return () => {
      clearInterval(checkCalendarLoaded)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>Book a Call | Exergy</title>
        <meta name="description" content="Book a free 15-minute consultation with Exergy. Discuss your building and learn whether building-integrated mining fits your energy setup." />
        <meta name="keywords" content="book Exergy consultation, building integrated mining call, schedule bitcoin mining demo, Exergy appointment" />
        <link rel="canonical" href="https://exergyheat.com/book-call" />
        <meta property="og:title" content="Book a Call | Exergy" />
        <meta property="og:description" content="Book a free 15-minute consultation with Exergy. Discuss your building and learn whether building-integrated mining fits your energy setup." />
        <meta property="og:url" content="https://exergyheat.com/book-call" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Book a Call | Exergy" />
        <meta name="twitter:description" content="Book a free 15-minute consultation with Exergy. Discuss your building and whether building-integrated mining fits." />
      </Helmet>

      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Call</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            15 minutes — we'll figure out if and how building-integrated mining makes sense for your project.
          </p>
        </div>
      </div>

      {/* HubSpot Calendar Integration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Book a Free 15-Minute Intro Call
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Tell us about your building, your current heating setup, and what you're hoping to accomplish. We'll tell you honestly whether it's a good fit and which path makes the most sense — Self-Serve, Guided, or Done-For-You.
          </p>
        </div>
        
        {/* HubSpot Meetings Embed */}
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          {/* Loading State */}
          {!isCalendarLoaded && !calendarTimedOut && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-10 w-10 text-primary-600 animate-spin mb-4" />
              <p className="text-surface-600 dark:text-surface-400">Loading calendar...</p>
            </div>
          )}

          {/* Fallback if calendar never loads */}
          {calendarTimedOut && !isCalendarLoaded && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-surface-600 dark:text-surface-400 mb-2">Calendar not loading?</p>
              <a href="mailto:contact@exergyheat.com" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                Email us to schedule directly
              </a>
            </div>
          )}

          <div
            className={`meetings-iframe-container transition-opacity duration-300 ${isCalendarLoaded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
            data-src="https://meetings-na2.hubspot.com/tyler2/round-robin-executive-link?embed=true"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default BookCall