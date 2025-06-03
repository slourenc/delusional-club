import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "DELUSIONAL CLUB | Reality.exe Not Found",
  description: "Embrace the madness. Question everything. Reality is optional. Official merch from the void.",
  keywords: "delusional club, merch, clothing, streetwear, creepy, alternative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black" style={{ background: '#000000' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
      </head>
      <body 
        className="bg-black text-light-gray font-mono min-h-screen crt-effect" 
        style={{ 
          background: '#000000', 
          color: '#CCCCCC',
          minHeight: '100vh'
        }}
      >
        <div 
          className="min-h-screen flex flex-col relative dark-container" 
          style={{ 
            background: '#000000',
            minHeight: '100vh'
          }}
        >
          {/* Background effects */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="h-full w-full" 
              style={{ 
                background: 'linear-gradient(135deg, #000000 0%, #1A0505 50%, #000000 100%)' 
              }}
            ></div>
            <div className="absolute inset-0 scanlines opacity-20"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow" style={{ background: '#000000' }}>
              {children}
            </main>
            <Footer />
          </div>

          {/* Ambient glitch effect */}
          <div 
            className="fixed top-0 left-0 w-full h-1 opacity-30 animate-pulse pointer-events-none z-20"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, #DC143C 50%, transparent 100%)' 
            }}
          ></div>
          <div 
            className="fixed bottom-0 left-0 w-full h-1 opacity-20 animate-pulse pointer-events-none z-20"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, #8B0000 50%, transparent 100%)' 
            }}
          ></div>
        </div>
      </body>
    </html>
  );
}
