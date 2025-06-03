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

  const getStockColor = () => {
    if (product.stock <= 0) return '#8B0000';
    if (product.stock <= 3) return '#DC143C';
    return '#CCCCCC';
  };

  return (
    <div className="min-h-screen" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
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
          {/* Product Image */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg"
                style={{ background: '#1A0505', minHeight: '400px' }}
              />
              
              {/* Stock badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-2 rounded font-mono text-sm"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: getStockColor(),
                  border: `1px solid ${getStockColor()}`
                }}
              >
                {product.stock <= 0 ? 'OUT OF STOCK' :
                 product.stock <= 3 ? `only ${product.stock} remaining...` :
                 `${product.stock} available`}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
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

              {/* Size Selection */}
              {needsSizeSelection && product.stock > 0 && (
                <div>
                  <h3 className="font-mono text-sm mb-3" style={{ color: '#CCCCCC' }}>Size</h3>
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
                <h3 className="font-mono text-sm mb-3" style={{ color: '#CCCCCC' }}>Quantity</h3>
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

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-sm" style={{ color: '#CCCCCC' }}>
                    {product.description}
                  </p>
                </div>

                {/* Materials (for cap) */}
                {product.id === 'dc001' && (
                  <div className="space-y-2">
                    <details className="font-mono text-sm">
                      <summary className="cursor-pointer" style={{ color: '#CCCCCC' }}>
                        📋 MATERIALS
                      </summary>
                      <div className="mt-2 pl-4 space-y-1" style={{ color: 'rgba(220, 20, 60, 0.8)' }}>
                        <p>Main material: 100% cotton</p>
                        <p>Embroidery: 100% Polyester</p>
                      </div>
                    </details>

                    <details className="font-mono text-sm">
                      <summary className="cursor-pointer" style={{ color: '#CCCCCC' }}>
                        📏 SIZE CHART
                      </summary>
                      <div className="mt-2 pl-4" style={{ color: 'rgba(220, 20, 60, 0.8)' }}>
                        <p>One size fits most</p>
                        <p>Adjustable buckle in the back</p>
                      </div>
                    </details>
                  </div>
                )}
              </div>

              {/* Share */}
              <div className="border-t pt-6" style={{ borderColor: '#1A0505' }}>
                <button className="font-mono text-sm" style={{ color: '#DC143C' }}>
                  📤 Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 