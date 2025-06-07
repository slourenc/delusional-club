'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  sizes?: string[];
}

const ProductCard = ({ id, name, price, image, description, category, stock, sizes }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : '');

  const handleAddToCart = () => {
    console.log(`Adding ${name} to cart`, { id, size: selectedSize });
    // Add to cart logic would go here
  };

  return (
    <div className="product-card p-4 h-full flex flex-col">
      {/* Product Image */}
      <div className="mb-4">
        <img 
          src={image} 
          alt={name}
          className="product-image w-full"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-beanie.svg';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow flex flex-col">
        <div className="mb-2">
          <span className="font-mono text-xs text-red-400 uppercase">{category}</span>
        </div>
        
        <h3 className="font-mono text-sm font-bold text-white mb-2 uppercase leading-tight">
          {name}
        </h3>
        
        <p className="font-mono text-xs text-gray-300 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="font-mono text-lg font-bold text-red-400">
            €{price.toFixed(2)}
          </span>
        </div>

        {/* Size Selection */}
        {sizes && sizes.length > 0 && (
          <div className="mb-4">
            <label className="font-mono text-xs text-red-400 uppercase block mb-2">
              Size:
            </label>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full font-mono text-xs"
            >
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2 mt-auto">
          <button
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={`winxp-button w-full py-2 font-mono text-xs uppercase tracking-wider ${
              stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {stock === 0 ? 'OUT OF STOCK' : 'ADD TO CART'}
          </button>
          
          <Link href={`/product/${id}`}>
            <button className="winxp-button w-full py-2 font-mono text-xs uppercase tracking-wider">
              VIEW DETAILS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 