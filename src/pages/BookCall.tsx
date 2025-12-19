import React, { useState, useEffect } from 'react'
import { Calendar, Loader2 } from 'lucide-react'

const BookCall = () => {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false)

  useEffect(() => {
    // Check if HubSpot meetings embed has loaded
    const checkCalendarLoaded = setInterval(() => {
      const calendarContainer = document.querySelector('.meetings-iframe-container iframe')
      if (calendarContainer) {
        setIsCalendarLoaded(true)
        clearInterval(checkCalendarLoaded)
      }
    }, 200)

    // Cleanup and timeout after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkCalendarLoaded)
      setIsCalendarLoaded(true) // Show container anyway after timeout
    }, 10000)

    return () => {
      clearInterval(checkCalendarLoaded)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Call</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Chat with our team to discuss your hashrate heating needs
          </p>
        </div>
      </div>

      {/* HubSpot Calendar Integration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Talk to an Expert at Exergy
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Book a call with our team to discuss how hashrate heating can benefit you.
          </p>
        </div>
        
        {/* HubSpot Meetings Embed */}
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          {/* Loading State */}
          {!isCalendarLoaded && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-10 w-10 text-primary-600 animate-spin mb-4" />
              <p className="text-surface-600 dark:text-surface-400">Loading calendar...</p>
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