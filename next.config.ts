import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediumvioletred-cheetah-959805.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
