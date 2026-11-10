export type Phase = {
  id: string
  title: string
  summary: string
  detail: string
}

export const phases: Phase[] = [
  {
    id: '0',
    title: 'Feasibility check',
    summary: 'Free. A plain go or no go from about 12 months of utility bills.',
    detail: 'Free. We do the napkin math on about 12 months of utility bills and tell you go or no go, including the assumptions. A poor fit stops here.',
  },
  {
    id: '1',
    title: 'Exergy audit',
    summary: 'Energy, heat, and bitcoin economics. One to three options and an estimated budget.',
    detail: 'We study the energy, the heat, and the bitcoin economics. You leave with one to three system options and an estimated budget.',
  },
  {
    id: '2',
    title: 'Engineering coordination',
    summary: 'With your MEP engineer, your contractors, and your controls.',
    detail: 'We coordinate the design with your MEP engineer, your contractors, and your controls team, so the people who stamp and build the job have what they need.',
  },
  {
    id: '3',
    title: 'Procurement and commissioning',
    summary: 'Specify, place, and commission. We do not sell the hardware.',
    detail: 'We help specify and place the equipment, then commission it so the system actually runs. We do not sell the hardware.',
  },
  {
    id: '4',
    title: 'Monitoring and warranty',
    summary: 'Optional. We watch the system and stand behind our work.',
    detail: 'Optional. We monitor the running system and warrant the work we did. Skip it and the earlier phases still stand on their own.',
  },
]
