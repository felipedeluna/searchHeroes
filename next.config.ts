import type { NextConfig } from "next";
require('dotenv').config();


const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    NEXT_PRIVATE_KEY: process.env.NEXT_PRIVATE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        pathname: '**',
      },
    ]
  },
};

export default nextConfig;
