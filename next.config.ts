import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "attilmulticuisinerestaurant.com",
      },
    ],
  },
};

export default nextConfig;
