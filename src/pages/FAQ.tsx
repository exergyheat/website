import React, { useState } from 'react'
import { Plus, Minus, Search, MessageCircle } from 'lucide-react'

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
          q: "Is it environmentally friendly?",
          a: "Yes, hashrate heating is environmentally friendly as it utilizes the heat that would otherwise be wasted in traditional cryptocurrency mining operations."
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      questions: [
        {
          q: "What maintenance is required?",
          a: "Regular maintenance includes dust cleaning, system updates, and periodic performance checks. Our monitoring system helps track when maintenance is needed."
        },
        {
          q: "How loud are the systems?",
          a: "Our systems are designed with noise reduction in mind and typically operate at noise levels similar to a standard home heating system."
        },
        {
          q: "What's the installation process?",
          a: "Installation is handled by our certified technicians and typically takes 1-2 days, including system setup and integration with existing infrastructure."
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Questions',
      questions: [
        {
          q: "What's the typical ROI period?",
          a: "The return on investment period typically ranges from 18-24 months, depending on factors like energy costs and cryptocurrency market conditions."
        },
        {
          q: "Are there any tax benefits?",
          a: "Many jurisdictions offer tax incentives for energy-efficient heating solutions. We recommend consulting with a tax professional for specific advice."
        },
        {
          q: "What are the operating costs?",
          a: "Operating costs primarily consist of electricity usage, which is offset by mining rewards and reduced heating costs."
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
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
                <Minus className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              ) : (
                <Plus className="h-6 w-6 text-primary-600 dark:text-primary-400" />
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
            Our team is here to help you with any questions you might have about our technology
          </p>
          <a
            href="mailto:support@exergyheat.com"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ