export const PLATES = {
  'hero-building-denver': { w: 1152, h: 864, widths: [480, 768, 1152] },
  'services-boiler': { w: 1152, h: 864, widths: [360, 640, 960] },
  'story-mechanical-room': { w: 1152, h: 864, widths: [480, 768, 1152] },
  'phases-blueprint': { w: 864, h: 1152, widths: [420, 640, 864] },
  'cta-rooftops': { w: 1280, h: 720, widths: [640, 960, 1280] },
  'footer-denver-skyline': { w: 1280, h: 720, widths: [640, 960, 1280] },
  'commercial-panorama-winter': { w: 1280, h: 720, widths: [640, 960, 1280] },
  'partners-factory-floor': { w: 1280, h: 720, widths: [640, 960, 1280] },
  'operations-control-room': { w: 1280, h: 720, widths: [640, 960, 1280] },
  'about-drafting-table': { w: 1280, h: 720, widths: [480, 768, 1280] },
  'about-mechanical-room': { w: 1280, h: 720, widths: [480, 768, 1280] },
  'about-denver-street': { w: 1280, h: 720, widths: [480, 768, 1280] },
} as const

export type PlateSlug = keyof typeof PLATES
