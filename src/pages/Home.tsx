import React from 'react'
import { ArrowRight, Code, Globe, Shield, Bitcoin, Cpu, Flame, ArrowRightCircle, CheckCircle, DollarSign, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'
import ProjectCarousel from '../components/ProjectCarousel'
import { motion } from 'framer-motion'

const Home = () => {
  const headlineText = useTypewriter("You pay for heat every month.", 75)
  const isTypewriterComplete = headlineText === "You pay for heat every month."

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
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(47, 59, 105, 0.85)'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              {headlineText}
              {!isTypewriterComplete && <span className="animate-pulse">|</span>}
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl"
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
              Upgrade to heat that pays you instead.
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
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Book an Intro Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Too Good to Be True Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Too Good to Be True?</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Nope. Here's How it Works
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
                  <h3 className="text-lg font-medium text-surface-900 dark:text-surface-100">
                    Electronic Devices Convert Energy into Heat
                  </h3>
                  <p className="mt-2 text-base text-surface-500 dark:text-surface-400">
                    Traditional electric heaters convert 100% of electricity into heat. Thank the 1st Law of Thermodynamics
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
                  <h3 className="text-lg font-medium text-surface-900 dark:text-surface-100">
                    Bitcoin Miners Pay You for Hashing Bitcoin
                  </h3>
                  <p className="mt-2 text-base text-surface-500 dark:text-surface-400">
                    Bitcoin miners perform computations that also convert 100% of electricity into heat. The difference? They earn rewards while heating.
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
                  <h3 className="text-lg font-medium text-surface-900 dark:text-surface-100">
                    Heaters Powered By Bitcoin = Heat AND Money
                  </h3>
                  <p className="mt-2 text-base text-surface-500 dark:text-surface-400">
                    By replacing traditional heaters with mining heaters, you get the same warmth plus bitcoin earnings, effectively reducing your heating costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hashrate heating technology"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-800 p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</p>
                <p className="text-surface-600 dark:text-surface-400">Energy Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See it in Action Section (Project Carousel) */}
      <div className="bg-surface-50 dark:bg-surface-900">
        <ProjectCarousel />
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Why Choose Us</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We're experts in an emerging industry. In fact, we wrote the book on it.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Code className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Custom Solutions</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Tailored heating solutions designed to meet your specific demand.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Maximize Savings</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Optimized devices that deliver the best bang for your buck.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Security First</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Enterprise-grade security to protect your business and data.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* The Technology Section */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">The Technology</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Transform your heating infrastructure into a revenue-generating asset
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Step 1: Bitcoin Miners */}
            <motion.div className="relative group" variants={cardVariants}>
              <div className="bg-white dark:bg-surface-800 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRightCircle className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <Bitcoin className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Bitcoin Miners
                </h3>
                <p className="text-surface-600 dark:text-surface-400 text-center">
                  Specialized computers that perform one task: mining bitcoin and generating heat as a byproduct.
                </p>
              </div>
            </motion.div>

            {/* Step 2: Energy Conversion */}
            <motion.div className="relative group" variants={cardVariants}>
              <div className="bg-white dark:bg-surface-800 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                  <ArrowRightCircle className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <Flame className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4 text-center">
                  100% Energy Conversion
                </h3>
                <p className="text-surface-600 dark:text-surface-400 text-center">
                  All electrical energy used in mining is converted to heat, ensuring maximum efficiency.
                </p>
              </div>
            </motion.div>

            {/* Step 3: Smart Integration */}
            <motion.div className="group" variants={cardVariants}>
              <div className="bg-white dark:bg-surface-800 rounded-lg p-8 h-full transform transition-transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <Cpu className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4 text-center">
                  Smart Integration
                </h3>
                <p className="text-surface-600 dark:text-surface-400 text-center">
                  Advanced systems capture and distribute heat while earning bitcoin rewards for your business.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/learn"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              About Hashrate Heating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-primary-600 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#4c5c99,transparent_75%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#2f3b69,transparent_50%)] animate-pulse [animation-delay:1s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#4c5c99,transparent_50%)] animate-pulse [animation-delay:2s]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get paid for heat?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get in touch so we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
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