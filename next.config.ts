const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    reactStrictMode: true,
}

module.exports = withMDX(nextConfig);