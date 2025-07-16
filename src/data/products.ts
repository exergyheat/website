import { Building, Factory, Home, Thermometer } from 'lucide-react'

export interface Product {
  id: string
  title: string
  description: string
  image: string
  category: string
  icon: typeof Building
  specs: {
    power: string
    hashrate: string
    heating: string
    capacity?: string
    noise?: string
    dimensions: string
    waterTemp?: string
  }
  price: string
  features: string[]
}

export const products: Product[] = [
  {
    id: 'sh-800',
    category: 'space-heating',
    title: 'Canaan Avalon Mini 3',
    image: 'https://www.canaan.io/static/themes/default/images/official/official_mini3_index4.png',
    specs: {
      power: '800 W: 110-240V AC 50/60Hz',
      hashrate: '37.5 TH/s',
      heating: '2,730 BTU/hr',
      capacity: '400 sqft',
      noise: '45 dB',
      dimensions: '30" x 4.1" x 8.5"'
    },
    price: '$999',
    description: 'Perfect for heating small to medium-sized rooms while generating passive revenue. The Avalon Mini 3 is easy to setup, can be operated remotely, and has a whisper quiet fan. You won\'t even know it\'s there.',
    features: [
      'Plug-and-play setup',
      'WiFi connectivity',
      'Mobile app control',
      'Quiet operation'
    ],
    icon: Home,
    category: 'space-heating'
  },
  {
    id: 'hyd-5000',
    category: 'hydronic',
    title: 'RY3T Mini',
    image: 'https://ry3t.com/wp-content/uploads/2025/03/2-1024x1024.png',
    specs: {
      power: '5000W',
      hashrate: '206 TH/s',
      heating: '17,060 BTU/hr',
      waterTemp: '149°F max',
      dimensions: '23.6" x 15.8" x 24.4"'
    },
    price: '$10,000',
    description: 'Versatile electric boiler for hydronic hashrate heating applications. With a high water output temperature and smart control, this water boiler is great for a variety of use cases.',
    features: [
      'Radiant / hydronic loop applications',
      'Hot water tank integration',
      'Integrated heating loop pump',
      'Integrated PLC control'
    ],
    icon: Thermometer,
    category: 'hydronic'
  },
]