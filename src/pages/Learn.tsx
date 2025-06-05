import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle } from 'lucide-react'

const Learn = () => {
  const resources = [
    {
      title: "Educational Resources",
      description: "Hashrate heating blog posts, comprhensive guides, tutorials and more",
      icon: BookOpen,
      link: "/education"
    },
    {
      title: "Calculators",
      description: "Calculate potential savings and earnings with our interactive tools",
      icon: Calculator,
      link: "/calculators"
    },
    {
      title: "Technical Forum",
      description: "Deep dive with industry experts on the Hashrate Heatpunk forum",
      icon: Users,
      link: "https://heatpunks.org",
      external: true
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about hashrate heating technology",
      icon: HelpCircle,
      link: "/faq"
    }
  ]

  const concepts = [
    {
      title: "Energy Equivalence",
      icon: Zap,
      description: "Electric heaters and Bitcoin miners consume the same energy to produce heat. The key difference? Bitcoin miners reward you for supporting the network while heating your space.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Secure Network",
      icon: Bitcoin,
      description: "Bitcoin is a secure, ethical protocol that rewards participants for maintaining network security. Your heater earns these rewards while providing the same warmth as traditional heaters.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "100% Efficiency",
      icon: Cpu,
      description: "All electricity used in Bitcoin mining converts to heat - there's no waste. This heat is then captured and distributed throughout your space, making it a perfectly efficient heating solution.",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Hashrate Heating
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            The most revolutionary heating tech in over a century - heat that pays
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
          Learning Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            resource.external ? (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={resource.link}
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Core Concepts */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
            How Hashrate Heating Works
          </h2>
          <div className="space-y-20">
            {concepts.map((concept, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={concept.image}
                    alt={concept.title}
                    className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <concept.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                    {concept.title}
                  </h3>
                  <p className="text-lg text-surface-600 dark:text-surface-400">
                    {concept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn