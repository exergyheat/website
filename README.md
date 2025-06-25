# EXERGY - Heat That Pays

A simple website for Exergy LLC, the leader in Hashrate Heating system feasibility modeling, design and integration.

## Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Modern UI with dynamic animations
- 🧭 Intuitive navigation
- 💻 Interactive components
- 🔍 Search functionality in FAQ
- 📊 Interactive calculators
- 📝 Contact forms
- 📅 Booking system
- 📰 Markdown-based blog system

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with Typography plugin
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Type Checking:** TypeScript
- **Linting:** ESLint
- **Content Management:** Markdown with Gray Matter
- **Markdown Parsing:** Marked

## Project Structure

```
src/
├── blog-posts/         # Markdown blog posts
│   ├── *.md           # Individual blog post files
├── components/         # Reusable UI components
│   ├── Footer.tsx     # Site footer with links and contact info
│   ├── Navbar.tsx     # Main navigation with responsive mobile menu
│   ├── ProjectCarousel.tsx  # Interactive project showcase
│   └── ThemeToggle.tsx      # Dark/light mode switcher
├── contexts/          # React context providers
│   └── ThemeContext.tsx     # Theme management context
├── hooks/            # Custom React hooks
│   └── useTypewriter.ts     # Typewriter animation hook
├── pages/            # Page components
│   ├── About.tsx     # Company information and team
│   ├── Blog.tsx      # Blog listing page
│   ├── BlogPostDetail.tsx  # Individual blog post view
│   ├── BookCall.tsx  # Schedule consultations
│   ├── Calculators.tsx  # ROI and savings calculators
│   ├── Contact.tsx   # Contact information and form
│   ├── Docs.tsx      # Documentation and legal pages
│   ├── Education.tsx # Educational resources
│   ├── FAQ.tsx       # Frequently asked questions
│   ├── Home.tsx      # Landing page
│   ├── Learn.tsx     # Technology learning hub
│   ├── Portfolio.tsx # Project showcase
│   ├── PrivacyPolicy.tsx  # Privacy policy
│   ├── Products.tsx  # Product catalog
│   └── Services.tsx  # Service offerings
├── types/            # TypeScript type definitions
│   └── cal.d.ts      # Cal.com integration types
├── utils/            # Utility functions
│   └── blogLoader.ts # Blog post loading and parsing
├── App.tsx           # Main app component with routing
├── index.css         # Global styles and Tailwind imports
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

The built files will be in the `dist` directory.

## Blog System

The blog system uses Markdown files for content management, making it easy to create and manage blog posts.

### Adding a New Blog Post

1. Create a new `.md` file in `src/blog-posts/`
2. Add front matter at the top of the file:

```markdown
---
id: 'unique-post-id'
title: 'Your Blog Post Title'
excerpt: 'A short description of your blog post.'
author: 'Author Name'
date: 'YYYY-MM-DD'
category: ['category1', 'category2']
image: 'https://images.pexels.com/photos/...'
readTime: 'X min read'
---

Your blog content goes here in Markdown format.

## Subheading

You can use **bold text**, *italic text*, [links](https://example.com), and images:

![Alt text](https://images.pexels.com/photos/...)

- List item 1
- List item 2
```

### Blog Features

- **Automatic category detection**: New categories are automatically added to the filter options
- **Search functionality**: Search through titles, excerpts, and authors
- **Responsive design**: Optimized for all device sizes
- **SEO-friendly URLs**: Clean URLs for each blog post
- **Markdown support**: Full Markdown syntax including images, links, and formatting

## Pages

- **Home** - Landing page with key features and benefits
- **Products** - Comprehensive product catalog
- **Services** - Available services and consulting options
- **About** - Company information and team
- **Learn** - Educational resources and documentation
- **Contact** - Contact information and form
- **Book Call** - Schedule consultations with team members
- **Portfolio** - Showcase of successful implementations
- **Calculators** - ROI and savings calculators
- **Education** - In-depth learning resources
- **Blog** - Company insights and industry updates
- **FAQ** - Frequently asked questions
- **Docs** - Documentation and legal information
- **Privacy Policy** - Legal information

## Components

### Key Components

- `Navbar` - Main navigation with responsive mobile menu
- `Footer` - Site footer with links and contact information
- `ProjectCarousel` - Interactive project showcase
- `ThemeToggle` - Dark/light mode switcher
- `Blog` - Blog listing with search and filtering
- `BlogPostDetail` - Individual blog post viewer

## Development

### Code Style

- Follow React best practices
- Use TypeScript for type safety
- Implement responsive design
- Maintain accessibility standards
- Write semantic HTML
- Use Tailwind CSS for styling

### Best Practices

- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error handling
- Maintain consistent naming conventions
- Document complex logic
- Write reusable components

## Performance Optimizations

- Optimized font loading with system fallbacks
- Lazy loading for non-critical images
- Code splitting with Vite
- Minified production builds
- Efficient bundle chunking
- Optimized Markdown parsing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is proprietary software. All rights reserved.

## Contact

For inquiries, contact us at admin@exergyheat.com

---

Made by EXERGY LLC