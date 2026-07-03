import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Using static export for maximum compatibility with Amplify hosting
  output: "export",
  // Recommended for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
