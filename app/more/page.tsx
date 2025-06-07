'use client';

import { useState } from 'react';

const galleryItems = [
  { 
    id: 1, 
    src: '/images/ideas/looknitrile_1e8f5ac4.jpg', 
    title: 'NITRILE LOOKBOOK I',
    type: 'image'
  },
  { 
    id: 2, 
    src: '/images/ideas/lookwww.delusional-club.commodel-_bbe9d6d3.mp4', 
    title: 'DELUSIONAL MODEL SESSION I',
    type: 'video'
  },
  { 
    id: 3, 
    src: '/images/ideas/lookcap_85a286ed.jpg', 
    title: 'CAP SERIES I',
    type: 'image'
  },
  { 
    id: 4, 
    src: '/images/ideas/lookgo_727fd753.mp4', 
    title: 'GO SERIES',
    type: 'video'
  },
  { 
    id: 5, 
    src: '/images/ideas/looknitrile_b934e540.jpg', 
    title: 'NITRILE LOOKBOOK II',
    type: 'image'
  },
  { 
    id: 6, 
    src: '/images/ideas/lookyuzi_33245f42.mp4', 
    title: 'YUZI COLLECTION',
    type: 'video'
  },
  { 
    id: 7, 
    src: '/images/ideas/lookcap_fc8218b0.jpg', 
    title: 'CAP SERIES II',
    type: 'image'
  },
  { 
    id: 8, 
    src: '/images/ideas/lookwww.delusional-club.commodel-_b9b7a08b.mp4', 
    title: 'DELUSIONAL MODEL SESSION II',
    type: 'video'
  },
  { 
    id: 9, 
    src: '/images/ideas/looknitrile_c8c90898.jpg', 
    title: 'NITRILE LOOKBOOK III',
    type: 'image'
  },
  { 
    id: 10, 
    src: '/images/ideas/lookwww.delusional-club.com.mp4_52a80912.mp4', 
    title: 'CLUB SHOWCASE',
    type: 'video'
  },
  { 
    id: 11, 
    src: '/images/ideas/lookcap_cd89c54c.jpg', 
    title: 'CAP SERIES III',
    type: 'image'
  },
  { 
    id: 12, 
    src: '/images/ideas/lookgif.mp4_f3cddbc3.mp4', 
    title: 'ANIMATED SHOWCASE',
    type: 'video'
  },
  { 
    id: 13, 
    src: '/images/ideas/lookcap_e4688ede.jpg', 
    title: 'CAP SERIES IV',
    type: 'image'
  },
  { 
    id: 14, 
    src: '/images/ideas/lookd.i.e_982ad210.jpg', 
    title: 'D.I.E CONCEPT',
    type: 'image'
  }
];

const MorePage = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleMediaClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <div 
      className="min-h-screen bg-black py-8"
      style={{
        backgroundImage: 'url(/images/backgrounds/broken_glass2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="winxp-window px-6 py-3 mb-6 inline-block">
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-red-400 uppercase">
              VISUAL ARCHIVE
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-300 max-w-2xl mx-auto">
            EXCLUSIVE CONTENT - BEHIND THE SCENES - CREATIVE DOCUMENTATION
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div key={item.id} className="winxp-window p-4 bg-black bg-opacity-90">
              <div className="mb-3">
                <span className="font-mono text-xs text-red-400 uppercase">
                  {item.type === 'video' ? '[VIDEO]' : '[IMAGE]'}
                </span>
              </div>
              
              <div 
                className="cursor-pointer mb-3 relative"
                onClick={() => handleMediaClick(item)}
                onKeyDown={(e) => handleKeyDown(e, () => handleMediaClick(item))}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                {item.type === 'video' ? (
                  <video 
                    className="w-full h-auto border border-red-400 transition-opacity hover:opacity-80"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto border border-red-400 transition-opacity hover:opacity-80"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-beanie.svg';
                    }}
                  />
                )}
              </div>
              
              <h3 className="font-mono text-sm font-bold text-white uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Manifesto Section */}
        <div className="winxp-window p-6 mb-12 bg-black bg-opacity-90">
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
        <div className="winxp-window p-6 bg-black bg-opacity-90">
          <h3 className="font-mono text-sm text-red-400 mb-4 uppercase">ARCHIVE STATISTICS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-gray-300">
            <div>
              <div className="text-red-400">TOTAL ITEMS:</div>
              <div>{galleryItems.length}</div>
            </div>
            <div>
              <div className="text-red-400">IMAGES:</div>
              <div>{galleryItems.filter(item => item.type === 'image').length}</div>
            </div>
            <div>
              <div className="text-red-400">VIDEOS:</div>
              <div>{galleryItems.filter(item => item.type === 'video').length}</div>
            </div>
            <div>
              <div className="text-red-400">STATUS:</div>
              <div>ACTIVE</div>
            </div>
          </div>
        </div>

        {/* Media Modal */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="winxp-window p-4 max-w-5xl max-h-full overflow-auto bg-black">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-mono text-lg font-bold text-red-400 uppercase">
                  {selectedItem.title}
                </h3>
                <button 
                  className="font-mono text-red-400 hover:text-white transition-colors"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close modal"
                >
                  [CLOSE]
                </button>
              </div>
              
              {selectedItem.type === 'video' ? (
                <video 
                  className="w-full h-auto border border-red-400"
                  controls
                  autoPlay
                  loop
                  playsInline
                >
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  className="w-full h-auto border border-red-400"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorePage; 