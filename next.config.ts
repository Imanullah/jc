import type { NextConfig } from "next";

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

  images: {
    domains: [''],
  },

  experimental: {
    // dynamicIO: true,
    useCache: true,
  },
};

export default nextConfig;
