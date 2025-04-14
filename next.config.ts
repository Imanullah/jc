import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,

  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  devIndicators: false,

  compiler: {
    // removeConsole: true,
  },

  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
