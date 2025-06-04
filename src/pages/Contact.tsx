import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Send, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
          <p className="mt-4 text-xl text-primary-100 text-center max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help slash your heating bills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-600" />
                <a 
                  href="mailto:contact@exergyheat.com" 
                  className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors"
                >
                  contact@exergyheat.com
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-primary-600" />
                <Link to="/book-call" className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors">
                  Book a Call with Our Team
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary-600" />
                <a 
                  href="https://maps.app.goo.gl/bp9d8a3GEpfzv3Kg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-600 transition-colors"
                >
                  3700 N Franklin St. Denver, CO 80205
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-4">Office Hours</h3>
              <div className="space-y-2 text-surface-600 dark:text-surface-400">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-surface-300 dark:border-surface-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-surface-700 dark:text-surface-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-surface-300 dark:border-surface-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-surface-700 dark:text-surface-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-surface-300 dark:border-surface-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-surface-700 dark:text-surface-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-surface-300 dark:border-surface-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-surface-700 dark:text-surface-100"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-surface-800"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact