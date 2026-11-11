export const SITE_URL = 'https://exergyheat.com'
export const CONTACT_EMAIL = 'contact@exergyheat.com'

// Cal.com replaced the old HubSpot meetings link.
export const BOOKING_URL = 'https://cal.com/tylerkstevens'
export const FALLBACK_TIME_ZONE = 'America/Denver'

export function visitorTimeZone() {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (!zone) return FALLBACK_TIME_ZONE
    Intl.DateTimeFormat('en-US', { timeZone: zone }).format()
    return zone
  } catch {
    return FALLBACK_TIME_ZONE
  }
}

export function bookingUrl(timeZone: string) {
  return `${BOOKING_URL}?cal.tz=${encodeURIComponent(timeZone)}`
}

export const LINKS = {
  calculators: 'https://calc.exergyheat.com',
  // TODO(tyler): dedicated Home Assistant URL. Until then, the public org.
  homeAssistant: 'https://github.com/exergyheat',
  github: 'https://github.com/exergyheat',
  docs: 'https://docs.exergyheat.com',
} as const

export const NAV = [
  { to: '/commercial', label: 'Commercial', featured: false },
  { to: '/homes', label: 'Homes', featured: false },
  { to: '/industry', label: 'Industry', featured: false },
  { to: '/operations', label: 'Operations', featured: false },
  { to: '/open-tools', label: 'Open Tools', featured: true },
  { to: '/about', label: 'About', featured: false },
] as const

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
