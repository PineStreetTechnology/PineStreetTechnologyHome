# Setup Instructions

## Node Version Requirement

This project requires Node.js 20.19+ or 22.12+. You have Node 24.9.0 installed, but need to activate it.

### Switch to Node 24

If using `nvm`:
```bash
nvm use 24
```

Or if using another Node version manager, switch to Node 24.9.0.

### Verify Node Version
```bash
node --version
# Should show v24.9.0
```

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## First Time Setup Checklist

- [ ] Switch to Node 24+
- [ ] Run `npm install`
- [ ] Run `npm run dev` to test locally
- [ ] Update Formspree endpoint in `src/content/site.json` if needed
- [ ] Replace placeholder images in `src/content/projects.json`
- [ ] Add your photo to `src/content/about.json`
- [ ] Update social links in `src/content/site.json`

## Deployment

1. Create GitHub repository: `PineStreetTechnology/PineStreetTechnologyHome`
2. Push code to `main` branch
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"
5. Configure custom domain in settings (PineStreetTechnology.com)
6. Update DNS records to point to GitHub Pages

The site will automatically deploy on every push to `main`.
