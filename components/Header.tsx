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

  const categories = [
    { name: 'T-SHIRTS', href: '#catalog' },
    { name: 'CAPS', href: '#catalog' },
    { name: 'GLOVES', href: '#catalog' },
    { name: 'HEADBANDS', href: '#catalog' },
    { name: 'SCARFS', href: '#catalog' }
  ];

  return (
    <header className="bg-void-black border-b-2 border-blood-red relative z-50 scanlines" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-dark-red to-black-red border border-blood-red flex items-center justify-center animate-flicker">
              <span className="text-blood-red font-mono text-xl font-bold glitch-text" data-text="DC">
                DC
              </span>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-creepy text-light-gray text-shadow-red group-hover:animate-glitch">
                DELUSIONAL CLUB
              </h1>
              <p className="text-xs text-blood-red font-mono tracking-wider">
                {'>'} REALITY.EXE NOT FOUND {'<'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Elite Ware Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="#catalog" 
              className="text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson uppercase tracking-wider"
            >
              BROWSE CATALOG
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.name}
                href={category.href} 
                className="text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson"
                onClick={(e) => {
                  e.preventDefault();
                  // Filter by category logic would go here
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category.name}
              </Link>
            ))}
            <Link 
              href="/about" 
              className="text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson"
            >
              ABOUT
            </Link>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search - Elite Ware Style */}
            <div className="hidden md:flex items-center">
              <input 
                type="text" 
                placeholder="Search the void..."
                className="bg-black border border-blood-red/50 text-light-gray font-mono text-sm px-3 py-2 rounded focus:border-blood-red focus:outline-none w-48"
                style={{ background: '#000000' }}
              />
            </div>

            {/* Cart */}
            <Link 
              href="/cart"
              className="relative btn-creepy px-4 py-2 rounded text-light-gray font-mono text-sm"
            >
              CART ({cartCount})
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blood-red text-void-black rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse-slow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              className="lg:hidden btn-creepy px-3 py-2 rounded text-light-gray font-mono text-sm"
              aria-label="Toggle mobile menu"
              tabIndex={0}
            >
              MENU
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-blood-red bg-void-black/95 absolute left-0 right-0 top-full backdrop-blur-sm" style={{ background: 'rgba(0, 0, 0, 0.95)' }}>
            <nav className="px-4 py-4 space-y-4">
              <Link 
                href="#catalog" 
                className="block text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                BROWSE CATALOG
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  href={category.href} 
                  className="block text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                href="/about" 
                className="block text-light-gray hover:text-blood-red font-mono text-sm transition-all duration-300 hover:text-shadow-crimson"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              
              {/* Mobile Search */}
              <div className="pt-4 border-t border-blood-red/30">
                <input 
                  type="text" 
                  placeholder="Search the void..."
                  className="w-full bg-black border border-blood-red/50 text-light-gray font-mono text-sm px-3 py-2 rounded focus:border-blood-red focus:outline-none"
                  style={{ background: '#000000' }}
                />
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-blood-red to-transparent animate-pulse"></div>
      </div>
    </header>
  );
};

export default Header; 