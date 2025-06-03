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
    image: '/images/products/void-walker-cap.svg',
    description: '4 EMBROIDERED DESIGNS - CLASSIC BASEBALL CAP SHAPE - VENTILATION EYELETS EMBROIDERED ON TOP - ADJUSTABLE BUCKLE IN THE BACK',
    category: 'Caps',
    stock: 8
  },
  {
    id: 'dc002',
    name: 'DELUSIONAL GLOVES',
    price: 18.99,
    image: '/images/products/delusional-gloves.svg',
    description: 'Professional work gloves with DELUSIONAL branding and safety symbols.',
    category: 'Gloves',
    stock: 12,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'dc003',
    name: 'BLACK TRACKSUIT SET',
    price: 89.99,
    image: '/images/products/black-tracksuit.svg',
    description: 'Complete hoodie and pants set with signature styling.',
    category: 'Sets',
    stock: 5,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'dc004',
    name: 'DELUSIONAL TEE',
    price: 32.99,
    image: '/images/products/delusional-tee.svg',
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
    image: '/images/products/beanie.svg',
    description: 'Ribbed knit beanie with DC label.',
    category: 'Caps',
    stock: 10
  },
  {
    id: 'dc006',
    name: 'NIGHTMARE SCARF',
    price: 28.99,
    image: '/images/products/scarf.svg',
    description: 'Black scarf with fringe details and NIGHTMARE embroidery.',
    category: 'Accessories',
    stock: 7
  }
];

const productCategories = ['All', 'T-Shirts', 'Caps', 'Gloves', 'Sets', 'Accessories'];

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

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

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(mockProducts);
    } else {
      setFilteredProducts(mockProducts.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen" style={{ background: '#000000' }}>
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 text-center overflow-hidden" 
        style={{ background: '#000000' }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Terminal header */}
          <div className="mb-8 font-mono text-xs" style={{ color: '#DC143C' }}>
            <p>{'>'} system_time: {currentDateTime}</p>
            <p>{'>'} connection_status: UNSTABLE</p>
            <p>{'>'} reality_integrity: COMPROMISED</p>
            <p>{'>'} products_loaded: {filteredProducts.length}</p>
          </div>

          {/* Main heading with glitch effect */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-creepy mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#CCCCCC' }}
          >
            <span className="glitch-text text-shadow-red" data-text="WELCOME TO THE">
              WELCOME TO THE
            </span>
            <br />
            <span 
              className="text-5xl md:text-7xl lg:text-8xl text-shadow-crimson animate-flicker"
              style={{ color: '#DC143C' }}
            >
              DELUSIONAL CLUB
            </span>
          </h1>

          <div className={`space-y-4 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl font-mono" style={{ color: '#CCCCCC' }}>
              {'>'} WHERE SANITY GOES TO DIE {'<'}
            </p>
            <p className="text-lg font-mono max-w-2xl mx-auto leading-relaxed" style={{ color: '#DC143C' }}>
              Embrace the madness. Question everything. <br/>
              Reality is just another lie they told you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            >
              JOIN THE VOID
            </button>
          </div>

          {/* Warning banner */}
          <div 
            className="retro-border p-4 mx-auto max-w-lg"
            style={{ background: 'rgba(139, 0, 0, 0.2)' }}
          >
            <p className="font-mono text-sm" style={{ color: '#CCCCCC' }}>
              ⚠️ WARNING: PROLONGED EXPOSURE MAY CAUSE ⚠️<br/>
              EXISTENTIAL DREAD • REALITY GLITCHES • ENLIGHTENMENT
            </p>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse-slow"
            style={{ background: 'rgba(220, 20, 60, 0.1)' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse"
            style={{ background: 'rgba(139, 0, 0, 0.1)' }}
          ></div>
        </div>
      </section>

      {/* Category Filter & Products Section */}
      <section id="catalog" className="py-16 px-4" style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div 
              className="inline-block retro-border px-6 py-3 mb-6"
              style={{ background: 'rgba(26, 5, 5, 0.3)' }}
            >
              <h2 className="text-2xl md:text-3xl font-creepy text-shadow-red" style={{ color: '#CCCCCC' }}>
                DELUSION CATALOG
              </h2>
            </div>
            <p className="font-mono text-sm max-w-2xl mx-auto mb-8" style={{ color: '#DC143C' }}>
              {'>'} HANDCRAFTED IN THE VOID {'<'}<br/>
              {'>'} SHIPPED FROM ANOTHER DIMENSION {'<'}
            </p>

            {/* Category Filter - Elite Ware Style */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'btn-creepy' 
                      : ''
                  }`}
                  style={{
                    border: selectedCategory === category ? '1px solid #DC143C' : '1px solid #8B0000',
                    color: selectedCategory === category ? '#CCCCCC' : '#DC143C',
                    background: selectedCategory === category ? 'linear-gradient(45deg, #1A0505, #8B0000)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.background = 'rgba(220, 20, 60, 0.1)';
                      e.currentTarget.style.borderColor = '#DC143C';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = '#8B0000';
                    }
                  }}
                >
                  {category} {category !== 'All' && `(${mockProducts.filter(p => p.category === category).length})`}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - Elite Ware Inspired Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Stats Section - Elite Ware Style */}
          <div className="text-center mb-8">
            <div 
              className="inline-block retro-border px-8 py-4"
              style={{ background: 'rgba(26, 5, 5, 0.2)' }}
            >
              <div className="font-mono text-sm space-y-1" style={{ color: '#CCCCCC' }}>
                <p>{'>'} Total Products: {mockProducts.length}</p>
                <p>{'>'} Categories: {productCategories.length - 1}</p>
                <p>{'>'} Items in Stock: {mockProducts.reduce((total, product) => total + (product.stock || 0), 0)}</p>
                <p className="text-blood-red">{'>'} Sanity Level: CRITICAL</p>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button 
              className="btn-creepy px-12 py-4 rounded font-mono text-lg uppercase tracking-wider"
              style={{ color: '#CCCCCC' }}
              onClick={() => setSelectedCategory('All')}
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Terminal Section */}
      <section className="py-12 px-4" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="retro-border p-8"
            style={{ background: 'rgba(26, 5, 5, 0.2)' }}
          >
            <h3 className="text-2xl font-creepy mb-4 text-shadow-crimson" style={{ color: '#DC143C' }}>
              SYSTEM MESSAGE
            </h3>
            <div className="font-mono text-sm space-y-2" style={{ color: '#CCCCCC' }}>
              <p>{'>'} You have entered a restricted zone</p>
              <p>{'>'} Your reality privileges have been revoked</p>
              <p>{'>'} Welcome to the other side</p>
              <p>{'>'} Product catalog initialized: {mockProducts.length} items loaded</p>
              <p className="mt-4" style={{ color: '#8B0000' }}>{'>'} There is no exit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
