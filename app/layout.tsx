import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "DELUSIONAL CLUB | Premium Streetwear",
  description: "Premium streetwear for the enlightened. Quality merchandise crafted for those who see beyond the ordinary.",
  keywords: "delusional club, streetwear, fashion, premium clothing, urban wear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-black text-gray-300 font-mono min-h-screen">
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-grow bg-black">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
