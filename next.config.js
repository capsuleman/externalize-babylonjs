const customWebpackConfig = require('./webpack.config');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: customWebpackConfig,
}

module.exports = nextConfig
