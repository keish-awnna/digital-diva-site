import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output override — Amplify WEB_COMPUTE requires standard Next.js server output
  // which generates required-server-files.json
};

export default nextConfig;
