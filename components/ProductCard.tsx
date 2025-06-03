'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckoutButton } from './CheckoutButton';

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
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize && category !== 'Headbands' && category !== 'Scarfs') {
      alert('ERROR: SELECT_SIZE.EXE');
      return;
    }
    console.log(`Adding ${name} (${selectedSize}) to cart`);
    // Add to cart logic here
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
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

  // Category-specific sizing
  const getSizesForCategory = () => {
    switch (category) {
      case 'Gloves':
        return ['S', 'M', 'L', 'XL'];
      case 'Caps':
        return ['One Size'];
      case 'Headbands':
      case 'Scarfs':
        return ['One Size'];
      default:
        return sizes;
    }
  };

  const productSizes = getSizesForCategory();
  const needsSizeSelection = !['One Size'].includes(productSizes[0]);

  return (
    <div 
      className="bg-void-black border-2 border-black-red hover:border-blood-red transition-all duration-500 rounded-lg overflow-hidden group relative crt-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: '#000000' }}
    >
      {/* Glitch overlay when hovered */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-red/20 to-blood-red/20 z-10 pointer-events-none animate-pulse"></div>
      )}

      {/* Product Image */}
      <div className="relative h-64 bg-black-red/30 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="product-image w-full h-full object-cover"
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
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black-red to-void-black" style={{ display: 'none' }}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-dark-red to-blood-red rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-light-gray font-mono text-xs">
                {category === 'T-Shirts' ? 'TEE' : 
                 category === 'Caps' ? 'CAP' :
                 category === 'Gloves' ? 'GLV' :
                 category === 'Headbands' ? 'HBD' :
                 category === 'Scarfs' ? 'SCF' : 'IMG'}
              </span>
            </div>
            <p className="text-blood-red font-mono text-xs tracking-wider">
              [{category?.toUpperCase()}]
            </p>
            <p className="text-light-gray/50 font-mono text-xs mt-1">
              image_loading.jpg
            </p>
          </div>
        </div>
        
        {/* Scanlines effect */}
        <div className="absolute inset-0 scanlines opacity-30"></div>
        
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
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-light-gray font-creepy text-lg mb-2 text-shadow-red group-hover:animate-glitch">
          {name.toUpperCase()}
        </h3>
        
        {description && (
          <p className="text-blood-red/80 font-mono text-xs mb-3 leading-relaxed">
            {description}
          </p>
        )}

        {/* Price - Elite Ware Style */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-light-gray font-mono text-lg">${price.toFixed(2)} USD</span>
            <div className="text-blood-red/60 font-mono text-xs">
              Regular price
            </div>
          </div>
        </div>

        {/* Size Selection */}
        {needsSizeSelection && (
          <div className="mb-4">
            <p className="text-light-gray font-mono text-sm mb-2">SELECT_SIZE:</p>
            <div className="flex flex-wrap gap-2">
              {productSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleSizeSelect(size))}
                  className={`px-3 py-1 border font-mono text-xs transition-all duration-300 ${
                    selectedSize === size
                      ? 'border-blood-red bg-blood-red/20 text-blood-red text-shadow-crimson'
                      : 'border-black-red text-light-gray hover:border-blood-red hover:text-blood-red'
                  }`}
                  tabIndex={0}
                  aria-label={`Select size ${size}`}
                  disabled={stock <= 0}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Checkout Button */}
        <div className="space-y-3">
          {stock > 0 ? (
            <>
              <CheckoutButton 
                product={{
                  id: parseInt(id) || 0,
                  name,
                  price,
                  category: category || 'T-Shirts'
                }}
              />
              
              {/* Secondary add to cart for shopping later */}
              <button
                onClick={handleAddToCart}
                onKeyDown={(e) => handleKeyDown(e, handleAddToCart)}
                className="w-full px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all duration-300 border border-blood-red/30 text-blood-red/70 hover:border-blood-red hover:text-blood-red"
                tabIndex={0}
                aria-label={`Add ${name} to cart for later`}
                disabled={needsSizeSelection && !selectedSize}
              >
                {needsSizeSelection 
                  ? selectedSize 
                    ? `ADD_TO_CART [${selectedSize}]` 
                    : 'SELECT_SIZE_FIRST'
                  : 'ADD_TO_CART'
                }
              </button>
            </>
          ) : (
            <button
              className="w-full px-4 py-3 rounded font-mono text-sm uppercase tracking-wider bg-dark-red/50 border border-dark-red text-dark-red cursor-not-allowed"
              disabled
            >
              OUT_OF_STOCK
            </button>
          )}
        </div>

        {/* Terminal-style footer */}
        <div className="mt-3 text-blood-red/40 font-mono text-xs">
          {'>'} product_id: {id} {'<'}
          <br />
          {'>'} stock_level: {stock} {'<'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 