/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  basePath: '/tejas-athalye-portfolio',
  assetPrefix: '/tejas-athalye-portfolio/',
  trailingSlash: true,
  distDir: 'dist',
  // This is important for GitHub Pages
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
