import { Building, Factory, Home, Thermometer } from 'lucide-react'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  icon: typeof Building
  stats: {
    size: string
    savings: string
    payback: string
    hashrate: string
  }
  details: string[]
}

export const projects: Project[] = [
  {
    id: 'small-business',
    title: 'Exergy\'s Office Building',
    description: 'Fully integrated hashrate heating for The Space, Denver\'s 5,850 sqft bitcoin hub and home of Exergy\'s office. Stop by to see our demo systems in action.',
    image: 'https://denver.space/assets/venue/3700Franklin_Back.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Small Business',
    icon: Building,
    stats: {
      size: '5,850 sq ft',
      savings: '65%',
      payback: '18 months',
      hashrate: '450 TH/s'
    },
    details: [
      'Radiant & forced air combination',
      'Smart control system & remote monitoring',
      '20 kW solar array',
      'Redundant natural gas backup',
      'Heat dump to mine solar sats in the summer'
    ]
  },
  {
    id: 'residential',
    title: 'Rural Rocky Mountain Home',
    description: 'Hashrate heating electric boiler for mountain home radiant floor heat. Exergy\'s digital boiler serves as a drop in replacement for this home\'s traditional electric resistive unit, earning revenue at no extra utility cost.',
    image: 'https://travelboulder.com/wp-content/uploads/2021/11/1579-Linden-Dr-Boulder-CO-80304-1.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Residential',
    icon: Home,
    stats: {
      size: '2,700 sq ft',
      savings: '112%',
      payback: '24 months',
      hashrate: '200 TH/s'
    },
    details: [
      'Hydronic boiler system',
      'Radiant floor heat',
      'Smart controls',
      'Mobile monitoring'
    ]
  },
  {
    id: 'commercial',
    title: 'Mountain Hot Spring Resort',
    description: 'Commercial-scale digital boiler solution for a high altitude hot spring resort with supplemental spa heat. This custom system replaces a traditional propane boiler, providing greater than 100% cost savings on heating bills.',
    image: 'https://images.squarespace-cdn.com/content/v1/6228169f168e51239c996b76/87583b0a-810c-4a9e-998d-bade1da615e0/0L9A4133.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Commercial',
    icon: Factory,
    stats: {
      size: '40,000 gallons',
      savings: '124%',
      payback: '32 months',
      hashrate: '2.28 PH/s'
    },
    details: [
      'Multi-pool heating',
      'Scalable boiler design',
      'Remote monitoring',
      'Smart controls'
    ]
  }
]