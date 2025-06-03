'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMenuToggle();
    }
  };

  return (
    <header className="relative z-50" style={{ background: '#000000' }}>
      {/* Top account bar - Live Leak style */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4 font-mono text-xs">
            <span>Create Account</span>
            <span>|</span>
            <span>Log In</span>
            <span>|</span>
            <span>📧</span>
            <span>💀</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs">
            <span>CART ({cartCount})</span>
          </div>
        </div>
      </div>

      {/* Main header with logo */}
      <div style={{ background: '#DC143C' }} className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-white">
                <h1 className="text-3xl font-bold font-mono tracking-wider">
                  Delusional Club
                </h1>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              className="lg:hidden text-white font-mono text-sm px-3 py-2 border border-white rounded"
              aria-label="Toggle mobile menu"
              tabIndex={0}
            >
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar - Live Leak style */}
      <div className="bg-gray-800 border-b border-gray-600">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <Link 
              href="/" 
              className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-r border-gray-600"
            >
              Home
            </Link>
            <Link 
              href="#catalog" 
              className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-r border-gray-600"
            >
              Recent Items
            </Link>
            <Link 
              href="#catalog" 
              className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-r border-gray-600"
            >
              Channels
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-r border-gray-600"
            >
              Forums
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm"
            >
              You
            </Link>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-900 border-t border-gray-600">
              <nav className="flex flex-col">
                <Link 
                  href="/" 
                  className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-b border-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#catalog" 
                  className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-b border-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recent Items
                </Link>
                <Link 
                  href="#catalog" 
                  className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-b border-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Channels
                </Link>
                <Link 
                  href="/about" 
                  className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm border-b border-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Forums
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 text-white hover:bg-red-700 transition-colors duration-200 font-mono text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  You
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* News ticker - Live Leak style */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-mono text-sm font-bold">
          ⭐ THIS IS NOT SPAM! FREE SHIPPING ON ORDERS OVER $99 ⭐ New Jersey Teens come up with a new game called "Knockout" ⭐ DELUSIONAL CLUB - WHERE REALITY GOES TO DIE ⭐
        </div>
      </div>
    </header>
  );
};

export default Header; 