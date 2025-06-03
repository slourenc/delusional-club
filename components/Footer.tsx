'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}...`);
    // Social media links would go here
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <footer className="bg-void-black border-t-2 border-blood-red mt-16 scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-dark-red to-black-red border border-blood-red flex items-center justify-center animate-flicker">
                <span className="text-blood-red font-mono text-sm font-bold">DC</span>
              </div>
              <span className="ml-2 text-light-gray font-creepy text-lg text-shadow-red">
                DELUSIONAL CLUB
              </span>
            </div>
            <p className="text-blood-red/80 font-mono text-xs leading-relaxed mb-4">
              {'>'} EMBRACE THE MADNESS {'<'}<br/>
              {'>'} QUESTION EVERYTHING {'<'}<br/>
              {'>'} REALITY IS OPTIONAL {'<'}
            </p>
            <div className="text-blood-red/60 font-mono text-xs">
              <p>Est. {currentYear}</p>
              <p>Shipping worldwide from the void</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-light-gray font-mono text-sm mb-4 text-shadow-crimson">
              [QUICK_ACCESS]
            </h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="/catalog" 
                  className="text-blood-red/80 hover:text-blood-red font-mono text-xs hover:text-shadow-crimson transition-all duration-300"
                >
                  → BROWSE CATALOG
                </a>
              </div>
              <div>
                <a 
                  href="/merch" 
                  className="text-blood-red/80 hover:text-blood-red font-mono text-xs hover:text-shadow-crimson transition-all duration-300"
                >
                  → MERCH
                </a>
              </div>
              <div>
                <a 
                  href="/about" 
                  className="text-blood-red/80 hover:text-blood-red font-mono text-xs hover:text-shadow-crimson transition-all duration-300"
                >
                  → ABOUT US
                </a>
              </div>
              <div>
                <a 
                  href="/faq" 
                  className="text-blood-red/80 hover:text-blood-red font-mono text-xs hover:text-shadow-crimson transition-all duration-300"
                >
                  → F.A.Q.
                </a>
              </div>
              <div>
                <a 
                  href="/contact" 
                  className="text-blood-red/80 hover:text-blood-red font-mono text-xs hover:text-shadow-crimson transition-all duration-300"
                >
                  → CONTACT
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h3 className="text-light-gray font-mono text-sm mb-4 text-shadow-crimson">
              [CONNECT_TO_THE_NETWORK]
            </h3>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <button
                onClick={() => handleSocialClick('Instagram')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('Instagram'))}
                className="w-8 h-8 bg-gradient-to-br from-black-red to-dark-red border border-blood-red/50 hover:border-blood-red flex items-center justify-center transition-all duration-300 hover:animate-pulse"
                tabIndex={0}
                aria-label="Instagram"
              >
                <span className="text-blood-red font-mono text-xs">IG</span>
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('Twitter'))}
                className="w-8 h-8 bg-gradient-to-br from-black-red to-dark-red border border-blood-red/50 hover:border-blood-red flex items-center justify-center transition-all duration-300 hover:animate-pulse"
                tabIndex={0}
                aria-label="Twitter"
              >
                <span className="text-blood-red font-mono text-xs">X</span>
              </button>
              <button
                onClick={() => handleSocialClick('Discord')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('Discord'))}
                className="w-8 h-8 bg-gradient-to-br from-black-red to-dark-red border border-blood-red/50 hover:border-blood-red flex items-center justify-center transition-all duration-300 hover:animate-pulse"
                tabIndex={0}
                aria-label="Discord"
              >
                <span className="text-blood-red font-mono text-xs">DC</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-blood-red/60 font-mono text-xs space-y-1">
              <p>Email: contact@delusionalclub.net</p>
              <p>Support: help@delusionalclub.net</p>
              <p className="text-dark-red/80">
                Emergency: reality_check@delusionalclub.net
              </p>
            </div>
          </div>
        </div>

        {/* Terminal-style divider */}
        <div className="my-8 border-t border-blood-red/30"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blood-red/40 font-mono text-xs">
            <p>© {currentYear} DELUSIONAL CLUB. All rights reserved.</p>
            <p className="mt-1">Powered by madness & caffeine</p>
          </div>

          <div className="flex space-x-6 text-blood-red/60 font-mono text-xs">
            <a href="/privacy" className="hover:text-blood-red transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blood-red transition-colors">
              Terms of Service
            </a>
            <a href="/shipping" className="hover:text-blood-red transition-colors">
              Shipping Info
            </a>
          </div>
        </div>

        {/* Easter egg terminal output */}
        <div className="mt-8 text-center">
          <div className="text-blood-red/20 font-mono text-xs">
            <p>{'>'} system_status: OPERATIONAL</p>
            <p>{'>'} reality_level: COMPROMISED</p>
            <p>{'>'} users_online: ∞</p>
            <p>{'>'} sanity_check: FAILED</p>
          </div>
        </div>

        {/* Glitch effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blood-red to-transparent opacity-50 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer; 