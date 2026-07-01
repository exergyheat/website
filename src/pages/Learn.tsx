import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle, Eye, FileText, PenTool, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Learn = () => {
  const [currentApplicationIndex, setCurrentApplicationIndex] = React.useState(0)

  const resources = [
    {
      title: "Calculators",
      description: "Estimate your own savings and earnings with our interactive tools.",
      icon: Calculator,
      link: "https://calc.exergyheat.com",
      sameTab: true
    },
    {
      title: "Documentation",
      description: "Official Exergy documentation.",
      icon: FileText,
      link: "https://docs.exergyheat.com",
    },
    {
      title: "Support Forum",
      description: "Community forum, policies, guides, hardware, software and service support.",
      icon: Users,
      link: "https://support.exergyheat.com/",
      external: true
    },
    {
      title: "FAQ",
      description: "Real questions from real customers — answered honestly.",
      icon: HelpCircle,
      link: "/faq"
    }
  ]

  const concepts = [
    {
      title: "Electricity In - Heat Out",
      icon: Zap,
      description: "Every watt of electricity consumed by a Bitcoin miner becomes heat — 100% of it. This isn't a feature, it's physics. The same thermodynamic law that makes your laptop warm makes miners ideal heaters.",
      image: "electric_heat_conversion.png",
      details: [
        "100% energy conversion efficiency",
        "No gas or liquid heating infrastructure",
        "Zero wasted energy",
        "Zero emissions"
      ]
    },
    {
      title: "Open Monetary Protocol",
      icon: Bitcoin,
      description: "Bitcoin mining is an open protocol — like the internet, anyone can participate. Miners contribute energy to process Bitcoin transactions and earn rewards proportionally. The more heat your building needs, the more your miner runs, the more you earn.",
      image: "bitcoin_miners.png",
      details: [
        "Anyone can participate - like anyone can use the internet",
        "Earnings are proportional to the work you contribute ~ heat demand",
        "Automated reward payouts in a nativie digital asset",
        "All the energy used to mine is converted to heat anyways"
      ]
    },
    {
      title: "Building-Integrated Mining",
      icon: Cpu,
      description: "Building-integrated mining puts the miner where the energy is already going. In winter, your heating system earns Bitcoin every time it runs. In summer, it becomes a solar arbitrage machine — routing surplus generation through hashing instead of selling it back to the utility for pennies. One device. Two modes. No extra operating cost.",
      image: "bitcoin_home_heat.png",
      details: [
        "Your heating season is your primary mining season",
        "In summer, excess solar routes through the miner instead of the grid",
        "Solar Home case study: 3.3× more value per kWh at $0.01/kWh net metering — your advantage scales with your rate",
        "One device, two outputs — heat and Bitcoin — at no extra cost"
      ]
    }
  ]

  const applications = [
    {
      id: 'zone-heaters',
      title: 'Smart Zone Heaters',
      subtitle: 'The non-invasive entry point',
      description: 'Lower-wattage miners (150W–850W) replace plug-in space heaters room by room. Each pairs with a wireless temperature sensor and a Home Assistant virtual thermostat — on when the room is cold, off when it hits setpoint. No trades required. No ductwork. No plumbing. You can start one room and scale.',
      tradeoff: 'Whole-home coverage requires multiple units. Works best as a distributed system staged with the existing furnace as backup.',
      image: 'https://images.pexels.com/photos/7745932/pexels-photo-7745932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'No licensed trades — 120V / 15A service sufficient',
        'Start one room, scale to whole building',
        'Stage 1 heat with existing system as backup',
        'Deferred a $10,000+ furnace replacement — indefinitely'
      ]
    },
    {
      id: 'forced-air',
      title: 'In-Duct Forced Air',
      subtitle: 'Working with your existing ductwork',
      description: 'A miner installs inline with the existing return duct, preheating air before it reaches the air handler. When the thermostat calls for heat, the miner fires first. If it can\'t satisfy the setpoint within the staging delay, the furnace kicks in as backup. If your building has ductwork, you already have an integration point.',
      tradeoff: 'Requires HVAC trades for the duct penetration. Miners run longer continuous cycles than a furnace — factor that into maintenance planning.',
      image: 'https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Miner is stage 1 — furnace stays as stage 2 backup',
        'Hides in mechanical room, existing ductwork distributes heat',
        'Thermostat-compatible — no changes to controls',
        'Colorado install: gas fired just 4.4 hrs across a 43-day season'
      ]
    },
    {
      id: 'hydronic-radiant',
      title: 'Hydronic & Radiant',
      subtitle: 'The high-performance configuration',
      description: 'The miner plumbs into the hydronic return line upstream of the existing boiler, preheating return water before it reaches the boiler. The boiler sees warm water and stays off. When the building needs more heat than the miner can supply, the boiler fires to top up. If the miner fails entirely, the boiler operates normally — redundancy is built into the plumbing.',
      tradeoff: 'Requires a licensed plumber. Higher upfront complexity, but delivers the most comfortable heat (radiant floor) with a dry cooler enabling year-round mining.',
      image: 'https://cdn11.bigcommerce.com/s-8s3kdqoux2/product_images/uploaded_images/expert-thumb-pros-and-cons-of-in-floor-radiant-heating-.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Miner on return line — boiler sees warm water and stays off',
        'Dry cooler enables year-round mining outside heating season',
        'Radiant floor comfort — zero tradeoff vs. conventional boiler',
        'All-electric install: 45% reduction in effective heating cost'
      ]
    },
    {
      id: 'water-pool-spa',
      title: 'Water, Pool & Spa',
      subtitle: 'Year-round high duty cycle',
      description: 'Heat transfers from the miner to a water volume via heat exchanger — a domestic hot water tank, hot tub, or pool. Because you want hot water year-round regardless of season, the miner runs at a high duty cycle every month of the year. Someone is heating your hot tub. It might as well be Bitcoin.',
      tradeoff: 'Pools require a larger miner to move the thermal mass meaningfully. Hot tubs and domestic hot water tanks are the strongest fit — smaller volume, faster response.',
      image: 'https://images.pexels.com/photos/6667425/pexels-photo-6667425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Heat exchanger to hot tub, pool, or domestic hot water tank',
        'Year-round operation — highest annual mining duty cycle',
        'Anyone who pays propane to heat a hot tub grasps this immediately',
        'Bitcoin-heated hot tub running at Exergy\'s Denver space since 2026'
      ]
    },
    {
      id: 'excess-solar',
      title: 'Solar & Excess Energy',
      subtitle: 'The miner as dispatchable load',
      description: 'A control layer that stacks on top of any integration type above. When the building\'s circuit receives more solar than it consumes, Home Assistant ramps the miner up to absorb the surplus before it exports at poor rates. When generation drops, the miner throttles back. In summer, your miner stops being a heater and starts being a solar arbitrage machine.',
      tradeoff: 'Requires a solar system with monitoring Home Assistant can read. A dry cooler or garage placement handles heat dump during non-heating months.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Miner ramps up automatically on surplus solar generation',
        'Solar Home case study: 3.3× more value per kWh at $0.01/kWh net metering',
        'Real-time switching: mine vs. export based on hashprice vs. grid rate',
        'Works on top of any other integration type'
      ]
    }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentApplicationIndex((prevIndex) => (prevIndex + 1) % applications.length)
    }, 7500)

    return () => clearInterval(timer)
  }, [])

  const nextApplication = () => {
    setCurrentApplicationIndex((prevIndex) => (prevIndex + 1) % applications.length)
  }

  const prevApplication = () => {
    setCurrentApplicationIndex((prevIndex) => (prevIndex - 1 + applications.length) % applications.length)
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>EXERGY | Learn Building-Integrated Mining</title>
        <meta name="description" content="How Bitcoin miners displace heating costs in winter and monetize excess solar in summer. Guides, case studies, and resources from Exergy." />
        <link rel="canonical" href="https://exergyheat.com/learn" />
        <meta property="og:title" content="Learn Building-Integrated Mining | Exergy" />
        <meta property="og:description" content="How Bitcoin miners displace heating costs in winter and monetize excess solar in summer. Guides, case studies, and resources from Exergy." />
        <meta property="og:url" content="https://exergyheat.com/learn" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Learn Building-Integrated Mining | Exergy" />
        <meta name="twitter:description" content="How Bitcoin miners displace heating costs in winter and monetize excess solar in summer. Guides and resources from Exergy." />
        <meta name="keywords" content="building-integrated mining, hashrate heating education, bitcoin mining heat technology, solar monetization bitcoin, heating technology guides" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn The Technology
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Understand building-integrated mining — the technology, the economics, and the integration options.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
          Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            resource.link.startsWith('http') ? (
              <a
                key={index}
                href={resource.link}
                {...(!resource.sameTab && { target: "_blank", rel: "noopener noreferrer" })}
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={resource.link}
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Core Concepts */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
            The Basics
          </h2>
          <div className="space-y-32">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <motion.div 
                  className="w-full md:w-1/2 flex justify-center"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="w-full max-w-lg">
                    <img
                      src={concept.image}
                      alt={`${concept.title} - ${concept.description}`}
                      className="rounded-lg shadow-2xl w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>
                <div className="w-full md:w-1/2 space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  >
                    <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <concept.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mt-4">
                      {concept.title}
                    </h3>
                    <p className="text-lg text-surface-600 dark:text-surface-400 mt-4">
                      {concept.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {concept.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                          className="flex items-center text-surface-600 dark:text-surface-400"
                        >
                          <div className="h-2 w-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Example Applications Carousel */}
      <div className="bg-surface-50 dark:bg-surface-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Five Ways to Integrate a Miner</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              Every building already has a heat distribution system. The miner connects to it.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentApplicationIndex * 100}%)` }}
              >
                {applications.map((application) => (
                  <div key={application.id} className="w-full flex-shrink-0">
                    <div className="mx-4">
                      <div className="bg-white dark:bg-surface-800 rounded-lg overflow-hidden shadow-xl">
                        {/* Image header with title/subtitle overlay */}
                        <div className="relative h-56">
                          <img
                            src={application.image}
                            alt={application.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-primary-500 opacity-40" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-1">{application.subtitle}</p>
                            <h3 className="text-2xl font-bold">{application.title}</h3>
                          </div>
                        </div>
                        {/* Content body */}
                        <div className="p-6">
                          <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-4">{application.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {application.features.map((feature, index) => (
                              <div key={index} className="flex items-start text-sm text-surface-700 dark:text-surface-300">
                                <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-surface-200 dark:border-surface-600 pt-3">
                            <p className="text-xs text-surface-500 dark:text-surface-400 italic"><span className="font-semibold not-italic text-surface-600 dark:text-surface-300">Tradeoff: </span>{application.tradeoff}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevApplication}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" />
            </button>
            <button
              onClick={nextApplication}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            >
              <ArrowRight className="h-6 w-6 text-surface-900 dark:text-surface-100" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentApplicationIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentApplicationIndex
                      ? 'bg-primary-600'
                      : 'bg-surface-300 dark:bg-surface-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* See it in Action Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            See it in Action
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore real-world implementations of building-integrated mining — heating loads displaced, solar monetized, Bitcoin earned.
          </p>
          
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
          >
            See Case Studies
            <Eye className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Learn