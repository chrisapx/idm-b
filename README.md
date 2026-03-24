# Vogel.haus - Exact Clone

This is an exact clone of the [vogel.haus](https://www.vogel.haus) website, created with pixel-perfect precision based on comprehensive analysis of the original site.

## Project Structure

```
idm-b/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Animations and interactions
├── images/             # All images and assets
│   ├── logo-stars.png
│   ├── clemens-photo.png
│   ├── florian-photo.png
│   ├── vienna-skyline.png
│   ├── florian-signature.png
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── app-screenshot-*.png
│   ├── badge-*.svg
│   ├── blog-placeholder.svg
│   └── newsletter-visual.svg
└── README.md
```

## Features

### ✅ Exact Clone Features

- **Pixel-perfect design** matching the original vogel.haus website
- **Responsive design** with 3 breakpoints:
  - Desktop (1200px+)
  - Tablet (810px - 1199px)
  - Mobile (< 810px)
- **Typography system** using exact fonts:
  - Inter & Inter Display
  - EB Garamond
  - DM Sans
  - Instrument Serif
  - Just Another Hand (for polaroid captions)
- **Color tokens** matching the original design system
- **Animations**:
  - Hero gradient canvas animations
  - Scroll-based parallax effects
  - Fade-in animations for sections
  - Hover effects on interactive elements
  - Auto-scrolling carousel
- **All sections included**:
  - Navigation bar (fixed, with scroll behavior)
  - Hero section with gradient background
  - Polaroids & Letter card section
  - Apps showcase
  - Carousel
  - Social proof (reviews & badges)
  - Services grid
  - Technologies showcase
  - Blog section
  - Newsletter signup

### Design Details

- **Superellipse border radius** (corner-shape: superellipse(1.7))
- **Grain textures** and paper textures
- **Gradient backgrounds** matching the original
- **Box shadows** with multiple layers
- **Backdrop filters** for glassmorphism effects
- **Vienna skyline** illustration in letter card
- **Polaroid photo effects** with rotation and scaling
- **Fold effects** on letter card

## Color Palette

- **Cream White**: `#fffdfa` (Primary background)
- **Light Beige**: `#faf6f0`
- **Deep Navy**: `#081562`
- **Lavender**: `#9e97ff`
- **Bright Blue**: `#1573ff`
- **Bright Orange**: `#fe4e02`

## Typography Scale

- **Display**: 88px → 72px → 56px (Instrument Serif)
- **H2/H3**: 48px → 40px → 36px (Inter Display)
- **Body**: 22px → 20px → 17px (Inter Display)
- **Small**: 14px - 16px

## How to View

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Technical Implementation

### HTML
- Semantic HTML5 structure
- Schema.org markup for SEO
- Open Graph tags for social sharing
- Proper accessibility attributes

### CSS
- CSS Custom Properties (variables) for design tokens
- Flexbox and CSS Grid layouts
- CSS animations and transitions
- Media queries for responsive design
- Backdrop filters for glassmorphism
- Complex gradients and textures

### JavaScript
- Canvas-based gradient animations
- Intersection Observer for scroll animations
- Parallax effects
- Carousel auto-scroll
- Smooth scrolling navigation
- Lazy loading for images
- Dynamic navigation styling on scroll

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Original design and content © Vogelhaus Apps GmbH
This is an educational clone created for demonstration purposes.

**Original website**: [https://www.vogel.haus](https://www.vogel.haus)
**Location**: Vienna, Austria
**Studio**: Indie iOS studio specializing in app design, SwiftUI development, and branding

## License

This clone is created for educational/demonstration purposes only. All rights to the original design and content belong to Vogelhaus Apps GmbH.
