import { useEffect } from 'react'

const HUBSPOT_SCRIPTS = [
  'https://js-na2.hsforms.net/forms/embed/243159145.js',
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
]

export const useHubSpotPreload = () => {
  useEffect(() => {
    const preloadScripts = () => {
      HUBSPOT_SCRIPTS.forEach(src => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement('script')
          script.src = src
          script.defer = true
          document.head.appendChild(script)
        }
      })
    }

    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(preloadScripts, { timeout: 3000 })
      return () => window.cancelIdleCallback(idleCallbackId)
    } else {
      // Fallback for Safari
      const timeoutId = setTimeout(preloadScripts, 2000)
      return () => clearTimeout(timeoutId)
    }
  }, [])
}
