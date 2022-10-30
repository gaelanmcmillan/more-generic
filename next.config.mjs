// @type {import('next').NextConfig}

import nextMDX from '@next/mdx'
import theme from "shiki/themes/solarized-dark.json" assert { type: "json" };
import { remarkCodeHike } from '@code-hike/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, {theme}],
    ]
  }
})

export default withMDX({
  // Support MDX files as pages:
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  images: {
    loader: "akamai",
    path: "/more-generic",
  },
  basePath: "/more-generic",
  assetPrefix: "/more-generic"
})

// module.exports = nextConfig
