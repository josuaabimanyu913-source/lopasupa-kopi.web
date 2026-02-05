import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment this for GitHub Pages static export
  // output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
