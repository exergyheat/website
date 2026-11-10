import { Helmet } from 'react-helmet-async'
import { ArrowRight, Building2, Factory, Workflow, Home as HomeIcon, Bitcoin, Sun, Zap, Cpu, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCarousel from '../components/ProjectCarousel'
import MediaHighlights from '../components/MediaHighlights'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Building2,
    eyebrow: 'Lead practice',
    title: 'Commercial mining',
    body: 'Phased work for buildings. Start with a free read of your utility bills. Stop after any phase.',
    to: '/services/commercial',
  },
  {
    icon: Factory,
    eyebrow: 'Manufacturers',
    title: 'Market-entry advisory',
    body: 'Help a miner, heater, boiler, or water heater actually land in a building.',
    to: '/services/advisory',
  },
  {
    icon: Workflow,
    eyebrow: 'Operators',
    title: 'Operations optimization',
    body: 'Find the wasted work in an energy-adjacent business and automate it.',
    to: '/services/operations',
  },
  {
    icon: HomeIcon,
    eyebrow: 'Application only',
    title: 'Residential pilot',
    body: 'Alpha systems for owners who want to be early. Not a product, and not the headline.',
    to: '/services/residential-pilot',
  },
]

const Home = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Exergy | Building-Integrated Bitcoin Mining</title>
        <meta
          name="description"
          content="Your building wastes useful energy. Exergy puts bitcoin miners to work inside it — heat recovery and solar monetization as separate value streams. Commercial consulting leads."
        />
        <meta
          name="keywords"
          content="building integrated mining, bitcoin miners, hashrate heating, commercial bitcoin mining heat, solar monetization, exergy, open source mining"
        />
        <link rel="canonical" href="https://exergyheat.com/" />
        <meta property="og:title" content="Exergy — Your building wastes useful energy. We put it to work." />
        <meta
          property="og:description"
          content="Building-integrated bitcoin mining. Heat recovery and solar monetization are separate value streams. Commercial consulting leads. We sell no hardware."
        />
        <meta property="og:url" content="https://exergyheat.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Exergy — Your building wastes useful energy. We put it to work." />
        <meta
          name="twitter:description"
          content="Building-integrated bitcoin mining. Commercial consulting leads. Open source first. No hardware for sale."
        />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      <div
        className="relative bg-cover bg-center min-h-[600px]"
        style={{
          backgroundImage: "url('/StockBackgroundHome_Tinted.webp')",
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-16">
            <p className="text-sm font-subheading uppercase tracking-widest text-white/80 mb-4">
              Building-integrated bitcoin mining
            </p>
            <h1 className="text-4xl md:text-6xl font-heading mb-6 max-w-4xl">
              Your building wastes useful energy. We put it to work.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-body">
              Exergy is the share of energy that can still do useful work. We find that work in the heat you already pay for and the solar you give away, and we cut the waste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact?intent=phase-0"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 text-base font-subheading rounded-md hover:bg-white/90 transition-colors"
              >
                Send us your utility bills
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-subheading rounded-md text-white hover:bg-white hover:text-primary-700 transition-colors"
              >
                See the services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
              Four ways to work with us
            </h2>
            <p className="text-lg font-body text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
              Commercial consulting is the business. A bitcoin miner today is industrial equipment, so the buildings that use one well usually already have an engineer. Homes are a pilot, by application. We sell no hardware, and we do not publish prices. Every engagement is scoped per project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <service.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                    {service.eyebrow}
                  </p>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-surface-600 dark:text-surface-400">{service.body}</p>
                <span className="inline-flex items-center mt-4 text-sm font-subheading text-primary-600 dark:text-primary-400">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <MediaHighlights />

      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
              What the useful work looks like
            </h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              One bitcoin miner. Two value streams that we keep separate: heat recovery, and solar monetization. Hydronic or forced air.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100">
                    The electricity was already going to become heat
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Every watt a bitcoin miner draws becomes heat. A resistance heater does that and nothing else. A miner does that and earns bitcoin. The second output is the useful work that a plain heater throws away.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Bitcoin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100">
                    Heat recovery is its own value stream
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Size the miner to the heat the building already needs, and tie it in as hydronic heat or forced air. The plant you have stays as backup. In our pilot houses the backup barely ran. That is a heating result. It is not the same question as solar.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Sun className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100">
                    Solar monetization is a different value stream
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Surplus solar that leaves the building often earns a thin export credit. Route the same kilowatt-hours through a miner and the useful work stays with you. In the solar pilot, that path earned 3.3× the export credit. Your number depends on your rate. We do not blend this into the heating story to make either one look bigger.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src="/homeheat_withbill.png"
                alt="A building heating system with bitcoin mining integrated beside the utility bill"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-800 p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-heading text-primary-500 dark:text-secondary-500">100%</p>
                <p className="font-body text-surface-600 dark:text-surface-400">of the watt becomes heat</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/learn"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
            >
              Read the explainers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-surface-800">
        <ProjectCarousel />
      </div>

      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">Why Exergy</h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Open-source first. No hardware catalog. The work is the integration and the judgment.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Cpu className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Open tools, local control</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Home Assistant integrations anyone can install. On pilot systems, an open-source control hub ties the pieces together. We do not sell that hub.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Wrench className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">In the building, not beside it</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Hydronic or forced air, coordinated with the mechanical team you already have. The miner is part of the energy system.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Bitcoin className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Aligned with an open mining stack</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Tyler Stevens, our CEO, is president of the 256 Foundation board. The foundation funds the open hardware, firmware, and pool software this industry still lacks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
              Questions we get first
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              {
                icon: Building2,
                q: 'Is a commercial building the point?',
                a: 'Yes. That is the lead practice. Phase 0 is a free go or no-go from about twelve months of utility bills. You can stop there.',
              },
              {
                icon: Zap,
                q: 'Will the electric bill go up?',
                a: 'Often, yes. Fuel you used to burn can fall, and the miner earns bitcoin on energy the building was spending anyway. Whether that is a good trade is what the audit is for. We will not quote you a savings number on this page.',
              },
              {
                icon: HomeIcon,
                q: 'What about a house?',
                a: 'Houses are an application-only alpha. The three homes in our work section are pilot installs. If you want to be early, apply. If you want a finished product, we do not sell one.',
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
                }}
                className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <item.icon className="h-10 w-10 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  {item.q}
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
            >
              Read the FAQ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-[#4970A5] to-[#718EBC]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading text-white mb-4">Start with the bills.</h2>
          <p className="text-xl font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Phase 0 is a free feasibility check. If the building is not a fit, we will say so before anyone writes a scope.
          </p>
          <Link
            to="/contact?intent=phase-0"
            className="inline-flex items-center px-6 py-3 text-base font-subheading rounded-md text-primary-700 bg-white hover:bg-white/90 transition-colors"
          >
            Send us your utility bills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
