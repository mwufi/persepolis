import { readdirSync, statSync, existsSync } from 'fs'
import path from 'path';
import { Breadcrumb } from '../components/Breadcrumb';

interface DirectoryEntry {
  name: string;
  path: string;
  isDirectory: boolean;
  modifiedAt: Date;
}

interface BBProps {
  params: Promise<{ slug: string[] }>
}

export default async function Page({ params }: BBProps) {
  const { slug } = await params
  const markdownDir = path.join(process.cwd(), 'markdown')
  const fullPath = path.join(markdownDir, ...slug)
  const mdxPath = `${fullPath}.mdx`

  // Check if MDX file exists
  if (existsSync(mdxPath)) {
    const { default: Post } = await import(`@/markdown/${slug.join('/')}.mdx`)
    return (
      <div className="mt-10">
        <Breadcrumb slug={slug} />
        <Post />
      </div>
    )
  }

  // Check if directory exists
  if (existsSync(fullPath) && statSync(fullPath).isDirectory()) {
    const entries = readdirSync(fullPath)
    const directoryContents: DirectoryEntry[] = entries.map(entry => {
      const entryPath = path.join(fullPath, entry)
      const stats = statSync(entryPath)
      const isDirectory = stats.isDirectory()
      const name = isDirectory ? entry : entry.replace(/\.mdx$/, '')
      const relativePath = [...slug, name].join('/')
      return {
        name,
        path: relativePath,
        isDirectory,
        modifiedAt: stats.mtime
      }
    })
    
    // Sort by modification date, newest first
    directoryContents.sort((a, b) => b.modifiedAt.getTime() - a.modifiedAt.getTime())

    return (
      <div className="mt-10">
        <Breadcrumb slug={slug} />
        <h1 className="text-3xl font-bold mb-6">{slug[slug.length - 1]}</h1>
        <div className="grid gap-4">
          {directoryContents.map((entry) => (
            <a
              key={entry.path}
              href={`/${entry.path}`}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                {entry.isDirectory ? '📁' : '📄'} {entry.name}
                <span className="text-sm text-gray-500 ml-auto">
                  {entry.modifiedAt.toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-sm text-gray-500 italic">
          Views like this are <span className="font-semibold">collection views</span>, which are automatically generated from a folder!
        </div>
        
      </div>
    )
  }

  throw new Error(`No content found for path: ${slug.join('/')}`)
}

export async function generateStaticParams() {
  const markdownDir = path.join(process.cwd(), 'markdown')

  function getAllPaths(dir: string, basePath: string = ''): string[][] {
    const entries = readdirSync(dir)
    const paths: string[][] = []

    // Add the directory path itself
    if (basePath) {
      paths.push(basePath.split(path.sep))
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry)
      const relativePath = path.join(basePath, entry)

      if (statSync(fullPath).isDirectory()) {
        // Add directory path and all its contents
        paths.push(...getAllPaths(fullPath, relativePath))
      } else if (entry.endsWith('.mdx')) {
        // Remove the .mdx extension and split the path into segments
        const slug = relativePath.replace(/\.mdx$/, '').split(path.sep)
        paths.push(slug)
      }
    }

    return paths
  }

  const paths = getAllPaths(markdownDir)
  return Promise.resolve(paths.map(slug => ({ slug })))
}

// Allow dynamic paths in development for easier testing
export const dynamicParams = true
