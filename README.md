# 🌀 DELUSIONAL CLUB - Official Merch Store

Welcome to the **DELUSIONAL CLUB** - where reality goes to die and madness reigns supreme.

## 🔮 Project Overview

A creepy, old-internet aesthetic merch website built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by retro terminal interfaces and glitch aesthetics, this site serves as the official merchandise store for the Delusional Club brand.

## ✨ Features

- **🕸️ Creepy Old-Internet Aesthetic**: Terminal-inspired UI with glitch effects
- **⚡ Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **📱 Responsive Design**: Works seamlessly across all devices
- **🛒 E-commerce Ready**: Product cards, shopping cart, and checkout flow
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🎭 Custom Animations**: Glitch effects, scanlines, and CRT monitor simulation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom themes
- **Icons**: Custom CSS-based icons and effects
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd delusional-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
delusional-club/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with creepy effects
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display component
├── public/                # Static assets (logos, images, etc.)
├── tailwind.config.ts     # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Color Palette

- **Void Black**: `#0A0A0A` - Primary background
- **Ghost White**: `#F8F8FF` - Primary text
- **Toxic Green**: `#39FF14` - Accent/highlight color
- **Blood Red**: `#8B0000` - Error/warning states
- **Dark Purple**: `#2D0B3D` - Secondary backgrounds

### Typography

- **Primary**: Courier New (monospace) - Terminal aesthetic
- **Secondary**: Times New Roman (serif) - Creepy headers
- **System**: Arial (sans-serif) - Fallback

### Animations

- **Glitch Effect**: Text distortion animation
- **Scanlines**: CRT monitor simulation
- **Flicker**: Old monitor effect
- **Pulse**: Breathing glow effects

## 🛒 E-commerce Features

- Product catalog with grid layout
- Individual product cards with:
  - Placeholder image support
  - Size selection
  - Add to cart functionality
  - Pricing display
  - Stock indicators
- Shopping cart with item count
- Responsive design for mobile shopping

## 📝 Content Management

Currently uses mock data for products. To add real products:

1. Replace mock data in `app/page.tsx`
2. Add actual product images to the `public/` folder
3. Update product information (names, prices, descriptions)
4. Implement backend integration for dynamic content

## 🌐 Deployment

The site is configured for easy deployment on Vercel:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel by connecting your GitHub repository.

## 🎯 TODO

- [ ] Add real product images
- [ ] Implement actual shopping cart logic
- [ ] Add payment processing
- [ ] Create admin panel for product management
- [ ] Add user authentication
- [ ] Implement order tracking
- [ ] Add more pages (About, Contact, FAQ)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Delusional Club.

## 🆘 Support

For support, email: `help@delusionalclub.net`

---

**⚠️ WARNING: PROLONGED EXPOSURE MAY CAUSE EXISTENTIAL DREAD, REALITY GLITCHES, AND ENLIGHTENMENT ⚠️**

*Embrace the madness. Question everything. Reality is optional.*
