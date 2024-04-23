/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  reactStrictMode: true,
  images: {
    // unoptimized: true
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
