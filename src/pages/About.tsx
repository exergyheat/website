import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Book, Bitcoin, ArrowRight, Target, FileText, Wrench, Mail, Zap, Network, BookOpen, Megaphone, Hammer, Calendar } from 'lucide-react'
import ReviewTodo from '../components/ReviewTodo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useHubSpotPreload } from '../hooks/useHubSpotPreload'

const About = () => {
  useHubSpotPreload()
  const missionPoints = [
    {
      icon: Zap,
      title: "Building-Integrated Mining",
      description: "Bitcoin miners become part of the building's energy system. Heat recovery and solar monetization are separate value streams. Integration is hydronic or forced air. Commercial buildings are the lead work. Homes are an application-only pilot."
    },
    {
      icon: Bitcoin,
      title: "Open-Source First",
      description: "The integrations are open source. Pilot systems are tied together with an open-source control hub we install — it is not a product. The mining stack we align with is the 256 Foundation's: open hardware, firmware, and pool software. Tyler Stevens, our CEO, is president of that board."
    },
    {
      icon: Network,
      title: "The Useful Miner Principle",
      description: "A miner doesn't need to be profitable to be worth running. It needs to be useful: heats the building cheaper, captures excess solar, or stacks sats on the margin. That's a much lower bar than industrial mining profitability — and it's a bar millions of buildings can clear."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Letter cascade animation variants
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const team = [
    {
      name: 'Tyler Stevens',
      role: 'Founder, CEO',
      image: '/IMG_5108.JPG',
      description: 'Author of Bitcoin Mining Heat Reuse and founder of the Heatpunk movement. Tyler leads the company and is president of the 256 Foundation board.'
    },
    {
      name: 'Dylan Seib',
      role: 'Co-Founder, Technical + Finance Lead',
      image: '/DylanS_headshot.jpeg',
      description: 'Licensed engineer and Exergy\'s technical co-founder. Dylan owns infrastructure, software architecture, and the systems that keep an install running.'
    },
    {
      name: 'Mike Clear',
      role: 'Co-Founder, Sales + Growth Lead',
      image: '/MikeC_headshot.png',
      description: 'Sales and growth lead. Mike owns the pipeline, the relationships, and which buildings are actually a fit.'
    }
  ]

  const processSteps = [
    {
      id: 'phase-0',
      title: 'Phase 0 — Feasibility Check',
      subtitle: 'Free. You can stop here.',
      description: 'Send about twelve months of utility bills. We do napkin math and say go or no-go. No obligation to continue.',
      icon: FileText,
    },
    {
      id: 'phase-1',
      title: 'Phase 1 — Exergy Audit',
      subtitle: 'Energy, heat, and bitcoin economics',
      description: 'One to three system options and an estimated budget. Heat recovery and solar monetization are separate value streams. Hydronic or forced air. Its own agreement.',
      icon: FileText,
    },
    {
      id: 'phase-2',
      title: 'Phase 2 — Engineering Coordination',
      subtitle: 'Beside the architect, MEP, and GC',
      description: 'We work with the engineers, contractors, and controls trades to finalize design and cost. Exergy is the building-integrated mining specialist in that room, not a replacement for the design team. Its own agreement.',
      icon: Wrench,
    },
    {
      id: 'phase-3',
      title: 'Phase 3 — Procurement and Commissioning',
      subtitle: 'We do not sell the hardware',
      description: 'We help specify what gets bought and then commission the system so it heats and mines as designed. Its own agreement.',
      icon: Wrench,
    },
    {
      id: 'phase-4',
      title: 'Phase 4 — Monitoring and Warranty',
      subtitle: 'Optional',
      description: 'Ongoing watch and a warranty path, only if you want that agreement. Skip it and the building still runs. Residential pilots are a different door: application only, monitored with Exergy Relay as part of how the pilot is run.',
      icon: Zap,
    }
  ]

  // HubSpot form loading effect - consolidated into single hook
  useEffect(() => {
    let retryInterval: ReturnType<typeof setInterval>
    let formCreated = false

    const tryCreateForm = () => {
      if (formCreated) return true
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          portalId: "243159145",
          formId: "59b79a45-8fe7-43f2-8b1c-75961746a63e",
          region: "na2",
          target: "#hubspot-form-container"
        })
        formCreated = true
        return true
      }
      return false
    }

    // Try immediately, then retry if needed
    if (!tryCreateForm()) {
      let retries = 0
      const maxRetries = 50 // 5 seconds total

      retryInterval = setInterval(() => {
        if (tryCreateForm() || retries >= maxRetries) {
          clearInterval(retryInterval)
        }
        retries++
      }, 100)
    }

    return () => {
      if (retryInterval) clearInterval(retryInterval)
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>About | Exergy</title>
        <meta name="description" content="Building-integrated Bitcoin mining systems for homes and businesses. Learn about our team, our mission, and the technology behind it." />
        <meta name="keywords" content="EXERGY about, building integrated mining company, bitcoin mining heat team, Denver mining company, cryptocurrency heating experts" />
        <link rel="canonical" href="https://exergyheat.com/about" />
        <meta property="og:title" content="About Exergy — Building-Integrated Mining, Denver CO" />
        <meta property="og:description" content="Building-integrated Bitcoin mining systems for homes and businesses. Learn about our team, our mission, and the technology behind it." />
        <meta property="og:url" content="https://exergyheat.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="About Exergy — Building-Integrated Mining, Denver CO" />
        <meta name="twitter:description" content="Building-integrated Bitcoin mining systems for homes and businesses. Learn about our team, our mission, and the technology behind it." />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We're About
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Commercial consulting for building-integrated bitcoin mining. Open source first.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                  <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100">Our Mission</h2>
              </motion.div>
              <motion.p
                className="text-lg text-surface-600 dark:text-surface-400 mb-8"
                variants={itemVariants}
              >
                We find the useful work hiding in your energy and in your operations, and we eliminate the waste. For a building, that means bitcoin miners inside the energy system — heat you were going to buy, solar you were going to give away. For a company around that work, it means the same look at wasted motion. We do not sell hardware.
              </motion.p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                      <point.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-surface-900 dark:text-surface-100">{point.title}</h4>
                      <p className="text-surface-600 dark:text-surface-400">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Single Logo with Letter Cascade on Blue Gradient Background */}
            <motion.div
              className="relative flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="w-80 h-80 bg-gradient-to-r from-[#4970A5] to-[#718EBC] rounded-2xl flex items-center justify-center shadow-2xl">
                <motion.div
                  className="flex items-center justify-center"
                  variants={letterContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Each letter of EXERGY cascades in from left to right */}
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    E
                  </motion.span>
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    X
                  </motion.span>
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    E
                  </motion.span>
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    R
                  </motion.span>
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    G
                  </motion.span>
                  <motion.span
                    variants={letterVariants}
                    className="text-6xl font-bold text-white font-valorant"
                  >
                    Y
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Why we&apos;re called Exergy</h2>
        <div className="space-y-4 text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
          <p>
            Exergy is the thermodynamic name for the share of an energy flow that can still do useful work. The rest has not disappeared. It just cannot do work anymore.
          </p>
          <p>
            A heater can turn electricity into warmth and stop there. A solar array can hand surplus to the utility for a thin credit. A shop can spend the week retyping the same job. In each case the useful share is hiding in something you are already paying for.
          </p>
          <p>
            That is the whole company. Find that share in the energy and in the operations. Eliminate the waste.
          </p>
        </div>
      </div>

      <div className="bg-surface-900 text-surface-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4 leading-relaxed">
          <h2 className="text-3xl font-bold">The 256 Foundation</h2>
          <p className="text-surface-300">
            Exergy is open-source first, and aligned with the 256 Foundation&apos;s open mining stack: Ember One, Mujina, Libre Board, and Hydrapool. The foundation is a nonprofit. It is not a division of Exergy. Tyler Stevens, our founder and CEO, is president of its board.
          </p>
          <p className="text-surface-300">
            We publish the Home Assistant integrations and, on pilot systems, install an open-source control hub to tie the miner and the building together. The hub is not for sale. The longer explanation of why closed mining hardware is hard to put in a building is on Learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/learn/why-mining-hardware-is-closed"
              className="inline-flex items-center px-5 py-3 bg-white text-primary-700 rounded-lg font-subheading hover:bg-surface-100"
            >
              Why the hardware is closed
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://256foundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 border border-white/40 rounded-lg font-subheading hover:bg-white/10"
            >
              256foundation.org
            </a>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <BookOpen className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Industry Leaders</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Our CEO wrote the book on hashrate heating — why the technology matters, who it is for, and how a building actually integrates a bitcoin miner.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Megaphone className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Community Builders</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              The founders host the annual Heatpunk Summit, a conference dedicated entirely to hashrate heating, from the engineering to the trades.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Hammer className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Engineers at Heart</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Our experience encompasses thermal engineering, structural engineering, licensed professional certifications and skilled startup building with a bitcoiner focus.
            </p>
          </div>
        </div>
      </div>

      {/* Book & Leadership Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-surface-900 rounded-lg p-8">
              <div className="max-w-sm">
                <Book className="h-12 w-12 text-primary-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Bitcoin Mining Heat Reuse</h3>
                <p className="text-surface-300 mb-6">
                  The definitive guide to hashrate heating technology, written by our founder Tyler Stevens.
                </p>
                <div className="mb-24 sm:mb-0">
                  <a
                    href="https://www.amazon.com/Bitcoin-Mining-Reuse-Tyler-Stevens/dp/B0GYJ8QDK6/ref=sr_1_1?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                  >
                    Get the Book
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 sm:-bottom-6 right-4 sm:-right-6 bg-white dark:bg-surface-700 p-6 rounded-lg shadow-xl">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">#1</p>
              <p className="text-surface-600 dark:text-surface-400">Industry Resource</p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img loading="lazy" decoding="async"
              src="/BookCoverImage.png"
              alt="Bitcoin Mining Heat Reuse Book Cover"
              className="w-80 h-auto rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Heatpunk Summit Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative lg:order-2">
            <div className="bg-surface-900 rounded-lg p-6 lg:p-8 w-full max-w-sm mx-auto lg:mx-0">
              <Calendar className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Heatpunk Summit</h3>
              <p className="text-surface-300 mb-6">
                The annual Heatpunk Summit is a conference dedicated to building-integrated mining and hashrate heating, started by our founder, Tyler Stevens.
              </p>
              <a
                href="https://denver.space/heatpunk_summit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
              >
                Visit Conference Site
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative lg:order-1">
            <div className="relative w-full">
              <img loading="lazy" decoding="async"
                src="/HRHP_logo_nobackground.png"
                alt="Conference and Summit"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] object-contain object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">The phased roadmap</h2>
              <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                Commercial work moves in phases. Each phase is its own agreement. A client can stop after any of them. New construction starts in design. A retrofit starts from the plant that is already there.
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {index !== processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-20 h-full w-0.5 bg-primary-200 dark:bg-primary-800"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )}
                <div className="relative flex items-start">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                  >
                    <step.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  <motion.div
                    className="ml-6 flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">{step.title}</h3>
                      <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mt-1 mb-2">{step.subtitle}</h4>
                      <p className="mt-2 text-surface-600 dark:text-surface-400">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact?intent=phase-0"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Send us your utility bills
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-3 text-sm text-surface-500 dark:text-surface-400">
              That starts Phase 0. The full write-up is on the commercial service page.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-4">Our Team</h2>
        <ReviewTodo>
          Confirm titles before publish: Tyler Stevens (Founder, CEO), Dylan Seib (Co-Founder, Technical + Finance Lead), Mike Clear (Co-Founder, Sales + Growth Lead). Last names for Dylan and Mike are from this brief — confirm spelling.
        </ReviewTodo>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-6">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="flex justify-center mb-6">
                  <img loading="lazy" decoding="async"
                    src={member.image}
                    alt={member.name}
                    className="w-44 h-44 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 text-center">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 text-center mb-4">{member.role}</p>
              <p className="text-surface-600 dark:text-surface-400 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join the Movement Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stay informed about the work, the open tools, and the pilot. We do not send a product catalog, because we do not sell hardware.
          </p>

          {/* HubSpot Form Container */}
          <div id="hubspot-form-container" className="max-w-md mx-auto">
            {/* The HubSpot form will be injected here */}
          </div>

          <p className="mt-4 text-sm text-white/90">
            We respect your privacy. No spam, just important updates.
          </p>
        </div>
      </div>
    </div>
  )
}

// Add HubSpot types to window object
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string
          formId: string
          region: string
          target?: string
        }) => void
      }
    }
  }
}

export default About
