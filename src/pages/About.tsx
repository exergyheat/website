import React, { useState } from 'react'
import { Book, Users, Award, Cpu, Flame, Bitcoin, ArrowRight, Target, Lightbulb, FileText, BarChart as ChartBar, Wrench, CheckCircle2, Mail, X, Zap, Network, Package, Monitor, BookOpen, Megaphone, Hammer, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

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
      description: "We see a world where bitcoin mining is fully decentralized across millions of homes and businesses, with heating systems distributing hashrate and pool choice worldwide."
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
      role: 'CEO & Chief Engineer',
      image: '/TylerS_headshot.png',
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
      description: 'We start with thermo-economic modeling to understand your exact heating needs and maximize earnings. This tells us if the uprgade is a good idea, which hashrate heater is best for you, and proivde recommendations for next steps',
      icon: FileText,
      preview: {
        title: 'Sample Heat Audit Report',
        content: (
          <div className="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">Heat Audit Report Example Data</h3>
              <p className="text-surface-600 dark:text-surface-400">Outdoor Commercial Pool Resort - High Altitude Rocky Mountain Region</p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Project Specifications</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-surface-600 dark:text-surface-400">Total Volume</p>
                    <p className="font-medium text-surface-900 dark:text-surface-100">40,000 gallons</p>
                  </div>
                  <div>
                    <p className="text-surface-600 dark:text-surface-400">Design Condition Heating Load</p>
                    <p className="font-medium text-surface-900 dark:text-surface-100">40 kW (136,484 BTU/hr)</p>
                  </div>
                  <div>
                    <p className="text-surface-600 dark:text-surface-400">Design Month Avg HDD (Heating Degree Day)</p>
                    <p className="font-medium text-surface-900 dark:text-surface-100">1935 °F-day</p>
                  </div>
                  <div>
                    <p className="text-surface-600 dark:text-surface-400">Heating System Specifications</p>
                    <p className="font-medium text-surface-900 dark:text-surface-100">Hydronic Boiler</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Annual Cost Analysis</h4>
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-surface-600 dark:text-surface-400">Original Heating Billed Cost (Propane)</p>
                      <p className="font-medium text-surface-900 dark:text-surface-100">$21,000/year</p>
                    </div>
                    <div>
                      <p className="text-surface-600 dark:text-surface-400">Hashrate Heating Billed Cost (Electric Heat)</p>
                      <p className="font-medium text-surface-900 dark:text-surface-100">$22,000/year</p>
                    </div>
                    <div>
                      <p className="text-surface-600 dark:text-surface-400">Projected Bitcoin Revenue Value (Fixed Hashprice)</p>
                      <p className="font-medium text-primary-600">$17,000/year</p>
                    </div>
                    <div>
                      <p className="text-surface-600 dark:text-surface-400">Projected Bitcoin Earnings (2 Year)</p>
                      <p className="font-medium text-primary-600">0.88 BTC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Recommendations</h4>
                <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                  <li>• Install 4x Auradine AH3880 Hydro Miners</li>
                  <li>• Integrate with Hydro rack "digital boiler" that adds pumps, heat exchangers and power management</li>
                  <li>• Add smart controls for zone management and remote operation</li>
                  <li>• Monitor hashrate as a heat proxy to observe system health</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'design',
      title: 'System Design',
      description: 'Engineering, custom design and a full project quote follows the Heat Audit. Once we know how much heat you need, and which hashrate heater is best - we design a system to integrate with your setup.',
      icon: Wrench,
      preview: {
        title: 'System Design Schematic',
        content: (
          <div className="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">System Design</h3>
              <p className="text-surface-600 dark:text-surface-400">Hydronic Integration Schematic</p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="System Design"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Components</h4>
                  <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                    <li>• Heat exchangers</li>
                    <li>• Circulation pumps</li>
                    <li>• Control valves</li>
                    <li>• Temperature sensors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Specifications</h4>
                  <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                    <li>• Flow rate: 20 GPM</li>
                    <li>• Max temp: 180°F</li>
                    <li>• Pressure: 30 PSI</li>
                    <li>• Power: 5000W</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'installation',
      title: 'Procurement & Installation',
      description: 'When ready, we source the best hashrate heating and auxiliary hardware, then coordinate install with partners for smooth integration to bring your system online.',
      icon: Package,
      preview: {
        title: 'Installation Process',
        content: (
          <div className="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">Installation Timeline</h3>
              <p className="text-surface-600 dark:text-surface-400">Project Execution Plan</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { phase: 'Phase 1: Equipment Procurement', duration: '1-2 weeks' },
                  { phase: 'Phase 2: Site Preparation', duration: '1 week' },
                  { phase: 'Phase 3: Hardware Installation', duration: '2 weeks' },
                  { phase: 'Phase 4: System Integration', duration: '1 week' },
                  { phase: 'Phase 5: Testing & Commissioning', duration: '1 week' }
                ].map((phase, index) => (
                  <div key={index} className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-surface-900 dark:text-surface-100">{phase.phase}</h4>
                      <span className="text-sm text-primary-600">{phase.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Key Deliverables</h4>
                <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                  <li>• Hardware sourcing and delivery</li>
                  <li>• Professional installation</li>
                  <li>• System integration and testing</li>
                  <li>• Staff training and handover</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'monitoring',
      title: 'Remote Monitoring',
      description: 'Optional remote monitoring ensures your system is always healthy and earning what it should. Because our heaters are digital, we can sense when it is time for a tune up - before you do.',
      icon: Monitor,
      preview: {
        title: 'Monitoring Dashboard',
        content: (
          <div className="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">System Monitoring</h3>
              <p className="text-surface-600 dark:text-surface-400">Real-time Performance Dashboard</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">System Health</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Overall Status</span>
                      <span className="text-green-600">Optimal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Uptime</span>
                      <span className="text-primary-600">99.9%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Performance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Heat Output</span>
                      <span className="text-primary-600">45,000 BTU/hr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Mining Efficiency</span>
                      <span className="text-primary-600">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Monitoring Features</h4>
                <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                  <li>• 24/7 system monitoring</li>
                  <li>• Automated alerts and notifications</li>
                  <li>• Performance optimization</li>
                  <li>• Remote diagnostics and support</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
  ]

  const roadmap = [
    {
      quarter: 'Q2 2025',
      title: 'Launch & Growth',
      events: [
        'Official company launch',
        'Heat Audit & design services',
        'Office demo site install'
      ]
    },
    {
      quarter: 'Q3 2025',
      title: 'Data Collection & Optimization',
      events: [
        'Project data collection',
        'Monitoring software development',
        'Build trades partner network'
      ]
    },
    {
      quarter: 'Q4 2025',
      title: 'Innovation',
      events: [
        'New product development',
        'Monitoring software improvements',
        'Hardware product partnerships'
      ]
    },
    {
      quarter: 'Q1 2026',
      title: 'Scale',
      events: [
        'New market expansion',
        'New product categories',
        'Expand service offerings'
      ]
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We're About
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Revolutionizing heating, supporting bitcoin, saving you money
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
                Our mission is to revolutionize the heating industry with eletric devices powered by hashrate, delivering heat that pays. We're ethically and securely turning energy costs into revenue for homes and businesses.
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
              Our Founders host Undermine, the annual Heatpunk Summit - A first of its kind conference dedicated entierly to hashrate heating, covering technical developments to tradesmen education. 
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

        {/* Undermine Summit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative lg:order-2">
            <div className="bg-surface-900 rounded-lg p-6 lg:p-8 w-full max-w-sm mx-auto lg:mx-0">
              <Calendar className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Undermine</h3>
              <p className="text-surface-300 mb-6">
                The annual Heatpunk Summit is a conference dedicated to hashrate heating, hosted by our founder Tyler Stevens.
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
                src="/IMG_3841.PNG"
                alt="Conference and Summit"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] object-contain object-center rounded-lg shadow-2xl bg-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-surface-700 p-4 lg:p-6 rounded-lg shadow-xl">
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">2026</p>
                <p className="text-surface-600 dark:text-surface-400">Next Summit</p>
              </div>
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
                We've developed a comprehensive approach to implementing the right hashrate heating solutions, backed by math and industry expertise.
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
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
            Be part of the revolution in heating technology. Stay informed about our latest developments, products, and opportunities.
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Welcome to the Movement!</h3>
              <p>We'll keep you updated on important announcements and developments.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-white/90 transition-colors text-base font-subheading"
                >
                  Join Us
                </button>
              </div>
              <p className="mt-4 text-sm text-white/90">
                We respect your privacy. No spam, just important updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default About