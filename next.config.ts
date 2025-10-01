import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"],
  },
  output: "standalone",
};

export default nextConfig;
