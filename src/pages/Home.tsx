import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Wrench, Cpu, Bitcoin, Flame, DollarSign, Zap, Calculator } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'
import ProjectCarousel from '../components/ProjectCarousel'
import MediaHighlights from '../components/MediaHighlights'
import { motion } from 'framer-motion'

const Home = () => {
  const headlineText = useTypewriter("You pay for heat every month", 75)
  const isTypewriterComplete = headlineText === "You pay for heat every month"

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
        <title>EXERGY - Heat That Pays | Hashrate Heating Solutions</title>
        <meta name="description" content="Upgrade to heat that pays you instead. EXERGY's hashrate heating systems generate warmth and Bitcoin rewards simultaneously at no extra cost. Expert design and installation services." />
        <meta name="keywords" content="hashrate heating, bitcoin mining heat, heat that pays, cryptocurrency heating, energy efficient heating, bitcoin heaters" />
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
              {!isTypewriterComplete && <span className="animate-pulse">|</span>}
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
              Upgrade to heat that pays you instead
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

      {/* Hashrate Heating Summary Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Title in Blue Box */}
                <div className="inline-block bg-gradient-to-r from-[#4970A5] to-[#718EBC] px-8 py-4 rounded-2xl mb-8 shadow-lg">
                  <h2 className="text-4xl md:text-5xl font-heading text-white">
                    Hashrate Heating Experts
                  </h2>
                </div>
                
                <p className="text-xl md:text-2xl font-body text-surface-900 dark:text-surface-100 mb-6 max-w-4xl">
                  Smart, Electric Heat That Pays
                </p>
                <p className="text-lg md:text-xl font-body text-surface-600 dark:text-surface-400 max-w-5xl leading-relaxed">
                  Exergy offers heating products and services that deliver warmth while offsetting utility costs with bitcoin earnings.
                </p>
              </motion.div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-4 min-w-fit">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
              >
                Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
              >
                Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Highlights Section */}
      <MediaHighlights />

      {/* Too Good to Be True Section */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">Too Good to Be True?</h2>
            <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Nope - Here's how it works
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
                    Electronic Devices Convert Energy into Heat
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    All electronics - from a television to a cellphone - convert electricity into heat from resistance in the circuit boards. It's non-negotiable. Thank the 1st Law of Thermodynamics. 
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
                    Bitcoin Miners Pay You for Contributing
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Miners perform hashing operations to settle bitcoin transactions and issue coins. Rewards are automated & proportional to energy used. All of that energy is turned into heat.
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
                    Heaters Powered By Hashrate = Warmth + Revenue
                  </h3>
                  <p className="mt-2 text-base font-body text-surface-500 dark:text-surface-400">
                    Hashrate heaters deliver two things at once: Heat generated from consuming electricity, and bitcoin rewards for how that electricity was turned into heat. No extra cost or waste.
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
                Learn Hashrate Heating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/calculators"
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 dark:text-secondary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Estimate Your Earnings
              </Link>
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
                <Wrench className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Best-in-Class Hardware</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Exergy only offers the best hashrate heating systems. Tested and vetted to deliver the warmth you need, while paying to do so.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Cpu className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Custom Integration</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Exergy ensures proper sizing, control and installation to ensure seemless integration, whatever your heating demands.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Bitcoin className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
              </div>
              <h3 className="mt-4 text-xl font-subheading text-surface-900 dark:text-surface-100">Maximum Revenue</h3>
              <p className="mt-2 font-body text-surface-600 dark:text-surface-400">
                Exergy's Heat Audit optimizes bitcoin heating power to your demand for maximum earnings and the best recommendation.
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
              Understand the basics of heat that pays
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1: Why Bitcoin? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Bitcoin className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Why Bitcoin?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Bitcoin is a digital commodity. A neutral protocol, open for anyone to use, with no controlling authority.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Does it Heat Well? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Flame className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Does it Heat The Same?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Yes. Hashrate heaters can meet all comfort heating needs - while paying you whenever they're used.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Can I Control It? */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Cpu className="h-12 w-12 text-primary-500 dark:text-secondary-500" />
                  </div>
                </div>
                <h3 className="text-xl font-subheading text-surface-900 dark:text-surface-100 mb-4 text-center">
                  How much can I earn?
                </h3>
                <p className="font-body text-surface-600 dark:text-surface-400 text-center">
                  Hashrate heating can sigificantly offset heating costs with revenue, sometimes exceeding 100% savings.
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
            Ready to get paid for heat?
          </h2>
          <p className="text-xl font-body text-white/90 mb-8">
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-subheading rounded-md text-primary-700 bg-white hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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