/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { serverActions: true },
  reactStrictMode: false,
  compilerOptions: {
    baseUrl: "src",
  }
};

module.exports = nextConfig;