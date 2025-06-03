'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  stock?: number;
  sizes?: string[];
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  description, 
  category = 'T-Shirts',
  stock = 0,
  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  // Elite Ware style stock display
  const getStockDisplay = () => {
    if (stock <= 0) return 'OUT OF STOCK';
    if (stock <= 3) return `only ${stock} remaining...`;
    if (stock <= 5) return `${stock} left in stock`;
    return `${stock} available`;
  };

  const getStockColor = () => {
    if (stock <= 0) return '#8B0000';
    if (stock <= 3) return '#DC143C';
    return '#CCCCCC';
  };

  return (
    <div 
      className="cursor-pointer transition-all duration-500 rounded-lg overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name}`}
      style={{ 
        background: '#000000',
        border: '2px solid #1A0505',
        ...(isHovered && { borderColor: '#DC143C' })
      }}
    >
      {/* Glitch overlay when hovered */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-red/20 to-blood-red/20 z-10 pointer-events-none animate-pulse"></div>
      )}

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden" style={{ background: 'rgba(26, 5, 5, 0.3)' }}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback if image doesn't load
            const target = e.currentTarget as HTMLImageElement;
            const fallback = target.nextElementSibling as HTMLElement;
            if (target && fallback) {
              target.style.display = 'none';
              fallback.style.display = 'flex';
            }
          }}
        />
        
        {/* Fallback content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', background: 'linear-gradient(45deg, #1A0505, #000000)' }}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center animate-pulse-slow" style={{ background: 'linear-gradient(45deg, #8B0000, #DC143C)' }}>
              <span className="font-mono text-xs" style={{ color: '#CCCCCC' }}>
                {category === 'T-Shirts' ? 'TEE' : 
                 category === 'Caps' ? 'CAP' :
                 category === 'Gloves' ? 'GLV' :
                 category === 'Sets' ? 'SET' :
                 category === 'Accessories' ? 'ACC' : 'IMG'}
              </span>
            </div>
            <p className="font-mono text-xs tracking-wider" style={{ color: '#DC143C' }}>
              [{category?.toUpperCase()}]
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: 'rgba(204, 204, 204, 0.5)' }}>
              image_loading.jpg
            </p>
          </div>
        </div>
        
        {/* Stock indicator - Elite Ware Style */}
        <div 
          className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-mono"
          style={{ 
            background: 'rgba(0, 0, 0, 0.8)',
            color: getStockColor(),
            border: `1px solid ${getStockColor()}`
          }}
        >
          {getStockDisplay()}
        </div>

        {/* Category badge */}
        <div 
          className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-mono"
          style={{ 
            background: 'rgba(220, 20, 60, 0.8)',
            color: '#CCCCCC'
          }}
        >
          {category}
        </div>

        {/* Click to view overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        >
          <div className="text-center">
            <p className="font-mono text-sm font-bold" style={{ color: '#DC143C' }}>
              CLICK TO VIEW
            </p>
            <p className="font-mono text-xs" style={{ color: '#CCCCCC' }}>
              &gt; PRODUCT DETAILS &lt;
            </p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-mono text-lg mb-2 group-hover:animate-pulse" style={{ color: '#CCCCCC' }}>
          {name.toUpperCase()}
        </h3>
        
        {description && (
          <p className="font-mono text-xs mb-3 leading-relaxed" style={{ color: 'rgba(220, 20, 60, 0.8)' }}>
            {description.length > 80 ? `${description.substring(0, 80)}...` : description}
          </p>
        )}

        {/* Price - Elite Ware Style */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-mono text-lg" style={{ color: '#CCCCCC' }}>${price} EUR</span>
            <div className="font-mono text-xs" style={{ color: 'rgba(220, 20, 60, 0.6)' }}>
              Regular price
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button
          className="w-full px-4 py-3 rounded font-mono text-sm uppercase tracking-wider transition-all duration-300 border-2"
          style={{
            borderColor: '#DC143C',
            color: '#DC143C',
            background: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(220, 20, 60, 0.2)';
            e.currentTarget.style.color = '#CCCCCC';
            e.stopPropagation();
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#DC143C';
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          VIEW DETAILS
        </button>

        {/* Terminal-style footer */}
        <div className="mt-3 font-mono text-xs" style={{ color: 'rgba(220, 20, 60, 0.4)' }}>
          {'>'} product_id: {id} {'<'}
          <br />
          {'>'} stock_level: {stock} {'<'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 