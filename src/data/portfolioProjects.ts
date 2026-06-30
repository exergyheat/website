import { Building, Home, Sun, Zap } from 'lucide-react'

export interface CaseStat {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  category: string
  integrationTypes: string[]
  operatingMode: string
  icon: typeof Building
  stats: CaseStat[]
  details: string[]
  pullQuote?: string
}

export const projects: Project[] = [
  {
    id: 'colorado-mountain-home',
    title: 'The Colorado Mountain Home',
    subtitle: '2,396 sq ft · Forced Air HVAC · Natural Gas Backup',
    description: 'A single water-cooled miner drops into the existing mechanical room, hot water circulates to a radiator inside the furnace return duct, and the air handler distributes heat exactly as the furnace would — silently, invisibly, and with Bitcoin earnings on top. The goal: maximize hashrate uptime during the heating season. Gas exists only for backup.',
    image: '/StockBackgroundHome_Tinted.png',
    category: 'Residential',
    integrationTypes: ['In-Duct / Forced Air'],
    operatingMode: 'Mode 1: Mine to Heat',
    icon: Home,
    stats: [
      { label: 'Miner Heat Share', value: '98.6%' },
      { label: 'Heating Season', value: '43 days' },
      { label: 'Total Miner Runtime', value: '~310 hrs' },
      { label: 'Gas Assist', value: '4.4 hrs total' },
      { label: 'Miner Power', value: '4,000W' },
      { label: 'System Type', value: 'Water-Cooled' },
    ],
    details: [
      'Single water-cooled miner in mechanical room',
      'Radiator installed in existing HVAC return duct',
      'Stage 1 heat handled entirely by miner — gas is stage 2 backup',
      'Home Assistant fires miner on thermostat call, triggers air handler blower',
      'Silent operation — no noise from miner, existing ductwork distributes heat',
      'Gas furnace nearly idle for the full heating season',
    ],
    pullQuote: 'A single properly sized miner can displace the dominant heating load of a 2,400 sq ft home in a cold climate.'
  },
  {
    id: 'all-electric-mountain-home',
    title: 'The All-Electric Mountain Home',
    subtitle: '3,966 sq ft · Hydronic Radiant Floors · 40kW Electric Boiler · No Gas',
    description: 'The cleanest possible comparison: same electricity source, same delivered heat, different outcome. Two miners in an immersion tank replace a 40kW electric boiler as the primary heat source for radiant floors. No new thermostats, no new wiring, no contractor beyond a plumber — and a 45% reduction in effective heating cost.',
    image: '/StockBackgroundHome_Tinted.png',
    category: 'Residential',
    integrationTypes: ['Hydronic / Radiant'],
    operatingMode: 'Mode 3: Cheapest BTU',
    icon: Home,
    stats: [
      { label: 'Effective Heat Cost', value: '$0.049/kWh' },
      { label: 'vs. Electric Resistance', value: '−45%' },
      { label: 'Mining Subsidy', value: '45%' },
      { label: 'Break-Even Rate', value: '$0.041/kWh' },
      { label: 'COPe', value: '1.83' },
      { label: 'Mining Capacity', value: '6,000W' },
    ],
    details: [
      'Two 3,000W miners submerged in dielectric oil immersion tank',
      'Heat exchanger on radiant floor return loop — upstream of 40kW electric boiler',
      'Boiler senses warm water, stays off; miners handle the load',
      'No changes to existing thermostats, wiring, or zone controllers',
      'Boiler exists as backup for coldest days — rarely fires',
      'Only installation work: adding the thermal exchange tank to existing plumbing',
    ],
    pullQuote: 'At $0.14/kWh electricity, hashrate heat costs $0.049/kWh effective — a 45% reduction versus straight electric resistance at the same rate.'
  },
  {
    id: 'solar-home',
    title: 'The Solar Home',
    subtitle: '900 sq ft · Zone Heaters + Garage Miner · Net Metering at $0.01/kWh',
    description: 'A failing furnace with a $10,000 replacement quote and a solar system exporting energy to the grid for a penny a kilowatt-hour. One system solved both problems: $4,000 installed, furnace replacement deferred indefinitely, and solar energy now earns 3.3× more routed through the miner than sent to the utility.',
    image: '/StockBackgroundHome_Tinted.png',
    category: 'Residential',
    integrationTypes: ['Smart Zone Heaters', 'Excess Solar'],
    operatingMode: 'Mode 2: Solar First',
    icon: Sun,
    stats: [
      { label: 'Solar Generated', value: '949 kWh' },
      { label: 'Grid Export Value', value: '$6.74' },
      { label: 'Mining Value (same kWh)', value: '$22.24' },
      { label: 'Solar Value Multiplier', value: '3.3×' },
      { label: 'System Cost', value: '~$4,000' },
      { label: 'vs. Furnace Replacement', value: '$10,000+' },
    ],
    details: [
      'Three 800W mining space heaters — one per primary zone, each with wireless temp sensor',
      'Home Assistant virtual thermostats manage zone setpoints — no wall thermostat needed',
      'Garage miner connected to solar inverter: activates on excess generation, dumps heat outside',
      'Solar arbitrage runs automatically every day the sun produces more than the building needs',
      'Furnace did not trigger once during the heating season — miners handled the full load',
      'Over 57 days: same kWh earned 3.3× more through mining than exported to grid',
    ],
    pullQuote: 'The same energy that would have earned $6.74 exported to the grid at $0.01/kWh earned $22.24 routed through the miner — a 3.3× improvement per kWh.'
  },
  {
    id: 'commercial-building',
    title: 'The Commercial Building',
    subtitle: '5,250 sq ft · Three HVAC Zones · Large Solar Array · Commercial TOU Pricing',
    description: "Exergy's Denver demo site and office. The most fully integrated building we operate — five miners across four zones, a liquid-cooled Bitcoin boiler on radiant floors, a Bitcoin-heated hot tub, solar-to-mining arbitrage, and a Home Assistant system that knows the cost of every energy input in real time and always routes heat through the cheapest one.",
    image: 'https://denver.space/assets/venue/3700Franklin_Back.webp',
    category: 'Commercial',
    integrationTypes: ['Hydronic / Radiant', 'In-Duct / Forced Air', 'Smart Zone Heaters', 'Water / Pool / Spa', 'Excess Solar'],
    operatingMode: 'Mode 2: Cheapest BTU',
    icon: Building,
    stats: [
      { label: 'Building Size', value: '5,250 sq ft' },
      { label: 'Active Mining Zones', value: '4' },
      { label: 'Total Miners', value: '5' },
      { label: 'Energy Inputs Managed', value: 'Gas + Solar + Grid' },
      { label: 'Hot Tub', value: 'Bitcoin-Heated' },
      { label: 'Gas Fires', value: 'Rarely' },
    ],
    details: [
      '4,000W liquid-cooled Bitcoin boiler on hydronic radiant floor system',
      'Three forced-air furnaces with miners in return ducts — gas is stage 3 backup only',
      'Bitcoin mining space heaters for individual office zones',
      'Bitcoin-heated hot tub running year-round off a dedicated miner',
      'Dry cooler in backyard for summer heat dump when building doesn\'t need heat',
      'HA reads TOU rate, solar output, Bitcoin economics, gas cost — picks cheapest BTU in real time',
      'Off-peak overnight: boiler often runs for pure profit, circulating to dry cooler',
      'All hardware controlled locally — no cloud dependency, no data leaving the network',
    ],
    pullQuote: 'Five miners across four zones. Every energy input visible. Every decision made automatically. Gas furnaces exist in the building but are rarely the cheapest option the system finds.'
  },
]
