import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output override — Amplify WEB_COMPUTE requires standard Next.js server output
  // which generates required-server-files.json

  // next/font/google resolution via Turbopack depends on @vercel/turbopack-next
  // which is Vercel-only infrastructure and unavailable on AWS Amplify.
  // The --webpack flag in the build script opts out of Turbopack for production.
};

export default nextConfig;
