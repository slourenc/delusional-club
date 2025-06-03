'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

// Reduced to 6 products - 4 from client images plus 2 additional
const mockProducts = [
  // From client images
  {
    id: 'dc001',
    name: 'DELUSIONAL CLUB CAP',
    price: 24.99,
    image: '/images/products/cap.png',
    description: '4 EMBROIDERED DESIGNS - CLASSIC BASEBALL CAP SHAPE - VENTILATION EYELETS EMBROIDERED ON TOP - ADJUSTABLE BUCKLE IN THE BACK',
    category: 'Caps',
    stock: 8
  },
  {
    id: 'dc002',
    name: 'DELUSIONAL GLOVES',
    price: 18.99,
    image: '/images/products/gloves.png',
    description: 'Professional work gloves with DELUSIONAL branding and safety symbols.',
    category: 'Gloves',
    stock: 12,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'dc003',
    name: 'BLACK TRACKSUIT SET',
    price: 89.99,
    image: '/images/products/tracksuit.png',
    description: 'Complete hoodie and pants set with signature styling.',
    category: 'Sets',
    stock: 5,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'dc004',
    name: 'DELUSIONAL TEE',
    price: 32.99,
    image: '/images/products/tee.png',
    description: 'Classic black tee with DC delusional branding.',
    category: 'T-Shirts',
    stock: 15,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  // Additional products
  {
    id: 'dc005',
    name: 'VOID BEANIE',
    price: 19.99,
    image: '/images/placeholder-beanie.svg',
    description: 'Ribbed knit beanie with DC label.',
    category: 'Caps',
    stock: 10
  },
  {
    id: 'dc006',
    name: 'NIGHTMARE SCARF',
    price: 28.99,
    image: '/images/products/scarf_front.jpg',
    description: 'Black scarf with fringe details and NIGHTMARE embroidery.',
    category: 'Accessories',
    stock: 7
  }
];

// Gallery media items - Fixed with shorter filenames for git compatibility
const galleryItems = [
  {
    type: 'image',
    src: '/images/ideas/lookcap_85a286ed.jpg',
    title: 'LOOK 1 - CAP & GLOVES'
  },
  {
    type: 'image',
    src: '/images/ideas/lookcap_cd89c54c.jpg',
    title: 'LOOK 1 - ALT VIEW'
  },
  {
    type: 'image',
    src: '/images/ideas/looknitrile_c8c90898.jpg',
    title: 'LOOK 2 - GLOVES'
  },
  {
    type: 'image',
    src: '/images/ideas/looknitrile_1e8f5ac4.jpg',
    title: 'LOOK 2 - ALT 1'
  },
  {
    type: 'image',
    src: '/images/ideas/looknitrile_b934e540.jpg',
    title: 'LOOK 2 - ALT 2'
  },
  {
    type: 'image',
    src: '/images/ideas/lookcap_e4688ede.jpg',
    title: 'LOOK 3 - CAP'
  },
  {
    type: 'image',
    src: '/images/ideas/lookcap_fc8218b0.jpg',
    title: 'LOOK 3 - ALT'
  },
  {
    type: 'image',
    src: '/images/ideas/lookd.i.e_982ad210.jpg',
    title: 'D.I.E SHIRT - SOLD OUT'
  },
  {
    type: 'video',
    src: '/images/ideas/lookwww.delusional-club.com.mp4_52a80912.mp4',
    title: 'PROMO VIDEO'
  },
  {
    type: 'video',
    src: '/images/ideas/lookgo_727fd753.mp4',
    title: 'SHOP PROMO'
  },
  {
    type: 'video',
    src: '/images/ideas/lookgif.mp4_f3cddbc3.mp4',
    title: 'AESTHETIC CLIP'
  },
  {
    type: 'video',
    src: '/images/ideas/lookyuzi_33245f42.mp4',
    title: 'HOODIE SHOWCASE'
  }
];

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    
    // Update time display
    const updateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toISOString().replace('T', ' ').split('.')[0]);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#000000' }}>
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 text-center overflow-hidden" 
        style={{ background: '#000000' }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Terminal header with enhanced data */}
          <div className="mb-8 font-mono text-xs" style={{ color: '#DC143C' }}>
            <p>{'>'} system_time: {currentDateTime}</p>
            <p>{'>'} connection_status: UNSTABLE</p>
            <p>{'>'} reality_integrity: COMPROMISED</p>
            <p>{'>'} products_loaded: {mockProducts.length}</p>
            <p>{'>'} void_level: MAXIMUM</p>
            <p>{'>'} sanity_check: FAILED</p>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-creepy mb-6 opacity-100"
            style={{ color: '#CCCCCC' }}
          >
            <span className="glitch-text text-shadow-red" data-text="WELCOME TO THE">
              WELCOME TO THE
            </span>
            <br />
            <span 
              className="text-5xl md:text-7xl lg:text-8xl text-shadow-crimson"
              style={{ color: '#DC143C' }}
            >
              DELUSIONAL CLUB
            </span>
          </h1>

          <div className="space-y-4 mb-12 opacity-100">
            <p className="text-xl md:text-2xl font-mono" style={{ color: '#CCCCCC' }}>
              {'>'} WHERE SANITY GOES TO DIE {'<'}
            </p>
            <p className="text-lg font-mono max-w-2xl mx-auto leading-relaxed" style={{ color: '#DC143C' }}>
              Embrace the madness. Question everything. <br/>
              Reality is just another lie they told you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-100">
            <button 
              className="btn-creepy px-8 py-4 rounded font-mono text-lg uppercase tracking-wider"
              style={{ color: '#CCCCCC' }}
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              BROWSE CATALOG
            </button>
            <button 
              className="px-8 py-4 rounded font-mono text-lg uppercase tracking-wider transition-all duration-300"
              style={{ 
                border: '1px solid #DC143C',
                color: '#DC143C',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 20, 60, 0.2)';
                e.currentTarget.style.color = '#CCCCCC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#DC143C';
              }}
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW GALLERY
            </button>
          </div>

          {/* Enhanced Warning banner with skull motifs */}
          <div 
            className="retro-border p-4 mx-auto max-w-lg"
            style={{ background: 'rgba(139, 0, 0, 0.2)' }}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-lg">💀</span>
              <span className="text-lg">⚠️</span>
              <span className="text-lg">💀</span>
            </div>
            <p className="font-mono text-sm" style={{ color: '#CCCCCC' }}>
              ⚠️ WARNING: PROLONGED EXPOSURE MAY CAUSE ⚠️<br/>
              EXISTENTIAL DREAD • REALITY GLITCHES • ENLIGHTENMENT
            </p>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl"
            style={{ background: 'rgba(220, 20, 60, 0.1)' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl"
            style={{ background: 'rgba(139, 0, 0, 0.1)' }}
          ></div>
        </div>
      </section>

      {/* Products Section - 3x2 Grid, Fixed Sizing */}
      <section id="catalog" className="py-16 px-4" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-block retro-border px-6 py-3 mb-6"
              style={{ background: 'rgba(26, 5, 5, 0.3)' }}
            >
              <h2 className="text-2xl md:text-3xl font-creepy text-shadow-red" style={{ color: '#CCCCCC' }}>
                DELUSION CATALOG
              </h2>
            </div>
            <p className="font-mono text-sm max-w-2xl mx-auto" style={{ color: '#DC143C' }}>
              {'>'} HANDCRAFTED IN THE VOID {'<'}<br/>
              {'>'} SHIPPED FROM ANOTHER DIMENSION {'<'}
            </p>
          </div>

          {/* Products Grid - 3x2 Layout with Fixed Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockProducts.map((product) => (
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

          {/* Enhanced Terminal style footer for catalog */}
          <div className="text-center mt-16 font-mono text-xs" style={{ color: 'rgba(220, 20, 60, 0.4)' }}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span>💀</span>
              <span>⚠️</span>
              <span>💀</span>
            </div>
            <p>{'>'} catalog_loaded: {mockProducts.length} items {'<'}</p>
            <p>{'>'} reality_status: QUESTIONABLE {'<'}</p>
            <p>{'>'} shipping_dimension: VOID {'<'}</p>
            <p>{'>'} psychological_damage: GUARANTEED {'<'}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4" style={{ background: 'rgba(26, 5, 5, 0.3)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-block retro-border px-6 py-3 mb-6"
              style={{ background: 'rgba(0, 0, 0, 0.8)' }}
            >
              <h2 className="text-2xl md:text-3xl font-creepy text-shadow-red" style={{ color: '#CCCCCC' }}>
                VOID GALLERY
              </h2>
            </div>
            <p className="font-mono text-sm max-w-2xl mx-auto" style={{ color: '#DC143C' }}>
              {'>'} CAPTURED MOMENTS FROM THE ABYSS {'<'}<br/>
              {'>'} REALITY DOCUMENTED BEFORE CORRUPTION {'<'}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="relative group border-2 border-red-900 bg-black overflow-hidden"
                style={{ aspectRatio: '1/1' }}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <video 
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-red-400">💀</span>
                      <span className="text-yellow-400">⚠️</span>
                      <span className="text-red-400">💀</span>
                    </div>
                    <h3 className="font-mono text-xs text-red-400 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 mt-1">
                      {item.type === 'video' ? '[VIDEO]' : '[IMAGE]'}
                    </p>
                  </div>
                </div>

                {/* Corner skulls */}
                <div className="absolute top-1 left-1 text-red-800 text-sm">💀</div>
                <div className="absolute top-1 right-1 text-red-800 text-sm">💀</div>
                <div className="absolute bottom-1 left-1 text-red-800 text-sm">💀</div>
                <div className="absolute bottom-1 right-1 text-red-800 text-sm">💀</div>
              </div>
            ))}
          </div>

          {/* Gallery Footer */}
          <div className="text-center mt-16 font-mono text-xs" style={{ color: 'rgba(220, 20, 60, 0.4)' }}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span>💀</span>
              <span>📸</span>
              <span>💀</span>
            </div>
            <p>{'>'} gallery_items: {galleryItems.length} entries {'<'}</p>
            <p>{'>'} media_corruption: 0% {'<'}</p>
            <p>{'>'} void_aesthetic: MAXIMUM {'<'}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
