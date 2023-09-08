/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false
    },
    reactRemoveProperties: true
  }
};

module.exports = nextConfig;
