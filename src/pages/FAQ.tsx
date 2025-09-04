import React, { useState } from 'react'
import { Plus, Minus, Search, MessageCircle, ArrowRight } from 'lucide-react'

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqSections = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          q: "What is hashrate heating?",
          a: "Hashrate heating is a new heating technology that combines bitcoin mining with heating infrastructure, effectively turning electric power into useful heat while generating revenue at the same time."
        },
        {
          q: "How does it save money?",
          a: "It saves money by offsetting heating costs with bitcoin mining rewards (which can be converted to local fiat currencies), essentially making your heating system generate income while providing warmth."
        },
        {
          q: "Is it bad for the environment?",
          a: "No, hashrate heating is the most efficient possibly way to heat. It converts electricity into heat plus bitcoin with 100% efficiency and zero local emissions."
        },
        {
          q: "Why bitcoin? What about other cryptocurrencies?",
          a: "Bitcoin is neutral, because no one controls it. Bitcoin is ethical, because mining (heater) rewards are proportional to how much energy you contribute. Bitcoin is accessible, because it's free and open source - anyone can audit the code. No other crypto will ever be bitcoin."
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      questions: [
        {
          q: "What maintenance is required?",
          a: "Regular maintenance includes filter cleaning, system updates, and periodic performance checks. Our monitoring system tracks when maintenance is needed - before you even notice."
        },
        {
          q: "How loud are the systems?",
          a: "Our air based systems are designed with noise reduction in mind and typically operate at noise levels similar to a standard forced air heating system. Liquid based systems are effectively silent."
        },
        {
          q: "What's the installation process?",
          a: "The installation process mirrors traditional heating systems, using standard inlets and outlets for heat and electricity, with one addition: an internet connection to link your hashrate heater to the network for earning rewards."
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Questions',
      questions: [
        {
          q: "What's the typical ROI period?",
          a: "The return on investment period typically ranges from 18-36 months, depending on factors like energy costs and bitcoin market conditions. The largest contributing factor to the ROI period is whether you hold the bitcoin earned, or sell it to offset heating costs."
        },
        {
          q: "Does it cut my heating bills? Or just pay me to offset them?",
          a: "Hashrate heating devices and systems are revenue generating assets with an upfront cost. You can look at the earnings two ways: As a rebate to sunk costs, where the rewards are used each month to lower (or even eliminate) your heating bills. Or as consistent passive revenue, where the earnings are held for long term while you pay the electric heating bill. Holding the bitcoin is the smart move, as it appreciates in value due to its fixed supply."
        },
        {
          q: "Will my monthly bill increase or decrease?",
          a: "It depends on your electricity rate and heating fuel cost. In the USA, natural gas heat is cheap and plentiful. Hashrate heating systems typically have a higher operational cost due to higher relative electric heat costs. Propane and heating oil are expensive and cumbersome. Often times, switching to hashrate heat is cheaper - before you even factor in the recurring revenue."
        },
        {
          q: "Can I get paid in dollars instead of bitcoin?",
          a: "Yes! If you prefer to receive your heating system rebate revenue in USD rather than bitcoin, we can accomodate, or even blend the two."
        }
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId)
  }

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our hashrate heating technology
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-surface-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
            />
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredSections.map((section) => (
          <div key={section.id} className="mb-8">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between bg-white dark:bg-surface-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-surface-900 dark:text-surface-100">
                {section.title}
              </h2>
              {openSection === section.id ? (
                <Minus className="h-6 w-6 text-primary-500 dark:text-primary-400" />
              ) : (
                <Plus className="h-6 w-6 text-primary-500 dark:text-primary-400" />
              )}
            </button>
            
            {openSection === section.id && (
              <div className="mt-4 space-y-4">
                {section.questions.map((qa, index) => (
                  <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">
                      {qa.q}
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      {qa.a}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
            Our team is here to help you with any questions you might have about our technology.
          </p>
          <div className="mb-6">
            <a
              href="https://docs.exergyheat.com/c/faq/5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
            >
              See more FAQ on the Exergy Forum
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/book-call"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ