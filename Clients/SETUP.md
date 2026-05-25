# Wood Breeze Website — Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Quick Start

```bash
# Navigate into the project
cd wood-breeze-website

# Install dependencies
npm install

# Start the development server
npm start
# → Opens at http://localhost:3000
```

## Production Build

```bash
npm run build
# → Outputs to /build folder, ready for deployment
```

## Deploy to Netlify / Vercel

Drag the `/build` folder to netlify.com/drop, or connect the repo to Vercel for CI/CD.

---

## File Structure

```
wood-breeze-website/
├── public/
│   └── index.html              # HTML shell + Google Fonts imports
├── src/
│   ├── index.js                # React entry point
│   ├── App.jsx                 # Root component + layout
│   ├── design-system/
│   │   ├── tokens.css          # All CSS custom properties (colors, type, spacing)
│   │   └── Birds.jsx           # Bird SVG component library
│   ├── styles/
│   │   └── globals.css         # Global resets, utility classes, shared styles
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver hook for scroll animations
│   └── components/
│       ├── Navbar/             # Sticky nav with scroll state + mobile menu
│       ├── Hero/               # Full-screen carousel with animated birds
│       ├── About/              # Split layout storytelling section
│       ├── Stats/              # Animated count-up statistics
│       ├── Amenities/          # Tab-based amenity showcase
│       ├── Connectivity/       # Distance route cards + nearby developments
│       ├── Gallery/            # Bento grid with lightbox
│       ├── Testimonials/       # Auto-advancing testimonial carousel
│       ├── Contact/            # Split layout contact form + details
│       └── Footer/             # Multi-column footer with social links
└── package.json
```

## Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-forest-deep` | `#1C3A1C` | Hero backgrounds, nav, footer |
| `--color-forest` | `#2D5A1B` | Primary brand green |
| `--color-gold` | `#C9A84C` | Premium accent, CTAs |
| `--color-cream` | `#FAF7F0` | Main backgrounds |
| `--color-brown-deep` | `#2C1810` | Primary text |

### Typography
- **Headings**: Playfair Display (display) + Cormorant Garamond (section)
- **Body**: Inter
- **Labels/Caps**: Lato

### Bird Design Tokens
Import from `src/design-system/Birds.jsx`:
- `<BirdSilhouette>` — single wing-spread silhouette
- `<BirdFlock>` — multi-bird formation
- `<PerchedBird>` — detailed perched bird
- `<AnimatedBirds>` — CSS-animated flying birds layer
- `<BirdDivider>` — decorative section divider
- `<BrandMark>` — leaf + bird logo mark

## EmailJS Integration (Contact Form)
1. Sign up at emailjs.com
2. Create a service + email template
3. Install: `npm install @emailjs/browser`
4. In `Contact.jsx`, replace the mock `setTimeout` with:
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY');
```

## Replacing Placeholder Gallery Images
Add real photography to `public/images/gallery/` and update `Gallery.jsx`:
```jsx
// Replace the gradient background prop with:
style={{ backgroundImage: `url('/images/gallery/entrance.jpg')`, backgroundSize: 'cover' }}
```
