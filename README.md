# 🖤 DELUSIONAL CLUB

**A dark gothic e-commerce experience where sanity goes to die.**

![Delusional Club](https://img.shields.io/badge/Status-UNSTABLE-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## 🌑 OVERVIEW

Welcome to the **DELUSIONAL CLUB** - an alternative fashion e-commerce platform inspired by the dark aesthetics of Hot Topic and Ozzy Osbourne's merchandise sites. This project features a completely black gothic interface with blood-red accents, terminal-style typography, and glitch effects.

### ⚠️ WARNING
> **PROLONGED EXPOSURE MAY CAUSE:**
> - Existential dread
> - Reality glitches  
> - Enlightenment

## 🎯 FEATURES

### 🛍️ Product Catalog
- **12 unique products** across 5 categories:
  - 🖤 **T-Shirts** - Mind fracture designs
  - 🧢 **Caps & Headwear** - Void walker aesthetics
  - 🧤 **Gloves** - Delusional engine series
  - 🎀 **Headbands** - Psycho ward collection
  - 🧣 **Scarfs** - Nightmare series

### 🎨 Dark Gothic Aesthetic
- **Pure black background** (#000000) with blood-red accents (#DC143C)
- **Terminal-style typography** using Courier New monospace
- **Glitch text effects** and scanline overlays
- **CRT monitor simulation** with retro borders
- **Gothic scrollbars** and custom styling

### 🛒 Elite Ware Inspired Features
- **Stock indicators** ("only x remaining...")
- **Category filtering** system
- **Size selection** for applicable products
- **Product statistics** display
- **Professional product cards** with hover effects

### 🔧 Technical Features
- **Pure CSS solution** (no Tailwind to avoid PostCSS errors)
- **SVG product images** based on real product examples
- **Responsive grid layout** (1-4 columns based on screen size)
- **TypeScript** for type safety
- **Automated backup system** for version control

## 🚀 QUICK START

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/delusional-club.git
cd delusional-club

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000` (or next available port).

## 📁 PROJECT STRUCTURE

```
delusional-club/
├── app/                    # Next.js app directory
│   ├── globals.css        # Pure CSS styling (no Tailwind)
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display component
├── public/
│   └── images/
│       └── products/      # SVG product images
├── backups/               # Automated backups
├── backup.ps1            # PowerShell backup script
└── README.md             # This file
```

## 🎨 DESIGN SYSTEM

### Color Palette
```css
--void-black: #000000      /* Primary background */
--blood-red: #DC143C       /* Accent color */
--dark-red: #8B0000        /* Secondary accent */
--light-gray: #CCCCCC      /* Primary text */
--black-red: #1A0505       /* Dark accent */
```

### Typography
- **Primary**: Courier New (monospace)
- **Secondary**: Times New Roman (serif)
- **Effects**: Text shadows, glitch animations

### Components
- **Retro borders** with glowing effects
- **Scanline overlays** for CRT simulation
- **Pulse animations** for interactive elements
- **Gothic scrollbars** with gradient styling

## 🛠️ DEVELOPMENT

### Backup System
Before making major changes, create a backup:

```powershell
# Windows PowerShell
.\backup.ps1 "Description of changes"
```

### Adding Products
1. Create SVG image in `public/images/products/`
2. Add product data to `mockProducts` array in `app/page.tsx`
3. Update categories if needed

### Styling Guidelines
- Use CSS custom properties for colors
- Maintain dark gothic aesthetic
- Add hover effects and transitions
- Include accessibility features (tabindex, aria-labels)

## 🐛 TROUBLESHOOTING

### Console Warnings Fixed
- ✅ **PostCSS errors** - Removed Tailwind, using pure CSS
- ✅ **Image loading** - Added proper fallback handling
- ✅ **TypeScript errors** - Fixed event handler typing

### Common Issues
- **Port conflicts**: Next.js will automatically use next available port
- **Image not loading**: Check SVG file paths in `public/images/products/`
- **Styling issues**: Verify CSS custom properties are defined

## 📦 DEPLOYMENT

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 🤝 CONTRIBUTING

1. Create a backup: `.\backup.ps1 "Your changes"`
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m "Add your feature"`
6. Push: `git push origin feature/your-feature`
7. Create a Pull Request

## 📄 LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 ROADMAP

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Product reviews
- [ ] Wishlist feature
- [ ] Admin dashboard
- [ ] Mobile app

## 💀 ACKNOWLEDGMENTS

- Inspired by **Hot Topic** and **Ozzy Osbourne** merchandise aesthetics
- **Elite Ware** for e-commerce UX patterns
- Gothic and alternative fashion communities
- Terminal and retro computing aesthetics

---

> *"Reality is just another lie they told you."*
> 
> **— DELUSIONAL CLUB**

**🖤 EMBRACE THE MADNESS. QUESTION EVERYTHING. 🖤**
