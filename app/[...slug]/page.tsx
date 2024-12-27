import { readdirSync, statSync } from 'fs'
import path from 'path';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/markdown/${slug.join('/')}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  /* recursively read all markdown files in the markdown directory 
  
  returns [
    { slug: ['index'] },
    { slug: ['about', 'index'] },
    { slug: ['about', 'example'] },
  ]
  */
  const markdownDir = path.join(process.cwd(), 'markdown')

  function getMarkdownPaths(dir: string, basePath: string = ''): string[][] {
    const entries = readdirSync(dir)
    const paths: string[][] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry)
      const relativePath = path.join(basePath, entry)

      if (statSync(fullPath).isDirectory()) {
        paths.push(...getMarkdownPaths(fullPath, relativePath))
      } else if (entry.endsWith('.mdx')) {
        // Remove the .mdx extension and split the path into segments
        const slug = relativePath.replace(/\.mdx$/, '').split(path.sep)
        paths.push(slug)
      }
    }

    return paths
  }

  const slugs = getMarkdownPaths(markdownDir)
  return slugs.map(slug => ({ slug }))
}

export const dynamicParams = false
