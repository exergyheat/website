import { Building, Home, Sun } from 'lucide-react'

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
  chartImage?: string
  category: string
  integrationTypes: string[]
  operatingMode: string
  icon: typeof Building
  size: string
  savings: string
  payback: string
  stats: CaseStat[]
  details: string[]
  pullQuote?: string
}

export const projects: Project[] = [
  {
    id: 'commercial-building',
    title: 'The Commercial Office',
    subtitle: '5,250 sq ft · Denver demo and office · Three HVAC zones · Solar · Commercial time-of-use power',
    description:
      "Exergy's Denver office and demo building, and the case we lead with. Five bitcoin miners across four zones: hydronic heat on the radiant floors, forced air at the furnaces, zone heat in offices, a hot tub heated by a miner, and solar routed through hashing when the building does not need the watts. Home Assistant sees the inputs it is allowed to see and picks the cheapest heat it can. Gas is still in the building. It is rarely the option the controls choose.",
    image: 'https://denver.space/assets/venue/3700Franklin_Back.webp',
    chartImage: '/case_4_chart.png',
    category: 'Commercial office',
    integrationTypes: ['Hydronic / Radiant', 'In-Duct / Forced Air', 'Smart Zone Heaters', 'Water / Pool / Spa', 'Excess Solar'],
    operatingMode: 'Mode 3: Cheapest BTU',
    icon: Building,
    size: '5,250 sq ft',
    savings: 'Gas rarely wins',
    payback: 'Ongoing bitcoin',
    stats: [
      { label: 'Building Size', value: '5,250 sq ft' },
      { label: 'Active Mining Zones', value: '4' },
      { label: 'Total Miners', value: '5' },
      { label: 'Energy Inputs Managed', value: 'Gas + Solar + Grid' },
      { label: 'Hot Tub', value: 'Heated by a miner' },
      { label: 'Gas Fires', value: 'Rarely' },
    ],
    details: [
      'A 4,000W bitcoin miner feeds the hydronic radiant-floor loop',
      'Three forced-air furnaces with miners delivering heat into the return — gas is backup only',
      'Bitcoin miners used as heat for individual office zones',
      'Hot tub held on temperature by a dedicated miner',
      'A dry cooler outside rejects heat in summer, when the building does not need it',
      'Controls read the time-of-use rate, solar output, and gas cost, and prefer the cheapest heat',
      'Off-peak, the hydronic miner sometimes runs because the bitcoin is the point and the heat is rejected outdoors',
      'Control stays on hardware in the building',
    ],
    pullQuote:
      'Five miners across four zones. Heat recovery and solar are both in the building, and they are not the same decision. The gas furnaces are still installed. They are rarely the cheapest heat the system can find.',
  },
  {
    id: 'colorado-mountain-home',
    title: 'The Colorado Mountain Home',
    subtitle: '2,396 sq ft · Forced Air HVAC · Natural Gas Backup',
    description: 'Pilot install. A bitcoin miner in the existing mechanical room sends recovered heat to a radiator in the furnace return duct. The air handler distributes that heat the way the furnace would. The goal was hashrate during the heating season. Gas stays in the building as backup.',
    image: '/StockBackgroundHome_Tinted.webp',
    chartImage: '/case_1_chart.png',
    category: 'Residential pilot',
    integrationTypes: ['In-Duct / Forced Air'],
    operatingMode: 'Mode 1: Mine to Heat',
    icon: Home,
    size: '2,396 sq ft',
    savings: '98.6% heat share',
    payback: '< 2 yrs',
    stats: [
      { label: 'Miner Heat Share', value: '98.6%' },
      { label: 'Heating Season', value: '43 days' },
      { label: 'Total Miner Runtime', value: '~310 hrs' },
      { label: 'Gas Assist', value: '4.4 hrs total' },
      { label: 'Miner Power', value: '4,000W' },
      { label: 'System Type', value: 'Hydronic into forced air' },
    ],
    details: [
      'Pilot install — one bitcoin miner in the mechanical room',
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
    description: 'Pilot install. Same electricity, same delivered heat, different outcome. Two bitcoin miners in an immersion tank carry the radiant floors that a 40kW electric boiler used to carry. The boiler stays as backup. Effective heating cost in this study was about 45% lower than straight electric resistance. Treat the dollar figures below as unverified until Tyler signs them.',
    image: '/StockBackgroundHome_Tinted.webp',
    chartImage: '/case_2_chart.png',
    category: 'Residential pilot',
    integrationTypes: ['Hydronic / Radiant'],
    operatingMode: 'Mode 3: Cheapest BTU',
    icon: Home,
    size: '3,966 sq ft',
    savings: '45% cost reduction',
    payback: '~18 mo',
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
    description: 'Pilot install. A failing furnace and a solar array exporting for a thin credit. Zone miners carried the heating season, a garage miner took surplus solar, and the same kilowatt-hours earned 3.3× the export credit. The installed-cost figure on this card is specifically unverified — see the TODO.',
    image: '/StockBackgroundHome_Tinted.webp',
    chartImage: '/case_3_chart.png',
    category: 'Residential pilot',
    integrationTypes: ['Smart Zone Heaters', 'Excess Solar'],
    operatingMode: 'Mode 2: Solar First',
    icon: Sun,
    size: '900 sq ft',
    savings: '3.3× solar value',
    payback: '< 1 yr',
    stats: [
      { label: 'Solar Generated', value: '949 kWh' },
      { label: 'Grid Export Value', value: '$6.74' },
      { label: 'Mining Value (same kWh)', value: '$22.24' },
      { label: 'Solar Value Multiplier', value: '3.3×' },
      { label: 'System Cost (TODO: verify)', value: '~$4,000' },
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
]
