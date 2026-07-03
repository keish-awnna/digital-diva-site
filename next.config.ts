import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // This helps Next.js identify the correct root when rogue lockfiles exist in parent directories
  turbopack: {
    root: ".",
  },
  // Using static export for maximum compatibility with Amplify hosting
  output: "export",
  // Recommended for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
