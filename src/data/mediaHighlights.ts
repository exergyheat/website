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
    logo: 'https://logos-world.net/wp-content/uploads/2020/10/Forbes-Logo.png',
    link: '#', // Placeholder - you can update this later
    description: 'Featured in Forbes for bitcoin mining innovation'
  },
  {
    id: 'ny-post',
    name: 'New York Post',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/New-York-Post-Logo.png',
    link: '#', // Placeholder - you can update this later
    description: 'Quoted in New York Post about hashrate heating'
  },
  {
    id: 'bitcoin-conference',
    name: 'The Bitcoin Conference',
    logo: 'https://b.tc/wp-content/uploads/2023/01/bitcoin-2023-logo-black.png',
    link: '#', // Placeholder - you can update this later
    description: 'Speaker at The Bitcoin Conference'
  }
]