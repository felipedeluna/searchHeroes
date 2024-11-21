import type { NextConfig } from "next";
require('dotenv').config();


const nextConfig: NextConfig = {
  env: {
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
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
