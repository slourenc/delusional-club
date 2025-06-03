import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Asset prefix for proper routing
  assetPrefix: '',

  // Disable server-side features for static export
  experimental: {
    esmExternals: false,
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
