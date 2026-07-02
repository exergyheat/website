import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { getBlogPostByIdSync } from '../utils/blogLoader'

// Posts are repo-controlled markdown, but sanitize anyway as defense in depth
// (marked v8+ removed its sanitizer). DOMPurify needs a DOM — during
// prerendering (Node) it's unsupported, which is fine for repo-controlled content.
function renderMarkdown(content: string): string {
  const html = marked.parse(content, { breaks: true, gfm: true, async: false }) as string
  return DOMPurify.isSupported ? DOMPurify.sanitize(html) : html
}

// Frontmatter images are usually site-relative (/foo.png) but the loader's
// fallback is an absolute URL — handle both
function absoluteImageUrl(image: string): string {
  return image.startsWith('http') ? image : `https://exergyheat.com${image}`
}

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>()
  // Posts are bundled markdown — lookup is synchronous, which also lets
  // prerendering capture the full article (content + meta) for crawlers
  const post = useMemo(() => (id ? getBlogPostByIdSync(id) : undefined), [id])

  if (!post) {
    return (
      <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
        <Helmet>
          <title>Post Not Found | Exergy</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/newsroom"
            className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Newsroom
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Blog post not found
            </h1>
            <p className="text-surface-600 dark:text-surface-400">
              The blog post you're looking for doesn't exist or couldn't be loaded.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const htmlContent = renderMarkdown(post.content)
  const postImageUrl = absoluteImageUrl(post.image)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {post && (
        <Helmet>
          <title>{post.title} | Exergy</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={`${post.category.join(', ')}, building-integrated mining, Exergy newsroom`} />
          <meta name="author" content={post.author} />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content={post.author} />
          <link rel="canonical" href={`https://exergyheat.com/newsroom/${id}`} />
          <meta property="og:title" content={`${post.title} | Exergy`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:url" content={`https://exergyheat.com/newsroom/${id}`} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={postImageUrl} />
          <meta name="twitter:title" content={`${post.title} | Exergy`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={postImageUrl} />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": [postImageUrl],
            "datePublished": post.date,
            "dateModified": post.date,
            "author": [{ "@type": "Organization", "name": post.author, "url": "https://exergyheat.com" }],
            "publisher": {
              "@type": "Organization",
              "name": "Exergy",
              "url": "https://exergyheat.com",
              "logo": { "@type": "ImageObject", "url": "https://exergyheat.com/Logo1_black_horizontal.png" }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://exergyheat.com/newsroom/${id}` }
          })}</script>
        </Helmet>
      )}
      
      {/* Article Header */}
      <div className="bg-white dark:bg-surface-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/newsroom"
            className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Newsroom
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
                timeZone: 'UTC',
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
          alt={`Featured image for: ${post.title}`}
          className="w-full rounded-lg shadow-lg"
          decoding="async"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  )
}

export default BlogPostDetail