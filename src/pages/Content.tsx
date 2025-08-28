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
      date: "May 3, 2025"
    },
    {
      title: "Undermine - 2025 Heatpunk Summit Recap Video",
      description: "The Under|Mine HeatPunks Summit is over but the movement continues. This event was one for the history books, the amount of signal that came out of this event was palpable. If you missed the event you’re sure to get a good amount of FOMO from this video which highlights the projects and conversations that are coming out of the heat reuse space. Not only is Hashrate Heating decentralizing Bitcoins Hashrate its also helping to secure the network all while providing much needed heat to homes, businesses and some industrial applications. There is a ton of work to be done if we are going to replace dumb electric heating infrastructure with Bitcoin miners, but luckily we have the HeatPunks dedicated to this mission.",
      type: 'video',
      author: "Build a Mine Podcast with Trevor Bello",
      link: "https://www.youtube.com/watch?v=c-NrYzmPRv8",
      image: "/undermine_recap.webp",
      date: "April 1, 2025"
    },
    {
      title: "Undermine Takeaways - Alpha You Missed",
      description: "Jarrett and I chat the Monday right after Undermine to walk through key takeaways from the summit. What challenges do we face moving forward? What were the biggest accomplishments? What were the biggest surprises?",
      type: 'podcast',
      author: "Compass Mining Podcast",
      link: "https://x.com/compass_mining/status/1894359866216477045",
      image: "/AlphaYouMissed.webp",
      date: "April 1, 2025"
    },
    {
      title: "Exploring Bitcoin Mining Heat Reuse",
      description: "I had a conversation with Jarrett from Compass Mining exploring the potential for Bitcoin miners to evolve into heating appliances and devices that pay you for using them. The incentives are aligned. The potential is there. We just need to make a few changes for this emerging sub-industry to manifest. Give it a listen to hear about the shockingly large target market, the challenges hashrate heaters face, and a teaser about my upcoming book that dives deep into the subject!",
      type: 'podcast',
      author: "Compass Mining Podcast",
      link: "https://www.youtube.com/watch?v=UTJ_NHqI9rI",
      image: "/CompassHeatReusePod.jpeg",
      date: "January 21, 2025"
    },
    {
      title: "A Heatpunk's Manifesto",
      description: "Heat will bring hashrate back home. I was fortunate to speak at my first bitcoin conference in September where I put my Heatpunk Manifesto into presentation form.",
      type: 'video',
      author: "The Mining Conference",
      link: "https://x.com/BitcoinNewsCom/status/1864467495572148504",
      image: "/heatpunks_manifesto_presentation.png",
      date: "September 29, 2024"
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
            Exergy Content
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore videos, podcasts, articles, and resources about hashrate heating technology
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