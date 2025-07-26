import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { marked } from 'marked'
import { getBlogPostById, BlogPost } from '../utils/blogLoader'

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        
        if (id) {
          const foundPost = await getBlogPostById(id)
          
          if (foundPost) {
            setPost(foundPost)
          } else {
            setError('Blog post not found')
          }
        } else {
          setError('No blog post ID provided')
        }
      } catch (err) {
        setError('Failed to load blog post')
        console.error('Error loading blog post:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [id])

  if (loading) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-surface-200 dark:bg-surface-700 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-surface-200 dark:bg-surface-700 rounded w-3/4 mb-6"></div>
            <div className="h-64 bg-surface-200 dark:bg-surface-700 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded"></div>
              <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-5/6"></div>
              <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              {error || 'Blog post not found'}
            </h1>
            <p className="text-surface-600 dark:text-surface-400">
              The blog post you're looking for doesn't exist or couldn't be loaded.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  })

  const htmlContent = marked(post.content)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {post && (
        <Helmet>
          <title>{post.title} | EXERGY Blog</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={`${post.category.join(', ')}, hashrate heating, EXERGY blog`} />
          <meta name="author" content={post.author} />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content={post.author} />
          <meta property="og:image" content={post.image} />
        </Helmet>
      )}
      
      {/* Article Header */}
      <div className="bg-white dark:bg-surface-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Blog Posts
          </Link>
          <h1 className="text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-surface-600 dark:text-surface-400 space-x-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.category.map((cat) => (
              <span
                key={cat}
                className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm capitalize"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
          <div 
            alt={`Featured image for blog post: ${post.title}`}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPostDetail