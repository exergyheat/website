import React, { useState } from 'react'
import { FileText, ChevronRight, ChevronDown, Shield, CreditCard, Handshake, Zap, AlertCircle, Clock, Info } from 'lucide-react'

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
        { id: 'privacy-policy', title: 'Privacy Policy' }
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

  const ComingSoonNotice = ({ description }: { description: string }) => (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
      <div className="flex items-start">
        <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Coming Soon
          </h4>
          <p className="text-blue-800 dark:text-blue-200 mb-3">
            {description}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            We're currently finalizing our legal documentation. This page will be updated with complete terms and conditions soon.
          </p>
        </div>
      </div>
    </div>
  )

  const documentContent = {
    'terms-of-service': {
      title: 'Terms of Service',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will contain our comprehensive Terms of Service, outlining the legal agreement between EXERGY and our customers for the use of our hashrate heating solutions and services." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Acceptance of terms and conditions</li>
              <li>Service descriptions and limitations</li>
              <li>User responsibilities and obligations</li>
              <li>Payment terms and conditions</li>
              <li>Limitation of liability and disclaimers</li>
              <li>Intellectual property rights</li>
              <li>Termination and cancellation policies</li>
            </ul>
          </div>
        </div>
      )
    },
    'service-agreement': {
      title: 'Service Agreement',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline our Service Level Agreement (SLA), detailing the specific terms and conditions for EXERGY's hashrate heating services, including performance standards and support commitments." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Service performance standards and guarantees</li>
              <li>System uptime commitments</li>
              <li>Response time requirements for support</li>
              <li>Heat delivery specifications</li>
              <li>Mining performance expectations</li>
              <li>Maintenance and support procedures</li>
            </ul>
          </div>
        </div>
      )
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail how EXERGY collects, uses, stores, and protects your personal information and data in compliance with privacy regulations." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Types of information we collect</li>
              <li>How we use your personal data</li>
              <li>Data sharing and disclosure policies</li>
              <li>Your privacy rights and choices</li>
              <li>Data security measures</li>
              <li>Cookie and tracking policies</li>
            </ul>
          </div>
        </div>
      )
    },
    'heat-audit-contract': {
      title: 'Heat Audit Contract',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will contain the specific contract terms for our Heat Audit Analysis service, including scope of work, deliverables, pricing, and project timelines." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Detailed scope of work and deliverables</li>
              <li>Pricing structure for residential and commercial audits</li>
              <li>Required information and data from customers</li>
              <li>Project timeline and completion guarantees</li>
              <li>Report format and consultation details</li>
              <li>Payment terms and refund policies</li>
            </ul>
          </div>
        </div>
      )
    },
    'system-upgrade-contract': {
      title: 'System Upgrade Contract',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline the contract terms for our complete hashrate heating system design and implementation service, including design specifications, installation coordination, and project management." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>System design and engineering specifications</li>
              <li>Installation coordination and management</li>
              <li>Hardware procurement and delivery terms</li>
              <li>Project timeline and milestone payments</li>
              <li>Performance guarantees and warranties</li>
              <li>Change order and modification procedures</li>
            </ul>
          </div>
        </div>
      )
    },
    'monitoring-agreement': {
      title: 'Monitoring Service Agreement',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail the terms for our remote monitoring service, including monitoring capabilities, alert systems, maintenance scheduling, and ongoing support." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>24/7 monitoring service specifications</li>
              <li>Alert and notification procedures</li>
              <li>Preventive maintenance scheduling</li>
              <li>Performance optimization services</li>
              <li>Emergency response procedures</li>
              <li>Service fees and billing terms</li>
            </ul>
          </div>
        </div>
      )
    },
    'consulting-agreement': {
      title: 'Consulting Agreement',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will contain the terms for our hashrate heating consulting services, including expertise areas, project scope, deliverables, and professional service terms." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Consulting service scope and expertise areas</li>
              <li>Project deliverables and timelines</li>
              <li>Hourly rates and project-based pricing</li>
              <li>Intellectual property and confidentiality terms</li>
              <li>Implementation support and guidance</li>
              <li>Ongoing advisory service options</li>
            </ul>
          </div>
        </div>
      )
    },
    'payment-terms': {
      title: 'Payment Terms',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline our payment terms and conditions, including accepted payment methods, billing cycles, late payment policies, and refund procedures." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Accepted payment methods and currencies</li>
              <li>Invoice terms and payment due dates</li>
              <li>Late payment fees and penalties</li>
              <li>Refund and cancellation policies</li>
              <li>Dispute resolution procedures</li>
              <li>Tax and billing address requirements</li>
            </ul>
          </div>
        </div>
      )
    },
    'billing-cycles': {
      title: 'Billing Cycles',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will explain our billing cycles for different services, including one-time payments, recurring charges, and project-based billing schedules." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Service-specific billing schedules</li>
              <li>Monthly recurring service charges</li>
              <li>Project milestone payment schedules</li>
              <li>Prorated billing for partial periods</li>
              <li>Billing date changes and adjustments</li>
              <li>Invoice delivery and notification methods</li>
            </ul>
          </div>
        </div>
      )
    },
    'refund-policy': {
      title: 'Refund Policy',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail our refund policy, including eligible circumstances for refunds, refund processing times, and procedures for requesting refunds." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Refund eligibility criteria</li>
              <li>Service-specific refund terms</li>
              <li>Refund request procedures</li>
              <li>Processing times and methods</li>
              <li>Partial refund calculations</li>
              <li>Non-refundable services and fees</li>
            </ul>
          </div>
        </div>
      )
    },
    'late-payment': {
      title: 'Late Payment Policy',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline our late payment policy, including grace periods, late fees, service suspension procedures, and account recovery processes." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Grace periods and payment reminders</li>
              <li>Late fee structure and calculations</li>
              <li>Service suspension and termination procedures</li>
              <li>Account recovery and reinstatement terms</li>
              <li>Collection procedures and policies</li>
              <li>Payment plan and extension options</li>
            </ul>
          </div>
        </div>
      )
    },
    'hashrate-splits': {
      title: 'Hashrate Revenue Splits',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail our revenue sharing model for hashrate heating systems, including split percentages, payout schedules, and performance guarantees." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Revenue split percentages and calculations</li>
              <li>Customer vs. EXERGY share breakdown</li>
              <li>Mining pool fee allocations</li>
              <li>Payout schedules and minimum thresholds</li>
              <li>Performance guarantees and adjustments</li>
              <li>Revenue reporting and transparency</li>
            </ul>
          </div>
        </div>
      )
    },
    'mining-pools': {
      title: 'Mining Pool Selection',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will explain our mining pool selection process, including preferred pools, fee structures, and customer choice options for mining pool participation." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Preferred mining pool partnerships</li>
              <li>Pool selection criteria and evaluation</li>
              <li>Customer choice and customization options</li>
              <li>Pool fee structures and comparisons</li>
              <li>Pool switching and optimization procedures</li>
              <li>Performance monitoring and reporting</li>
            </ul>
          </div>
        </div>
      )
    },
    'payout-schedules': {
      title: 'Payout Schedules',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail our payout schedules for mining rewards, including frequency, minimum amounts, payment methods, and currency options." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Payout frequency options (daily, weekly, monthly)</li>
              <li>Minimum payout thresholds</li>
              <li>Payment methods (Bitcoin, USD, etc.)</li>
              <li>Processing times and delays</li>
              <li>Tax reporting and documentation</li>
              <li>Payout history and tracking</li>
            </ul>
          </div>
        </div>
      )
    },
    'performance-guarantees': {
      title: 'Performance Guarantees',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline our performance guarantees for hashrate heating systems, including uptime commitments, hashrate performance, and compensation for underperformance." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>System uptime guarantees and SLA commitments</li>
              <li>Hashrate performance minimums</li>
              <li>Heat output guarantees and specifications</li>
              <li>Compensation for underperformance</li>
              <li>Performance monitoring and reporting</li>
              <li>Warranty terms and coverage</li>
            </ul>
          </div>
        </div>
      )
    },
    'warranty-terms': {
      title: 'Warranty Terms',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail our warranty terms for hashrate heating systems, including coverage periods, what's included and excluded, and warranty claim procedures." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Warranty coverage periods and terms</li>
              <li>Hardware and software warranty details</li>
              <li>What's covered and excluded from warranty</li>
              <li>Warranty claim procedures and requirements</li>
              <li>Repair and replacement policies</li>
              <li>Extended warranty options</li>
            </ul>
          </div>
        </div>
      )
    },
    'maintenance-schedule': {
      title: 'Maintenance Schedule',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline our maintenance schedules for hashrate heating systems, including routine maintenance, seasonal checks, and customer responsibilities." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Routine maintenance schedules and procedures</li>
              <li>Seasonal maintenance requirements</li>
              <li>Customer vs. EXERGY maintenance responsibilities</li>
              <li>Maintenance notification and scheduling</li>
              <li>Emergency maintenance procedures</li>
              <li>Maintenance costs and coverage</li>
            </ul>
          </div>
        </div>
      )
    },
    'support-levels': {
      title: 'Support Levels',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will detail our different support levels and tiers, including response times, support channels, and what's included in each level of service." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Support tier descriptions and features</li>
              <li>Response time commitments by tier</li>
              <li>Available support channels (phone, email, chat)</li>
              <li>Support hours and availability</li>
              <li>Escalation procedures and priority handling</li>
              <li>Support upgrade and downgrade options</li>
            </ul>
          </div>
        </div>
      )
    },
    'emergency-procedures': {
      title: 'Emergency Procedures',
      lastUpdated: 'Coming Soon',
      content: (
        <div className="space-y-8">
          <ComingSoonNotice description="This page will outline emergency procedures for hashrate heating systems, including emergency contacts, system shutdown procedures, and safety protocols." />
          
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">What Will Be Included</h3>
            <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
              <li>Emergency contact information and procedures</li>
              <li>System shutdown and safety protocols</li>
              <li>Emergency response times and procedures</li>
              <li>Safety guidelines and precautions</li>
              <li>Troubleshooting for common emergency scenarios</li>
              <li>When to contact emergency services vs. EXERGY</li>
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