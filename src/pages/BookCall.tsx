import React, { useEffect } from 'react'
import { Calendar } from 'lucide-react'

const BookCall = () => {
  useEffect(() => {
    // Check if HubSpot meetings embed script is already loaded
    const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]')
    
    if (!existingScript) {
      // Load HubSpot meetings embed script only if it doesn't exist
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      document.head.appendChild(script)
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
            Chat with an Expert at Exergy
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Book a call with our team to discuss how hashrate heating can benefit you.
          </p>
        </div>
        
        {/* HubSpot Meetings Embed */}
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div 
            className="meetings-iframe-container" 
            data-src="https://meetings-na2.hubspot.com/tyler2/round-robin-executive-link?embed=true"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default BookCall