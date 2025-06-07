'use client';

import { useState } from 'react';

const galleryImages = [
  { 
    id: 1, 
    src: '/images/ideas/gun.jpg', 
    title: 'TACTICAL SERIES',
    category: 'PHOTOSHOOT'
  },
  { 
    id: 2, 
    src: '/images/ideas/2.jpg', 
    title: 'URBAN COLLECTION',
    category: 'LIFESTYLE'
  },
  { 
    id: 3, 
    src: '/images/ideas/3.jpg', 
    title: 'STREET PHOTOGRAPHY',
    category: 'CANDID'
  },
  { 
    id: 4, 
    src: '/images/ideas/4.jpg', 
    title: 'STUDIO SESSION',
    category: 'PROFESSIONAL'
  },
  { 
    id: 5, 
    src: '/images/ideas/5.jpg', 
    title: 'UNDERGROUND SCENE',
    category: 'ALTERNATIVE'
  },
  { 
    id: 6, 
    src: '/images/ideas/6.jpg', 
    title: 'CONCEPT ART',
    category: 'ARTISTIC'
  }
];

const MorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['ALL', 'PHOTOSHOOT', 'LIFESTYLE', 'CANDID', 'PROFESSIONAL', 'ALTERNATIVE', 'ARTISTIC'];

  const filteredImages = selectedCategory === 'ALL' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="winxp-window px-6 py-3 mb-6 inline-block">
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-red-400 uppercase">
              GALLERY
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-300 max-w-2xl mx-auto">
            VISUAL DOCUMENTATION - BEHIND THE SCENES - CREATIVE PROCESS
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="winxp-window p-4">
            <h3 className="font-mono text-sm text-red-400 mb-3 uppercase">FILTER BY CATEGORY:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-mono text-xs px-3 py-1 border transition-colors ${
                    selectedCategory === category 
                      ? 'bg-red-400 text-black border-red-400' 
                      : 'text-red-400 border-red-400 bg-black hover:bg-red-400 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid - Normal Image Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div key={image.id} className="winxp-window p-4">
              <div className="mb-3">
                <span className="font-mono text-xs text-red-400 uppercase">{image.category}</span>
              </div>
              
              <div 
                className="cursor-pointer mb-3"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-auto border border-red-400 transition-opacity hover:opacity-80"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-beanie.svg';
                  }}
                />
              </div>
              
              <h3 className="font-mono text-sm font-bold text-white uppercase">
                {image.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Manifesto Section */}
        <div className="winxp-window p-6 mb-12">
          <h2 className="text-2xl font-bold font-mono text-red-400 mb-4 uppercase text-center">
            DELUSIONAL MANIFESTO
          </h2>
          <div className="font-mono text-sm text-gray-300 space-y-4 max-w-4xl mx-auto">
            <p>
              We reject the artificial boundaries of conventional fashion. 
              Our designs emerge from the intersection of streetwear authenticity and uncompromising quality.
            </p>
            <p>
              Each piece represents a statement of independence from mass-produced conformity. 
              We create for those who understand that true style cannot be manufactured—it must be earned.
            </p>
            <p>
              Welcome to DELUSIONAL CLUB. Where reality meets rebellion.
            </p>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="winxp-window p-6">
          <h3 className="font-mono text-sm text-red-400 mb-4 uppercase">SYSTEM ANALYTICS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-gray-300">
            <div>
              <div className="text-red-400">TOTAL IMAGES:</div>
              <div>{galleryImages.length}</div>
            </div>
            <div>
              <div className="text-red-400">CATEGORIES:</div>
              <div>{categories.length - 1}</div>
            </div>
            <div>
              <div className="text-red-400">CURRENT FILTER:</div>
              <div>{selectedCategory}</div>
            </div>
            <div>
              <div className="text-red-400">DISPLAYED:</div>
              <div>{filteredImages.length}</div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="winxp-window p-4 max-w-4xl max-h-full overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-mono text-lg font-bold text-red-400 uppercase">
                  {selectedImage.title}
                </h3>
                <button 
                  className="font-mono text-red-400 hover:text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  [CLOSE]
                </button>
              </div>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto border border-red-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorePage; 