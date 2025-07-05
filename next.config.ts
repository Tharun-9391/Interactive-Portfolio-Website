import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // 👇 This is default behavior, allows serving images from /public
    // No need to add local file paths like C:/ or full paths
    unoptimized: false,  // Keep optimized images unless needed otherwise
  },
};

export default nextConfig;
