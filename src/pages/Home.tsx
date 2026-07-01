import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Wrench, Cpu, Bitcoin, Sun, DollarSign, Zap, Calculator, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCyclingTypewriter } from '../hooks/useCyclingTypewriter'
import ProjectCarousel from '../components/ProjectCarousel'
import MediaHighlights from '../components/MediaHighlights'
import { motion } from 'framer-motion'

const HERO_PHRASES = [
  "You pay for heat every month",
  "You export solar for pennies every month",
]

const Home = () => {
  const { displayText: headlineText, initialized: isTypewriterComplete } = useCyclingTypewriter(HERO_PHRASES)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Exergy | Building-Integrated Bitcoin Mining</title>
        <meta name="description" content="Building-integrated Bitcoin miners that displace heating costs and earn Bitcoin from excess solar. Real installs. Real data. Free calculators." />
        <meta name="keywords" content="building integrated mining, hashrate heating, bitcoin mining heat reuse, solar bitcoin mining, excess solar monetization, bitcoin heating, energy efficient heating, bitcoin heaters, hashrate powered heat, bitcoin mining heat, mine for heat, mining for heat, bitcoin mining at home, solar arbitrage bitcoin" />
        <link rel="canonical" href="https://exergyheat.com/" />
        <meta property="og:title" content="Exergy | Building-Integrated Bitcoin Mining" />
        <meta property="og:description" content="Building-integrated Bitcoin miners that displace heating costs and earn Bitcoin from excess solar. Real installs. Real data." />
        <meta property="og:url" content="https://exergyheat.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Exergy | Building-Integrated Bitcoin Mining" />
        <meta name="twitter:description" content="Building-integrated Bitcoin miners that displace heating costs and earn Bitcoin from excess solar. Real installs. Real data." />
      </Helmet>
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]" 
        style={{ 
          backgroundImage: "url('/StockBackgroundHome_Tinted.png')",
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              {headlineText}
              <span className="animate-pulse">|</span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-2xl font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTypewriterComplete ? 1 : 0,
                y: isTypewriterComplete ? 0 : 20
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: isTypewriterComplete ? 0.5 : 0
              }}
            >
              Your building is already spending that energy. Make it earn Bitcoin too.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isTypewriterComplete ? 1 : 0,
                y: isTypewriterComplete ? 0 : 20
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                delay: isTypewriterComplete ? 1 : 0
              }}
            >
              <Link
                to="/book-call"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-subheading rounded-md text-white hover:bg-white hover:text-primary-500 transition-colors"
              >
                Book an Intro Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How to Work With Us Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
              How to Work With Us
            </h2>
            <p className="text-lg font-body text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
              A building-integrated mining system does three things: displaces heating costs every winter, routes excess solar through hashing instead of the grid every summer, and exercises demand flexibility year-round — running on cheap off-peak electricity whenever the TOU rate and Bitcoin network economics make it the right call. Your system decides in real time. Pick the path that fits where you are.
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Self-Serve Card */}
            <a
              href="https://calc.exergyheat.com"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                  <Calculator className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100 mb-2 text-center">
                Self-Serve
              </h3>
              <p className="text-sm font-body text-surface-600 dark:text-surface-400 text-center">
                Free calculators, open-source smart home integrations, docs, and <a href="https://meet.jit.si/ExergyHomeAssistant" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-300" onClick={e => e.stopPropagation()}>weekly office hours (Wed 10am MT)</a>. Figure it out yourself — we've made that possible.
              </p>
            </a>

            {/* Guided Card */}
            <Link
              to="/services"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                  <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100 mb-2 text-center">
                Guided
              </h3>
              <p className="text-sm font-body text-surface-600 dark:text-surface-400 text-center">
                We audit your building, design the integration plan, source hardware, and guide your install remotely. Available anywhere in the US.
              </p>
            </Link>

            {/* Done-For-You Card */}
            <Link
              to="/services"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                  <Wrench className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100 mb-2 text-center">
                Done-For-You
              </h3>
              <p className="text-sm font-body text-surface-600 dark:text-surface-400 text-center">
                Full audit, hardware, installation, and commissioning. We handle everything. Local to Denver, CO (~100mi radius).
              </p>
            </Link>
          </motion.div>

          {/* Products nudge */}
          <div className="mt-10 pt-8 border-t border-surface-200 dark:border-surface-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-surface-500 dark:text-surface-400">
              Already know what hardware you need?
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-2.5 border border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-sm font-subheading"
            >
              Browse Recommended Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Media Highlights Section */}
      <MediaHighlights />

      {/* Too Good to Be True Section */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">How Building-Integrated Mining Works</h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              One device. Three value streams. No waste.
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
                    One watt in. One watt of heat out. Always.
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Every watt a Bitcoin miner consumes becomes heat — 100% of it. Same conversion as your furnace, same thermodynamics as your laptop. The difference: a miner earns Bitcoin for every joule it runs. Every conventional heater does one job per watt. A miner does two. The second one doesn't cost extra.
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
                    Your heating load is your mining season
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    A miner sized to your building's average heat load runs at high duty cycle all winter, displacing your existing fuel. Every hour the furnace stays off is an hour of Bitcoin accumulation on electricity you were already spending. In our installs, the backup furnace rarely fires.
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
                    Your solar is worth more than your utility pays you
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    When your panels overproduce, that surplus exports to the grid at $0.01–$0.08/kWh. Route it through a miner instead: same watts, Bitcoin at hashprice. In our Solar Home case study — at their $0.01/kWh net metering rate — the same kilowatt-hour earned 3.3× more as Bitcoin than as a net metering credit. Your actual advantage depends on your local rate. In summer, your miner stops being a heater and starts being a solar arbitrage machine.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-subheading text-surface-900 dark:text-surface-100">
                    When the math is right, it mines for profit
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    When your off-peak electricity rate and the Bitcoin network's hashprice align, the system runs for pure profit — no heating load required. A conventional thermostat has one job. Your mining system knows your electricity rate, the Bitcoin price, your solar output, and the network hashprice — and makes the right call in real time.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="homeheat_withbill.png"
                alt="Hashrate heating system showing home heating with Bitcoin mining integration and utility bill savings"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-800 p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-heading text-primary-500 dark:text-secondary-500">100%</p>
                <p className="font-body text-surface-600 dark:text-surface-400">Heating Efficiency</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/learn"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
              >
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://calc.exergyheat.com"
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 dark:text-secondary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Estimate Your Earnings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* See it in Action Section (Project Carousel) */}
      <div className="bg-white dark:bg-surface-800">
        <ProjectCarousel />
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">Why Choose Exergy</h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We're specialists in an emerging industry - in fact, we're defining it
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Cpu className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Control-First Architecture</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Every Exergy system runs on Home Assistant — open-source, local, no cloud dependency. Your data stays on your network. Your system works if the internet goes down.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Wrench className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Building-Integrated, Not a Gadget</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                We integrate miners into your actual HVAC system — ductwork, radiant loops, hydronic circuits, solar arrays. Not a space heater you plug into a wall.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Bitcoin className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Real Installs, Real Data</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Our case studies come from buildings we've actually built — with measured duty cycles, real Bitcoin earnings, and actual utility bill deltas. No theoretical projections.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
            >
              Learn More About Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* The Common FAQ Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">Have Questions? We Have Answers</h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Understand the basics of building-integrated mining
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1: Does a Bitcoin miner heat as well as a furnace? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Zap className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Does a Bitcoin miner actually heat my home?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Yes. In our Colorado Mountain Home, a single 4,000W miner handled 98.6% of the home's heat demand over a full heating season. The gas furnace ran for 4.4 hours total — across 43 days. The miner was the furnace.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Will my electric bill go up? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <DollarSign className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Will my electric bill go up?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Yes — and that's the point. Electric goes up, gas drops to near-zero, and you accumulate Bitcoin on every joule. For propane and heating oil customers, the net result is often strongly positive before counting the Bitcoin. Our Exergy Audit shows you exactly where you land.
                </p>
              </div>
            </motion.div>

            {/* Card 3: How do I know if my building is a good fit? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Calculator className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Is my building a good fit?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Strong fits: propane, heating oil, or expensive electric resistance heat. Solar with low net-metering rates. Pools, hot tubs, radiant floors. Weaker fits: cheap natural gas, heat pumps in mild climates. Run our free calculator — it tells you in two minutes.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
            >
              View All Frequently Asked Questions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section with Custom Gradient */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-[#4970A5] to-[#718EBC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_75%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(47,59,105,0.3),transparent_50%)] animate-pulse [animation-delay:1s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse [animation-delay:2s]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading text-white mb-4">
            Ready to see if your building qualifies?
          </h2>
          <p className="text-xl font-body text-white/90 mb-8">
            Run the numbers yourself with our free calculator, or talk to us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calc.exergyheat.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-subheading rounded-md text-primary-700 bg-white hover:bg-white/90 transition-colors"
            >
              Try the Calculator
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-subheading rounded-md text-white hover:bg-white hover:text-primary-500 transition-colors"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home