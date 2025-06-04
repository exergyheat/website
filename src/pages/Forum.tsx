import React from 'react'
import { MessageSquare, Users, TrendingUp, HelpCircle } from 'lucide-react'

const Forum = () => {
  const categories = [
    {
      name: "General Discussion",
      description: "Discuss anything related to hashrate heating",
      topics: 156,
      posts: 1243,
      icon: MessageSquare
    },
    {
      name: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      topics: 89,
      posts: 567,
      icon: HelpCircle
    },
    {
      name: "Best Practices",
      description: "Share and learn about optimization techniques",
      topics: 45,
      posts: 234,
      icon: TrendingUp
    },
    {
      name: "Community Projects",
      description: "Collaborate on community-driven initiatives",
      topics: 23,
      posts: 156,
      icon: Users
    }
  ]

  const recentTopics = [
    {
      title: "How to optimize heating efficiency in large spaces?",
      author: "JohnDoe",
      replies: 12,
      views: 234,
      lastPost: "2 hours ago"
    },
    {
      title: "New firmware update discussion",
      author: "TechPro",
      replies: 8,
      views: 156,
      lastPost: "4 hours ago"
    },
    {
      title: "Integration with smart home systems",
      author: "SmartHome",
      replies: 15,
      views: 289,
      lastPost: "6 hours ago"
    }
  ]

  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community Forum
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Join our community of hashrate heating enthusiasts and experts
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-surface-900">
                    {category.name}
                  </h3>
                  <p className="text-surface-600 mt-1">
                    {category.description}
                  </p>
                  <div className="flex items-center mt-4 text-sm text-surface-500">
                    <span>{category.topics} topics</span>
                    <span className="mx-2">•</span>
                    <span>{category.posts} posts</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Topics */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 mb-12">Recent Discussions</h2>
          <div className="space-y-6">
            {recentTopics.map((topic, index) => (
              <div key={index} className="bg-surface-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-surface-600 mt-1">
                      Started by {topic.author}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-surface-600">
                      {topic.replies} replies • {topic.views} views
                    </div>
                    <div className="text-sm text-surface-500 mt-1">
                      Last post {topic.lastPost}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Community */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary-600 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Connect with other users, share experiences, and learn from experts
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forum