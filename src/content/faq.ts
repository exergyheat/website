export type FaqItem = { q: string; a: string }

export const homeFaq: FaqItem[] = [
  {
    q: 'Is this a fit for my building?',
    a: 'It is a fit when the building has a real heating load, solar that leaves the site, or both. Phase 0 is the check. If the bills say the energy is already doing the useful work it can, we tell you to stop.',
  },
  {
    q: 'What does Phase 0 need from me?',
    a: 'About 12 months of utility bills, where the building is, roughly how big it is, whether the heat is hydronic or forced air (or that you do not know yet), and whether you have solar. The check is free.',
  },
  {
    q: 'Does this work for new construction and for a retrofit?',
    a: 'Both. In new construction the miners, the heat, and the solar go into the drawings with the architect and the engineer. In a retrofit we start from the heating system and the electrical service that are already there.',
  },
  {
    q: 'Can you integrate with hydronic heat and with forced air?',
    a: 'Yes. We use the distribution the building has, or the one the design calls for. Some buildings only want solar monetization, with the heating plant left as it is. That is a complete scope.',
  },
  {
    q: 'Why do you not sell hardware?',
    a: 'Mining hardware changes often. A building does not. If we sold a box, the design would start from our inventory instead of from your loads. We do not sell miners, boilers, or controls. We specify what the building needs and coordinate the people who supply and install it.',
  },
  {
    q: 'How does pricing work?',
    a: 'There is no rate card. Each project is scoped on its own, and each phase is its own agreement. Phase 0 is free. You can stop after any phase.',
  },
]

export const commercialFaq: FaqItem[] = [
  {
    q: 'Can a project be solar monetization only?',
    a: 'Yes. If the heating plant should stay as it is, we scope the miners around the solar the building cannot use on site. Heat recovery and solar monetization are separate value streams. You can take one or both.',
  },
  {
    q: 'Who is responsible for the engineering?',
    a: 'Your MEP engineer remains responsible for the building systems. We join as the building integrated mining specialist and coordinate our design into their drawings, with the architect and the general contractor.',
  },
  {
    q: 'What do I hold at the end of each phase?',
    a: 'Phase 0 gives you a written go or no go. Phase 1 gives you one to three system options and an estimated budget. Phase 2 gives you a design your team can build. Phase 3 leaves you with a commissioned system. Phase 4, if you want it, is monitoring and a warranty on our work.',
  },
  {
    q: 'What if the building is a poor fit?',
    a: 'We say so. That is the point of a free Phase 0. A poor electrical service, a heating system we cannot tie into, or bills that do not support the idea are all reasons to stop.',
  },
]

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
