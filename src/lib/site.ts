export const SITE_URL = 'https://exergyheat.com'
export const CONTACT_EMAIL = 'contact@exergyheat.com'

// Cal.com replaced the old HubSpot meetings link.
export const BOOKING_URL = 'https://cal.com/tylerkstevens'

export const LINKS = {
  calculators: 'https://calc.exergyheat.com',
  // TODO(tyler): dedicated Home Assistant URL. Until then, the public org.
  homeAssistant: 'https://github.com/exergyheat',
  github: 'https://github.com/exergyheat',
  docs: 'https://docs.exergyheat.com',
} as const

export const NAV = [
  { to: '/commercial', label: 'Commercial' },
  { to: '/partners', label: 'Partners' },
  { to: '/operations', label: 'Operations' },
  { to: '/about', label: 'About' },
] as const

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
