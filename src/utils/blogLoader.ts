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
const markdownFiles = import.meta.glob('../blog-posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

type FrontMatter = Record<string, string | string[]>

// Minimal frontmatter parser for the simple YAML subset used in blog posts:
// scalar values (quoted or bare, including dates) and inline arrays of strings.
// Replaces gray-matter, which required a Buffer polyfill in the browser.
export function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) {
    return { data: {}, content: raw }
  }

  const data: FrontMatter = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator === -1 || line.trim() === '' || line.trimStart().startsWith('#')) continue

    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim()
    if (!key) continue

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map(item => unquote(item.trim()))
        .filter(item => item !== '')
    } else {
      data[key] = unquote(value)
    }
  }

  return { data, content: raw.slice(match[0].length) }
}

function unquote(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  return value
}

function asString(value: string | string[] | undefined): string | undefined {
  return typeof value === 'string' && value !== '' ? value : undefined
}

// Posts come from an eager import.meta.glob, so loading is synchronous;
// synchronous access also lets pages render fully during prerendering (SSG)
export function loadBlogPostsSync(): BlogPost[] {
  const posts: BlogPost[] = []

  // Process each markdown file
  for (const [path, raw] of Object.entries(markdownFiles)) {
    try {
      const { data: frontMatter, content } = parseFrontMatter(raw)

      // Extract the filename to use as ID if not provided in frontmatter
      const filename = path.split('/').pop()?.replace('.md', '') || ''

      const post: BlogPost = {
        id: asString(frontMatter.id) || filename,
        title: asString(frontMatter.title) || 'Untitled',
        excerpt: asString(frontMatter.excerpt) || '',
        content,
        author: asString(frontMatter.author) || 'Unknown',
        date: asString(frontMatter.date) || new Date().toISOString().split('T')[0],
        category: Array.isArray(frontMatter.category) ? frontMatter.category : [],
        image: asString(frontMatter.image) || 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        readTime: asString(frontMatter.readTime) || '5 min read'
      }

      posts.push(post)
    } catch (error) {
      console.error(`Error parsing blog post from ${path}:`, error)
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostByIdSync(id: string): BlogPost | undefined {
  return loadBlogPostsSync().find(post => post.id === id)
}

// Async wrappers kept for compatibility
export async function loadBlogPosts(): Promise<BlogPost[]> {
  return loadBlogPostsSync()
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
  return Promise.resolve(getBlogPostByIdSync(id))
}
