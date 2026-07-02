# EXERGY - Heat That Pays


A comprehensive website for Exergy LLC, the leader in Hashrate Heating system feasibility modeling, design and integration. This modern React application showcases our products, services, and expertise in Bitcoin mining heat reuse technology.

## Features

- 🌙 **Dark/Light Mode Support** - Automatic system detection with manual override
- 📱 **Fully Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI with Dynamic Animations** - Framer Motion powered interactions
- 🧭 **Intuitive Navigation** - Clean, accessible navigation structure
- 💻 **Interactive Components** - Engaging user interface elements
- 🔍 **Search Functionality** - Searchable FAQ and blog content
- 📊 **Interactive Calculators** - Coming soon: ROI and savings calculators
- 📝 **Contact Forms** - HubSpot integrated contact and booking forms
- 📅 **Booking System** - Integrated HubSpot meetings for consultations
- 📰 **Markdown-based Blog System** - Dynamic blog with category filtering
- 🏭 **Product Catalog** - Comprehensive hashrate heating product showcase
- 🎯 **SEO Optimized** - Complete meta tags, structured data, and sitemap
- 📈 **Media Integration** - Featured press coverage carousel
- 🔧 **Service Showcase** - Detailed service offerings with interactive elements

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router v6 with scroll restoration
- **Styling:** Tailwind CSS with Typography plugin
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Build Tool:** Vite with route-level code splitting and optimized chunking
- **Type Checking:** TypeScript with strict mode (typechecked on every build)
- **Linting:** ESLint with React hooks plugin
- **Content Management:** Markdown with a lightweight built-in frontmatter parser
- **Markdown Parsing:** Marked + DOMPurify sanitization
- **SEO:** React Helmet Async + build-time prerendering (static HTML per route for crawlers and AI agents)
- **Forms:** HubSpot integration
- **Fonts:** Futura PT with system fallbacks

## Project Structure

```
src/
├── blog-posts/         # Markdown blog posts
│   ├── book-ch1.md    # Chapter 1: Why Hashrate Heaters Make Sense
│   └── book-ch2.md    # Chapter 2: Hashrate Heating for Homes and Businesses
├── components/         # Reusable UI components
│   ├── Footer.tsx     # Site footer with comprehensive links
│   ├── MediaHighlights.tsx  # Auto-scrolling media coverage carousel
│   ├── Navbar.tsx     # Main navigation with responsive mobile menu
│   ├── ProjectCarousel.tsx  # Interactive project showcase
│   ├── ScrollToTop.tsx      # Route change scroll restoration
│   └── ThemeToggle.tsx      # Dark/light/system mode switcher
├── contexts/          # React context providers
│   └── ThemeContext.tsx     # Theme management with system detection
├── data/              # Static data and configurations
│   ├── mediaHighlights.ts   # Press coverage data
│   └── portfolioProjects.ts # Project showcase data
├── hooks/            # Custom React hooks
│   └── useTypewriter.ts     # Typewriter animation effect
├── pages/            # Page components
│   ├── About.tsx     # Company information and team
│   ├── Blog.tsx      # Blog listing with search and filtering
│   ├── BlogPostDetail.tsx  # Individual blog post viewer
│   ├── BookCall.tsx  # HubSpot meetings integration
│   ├── Calculators.tsx  # Coming soon calculators page
│   ├── Contact.tsx   # Contact form and information
│   ├── Docs.tsx      # Documentation and legal pages
│   ├── Education.tsx # Educational resources and content
│   ├── FAQ.tsx       # Searchable frequently asked questions
│   ├── Home.tsx      # Landing page with hero and features
│   ├── Learn.tsx     # Technology learning hub
│   ├── Portfolio.tsx # Project showcase and case studies
│   ├── PrivacyPolicy.tsx  # Privacy policy and data protection
│   ├── Products.tsx  # Product catalog with filtering
│   └── Services.tsx  # Service offerings with interactive elements
├── types/            # TypeScript type definitions
│   └── cal.d.ts      # Cal.com integration types
├── utils/            # Utility functions
│   └── blogLoader.ts # Blog post loading and parsing utilities
├── App.tsx           # Main app component with routing
├── index.css         # Global styles and Tailwind configuration
└── main.tsx          # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/exergy-website.git
cd exergy-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build pipeline: regenerates `sitemap.xml` → typechecks → bundles with Vite → prerenders every route (including newsroom posts) to static HTML in `dist/` → copies `serve.json` for SPA routing. Prerendered HTML means crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, social scrapers) still see full page content, per-page meta tags, and JSON-LD.

### Serving Production Build

```bash
npm run serve
```

This serves the production build locally on port 3000 with proper SPA routing.

## Blog System

The blog system uses Markdown files with front matter for easy content management.

### Adding a New Blog Post

1. Create a new `.md` file in `src/blog-posts/`
2. Add front matter at the top:

```markdown
---
id: 'unique-post-id'
title: 'Your Blog Post Title'
excerpt: 'A compelling description of your blog post content.'
author: 'Author Name'
date: 'YYYY-MM-DD'
category: ['category1', 'category2']
image: 'https://images.pexels.com/photos/...'
readTime: 'X min read'
---

Your blog content goes here in Markdown format.

## Subheading

You can use **bold text**, *italic text*, [links](https://example.com), and images.

- List item 1
- List item 2
```

### Blog Features

- **Automatic category detection**: New categories are automatically added to filter options
- **Search functionality**: Search through titles, excerpts, and authors
- **Responsive design**: Optimized for all device sizes
- **SEO-friendly URLs**: Clean URLs for each blog post with proper meta tags
- **Full Markdown support**: Including images, links, and formatting
- **Dynamic loading**: Vite's import.meta.glob for efficient loading

## Product Catalog

The product catalog supports multiple categories with filtering:

- **Space Heating**: Standalone heating solutions
- **Forced Air**: HVAC integrated systems
- **Hydronic & Water**: Water-based heating solutions
- **Control Systems**: Smart control hardware
- **Commercial & Industrial**: Large-scale solutions

### Adding Products

Products are defined in `src/pages/Products.tsx` with comprehensive specifications, pricing, and feature details.

## SEO Optimization

The website includes comprehensive SEO features:

- **Meta Tags**: Title, description, keywords for all pages
- **Open Graph**: Social media optimization with dynamic images
- **Structured Data**: Organization schema in index.html
- **Sitemap**: Auto-generated XML sitemap
- **Canonical URLs**: Proper canonical link tags
- **Performance**: Optimized images and code splitting

## Deployment

### Static Hosting (Recommended)

The project includes `serve.json` for proper SPA routing on static hosts like Netlify or Vercel.

### Server Deployment

For self-hosting, use the systemd service file in `admin/exergy-website.service` (serves `dist/` with `serve`). Security and cache headers for both deployments live in `vercel.json` and `serve.json`.

## Development

### Code Style

- **React Best Practices**: Functional components with hooks
- **TypeScript**: Strict type checking enabled
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Lazy loading and code splitting

### Key Components

- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Comprehensive site footer with links
- `ProjectCarousel` - Auto-advancing project showcase
- `MediaHighlights` - Auto-scrolling press coverage
- `ThemeToggle` - System-aware theme switching
- `Blog` - Dynamic blog with search and filtering
- `BlogPostDetail` - Individual post viewer with SEO

## Performance Optimizations

- **Font Loading**: Optimized with system fallbacks
- **Image Optimization**: Lazy loading for non-critical images
- **Code Splitting**: Vite-powered bundle optimization
- **Minification**: Terser for production builds
- **Caching**: Proper cache headers for static assets
- **Bundle Analysis**: Optimized chunk splitting

## Integrations

- **HubSpot Forms**: Contact and newsletter signup
- **HubSpot Meetings**: Consultation booking system
- **External Links**: Press coverage and partner sites
- **Social Media**: X (Twitter) and GitHub links

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## License

This project is proprietary software. All rights reserved.

## Contact

For inquiries about the website or hashrate heating solutions:

- **Email**: contact@exergyheat.com
- **Website**: https://exergyheat.com
- **Address**: 3700 N Franklin St, Denver, CO 80205

---

**Built with ⚡ by EXERGY LLC - Heat That Pays**
