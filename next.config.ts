import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Stock placeholders — remove once Kefday's own photos live in /public
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
