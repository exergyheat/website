import { useEffect } from 'react'

const HubspotScriptLoader = () => {
  useEffect(() => {
    // Load HubSpot forms embed script
    const formsScriptSrc = '//js-na2.hsforms.net/forms/embed/v2.js'
    const existingFormsScript = document.querySelector(`script[src="${formsScriptSrc}"]`)
    
    if (!existingFormsScript) {
      const formsScript = document.createElement('script')
      formsScript.charset = 'utf-8'
      formsScript.type = 'text/javascript'
      formsScript.src = formsScriptSrc
      formsScript.defer = true
      formsScript.async = true
      document.body.appendChild(formsScript)
    }

    // Load HubSpot contact form script
    const contactFormScriptSrc = 'https://js-na2.hsforms.net/forms/embed/243159145.js'
    const existingContactFormScript = document.querySelector(`script[src="${contactFormScriptSrc}"]`)
    
    if (!existingContactFormScript) {
      const contactFormScript = document.createElement('script')
      contactFormScript.src = contactFormScriptSrc
      contactFormScript.defer = true
      contactFormScript.async = true
      document.body.appendChild(contactFormScript)
    }

    // Load HubSpot meetings embed script
    const meetingsScriptSrc = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    const existingMeetingsScript = document.querySelector(`script[src="${meetingsScriptSrc}"]`)
    
    if (!existingMeetingsScript) {
      const meetingsScript = document.createElement('script')
      meetingsScript.type = 'text/javascript'
      meetingsScript.src = meetingsScriptSrc
      meetingsScript.defer = true
      meetingsScript.async = true
      document.body.appendChild(meetingsScript)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}

export default HubspotScriptLoader