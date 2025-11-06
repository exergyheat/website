export interface MediaHighlight {
  id: string
  name: string
  logo: string
  link: string
  description: string
}

export const mediaHighlights: MediaHighlight[] = [
  {
    id: 'forbes',
    name: 'Forbes',
    logo: '/Forbes_logo.png',
    link: 'https://www.forbes.com/sites/digital-assets/2025/10/28/bitcoin-becomes-a-geopolitical-and-energy-advantage-with-the-heatpunks/',
    description: 'Interviewed by Forbes for bitcoin mining innovation'
  },
  {
    id: 'ny-post',
    name: 'New York Post',
    logo: '/NYP_logo.png',
    link: 'https://nypost.com/business/what-is-crypto-mining/',
    description: 'Quoted in New York Post about bitcoin mining'
  },
  {
    id: 'bitcoin-conference',
    name: 'Bitcoin 2025',
    logo: '/bitcoin2025_logo.png',
    link: 'https://www.youtube.com/watch?v=jtdJQ7uXcBk',
    description: 'Speaker at Bitcoin 2025'
  },
  {
    id: 'TFTC',
    name: 'TFTC',
    logo: '/TFTC_logo.png',
    link: 'https://www.tftc.io/tftc-bitcoin-heating-rebate-tyler-stevens-xrg/',
    description: 'Podcast Rip with Marty Bent'
  },
  {
    id: 'imagine-if',
    name: 'Imagine IF',
    logo: '/Imagine_IF_logo.png',
    link: 'https://www.youtube.com/watch?v=9b-H7FFzayE',
    description: 'Featured on Imagine IF'
  }
]