import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle } from 'lucide-react'

const resources = [
  {
    title: "Educational Resources",
    description: "Hashrate heating blog posts, comprehensive guides, tutorials and more",
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

const Learn = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Learning Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                {resource.external ? (
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{resource.title}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{resource.description}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link to={resource.link} className="block">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{resource.title}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{resource.description}</p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;