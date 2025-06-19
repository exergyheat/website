import React, { useState } from 'react'
import { BookOpen, Video, FileText, Podcast, Globe, ArrowRight, Book, X, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
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
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null)

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
      title: "Decentralized Heat: Bitcoin Mining's Game-Changing Energy Solution W/ Tyler Stevens",
      description: "In this episode of the Home Mining Podcast, host TwoSats and thermal engineer Tyler Stevens explore the innovative concept of heat reuse in Bitcoin mining. They discuss how Bitcoin miners can serve dual purposes by providing heat for homes and businesses while securing the network. The conversation delves into the technical aspects of heat transfer, real-world applications, and the economic benefits of integrating heat reuse into mining operations. Tyler shares insights on the evolution of ASIC design and the potential for future innovations that prioritize heat reuse, ultimately envisioning a future where Bitcoin mining contributes to self-reliant communities and sustainable energy practices. In this conversation, Tyler Stevens discusses the innovative concept of hash rate heating, which utilizes the heat generated from Bitcoin mining for practical applications such as heating water and spaces. He explains the process of binning in chip manufacturing, the potential of the comfort heating market, and how this could revolutionize energy systems. The discussion also touches on the challenges of chip manufacturing, the importance of aligning incentives for success, and the future landscape of Bitcoin mining as it becomes more decentralized and integrated into home energy systems.",
      type: 'podcast',
      author: "Home Mining Podcast by Solo Satoshi",
      link: "https://www.youtube.com/watch?v=H4faYFvQYOQ",
      image: "/image.png",
      date: "March 20, 2024"
    },
    {
      title: "Introduction to Hashrate Heating",
      description: "A comprehensive video overview of hashrate heating technology and its applications. Learn about the fundamental principles behind combining Bitcoin mining with heating systems, and discover how this innovative approach is transforming traditional heating infrastructure into revenue-generating assets.",
      type: 'video',
      author: "Bitcoin Magazine",
      link: "https://www.youtube.com/watch?v=example1",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 15, 2024"
    },
    {
      title: "The Future of Sustainable Bitcoin Mining",
      description: "In-depth discussion about heat recycling in Bitcoin mining operations. Explore how the integration of mining and heating systems is creating new opportunities for sustainable energy usage while maximizing the efficiency of Bitcoin mining operations.",
      type: 'podcast',
      author: "What Bitcoin Did",
      link: "https://www.whatbitcoindid.com/podcast/example",
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 10, 2024"
    },
    {
      title: "Implementing Hashrate Heating Systems",
      description: "Technical guide for implementing hashrate heating in commercial buildings. This comprehensive guide covers everything from initial planning to final implementation, including system design, integration strategies, and optimization techniques.",
      type: 'blog',
      author: "Braiins Insights",
      link: "https://braiins.com/blog/example",
      image: "https://images.pexels.com/photos/7567620/pexels-photo-7567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 5, 2024"
    },
    {
      title: "Heat Recycling in Data Centers",
      description: "Case study on implementing heat recycling in large-scale data centers. Learn from real-world examples of successful implementations, including challenges faced, solutions developed, and lessons learned throughout the process.",
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

  const truncateDescription = (text: string) => {
    const words = text.split(' ')
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...'
    }
    return text
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hashrate Heating Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your comprehensive guide to understanding and implementing hashrate heating technology
          </p>
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
                    ? 'bg-primary-500 text-white'
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
            <div
              key={index}
              className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-1 rounded-full text-sm capitalize">
                    {item.type}
                  </div>
                </div>
              </a>
              <div className="p-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                    {item.title}
                  </h3>
                </a>
                <div className="mb-4">
                  <p className="text-surface-600 dark:text-surface-400">
                    {expandedDescription === item.title ? item.description : truncateDescription(item.description)}
                  </p>
                  {item.description.split(' ').length > 30 && (
                    <button
                      onClick={() => setExpandedDescription(expandedDescription === item.title ? null : item.title)}
                      className="mt-2 flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                    >
                      {expandedDescription === item.title ? (
                        <>
                          Show Less
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm text-surface-500 dark:text-surface-400">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hungry for More Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ExternalLink className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Hungry for More?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Check out the Hashrate Heatpunk Forum - a technical platform for builders and engineers to showcase their solutions.
          </p>
          
          <a
            href="https://heatpunks.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Visit Heatpunk Forum
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education