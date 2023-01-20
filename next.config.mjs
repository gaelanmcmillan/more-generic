// @type {import('next').NextConfig}

import nextMDX from '@next/mdx'
import theme from "shiki/themes/solarized-dark.json" assert { type: "json" };
import { remarkCodeHike } from '@code-hike/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, {theme}],
    ],
    rehypePlugins: [
      [rehypeKatex]
    ],
  }
})

export default withMDX({
  // Support MDX files as pages:
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  images: {
    loader: "akamai",
    path: "",
  },
})

// module.exports = nextConfig
