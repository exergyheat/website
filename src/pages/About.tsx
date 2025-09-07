import React, { useState, useEffect } from 'react'
import { Book, Users, Award, Cpu, Flame, Bitcoin, ArrowRight, Target, Lightbulb, FileText, BarChart as ChartBar, Wrench, CheckCircle2, Mail, X, Zap, Network, Package, Monitor, BookOpen, Megaphone, Hammer, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  const missionPoints = [
    {
      icon: Zap,
      title: "A New Standard For Electric Heat",
      description: "We envision a future where heaters double as revenue generators, keeping you warm while earning money with zero waste."
    },
    {
      icon: Bitcoin,
      title: "Driving Bitcoin Adoption",
      description: "We're advancing bitcoin adoption with heating solutions that reward homes and businesses for supporting the network."
    },
    {
      icon: Network,
      title: "Maximum Miner Decentralizaton",
      description: "We see a world where bitcoin mining is decentralized across millions of homes and businesses, with heating systems distributing hashrate and mining-pool choice worldwide."
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
      role: 'CEO',
      image: '/IMG_5108.JPG',
      description: 'Author of "Bitcoin Mining Heat Reuse" and instigator of the Heatpunk movement.'
    },
    {
      name: 'Dylan',
      role: 'COO & CFO',
      image: '/DylanS_headshot.jpeg',
      description: 'Operations and bitcoin financial strategy expert with an engineering license.'
    },
    {
      name: 'Mike',
      role: 'CRO',
      image: '/MikeC_headshot.png',
      description: 'Revenue and growth specialist. Bitcoin mining fanatic.'
    }
  ]

  const processSteps = [
    {
      id: 'audit',
      title: 'Heat Audit Analysis',
      subtitle: 'What we recommend, how much you can save, how much it will cost',
      description: 'The Heat Audit translates your heating needs into bitcoin potential. Want to know if hashrate heating is right for you? Order a Heat Audit to learn sizing, savings, upfront costs and what we recommend. ',
      icon: FileText,
    },
    {
      id: 'installation-commissioning',
      title: 'Procurement, Installation & Commissioning',
      subtitle: 'Get all the parts, organize installation, bring the system online',
      description: 'From selecting and organizing parts, to scheduling professional installation or hand holding you or a tradesmen throughout the process, we\'ll get your hashrate heating system up and running - start to finish.',
      icon: Wrench,
    },
    {
      id: 'monitoring',
      title: 'Heartbeat Remote Monitoring',
      subtitle: 'Show us your heater\'s pulse - We\'ll watch it for you',
      description: 'Because hashrate heaters are connected to the internet, we can monitor their performance remotely. Opting in to remote monitoring ensures Exergy is keeping tabs on your heater. We\'ll tell you if it\'s time for maintenance or an upgrade.',
      icon: Monitor,
    }
  ]

  const roadmap = [
    {
      quarter: 'Q2 2025',
      title: 'Proof of Concept Phase',
      events: [
        'Company "soft" launch',
        'Heat Audit & services development',
        'Proof of concept sites and hardware testing'
      ]
    },
    {
      quarter: 'Q3 2025',
      title: 'Hand Holding Phase',
      events: [
        'Sizing and install handholding',
        'Monitoring software development',
        'Early projects data collection'
      ]
    },
    {
      quarter: 'Q4 2025',
      title: 'Automation Phase',
      events: [
        'Monitoring software refinement',
        'New hardware partners and offerings',
        'Build heating company partner network for sizing & install'
      ]
    },
    {
      quarter: 'Q1 2026',
      title: 'Growth Phase',
      events: [
        'Pre-seed investment',
        'New product development',
        'Market expansion'
      ]
    }
  ]

  // HubSpot form loading effect
  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="//js-na2.hsforms.net/forms/embed/v2.js"]')
    
    if (!existingScript) {
      // Create and load the HubSpot script
      const script = document.createElement('script')
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.src = '//js-na2.hsforms.net/forms/embed/v2.js'
      document.head.appendChild(script)

      // Initialize the form once the script loads
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "243159145",
            formId: "59b79a45-8fe7-43f2-8b1c-75961746a63e",
            region: "na2",
            target: "#hubspot-form-container"
          })
        }
      }
    } else if (window.hbspt) {
      // If script already exists and hbspt is available, just create the form
      window.hbspt.forms.create({
        portalId: "243159145",
        formId: "59b79a45-8fe7-43f2-8b1c-75961746a63e",
        region: "na2",
        target: "#hubspot-form-container"
      })
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We're About
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Revolutionize heat, decentralize mining, earn sats
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
                Our mission is to decentralize mining by trojan-horsing the heating industry with electric devices powered by hashrate. Heaters powered by bitcoin mining are insensitive to network metrics. And that's a good thing.
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
              Our CEO wrote the first comprehensive book on hashrate heating - Examaning why this technology matters, who can benefit, how to implement it, and how much you can save.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Megaphone className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Community Builders</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Our Founders host the annual Heatpunk Summit - A first of its kind conference dedicated entierly to hashrate heating, covering technical developments to tradesmen education. 
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
                    href="https://braiins.com/books/bitcoin-mining-heat-reuse"
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
            <img
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
                The annual Heatpunk Summit is a conference dedicated to hashrate heating, started by our founder, Tyler Stevens.
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
              <img
                src="/HRHP_logo_nobackground.png"
                alt="Conference and Summit"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] object-contain object-center rounded-lg shadow-2xl"
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
              <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Our Process</h2>
              <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                We've developed a multi-step approach to get your hashrate heating system online.
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
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">{step.title}</h3>
                        <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mt-1 mb-2">{step.subtitle}</h4>
                        <p className="mt-2 text-surface-600 dark:text-surface-400">{step.description}</p>
                      </div>
                      <motion.button
                        onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                        className="ml-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedStep === step.id ? 'Close Preview' : 'Example'}
                      </motion.button>
                    </div>

                    {expandedStep === step.id && (
                      <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-surface-900 opacity-75"></div>
                          </div>

                          <div className="inline-block align-bottom bg-surface-50 dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                            <div className="bg-surface-50 dark:bg-surface-900 px-4 pt-5 pb-4 sm:p-6">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                                  {step.preview.title}
                                </h3>
                                <button
                                  onClick={() => setExpandedStep(null)}
                                  className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200"
                                >
                                  <X className="h-6 w-6" />
                                </button>
                              </div>
                              {step.preview.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-6">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="flex justify-center mb-6">
                  <img
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

      {/* Roadmap Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">Our Roadmap</h2>
          <div className="relative">
            <div className="absolute left-11 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"></div>
            <div className="space-y-12">
              {roadmap.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index === 0 || index === 2 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                      <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">{milestone.quarter}</h3>
                      <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">{milestone.title}</h4>
                      <ul className="space-y-2">
                        {milestone.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-surface-600 dark:text-surface-400">{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            Be part of the revolution in heating & mining. Stay informed about our latest developments, products, and opportunities.
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