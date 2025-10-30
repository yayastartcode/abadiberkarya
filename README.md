# Landing Page - Jasa Konstruksi Indonesia

Solusi konstruksi profesional untuk pembangunan gedung, rumah, dan infrastruktur di Indonesia.

## Tech Stack

- **React** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI Components
- **Lucide React** - Icons

## Features

- ✅ Responsive mobile-first design
- ✅ Sticky navigation header
- ✅ Hero section with CTA
- ✅ Services showcase (6 services)
- ✅ Gallery with 8 project images
- ✅ FAQ with accordion
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ Social media links

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## Development

The development server runs on `http://localhost:5173`

```bash
npm run dev
```

## Build

Production build outputs to `dist/` directory:

```bash
npm run build
```

## Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Full-width banner with CTA
3. **Services** - 6 construction services
4. **Gallery** - 8 project images in grid
5. **FAQ** - 6 common questions with accordion
6. **Contact** - Form + Google Maps + contact info
7. **Footer** - Links and social media

## Customization

- Edit company info in `Contact.jsx`
- Update services in `Services.jsx`
- Replace gallery images in `Gallery.jsx`
- Modify FAQ content in `FAQ.jsx`
- Change colors in Tailwind classes (blue-600 is the primary color)

## License

ISC
