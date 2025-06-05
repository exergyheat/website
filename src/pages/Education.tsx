import React, { useState } from 'react'
import { BookOpen, Video, FileText, Podcast, Globe, ArrowRight, Book, X } from 'lucide-react'
import { Link } from 'react-router-dom'

type ContentType = 'all' | 'video' | 'podcast' | 'book' | 'blog' | 'website'

interface Content {
  title: string
  description: string
  type: ContentType
  author: string
  link: string
  image: string
  date: string
}

const Education = () => {
  const [activeType, setActiveType] = useState<ContentType>('all')
  const [showBookModal, setShowBookModal] = useState(false)

  const contentTypes = [
    { id: 'all', name: 'All Content', icon: FileText },
    { id: 'video', name: 'Videos', icon: Video },
    { id: 'podcast', name: 'Podcasts', icon: Podcast },
    { id: 'book', name: 'Books', icon: Book },
    { id: 'blog', name: 'Blog Posts', icon: Globe },
    { id: 'website', name: 'Websites', icon: Globe }
  ]

  const content: Content[] = [
    {
      title: "Bitcoin Mining Heat Reuse with Tyler Stevens",
      description: "In-depth discussion about hashrate heating technology and its applications with EXERGY's founder.",
      type: 'video',
      author: "Bitcoin Mining Engineering",
      link: "https://www.youtube.com/watch?v=H4faYFvQYOQ",
      image: "https://images.pexels.com/photos/7567560/pexels-photo-7567560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 20, 2024"
    },
    {
      title: "Introduction to Hashrate Heating",
      description: "A comprehensive video overview of hashrate heating technology and its applications.",
      type: 'video',
      author: "Bitcoin Magazine",
      link: "https://www.youtube.com/watch?v=example1",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 15, 2024"
    },
    {
      title: "The Future of Sustainable Bitcoin Mining",
      description: "In-depth discussion about heat recycling in Bitcoin mining operations.",
      type: 'podcast',
      author: "What Bitcoin Did",
      link: "https://www.whatbitcoindid.com/podcast/example",
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 10, 2024"
    },
    {
      title: "Implementing Hashrate Heating Systems",
      description: "Technical guide for implementing hashrate heating in commercial buildings.",
      type: 'blog',
      author: "Braiins Insights",
      link: "https://braiins.com/blog/example",
      image: "https://images.pexels.com/photos/7567620/pexels-photo-7567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 5, 2024"
    },
    {
      title: "Heat Recycling in Data Centers",
      description: "Case study on implementing heat recycling in large-scale data centers.",
      type: 'website',
      author: "Data Center Dynamics",
      link: "https://www.datacenterdynamics.com/example",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 1, 2024"
    }
  ]

  const filteredContent = activeType === 'all' 
    ? content 
    : content.filter(item => item.type === activeType)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hashrate Heating Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Your comprehensive guide to understanding and implementing hashrate heating technology
          </p>
        </div>
      </div>

      {/* Featured Book Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-surface-900 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="inline-block p-3 bg-primary-900 rounded-lg">
                <Book className="h-8 w-8 text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Bitcoin Mining Heat Reuse</h2>
              <p className="text-lg text-surface-300">
                The definitive guide to hashrate heating technology, written by our founder Tyler Stevens. 
                With a foreword by Paul Jin Li, CEO of Foghashing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://braiins.com/books/bitcoin-mining-heat-reuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get the Book
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button
                  onClick={() => setShowBookModal(true)}
                  className="px-6 py-3 bg-surface-700 text-white rounded-lg hover:bg-surface-600 transition-colors"
                >
                  Preview
                </button>
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
        </div>
      </div>

      {/* Content Filter */}
      <div className="sticky top-0 bg-white dark:bg-surface-800 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id as ContentType)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeType === type.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-surface-600'
                }`}
              >
                <type.icon className="h-5 w-5 mr-2" />
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm capitalize">
                  {item.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center text-sm text-surface-500 dark:text-surface-400">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Book Preview Modal */}
      {showBookModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-surface-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-surface-50 dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setShowBookModal(false)}
                  className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="bg-surface-50 dark:bg-surface-900 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                  Book Preview
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-4">Table of Contents</h4>
                  <ol className="list-decimal list-inside space-y-2 text-surface-600 dark:text-surface-400">
                    <li>Introduction to Hashrate Heating</li>
                    <li>The Physics of Heat Generation</li>
                    <li>Bitcoin Mining Fundamentals</li>
                    <li>System Design and Integration</li>
                    <li>Implementation Strategies</li>
                    <li>Case Studies and Examples</li>
                    <li>Future of Heat Recycling</li>
                  </ol>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4">From the Introduction</h4>
                    <p className="text-surface-600 dark:text-surface-400">
                      "Heat is not a waste product - it's a valuable resource that's been overlooked for too long. 
                      This book presents a revolutionary approach to heating that transforms traditional cost centers 
                      into revenue-generating assets through the innovative combination of Bitcoin mining and heat recycling..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Education