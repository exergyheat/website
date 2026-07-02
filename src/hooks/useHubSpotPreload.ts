import { useEffect } from 'react'

const HUBSPOT_SCRIPTS = [
  'https://js-na2.hsforms.net/forms/embed/243159145.js',
  'https://js-na2.hsforms.net/forms/embed/v2.js',
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
]

// Loads the HubSpot form/meetings embeds. Called from the pages that render
// them (Contact, BookCall, About) rather than app-wide, so visitors who never
// open those pages don't pay for HubSpot's JS and tracking.
export const useHubSpotPreload = () => {
  useEffect(() => {
    HUBSPOT_SCRIPTS.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script')
        script.src = src
        script.defer = true
        document.head.appendChild(script)
      }
    })
  }, [])
}
