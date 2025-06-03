# 🖤 Delusional Club - Official Merch Store

> *Where reality goes to die* 💀

A dark, gothic e-commerce website built with Next.js, featuring a comprehensive product catalog with alternative streetwear and accessories.

![Delusional Club Preview](https://via.placeholder.com/800x400/000000/DC143C?text=DELUSIONAL+CLUB)

## ✨ Features

### Current Features
- **Dark Gothic Aesthetic**: Pure black backgrounds with blood-red accents
- **Product Catalog**: 12 unique products across 5 categories
- **Category Filtering**: Seamless product browsing by type
- **Stock Management**: Real-time stock indicators and availability
- **Size Selection**: Dynamic sizing based on product category
- **Responsive Design**: Mobile-first approach with pure CSS
- **Custom SVG Graphics**: Hand-crafted product illustrations
- **Search Functionality**: Live product search
- **Terminal Styling**: Monospace fonts and glitch effects

### Product Categories
- 👕 **Tees**: Alternative graphic tees
- 🧢 **Caps**: Street-style fitted caps and beanies  
- 🧤 **Gloves**: Work gloves with custom branding
- 🎯 **Headbands**: Performance headbands
- 🧣 **Scarfs**: Statement accessories

## 🚀 Deployment Guide

### Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are automatically detected from `netlify.toml`

3. **Environment Variables** (if needed later):
   - Go to Site Settings > Environment Variables
   - Add any required API keys or configuration

### Deploy to Other Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
```bash
npm run build
# Deploy the `out` folder to GitHub Pages
```

## 💳 Making It E-Commerce Ready

To handle real-life purchases, you'll need to integrate payment processing:

### Payment Integration Options

#### 1. Stripe (Recommended)
```bash
npm install stripe @stripe/stripe-js
```

**Benefits:**
- Industry standard
- Strong security
- Global payment methods
- Excellent documentation
- Built-in fraud protection

**Basic Setup:**
1. Create Stripe account
2. Get API keys (publishable & secret)
3. Add checkout components
4. Handle webhooks for order completion

#### 2. PayPal
```bash
npm install @paypal/react-paypal-js
```

#### 3. Square
```bash
npm install squareup
```

### Required Backend Services

#### Option A: Serverless Functions
- **Netlify Functions** (since you're using Netlify)
- **Vercel Functions**
- **AWS Lambda**

#### Option B: Full Backend
- **Next.js API Routes**
- **Express.js + Node.js**
- **Supabase** (Backend as a Service)

### Database Options
- **Supabase** (PostgreSQL + Auth)
- **Firebase** (NoSQL + Auth)
- **MongoDB Atlas**
- **PlanetScale** (MySQL)

### E-Commerce Implementation Steps

1. **Set up payment processor** (Stripe recommended)
2. **Add shopping cart functionality**
3. **Create checkout flow**
4. **Set up order management system**
5. **Add user authentication**
6. **Implement inventory tracking**
7. **Set up email notifications**
8. **Add admin dashboard**

### Legal Requirements
- **Terms of Service**
- **Privacy Policy**
- **Return/Refund Policy**
- **GDPR Compliance** (if serving EU customers)
- **Business License**
- **Tax Registration**

## Quick E-Commerce Starter

Here's a basic example of adding Stripe checkout:

```typescript
// Install: npm install stripe @stripe/stripe-js

// components/CheckoutButton.tsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const CheckoutButton = ({ product }: { product: Product }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ 
          price_data: {
            currency: 'usd',
            product_data: { name: product.name },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        }],
      }),
    });
    
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button onClick={handleCheckout} className="checkout-btn">
      Buy Now - ${product.price}
    </button>
  );
};
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
git clone https://github.com/yourusername/delusional-club.git
cd delusional-club
npm install
npm run dev
```

### Build
```bash
npm run build    # Build for production
npm run export   # Export static files
```

### File Structure
```
delusional-club/
├── app/
│   ├── globals.css      # Pure CSS styling
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Footer.tsx       # Footer
│   └── ProductCard.tsx  # Product display
├── public/
│   └── images/          # SVG product images
├── netlify.toml         # Deployment config
└── next.config.ts       # Next.js config
```

## 🎨 Design System

### Colors
- **Primary Black**: `#000000`
- **Blood Red**: `#DC143C`
- **Neon Green**: `#00FF00`
- **Toxic Yellow**: `#FFFF00`
- **Warning Orange**: `#FF6600`

### Typography
- **Primary**: `'Courier New', monospace`
- **Headings**: Bold, uppercase transforms
- **Body**: Regular weight with line-height 1.6

## 📝 Roadmap

### Phase 1: Core E-Commerce ✅
- [x] Product catalog
- [x] Category filtering
- [x] Stock management
- [x] Responsive design

### Phase 2: Payment Integration
- [ ] Stripe checkout
- [ ] Shopping cart
- [ ] Order management
- [ ] Email notifications

### Phase 3: Advanced Features  
- [ ] User accounts
- [ ] Order history
- [ ] Wishlist
- [ ] Product reviews
- [ ] Admin dashboard

### Phase 4: Business Features
- [ ] Inventory management
- [ ] Analytics dashboard
- [ ] Marketing tools
- [ ] Multi-currency support

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/delusional-club/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/delusional-club/discussions)

---

*Built with 🖤 by the Delusional Club team*
