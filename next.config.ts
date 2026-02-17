import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/allin',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
