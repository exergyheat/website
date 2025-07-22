import React from 'react'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "All data is securely stored on our private Exergy servers. We avoid big tech platforms to maintain complete control over your data protection."
    },
    {
      icon: Eye,
      title: "Data Usage",
      content: "We only collect and use information that is necessary for providing and improving our services. Your data is never sold to third parties."
    },
    {
      icon: FileText,
      title: "Transparency",
      content: "We are committed to being transparent about our data collection and use practices, ensuring you always know how your information is being handled."
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and manage your data.
          </p>
        </div>
      </div>

      {/* Key Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <section.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                {section.title}
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Policy */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-8">
              Detailed Privacy Policy
            </h2>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                1. Information We Collect
              </h3>
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
                <li>Name and contact information</li>
                <li>System performance data</li>
                <li>Usage statistics</li>
                <li>Project location (when required)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                2. How We Use Your Information
              </h3>
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing your transactions</li>
                <li>Sending you important updates</li>
                <li>Improving our products and services</li>
                <li>Responding to your requests and inquiries</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                3. Data Sharing and Disclosure
              </h3>
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                4. Your Rights and Choices
              </h3>
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-surface-600 dark:text-surface-400 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                5. Contact Us
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <p className="text-surface-600 dark:text-surface-400">Email: support@exergyheat.com</p>
                <p className="text-surface-600 dark:text-surface-400">Address: 3700 N Franklin St. Denver, CO 80205</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-surface-500 dark:text-surface-400">
          Last updated: June 4, 2025
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy