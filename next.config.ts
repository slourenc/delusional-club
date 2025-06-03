import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    unoptimized: true,
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },

  // Netlify compatibility
  trailingSlash: true,
  
  // Remove experimental options that cause issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
