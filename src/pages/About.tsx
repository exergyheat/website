import React from 'react'
import { Book, Users, Award, Cpu, Flame, Bitcoin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const team = [
    {
      name: 'Tyler Stevens',
      role: 'CEO & Chief Engineer',
      image: '/IMG_5108.JPG',
      description: 'Author of "Bitcoin Mining Heat Reuse" and founder of the Heatpunk movement.'
    },
    {
      name: 'Dylan',
      role: 'COO & CFO',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Operations and financial strategy expert.'
    },
    {
      name: 'Mike',
      role: 'CRO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Revenue and growth specialist.'
    }
  ]

  const roadmap = [
    {
      quarter: 'Q2 2024',
      title: 'Launch & Growth',
      events: [
        'Official company launch',
        'Release of first product line',
        'Establishment of partner network'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'Expansion',
      events: [
        'New product development',
        'Market expansion',
        'Enhanced monitoring services'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Innovation',
      events: [
        'Advanced control systems',
        'Integration partnerships',
        'Community platform launch'
      ]
    },
    {
      quarter: 'Q1 2025',
      title: 'Scale',
      events: [
        'International expansion',
        'New product categories',
        'Enterprise solutions'
      ]
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We're About
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Poineering an industry - supporting bitcoin - saving you money
          </p>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
              Leading the Hashrate Heating Revolution
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-6">
              We're not just another HVAC company. We're pioneering a completely new approach to heating, combining the power of Bitcoin mining with innovative thermal solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <Flame className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100">Exact Savings Analysis</h3>
                  <p className="text-surface-600 dark:text-surface-400">Precise modeling of your energy consumption and potential savings.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <Cpu className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100">Expert System Design</h3>
                  <p className="text-surface-600 dark:text-surface-400">Custom solutions tailored to your specific heating needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <Bitcoin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100">Revenue-Generating Heat</h3>
                  <p className="text-surface-600 dark:text-surface-400">Turn your heating costs into a source of income.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Innovative Heating Solution"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-800 p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">60-80%</p>
              <p className="text-surface-600 dark:text-surface-400">Average Cost Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Book & Leadership Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-primary-600 rounded-lg p-8 text-white">
                <Book className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Bitcoin Mining Heat Reuse</h3>
                <p className="mb-6">The definitive guide to hashrate heating technology, written by our founder Tyler Stevens.</p>
                <a
                  href="https://braiins.com/books/bitcoin-mining-heat-reuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-primary-100 transition-colors"
                >
                  Read the Book
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-surface-700 p-6 rounded-lg shadow-xl">
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">#1</p>
                <p className="text-surface-600 dark:text-surface-400">Industry Resource</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
                Pioneering the Heatpunk Movement
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-6">
                Our founder didn't just join the movement - he started it. The term "Heatpunk" was coined to represent the revolutionary approach to heating technology, inspired by the cypherpunk movement in the Bitcoin ecosystem.
              </p>
              <div className="space-y-4">
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100">Undermine Summit</h4>
                  <p className="text-surface-600 dark:text-surface-400">The first-ever summit bringing together HVAC experts and ASIC developers.</p>
                </div>
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-surface-900 dark:text-surface-100">Community Leadership</h4>
                  <p className="text-surface-600 dark:text-surface-400">Active community of system builders sharing knowledge and solutions.</p>
                </div>
              </div>
            </div>
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

      {/* Technology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">Our Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Bitcoin className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Bitcoin Mining</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Utilizing the latest ASIC technology to generate both heat and revenue through Bitcoin mining.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Cpu className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Smart Controls</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Advanced control systems for optimal performance and efficiency monitoring.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Award className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Thermal Innovation</h3>
            <p className="mt-2 text-surface-600 dark:text-surface-400">
              Cutting-edge heat distribution and management technologies.
            </p>
          </div>
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
    </div>
  )
}

export default About