# Pine Street Technology

**Build clean, ship fast—from idea to impact.**

Portfolio website for Pine Street Technology, showcasing our software projects and services.

## Tech Stack

- **Vue 3** with TypeScript and Composition API
- **Vite** for blazing fast builds
- **Tailwind CSS** with custom Pine green theme
- **Font Awesome** for icons
- **Formspree** for contact form handling
- **GitHub Pages** for hosting

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

All content is managed via JSON files in `src/content/`:

- `site.json` - Site metadata, social links, contact info
- `about.json` - About section content
- `projects.json` - Project portfolio items

Edit these files to update content without touching components.

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Custom Domain Setup

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS records to point to GitHub Pages
3. Enable custom domain in repository settings

## Features

- ✅ Single-page application with smooth scrolling
- ✅ Dark mode (default) with theme toggle
- ✅ Fully responsive design
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized with JSON-LD schema
- ✅ Google Analytics integration
- ✅ Contact form with spam protection
- ✅ Project filtering by technology

## License

© 2025 Pine Street Technology. All rights reserved.
