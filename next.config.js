/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/web",
  assetPrefix: "/web",
  reactStrictMode: true,
  images: {
    // unoptimized: true
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
