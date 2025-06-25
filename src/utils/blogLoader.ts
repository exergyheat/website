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
  as: 'raw',
  eager: true 
})

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  for (const [path, content] of Object.entries(blogModules)) {
    try {
      // Parse the markdown file with front matter
      const { data, content: markdownContent } = matter(content as string)
      
      // Safely process the category field
      let categories: string[] = []
      if (Array.isArray(data.category)) {
        // Filter out any non-string elements and ensure we have valid strings
        categories = data.category.filter(cat => typeof cat === 'string' && cat.trim() !== '')
      } else if (typeof data.category === 'string' && data.category.trim() !== '') {
        categories = [data.category.trim()]
      }
      // If data.category is undefined, null, or empty, categories remains an empty array
      
      // Create the blog post object
      const post: BlogPost = {
        id: data.id,
        title: data.title,
        excerpt: data.excerpt,
        content: markdownContent,
        author: data.author,
        date: data.date,
        category: categories,
        image: data.image,
        readTime: data.readTime
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
    post.category.forEach(cat => categories.add(cat))
  })
  
  return Array.from(categories).sort()
}