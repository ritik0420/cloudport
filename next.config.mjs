/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Ensure Next.js treats this folder as the workspace root
    root: process.cwd()
  }
};

export default nextConfig;
