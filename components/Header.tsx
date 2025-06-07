'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 800);

    return () => clearInterval(blinkInterval);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    if (path === '/contact#faq' && pathname === '/contact') return false;
    return false;
  };

  const getTabClassName = (path: string) => {
    const baseClass = "px-6 py-3 font-mono text-sm transition-colors duration-200 winxp-tab";
    return isActive(path) ? `${baseClass} winxp-tab-active` : baseClass;
  };

  return (
    <header className="relative z-50 bg-black border-b-2" style={{ borderColor: '#DC143C' }}>
      {/* Main Header Bar - Windows XP Style */}
      <div className="bg-black" style={{ background: 'linear-gradient(to bottom, #333333 0%, #000000 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Blinking Effect */}
            <Link href="/" className="flex items-center focus:outline-none">
              <div className="flex items-center">
                <div 
                  className={`w-8 h-8 mr-3 border-2 flex items-center justify-center text-lg font-bold transition-opacity duration-200 ${isBlinking ? 'opacity-100' : 'opacity-30'}`}
                  style={{ 
                    borderColor: '#DC143C', 
                    backgroundColor: isBlinking ? '#DC143C' : '#000000',
                    color: isBlinking ? '#000000' : '#DC143C'
                  }}
                >
                  D
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-mono tracking-wider" style={{ color: '#DC143C' }}>
                    DELUSIONAL CLUB
                  </h1>
                  <p className="text-xs font-mono" style={{ color: '#CCCCCC' }}>
                    REALITY.EXE NOT FOUND
                  </p>
                </div>
              </div>
            </Link>

            {/* Top Right User Area */}
            <div className="flex items-center space-x-4 font-mono text-xs">
              <button className="text-red-400 hover:text-white border border-red-400 px-2 py-1 transition-colors">
                LOGIN
              </button>
              <button className="text-red-400 hover:text-white border border-red-400 px-2 py-1 transition-colors">
                REGISTER
              </button>
              <button className="text-red-400 hover:text-white border border-red-400 px-2 py-1 transition-colors">
                CART ({cartCount})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Windows XP Style Tabs */}
      <div 
        className="bg-black border-t border-b" 
        style={{ 
          borderColor: '#DC143C',
          background: 'linear-gradient(to bottom, #1a1a1a 0%, #000000 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation - Always Visible */}
          <nav className="flex border-b" role="navigation" aria-label="Main navigation" style={{ borderColor: '#DC143C' }}>
            <Link 
              href="/" 
              className={getTabClassName('/')}
              style={{ 
                color: isActive('/') ? '#000000' : '#CCCCCC',
                borderColor: '#DC143C',
                borderRight: '1px solid #DC143C',
                background: isActive('/') 
                  ? 'linear-gradient(to bottom, #DC143C 0%, #8B0000 100%)' 
                  : 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%)'
              }}
              tabIndex={0}
            >
              HOME
            </Link>
            <Link 
              href="/more" 
              className={getTabClassName('/more')}
              style={{ 
                color: isActive('/more') ? '#000000' : '#CCCCCC',
                borderColor: '#DC143C',
                borderRight: '1px solid #DC143C',
                background: isActive('/more') 
                  ? 'linear-gradient(to bottom, #DC143C 0%, #8B0000 100%)' 
                  : 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%)'
              }}
              tabIndex={0}
            >
              MORE
            </Link>
            <Link 
              href="/contact" 
              className={getTabClassName('/contact')}
              style={{ 
                color: isActive('/contact') ? '#000000' : '#CCCCCC',
                borderColor: '#DC143C',
                borderRight: '1px solid #DC143C',
                background: isActive('/contact') 
                  ? 'linear-gradient(to bottom, #DC143C 0%, #8B0000 100%)' 
                  : 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%)'
              }}
              tabIndex={0}
            >
              CONTACT
            </Link>
            <Link 
              href="/contact#faq" 
              className={getTabClassName('/contact#faq')}
              style={{ 
                color: '#CCCCCC',
                borderColor: '#DC143C',
                background: 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%)'
              }}
              tabIndex={0}
            >
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 