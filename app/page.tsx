'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

// Updated products based on client specifications
const products = [
  {
    id: 'dc001',
    name: 'DELUSIONAL BASEBALL CAP',
    price: 25.00,
    image: '/images/products/cap.png',
    description: 'Classic baseball cap with embroidered DELUSIONAL branding.',
    category: 'Caps',
    stock: 8
  },
  {
    id: 'dc002',
    name: 'DELUSIONAL FITTED CAP',
    price: 35.00,
    image: '/images/products/cap.png',
    description: 'Premium fitted cap with structured design.',
    category: 'Caps',
    stock: 12,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'dc003',
    name: 'DELUSIONAL NITRILE GLOVES',
    price: 20.00,
    image: '/images/products/gloves.png',
    description: 'Professional grade nitrile gloves with DELUSIONAL branding.',
    category: 'Accessories',
    stock: 15,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'dc004',
    name: 'DELUSIONAL HEADBAND',
    price: 15.00,
    image: '/images/products/headband.png',
    description: 'Comfortable headband with signature DELUSIONAL design.',
    category: 'Accessories',
    stock: 20
  },
  {
    id: 'dc005',
    name: 'DELULU HEAVYWEIGHT T-SHIRT',
    price: 30.00,
    image: '/images/products/tee.png',
    description: 'Premium heavyweight cotton tee with DELULU graphics.',
    category: 'Apparel',
    stock: 10,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'dc006',
    name: 'DELUSIONAL CLUB SET',
    price: 100.00,
    image: '/images/products/tracksuit.png',
    description: 'Complete set including hoodie and pants.',
    category: 'Sets',
    stock: 5,
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1337);

  useEffect(() => {
    setIsLoaded(true);
    
    // Update time display with user's local timezone
    const updateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    // Simulate visitor counter increment
    const randomIncrement = Math.floor(Math.random() * 3) + 1;
    setVisitorCount(prev => prev + randomIncrement);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Windows XP Style */}
      <section 
        id="home"
        className="py-20 px-4 text-center bg-black" 
        style={{ paddingTop: '2rem' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Retro GIFs and Decorations */}
          <div className="flex justify-center items-center mb-4 space-x-4">
            <img 
              src="https://web.archive.org/web/20091027120427im_/http://geocities.com/Area51/Corridor/6533/new.gif" 
              alt="NEW!" 
              className="pixelated-image"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <img 
              src="https://web.archive.org/web/20091027120427im_/http://geocities.com/Area51/Corridor/6533/cool.gif" 
              alt="COOL!" 
              className="pixelated-image"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* System Time Only */}
          <div className="mb-8 font-mono text-xs text-red-400 winxp-window p-4">
            <div className="text-center">
              <p suppressHydrationWarning>
                SYSTEM TIME: {isLoaded ? currentDateTime : 'LOADING...'}
              </p>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6 text-red-400 uppercase tracking-wider">
            DELUSIONAL CLUB OFFICIAL WEBSITE
          </h1>

          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl font-mono text-white uppercase">
              PREMIUM STREETWEAR FOR THE ENLIGHTENED
            </p>
            <p className="text-lg font-mono max-w-2xl mx-auto leading-relaxed text-gray-300">
              Quality merchandise crafted for those who see beyond the ordinary.
            </p>
          </div>

          {/* Hit Counter and Retro Elements */}
          <div className="flex justify-center items-center mb-8 space-x-8">
            <div className="winxp-window p-2">
              <p className="font-mono text-xs text-red-400 mb-1">VISITOR COUNT:</p>
              <div className="flex justify-center">
                <img 
                  src="https://www.cutercounter.com/hits.php?id=gexdnnoq&nd=6&style=1" 
                  alt={`Visitor counter: ${visitorCount}`}
                  className="pixelated-image"
                  onError={(e) => {
                    // Fallback to text counter if image fails
                    e.currentTarget.outerHTML = `<div class="font-mono text-red-400 text-lg">${visitorCount.toLocaleString()}</div>`;
                  }}
                />
              </div>
            </div>
            
            <div className="winxp-window p-2">
              <p className="font-mono text-xs text-red-400 mb-1">BEST VIEWED IN:</p>
              <p className="font-mono text-xs text-gray-300">INTERNET EXPLORER 6.0</p>
              <p className="font-mono text-xs text-gray-300">800x600 RESOLUTION</p>
            </div>
          </div>

          {/* Under Construction GIF */}
          <div className="mb-8">
            <img 
              src="https://web.archive.org/web/20091020175011im_/http://www.textfiles.com/underconstruction/HeHeartlandPark2601underconstructionbar9.gif" 
              alt="Under Construction" 
              className="mx-auto pixelated-image"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="winxp-window px-6 py-3 mb-6 inline-block">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-red-400 uppercase">
                PRODUCT CATALOG
              </h2>
            </div>
            <p className="font-mono text-sm max-w-2xl mx-auto text-gray-300">
              PREMIUM QUALITY - WORLDWIDE SHIPPING - SECURE CHECKOUT
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                stock={product.stock}
                sizes={product.sizes}
              />
            ))}
          </div>

          {/* Retro Footer Elements */}
          <div className="text-center mt-16 space-y-4">
            <div className="flex justify-center space-x-4">
              <img 
                src="https://web.archive.org/web/20091027120427im_/http://geocities.com/Area51/Corridor/6533/welcome.gif" 
                alt="Welcome" 
                className="pixelated-image"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <img 
                src="https://web.archive.org/web/20091027120427im_/http://geocities.com/Area51/Corridor/6533/email.gif" 
                alt="Email" 
                className="pixelated-image"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            
            <div className="winxp-window p-3 inline-block">
              <p className="font-mono text-xs text-red-400">LAST UPDATED: {isLoaded ? new Date().toLocaleDateString() : 'LOADING...'}</p>
              <p className="font-mono text-xs text-gray-300">WEBMASTER: ADMIN@DELUSIONAL-CLUB.COM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
