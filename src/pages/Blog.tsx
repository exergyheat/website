import React, { useState } from 'react'
import { PenTool, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'

type BlogCategory = 'all' | 'bitcoin' | 'mining' | 'heating' | 'lightning' | 'payments'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: BlogCategory[]
  image: string
  readTime: string
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'All Posts', icon: PenTool },
    { id: 'bitcoin', name: 'Bitcoin', icon: PenTool },
    { id: 'mining', name: 'Mining', icon: PenTool },
    { id: 'heating', name: 'Heating', icon: PenTool },
    { id: 'lightning', name: 'Lightning Network', icon: PenTool },
    { id: 'payments', name: 'Payments', icon: PenTool }
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 'hashrate-heating-revolution',
      title: 'The Hashrate Heating Revolution: Why Now?',
      excerpt: 'Exploring the perfect storm of factors that make hashrate heating the ideal solution for modern energy challenges.',
      content: `The convergence of several key factors has created the perfect environment for hashrate heating to emerge as a revolutionary technology. 

First, the maturation of Bitcoin mining hardware has reached a point where efficiency gains are substantial enough to make dual-purpose heating economically viable. Modern ASIC miners convert electricity to heat with near-perfect efficiency while generating meaningful revenue.

Second, rising energy costs worldwide have made traditional heating increasingly expensive. Homeowners and businesses are actively seeking alternatives that can reduce their heating bills while maintaining comfort.

Third, the growing acceptance of Bitcoin as a legitimate asset class has reduced regulatory uncertainty and increased mainstream adoption. This creates a more stable environment for long-term hashrate heating investments.

Finally, advances in heat capture and distribution technology have made it possible to efficiently transfer heat from mining equipment to living and working spaces without compromising the mining operation's performance.

These factors combine to create an unprecedented opportunity for property owners to transform their heating costs from an expense into a revenue stream.`,
      author: 'Tyler Stevens',
      date: 'December 10, 2024',
      category: ['bitcoin', 'heating', 'mining'],
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '5 min read'
    },
    {
      id: 'bitcoin-heating-economics',
      title: 'The Economics of Bitcoin Heating: A Deep Dive',
      excerpt: 'Understanding the financial mechanics behind hashrate heating and how it creates value for property owners.',
      content: `The economics of Bitcoin heating represent a fundamental shift in how we think about energy consumption and value creation. Traditional heating systems are pure cost centers - they consume energy and provide heat, but generate no additional value.

Bitcoin heating systems, by contrast, create a dual value proposition. They provide the same heating output as traditional systems while simultaneously generating revenue through cryptocurrency mining rewards.

The key to understanding the economics lies in recognizing that all electrical energy consumed by mining equipment is converted to heat. This isn't waste heat - it's the primary product. The Bitcoin rewards are essentially a rebate on your heating costs.

Consider a typical scenario: A traditional electric heater consuming 5kW costs approximately $3,600 per year to operate (assuming $0.10/kWh). A Bitcoin heating system consuming the same 5kW provides identical heat output but generates approximately $2,400 in annual Bitcoin rewards, reducing the net heating cost to just $1,200.

This 67% reduction in heating costs is achieved without any compromise in comfort or reliability. In fact, many Bitcoin heating systems offer superior temperature control and monitoring capabilities compared to traditional heating systems.

The payback period for the additional equipment cost is typically 18-24 months, after which the system continues to generate net positive cash flow for its entire operational life.`,
      author: 'Dylan',
      date: 'December 8, 2024',
      category: ['bitcoin', 'payments', 'heating'],
      image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '7 min read'
    },
    {
      id: 'lightning-network-heating',
      title: 'Lightning Network Integration for Instant Heating Payments',
      excerpt: 'How Lightning Network technology enables real-time micropayments for heating services and creates new business models.',
      content: `The Lightning Network opens up exciting possibilities for hashrate heating systems by enabling instant, low-cost micropayments. This technology allows for innovative payment models that weren't previously possible with traditional Bitcoin transactions.

One compelling application is pay-per-BTU heating services. Instead of monthly bills, customers could pay for exactly the amount of heat they consume, with payments processed instantly via Lightning. This creates unprecedented flexibility and cost control for heating consumers.

For multi-tenant buildings, Lightning Network integration enables automatic heat allocation and billing. Each unit's heat consumption can be measured and billed in real-time, eliminating disputes and ensuring fair cost distribution.

The technology also enables dynamic pricing models where heating costs can fluctuate based on demand, time of day, or energy market conditions. During periods of high Bitcoin mining profitability, heating costs could be reduced or even negative, with the mining rewards subsidizing the heat delivery.

Lightning Network's programmable money features allow for sophisticated heating contracts. For example, heating could be automatically paid for using mining rewards, creating a closed-loop system where the heating system essentially pays for itself.

These innovations represent just the beginning of what's possible when combining Lightning Network technology with hashrate heating systems. As the technology matures, we expect to see even more creative applications that further reduce heating costs and increase system efficiency.`,
      author: 'Mike',
      date: 'December 5, 2024',
      category: ['lightning', 'payments', 'bitcoin'],
      image: 'https://images.pexels.com/photos/7567620/pexels-photo-7567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '6 min read'
    },
    {
      id: 'mining-pool-selection',
      title: 'Choosing the Right Mining Pool for Your Heating System',
      excerpt: 'A comprehensive guide to selecting mining pools that maximize both heating efficiency and mining rewards.',
      content: `Selecting the right mining pool is crucial for optimizing both the heating performance and financial returns of your hashrate heating system. Different pools offer varying fee structures, payout methods, and operational characteristics that can significantly impact your overall experience.

For heating applications, pool reliability is paramount. Unlike pure mining operations that can tolerate brief downtime, heating systems need consistent operation to maintain comfort. Look for pools with 99.9%+ uptime records and multiple backup servers.

Payout frequency is another critical consideration. Heating systems benefit from regular, predictable income streams to offset energy costs. Pools offering daily or weekly payouts provide better cash flow management than those with monthly or threshold-based payments.

Geographic proximity can affect both latency and regulatory compliance. Pools located closer to your heating system will have lower latency, potentially improving mining efficiency. Additionally, local pools may offer better compliance with regional regulations and tax requirements.

Fee structures vary significantly between pools. While lower fees mean higher net rewards, the cheapest option isn't always the best. Consider the total value proposition, including reliability, support quality, and additional services.

Some pools offer specialized services for heating applications, such as temperature-based mining intensity adjustment or integration with smart home systems. These features can significantly enhance the heating system's performance and user experience.

Finally, consider the pool's long-term viability and reputation within the Bitcoin community. Established pools with strong track records are generally safer choices for long-term heating installations.`,
      author: 'Tyler Stevens',
      date: 'December 3, 2024',
      category: ['mining', 'bitcoin', 'heating'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '8 min read'
    },
    {
      id: 'residential-vs-commercial',
      title: 'Residential vs Commercial Hashrate Heating: Key Differences',
      excerpt: 'Understanding the unique considerations and opportunities for hashrate heating in residential versus commercial applications.',
      content: `Residential and commercial hashrate heating applications have distinct characteristics that influence system design, economics, and implementation strategies.

Residential systems typically focus on simplicity and aesthetics. Homeowners want heating solutions that integrate seamlessly with their living spaces without creating noise or visual disruption. This drives demand for quieter, more compact units that can be easily installed in existing homes.

Commercial applications, by contrast, often prioritize maximum efficiency and return on investment. Businesses are typically more tolerant of larger, more complex systems if they deliver superior financial performance. This allows for more sophisticated heat recovery and distribution systems.

Scale differences create varying economic dynamics. Residential systems usually range from 1-10kW, while commercial installations can exceed 100kW. Larger commercial systems benefit from economies of scale in both equipment costs and operational efficiency.

Regulatory considerations also differ significantly. Residential installations typically face fewer regulatory hurdles, while commercial systems may require permits, inspections, and compliance with building codes. However, commercial installations may qualify for business tax incentives not available to residential users.

Maintenance requirements vary as well. Residential systems need to be largely maintenance-free, while commercial installations can justify more complex systems with higher maintenance requirements if they deliver proportionally higher returns.

The decision between residential and commercial applications often comes down to the specific use case, available space, and financial objectives. Both markets offer significant opportunities for hashrate heating adoption.`,
      author: 'Dylan',
      date: 'November 28, 2024',
      category: ['heating', 'bitcoin', 'mining'],
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '6 min read'
    },
    {
      id: 'future-of-heating',
      title: 'The Future of Heating: Beyond Bitcoin Mining',
      excerpt: 'Exploring emerging technologies and trends that will shape the next generation of intelligent heating systems.',
      content: `While Bitcoin mining represents the current frontier of intelligent heating, several emerging technologies promise to further revolutionize how we heat our spaces.

Artificial intelligence and machine learning are enabling heating systems to predict and adapt to usage patterns, weather conditions, and energy prices. These smart systems can automatically optimize between heating output and mining profitability to maximize overall value.

Integration with renewable energy sources creates opportunities for even greater efficiency. Solar-powered hashrate heating systems can mine Bitcoin during peak sun hours while storing heat for later use, creating a completely carbon-neutral heating solution.

The Internet of Things (IoT) is enabling unprecedented connectivity and control. Future heating systems will seamlessly integrate with smart home ecosystems, allowing for voice control, smartphone management, and automatic coordination with other home systems.

Blockchain technology beyond Bitcoin offers additional possibilities. Smart contracts could automate heating service agreements, while tokenization could enable new financing models for heating system installations.

Advanced materials science is developing new heat storage and transfer technologies that could dramatically improve system efficiency. Phase-change materials and advanced heat exchangers promise to capture and distribute heat more effectively than current technologies.

As these technologies mature and converge, we can expect heating systems to become increasingly intelligent, efficient, and profitable. The future of heating isn't just about staying warm - it's about creating value while doing so.`,
      author: 'Tyler Stevens',
      date: 'November 25, 2024',
      category: ['heating', 'bitcoin', 'mining'],
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      readTime: '9 min read'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category.includes(activeCategory)
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null

  if (selectedPostData) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        {/* Article Header */}
        <div className="bg-white dark:bg-surface-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
            >
              ← Back to Blog
            </button>
            <h1 className="text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              {selectedPostData.title}
            </h1>
            <div className="flex items-center text-surface-600 dark:text-surface-400 space-x-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{selectedPostData.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{selectedPostData.date}</span>
              </div>
              <span>{selectedPostData.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <img
            src={selectedPostData.image}
            alt={selectedPostData.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {selectedPostData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-surface-600 dark:text-surface-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            EXERGY Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as BlogCategory)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {post.category.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm capitalize"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
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
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
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