import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { PenTool, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { loadBlogPosts, getAllCategories, BlogPost } from '../utils/blogLoader'

type BlogCategory = 'all' | string

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        const posts = await loadBlogPosts()
        const allCategories = getAllCategories(posts)
        
        setBlogPosts(posts)
        setCategories(allCategories)
        
        console.log('Loaded blog posts:', posts.length)
        console.log('Categories:', allCategories)
      } catch (error) {
        console.error('Error loading blog content:', error)
        setError('Failed to load blog posts')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  const contentTypes = [
    { id: 'all', name: 'All Posts', icon: PenTool },
    ...categories.map(cat => ({ 
      id: cat, 
      name: cat.charAt(0).toUpperCase() + cat.slice(1), 
      icon: PenTool 
    }))
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category.includes(activeCategory)
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        {/* Hero Section with Custom Gradient */}
        <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EXERGY Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Insights, updates, and deep dives into hashrate heating technology
            </p>
          </div>
        </div>

        {/* Loading State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-surface-200 dark:bg-surface-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-surface-200 dark:bg-surface-700"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-surface-200 dark:bg-surface-700 rounded w-3/4"></div>
                    <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded"></div>
                    <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        {/* Hero Section with Custom Gradient */}
        <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EXERGY Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Insights, updates, and deep dives into hashrate heating technology
            </p>
          </div>
        </div>

        {/* Error State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-xl text-surface-600 dark:text-surface-400 mb-4">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>EXERGY Blog | Hashrate Heating Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest insights on hashrate heating technology, Bitcoin mining heat reuse, and industry developments from EXERGY's expert team." />
        <meta name="keywords" content="hashrate heating blog, bitcoin mining heat news, cryptocurrency heating insights, EXERGY updates" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            EXERGY Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Insights, updates, and deep dives into hashrate heating technology
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-surface-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-surface-400 mr-2" />
              <span className="text-surface-600 dark:text-surface-400 mr-4">Filter:</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 bg-white dark:bg-surface-800 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            {contentTypes.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as BlogCategory)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-surface-600'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-surface-600 dark:text-surface-400">
              No blog posts found. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={`Blog post: ${post.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                      {post.category.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm capitalize"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-3 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-surface-600 dark:text-surface-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-surface-500 dark:text-surface-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && blogPosts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-surface-600 dark:text-surface-400">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="mt-4 flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                  >
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && blogPosts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-surface-600 dark:text-surface-400">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog