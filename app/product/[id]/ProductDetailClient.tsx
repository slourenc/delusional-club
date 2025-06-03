'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckoutButton } from '../../../components/CheckoutButton';

interface ProductDetailClientProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock: number;
    materials?: string;
    embroidery?: string;
    sizes?: string[];
  };
}

export const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [scarfView, setScarfView] = useState<'front' | 'back'>('front');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getSizesForCategory = () => {
    switch (product.category) {
      case 'Gloves':
        return ['S', 'M', 'L', 'XL'];
      case 'Caps':
      case 'Accessories':
        return ['One Size'];
      case 'Sets':
        return ['S', 'M', 'L', 'XL', 'XXL'];
      default:
        return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    }
  };

  const productSizes = getSizesForCategory();
  const needsSizeSelection = !['One Size'].includes(productSizes[0]);

  // Handle scarf image switching
  const getCurrentImage = () => {
    if (product.id === 'dc006') {
      return scarfView === 'front' 
        ? '/images/products/scarf_front.jpg' 
        : '/images/products/scarf_back.jpg';
    }
    return product.image;
  };

  return (
    <div className="min-h-screen" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dark Web Warning Banner */}
        <div className="mb-8 border-2 border-red-600 bg-black p-4 text-center font-mono">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <span className="text-2xl">💀</span>
            <span className="text-red-600 font-bold">⚠️ RESTRICTED ACCESS ZONE ⚠️</span>
            <span className="text-2xl">💀</span>
          </div>
          <p className="text-xs text-red-400">UNAUTHORIZED VIEWING MAY RESULT IN PERMANENT REALITY DAMAGE</p>
        </div>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 font-mono text-sm">
            <button 
              onClick={() => router.push('/')}
              className="transition-colors duration-200"
              style={{ color: '#DC143C' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#CCCCCC'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#DC143C'}
            >
              Home
            </button>
            <span style={{ color: '#CCCCCC' }}>/</span>
            <button 
              onClick={() => router.push('/#catalog')}
              className="transition-colors duration-200"
              style={{ color: '#DC143C' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#CCCCCC'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#DC143C'}
            >
              Products
            </button>
            <span style={{ color: '#CCCCCC' }}>/</span>
            <span style={{ color: '#CCCCCC' }}>{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="relative">
            <div className="relative">
              <img 
                src={getCurrentImage()}
                alt={product.name}
                className="w-full h-[500px] object-contain rounded-lg border-2 border-red-900"
                style={{ background: '#1A0505' }}
              />
              
              {/* Skull corner decorations */}
              <div className="absolute -top-3 -left-3 text-xl">💀</div>
              <div className="absolute -top-3 -right-3 text-xl">💀</div>
              <div className="absolute -bottom-3 -left-3 text-xl">💀</div>
              <div className="absolute -bottom-3 -right-3 text-xl">💀</div>

              {/* Scarf view switcher */}
              {product.id === 'dc006' && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setScarfView('front')}
                      className={`px-3 py-1 font-mono text-xs border ${
                        scarfView === 'front' ? 'bg-red-800 text-white' : 'text-red-400 border-red-800'
                      }`}
                    >
                      FRONT
                    </button>
                    <button
                      onClick={() => setScarfView('back')}
                      className={`px-3 py-1 font-mono text-xs border ${
                        scarfView === 'back' ? 'bg-red-800 text-white' : 'text-red-400 border-red-800'
                      }`}
                    >
                      BACK
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Warning Signs Below Image */}
            <div className="mt-6 space-y-3">
              <div className="border border-yellow-600 bg-black p-3 text-center font-mono text-xs">
                <div className="flex items-center justify-center space-x-2">
                  <span>⚠️</span>
                  <span className="text-yellow-400">DANGER: SANITY LEVELS CRITICAL</span>
                  <span>⚠️</span>
                </div>
              </div>
              <div className="border border-red-600 bg-black p-3 text-center font-mono text-xs">
                <div className="flex items-center justify-center space-x-2">
                  <span>🚫</span>
                  <span className="text-red-400">REALITY.EXE HAS STOPPED WORKING</span>
                  <span>🚫</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <div className="space-y-6">
              {/* Skull Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-4 text-2xl mb-2">
                  <span>💀</span>
                  <span>💀</span>
                  <span>💀</span>
                </div>
                <p className="font-mono text-xs text-red-400">PRODUCT FROM THE ABYSS</p>
              </div>

              {/* Product Title */}
              <div>
                <h1 className="text-3xl font-mono font-bold mb-2" style={{ color: '#CCCCCC' }}>
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-mono" style={{ color: '#CCCCCC' }}>
                    €{product.price} EUR
                  </span>
                  <span className="text-sm font-mono" style={{ color: 'rgba(220, 20, 60, 0.6)' }}>
                    Taxes included.
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <div className="border border-red-800 bg-black p-4">
                <h3 className="font-mono text-sm mb-3 text-red-400 flex items-center">
                  <span className="mr-2">💀</span>
                  VOID MANIFEST
                  <span className="ml-2">💀</span>
                </h3>
                <p className="font-mono text-sm leading-relaxed" style={{ color: '#CCCCCC' }}>
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              {needsSizeSelection && product.stock > 0 && (
                <div>
                  <h3 className="font-mono text-sm mb-3 flex items-center" style={{ color: '#CCCCCC' }}>
                    <span className="mr-2">⚠️</span>
                    Size
                    <span className="ml-2">⚠️</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {productSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 border font-mono text-sm transition-all duration-300 ${
                          selectedSize === size ? 'border-white bg-white text-black' : ''
                        }`}
                        style={{
                          borderColor: selectedSize === size ? '#FFFFFF' : '#8B0000',
                          color: selectedSize === size ? '#000000' : '#CCCCCC',
                          background: selectedSize === size ? '#FFFFFF' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedSize !== size) {
                            e.currentTarget.style.borderColor = '#DC143C';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedSize !== size) {
                            e.currentTarget.style.borderColor = '#8B0000';
                          }
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-mono text-sm mb-3 flex items-center" style={{ color: '#CCCCCC' }}>
                  <span className="mr-2">🚫</span>
                  Quantity
                  <span className="ml-2">🚫</span>
                </h3>
                <div className="flex items-center border" style={{ borderColor: '#8B0000', width: 'fit-content' }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 font-mono transition-colors duration-200"
                    style={{ color: '#CCCCCC', background: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(220, 20, 60, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-mono" style={{ color: '#CCCCCC', borderLeft: '1px solid #8B0000', borderRight: '1px solid #8B0000' }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 font-mono transition-colors duration-200"
                    style={{ color: '#CCCCCC', background: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(220, 20, 60, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buy Button */}
              <div className="space-y-4">
                {product.stock > 0 ? (
                  <>
                    <CheckoutButton 
                      product={{
                        id: parseInt(product.id.replace('dc', '')) || 0,
                        name: product.name,
                        price: product.price,
                        category: product.category
                      }}
                    />
                    
                    <button className="w-full py-3 border-2 font-mono text-sm uppercase tracking-wider transition-all duration-300"
                      style={{
                        borderColor: '#DC143C',
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
                      Add to cart
                    </button>
                  </>
                ) : (
                  <button 
                    className="w-full py-3 border-2 font-mono text-sm uppercase tracking-wider cursor-not-allowed"
                    style={{
                      borderColor: '#8B0000',
                      color: '#8B0000',
                      background: 'transparent'
                    }}
                    disabled
                  >
                    Sold out
                  </button>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="border-2 border-red-600 bg-black p-4 mt-8">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-xl">
                    <span>💀</span>
                    <span>⚠️</span>
                    <span>☠️</span>
                    <span>🚫</span>
                    <span>💀</span>
                  </div>
                  <p className="font-mono text-xs text-red-400">VOID PURCHASE INITIATED</p>
                  <p className="font-mono text-xs text-yellow-400">REALITY CORRUPTION IN PROGRESS</p>
                  <div className="font-mono text-xs text-gray-500 mt-4">
                    <p>{'>'} product_id: {product.id}</p>
                    <p>{'>'} void_level: MAXIMUM</p>
                    <p>{'>'} sanity_check: FAILED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 