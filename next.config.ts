import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https', // ✅ Fix: Explicitly set "https"
        hostname: 'fakestoreapi.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {}, // ✅ Remove serverActions
};

// Use next-intl plugin
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
