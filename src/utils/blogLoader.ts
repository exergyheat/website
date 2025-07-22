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

// Use Vite's import.meta.glob to dynamically import all markdown files
const markdownFiles = import.meta.glob('../blog-posts/*.md', { as: 'raw', eager: true })

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []
  
  // Process each markdown file
  for (const [path, content] of Object.entries(markdownFiles)) {
    try {
      // Parse the markdown file with gray-matter
      const { data: frontMatter, content: markdownContent } = matter(content)
      
      // Extract the filename to use as ID if not provided in frontmatter
      const filename = path.split('/').pop()?.replace('.md', '') || ''
      
      // Create the blog post object
      const post: BlogPost = {
        id: frontMatter.id || filename,
        title: frontMatter.title || 'Untitled',
        excerpt: frontMatter.excerpt || '',
        content: markdownContent,
        author: frontMatter.author || 'Unknown',
        date: frontMatter.date || new Date().toISOString().split('T')[0],
        category: Array.isArray(frontMatter.category) ? frontMatter.category : [],
        image: frontMatter.image || 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        readTime: frontMatter.readTime || '5 min read'
      }
      
      posts.push(post)
    } catch (error) {
      console.error(`Error parsing blog post from ${path}:`, error)
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

export function getBlogPostById(id: string): Promise<BlogPost | undefined> {
  return loadBlogPosts().then(posts => posts.find(post => post.id === id))
}