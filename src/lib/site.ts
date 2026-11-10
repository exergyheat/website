export const SITE_URL = 'https://exergyheat.com'
export const CONTACT_EMAIL = 'contact@exergyheat.com'

// Public HubSpot meetings link used by the previous site (the embed lived at
// this URL with ?embed=true). Rendered as a normal link until Tyler replaces it.
// TODO(tyler): confirm this booking URL still stands once HubSpot is gone.
export const BOOKING_URL = 'https://meetings-na2.hubspot.com/tyler2/round-robin-executive-link'

export const LINKS = {
  calculators: 'https://calc.exergyheat.com',
  github: 'https://github.com/exergyheat',
  x: 'https://x.com/exergy_',
  foundation: 'https://256foundation.org',
  book: 'https://www.amazon.com/Bitcoin-Mining-Reuse-Tyler-Stevens/dp/B0GYJ8QDK6',
  summit: 'https://denver.space/heatpunk_summit',
  docs: 'https://docs.exergyheat.com',
} as const

export const NAV = [
  { to: '/commercial', label: 'Commercial' },
  { to: '/partners', label: 'Partners' },
  { to: '/operations', label: 'Operations' },
  { to: '/about', label: 'About' },
] as const
