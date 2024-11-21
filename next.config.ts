import type { NextConfig } from "next";
require('dotenv').config();


const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    NEXT_PRIVATE_KEY: process.env.NEXT_PRIVATE_KEY,
  },
  images: {
    domains: ['i.annihil.us'],
  },
};

export default nextConfig;
