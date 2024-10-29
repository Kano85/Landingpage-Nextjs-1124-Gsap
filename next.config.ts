// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development to identify potential issues
  reactStrictMode: true,

  // Set up image optimization for external domains, if needed
  images: {
    domains: ['example.com'], // Add domains as necessary
  },

  // Internationalization configuration
  i18n: {
    locales: ['en', 'es', 'de'], // Example locales
    defaultLocale: 'en',
  },

  // Environment variables setup
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Add other env variables as needed
  },

  // Custom webpack configuration for server-side packages
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('_http_common'); // Add any required externals
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Avoid fs usage on the client
      path: false,
      os: false,
    };

    return config;
  },

  // Custom server runtime configuration (e.g., for `pg` or `sharp`)
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },
};

export default nextConfig;
