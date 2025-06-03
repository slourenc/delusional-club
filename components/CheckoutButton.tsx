'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface CheckoutButtonProps {
  product: Product;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // This is where you'd integrate with Stripe
      // For now, it's just a placeholder
      
      // Example Stripe integration:
      /*
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ 
            price_data: {
              currency: 'usd',
              product_data: { 
                name: product.name,
                description: `${product.category} - Delusional Club`,
              },
              unit_amount: product.price * 100, // Stripe uses cents
            },
            quantity: 1,
          }],
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/`,
        }),
      });
      
      const session = await response.json();
      await stripe?.redirectToCheckout({ sessionId: session.id });
      */
      
      // Placeholder action
      alert(`This would redirect to checkout for ${product.name} - $${product.price}\n\nTo enable real payments, follow the README.md guide for Stripe integration.`);
      
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      disabled={isLoading}
      className="checkout-btn"
      style={{
        backgroundColor: '#DC143C',
        color: '#FFFFFF',
        border: 'none',
        padding: '12px 24px',
        fontSize: '14px',
        fontFamily: "'Courier New', monospace",
        fontWeight: 'bold',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transition: 'all 0.3s ease',
        borderRadius: '2px',
        opacity: isLoading ? 0.7 : 1,
      }}
      onMouseEnter={(e) => {
        if (!isLoading) {
          e.currentTarget.style.backgroundColor = '#B91C1C';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isLoading) {
          e.currentTarget.style.backgroundColor = '#DC143C';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {isLoading ? 'Processing...' : `BUY NOW - $${product.price}`}
    </button>
  );
}; 