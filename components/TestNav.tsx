'use client';

import Link from 'next/link';

const TestNav = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-red-900 border border-red-400 p-4 rounded" style={{ background: 'rgba(139, 0, 0, 0.9)' }}>
      <div className="font-mono text-xs text-white mb-2">TEST NAVIGATION:</div>
      <div className="flex flex-col space-y-2">
        <Link href="/" className="text-red-400 hover:text-white text-xs">HOME</Link>
        <Link href="/more" className="text-red-400 hover:text-white text-xs">MORE</Link>
        <Link href="/contact" className="text-red-400 hover:text-white text-xs">CONTACT</Link>
        <Link href="/contact#faq" className="text-red-400 hover:text-white text-xs">FAQ</Link>
      </div>
    </div>
  );
};

export default TestNav; 