import React, { useState } from 'react'
import { FileText, ChevronRight, ChevronDown, Shield, CreditCard, Handshake, Zap, AlertCircle, Clock } from 'lucide-react'

const Docs = () => {
  const [activeSection, setActiveSection] = useState('terms-of-service')
  const [expandedItems, setExpandedItems] = useState<string[]>(['getting-started'])

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const menuItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      children: [
        { id: 'terms-of-service', title: 'Terms of Service' },
        { id: 'service-agreement', title: 'Service Agreement' },
      ]
    },
    {
      id: 'contracts',
      title: 'Contracts & Agreements',
      icon: Handshake,
      children: [
        { id: 'heat-audit-contract', title: 'Heat Audit Contract' },
        { id: 'system-upgrade-contract', title: 'System Upgrade Contract' },
        { id: 'monitoring-agreement', title: 'Monitoring Service Agreement' },
        { id: 'consulting-agreement', title: 'Consulting Agreement' }
      ]
    },
    {
      id: 'payments',
      title: 'Payment Processes',
      icon: CreditCard,
      children: [
        { id: 'payment-terms', title: 'Payment Terms' },
        { id: 'billing-cycles', title: 'Billing Cycles' },
        { id: 'refund-policy', title: 'Refund Policy' },
        { id: 'late-payment', title: 'Late Payment Policy' }
      ]
    },
    {
      id: 'hashrate',
      title: 'Hashrate & Mining',
      icon: Shield,
      children: [
        { id: 'hashrate-splits', title: 'Hashrate Revenue Splits' },
        { id: 'mining-pools', title: 'Mining Pool Selection' },
        { id: 'payout-schedules', title: 'Payout Schedules' },
        { id: 'performance-guarantees', title: 'Performance Guarantees' }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      icon: AlertCircle,
      children: [
        { id: 'warranty-terms', title: 'Warranty Terms' },
        { id: 'maintenance-schedule', title: 'Maintenance Schedule' },
        { id: 'support-levels', title: 'Support Levels' },
        { id: 'emergency-procedures', title: 'Emergency Procedures' }
      ]
    }
  ]

  const documentContent = {
    'terms-of-service': {
      title: 'Terms of Service',
      lastUpdated: 'December 15, 2024',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">TOS Coming Soon</h3>
            <p className="text-surface-600 dark:text-surface-400">
              These Terms of Service constitute a legally binding agreement between you and EXERGY regarding your use of our 
              hashrate heating solutions and related services.
            </p>
          </div>
        </div>
      )
    },
    'service-agreement': {
      title: 'Service Agreement',
      lastUpdated: 'December 15, 2024',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Service Level Agreement Coming Soon</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              This Service Agreement outlines the specific terms and conditions for EXERGY's hashrate heating services.
            </p>
          </div>
        </div>
      )
    },
    'heat-audit-contract': {
      title: 'Heat Audit Contract',
      lastUpdated: 'December 15, 2024',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Heat Audit Service Contract</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Coming Soon.
            </p>
          </div>
        </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Pricing Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-50 dark:bg-surface-700 p-6 rounded-lg">
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Existing Buildings</h4>
                <p className="text-2xl font-bold text-primary-500 dark:text-primary-400 mb-2">$400</p>
                <p className="text-surface-600 dark:text-surface-400">For buildings with existing heating systems</p>
              </div>
              <div className="bg-surface-50 dark:bg-surface-700 p-6 rounded-lg">
                <h4 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">New Construction</h4>
                <p className="text-2xl font-bold text-primary-500 dark:text-primary-400 mb-2">$600</p>
                <p className="text-surface-600 dark:text-surface-400">For new builds and major renovations</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Timeline</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Heat audit reports are typically delivered within 5-7 business days of receiving all required information.
            </p>
          </div>
        </div>
      )
    },
    'hashrate-splits': {
      title: 'Hashrate Revenue Splits',
      lastUpdated: 'December 15, 2024',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Revenue Sharing Model</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              EXERGY's hashrate revenue sharing is designed to maximize customer returns while ensuring sustainable operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Standard Revenue Split</h3>
            <div className="bg-surface-50 dark:bg-surface-700 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary-500 dark:text-primary-400 mb-2">85%</p>
                  <p className="text-surface-900 dark:text-surface-100 font-semibold">Customer Share</p>
                  <p className="text-surface-600 dark:text-surface-400">Mining rewards to customer</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-surface-600 dark:text-surface-400 mb-2">10%</p>
                  <p className="text-surface-900 dark:text-surface-100 font-semibold">EXERGY Fee</p>
                  <p className="text-surface-600 dark:text-surface-400">Service and maintenance</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-surface-600 dark:text-surface-400 mb-2">5%</p>
                  <p className="text-surface-900 dark:text-surface-100 font-semibold">Pool Fees</p>
                  <p className="text-surface-600 dark:text-surface-400">Mining pool charges</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Payout Schedule</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Monthly payouts for amounts over $100</li>
              <li>Quarterly payouts for amounts under $100</li>
              <li>Payouts made in Bitcoin or USD (customer choice)</li>
              <li>Detailed mining reports provided monthly</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Performance Guarantees</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              We guarantee minimum performance levels:
            </p>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>95% of rated hashrate performance</li>
              <li>99% system uptime (excluding scheduled maintenance)</li>
              <li>Compensation for underperformance</li>
            </ul>
          </div>
        </div>
      )
    }
  }

  const currentDoc = documentContent[activeSection] || documentContent['terms-of-service']

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive documentation for EXERGY services, contracts, and policies
          </p>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Documentation</h3>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full flex items-center justify-between p-2 text-left text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <item.icon className="h-5 w-5 mr-3 text-primary-500 dark:text-primary-400" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {expandedItems.includes(item.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => setActiveSection(child.id)}
                            className={`block w-full text-left p-2 rounded-lg transition-colors ${
                              activeSection === child.id
                                ? 'bg-primary-50 dark:bg-primary-900 text-primary-500 dark:text-primary-400'
                                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700'
                            }`}
                          >
                            {child.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
              <div className="border-b border-surface-200 dark:border-surface-700 pb-6 mb-8">
                <h1 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                  {currentDoc.title}
                </h1>
                <div className="flex items-center text-surface-500 dark:text-surface-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Last updated: {currentDoc.lastUpdated}</span>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {currentDoc.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs