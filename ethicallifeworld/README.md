# EthicalLifeWorld Website

A modern, responsive homepage for EthicalLifeWorld built with React, Vite, Tailwind CSS, and GSAP animations.

## Features

- **Modern Design**: Clean, professional design with a focus on ethics and sustainability
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: GSAP with ScrollTrigger for engaging scroll-based animations
- **Interactive Components**: Hover effects, transitions, and dynamic content
- **Accessibility**: Built with accessibility best practices in mind
- **Performance Optimized**: Fast loading times with Vite bundling

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP & ScrollTrigger** - Animation library
- **JavaScript** - No TypeScript for simplicity

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with navigation
│   ├── About.jsx         # About section with stats and features
│   ├── Mission.jsx       # Mission, vision, and values
│   ├── Services.jsx      # Services offered with CTA
│   ├── Testimonials.jsx  # Client testimonials and partners
│   └── Footer.jsx        # Footer with contact info
├── App.jsx               # Main app component
├── App.css               # Custom styles and animations
├── index.css             # Tailwind CSS imports and global styles
└── main.jsx              # App entry point
```

## Sections Overview

### 1. Hero Section
- Navigation bar with smooth scroll links
- Compelling headline with gradient text
- Call-to-action buttons
- Hero image placeholder with floating elements

### 2. About Section
- Statistics cards with company metrics
- Feature highlights with icons
- About image placeholder

### 3. Mission & Vision
- Mission and vision statements in cards
- Core values grid with icons
- Mission vision image placeholder

### 4. Services
- Service cards with detailed features
- Call-to-action section
- Services image placeholder

### 5. Testimonials
- Client testimonials with ratings
- Partner/client logos
- Newsletter signup form
- Community testimonials image placeholder

### 6. Footer
- Company information and social links
- Quick navigation links
- Contact information
- Legal links

## Design Features

- **Color Scheme**: Blue primary colors with gray secondary colors
- **Typography**: Inter font family for modern readability
- **Image Placeholders**: Professional placeholder sections for future images
- **Cards**: Consistent card design with hover effects
- **Gradients**: Subtle gradients for visual appeal
- **Animations**: Scroll-triggered animations for engagement

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ethicallifeworld
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue shades for main branding
- Secondary colors: Gray shades for text and backgrounds

### Content
All content is easily editable within the component files:
- Hero messaging in `Hero.jsx`
- Statistics and features in `About.jsx`
- Mission/vision statements in `Mission.jsx`
- Service descriptions in `Services.jsx`
- Testimonials in `Testimonials.jsx`

### Images
Replace image placeholders by:
1. Adding images to `src/assets/`
2. Importing them in components
3. Replacing the placeholder divs with `<img>` tags

### Animations
GSAP animations can be customized in each component's `useEffect` hooks. Common patterns:
- Fade in from bottom: `y: 50, opacity: 0`
- Fade in from left: `x: -50, opacity: 0`
- Scale animations: `scale: 0.8, opacity: 0`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for demonstration purposes. Please ensure you have the right to use any content or images you add to the site.

## Support

For questions or support, please contact the development team or create an issue in the repository.
