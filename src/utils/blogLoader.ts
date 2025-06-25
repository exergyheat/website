import matter from 'gray-matter'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string[]
  image: string
  readTime: string
}

// Use Vite's import.meta.glob to load all markdown files
const blogModules = import.meta.glob('../blog-posts/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
})

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  for (const [path, content] of Object.entries(blogModules)) {
    try {
      // Parse the markdown file with front matter
      const { data, content: markdownContent } = matter(content as string)
      
      // Safely process the category field with more robust error handling
      let categories: string[] = []
      
      try {
        const rawCategory = data.category
        
        if (Array.isArray(rawCategory)) {
          // If it's already an array, filter out any non-string elements
          categories = rawCategory
            .filter(cat => cat != null && typeof cat === 'string')
            .map(cat => cat.trim())
            .filter(cat => cat !== '')
        } else if (typeof rawCategory === 'string' && rawCategory.trim() !== '') {
          // If it's a string, convert to array
          categories = [rawCategory.trim()]
        } else if (rawCategory != null) {
          // If it's some other type, try to convert to string
          const categoryStr = String(rawCategory).trim()
          if (categoryStr !== '' && categoryStr !== 'null' && categoryStr !== 'undefined') {
            categories = [categoryStr]
          }
        }
        // If rawCategory is null, undefined, or empty, categories remains an empty array
      } catch (categoryError) {
        console.warn(`Error processing category for ${path}:`, categoryError)
        categories = [] // Fallback to empty array
      }
      
      // Create the blog post object
      const post: BlogPost = {
        id: data.id || '',
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        content: markdownContent,
        author: data.author || 'Unknown',
        date: data.date || new Date().toISOString(),
        category: categories,
        image: data.image || '',
        readTime: data.readTime || '5 min read'
      }

      posts.push(post)
    } catch (error) {
      console.error(`Error loading blog post from ${path}:`, error)
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllCategories(posts: BlogPost[]): string[] {
  const categories = new Set<string>()
  
  posts.forEach(post => {
    if (Array.isArray(post.category)) {
      post.category.forEach(cat => {
        if (typeof cat === 'string' && cat.trim() !== '') {
          categories.add(cat.trim())
        }
      })
    }
  })
  
  return Array.from(categories).sort()
}