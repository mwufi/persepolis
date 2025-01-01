import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
