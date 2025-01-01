import { readdirSync, statSync, existsSync } from 'fs'
import path from 'path'

export interface DirectoryEntry {
  name: string;
  path: string;
  isDirectory: boolean;
  modifiedAt: Date;
}

export function getMarkdownDir(): string {
  return path.join(process.cwd(), 'markdown')
}

export function getFullPath(slug: string[]): string {
  return path.join(getMarkdownDir(), ...slug)
}

export function getMdxPath(fullPath: string): string {
  return `${fullPath}.mdx`
}

export function checkMdxExists(mdxPath: string): boolean {
  return existsSync(mdxPath)
}

export function checkDirectoryExists(fullPath: string): boolean {
  return existsSync(fullPath) && statSync(fullPath).isDirectory()
}

export function getDirectoryContents(fullPath: string, slug: string[]): DirectoryEntry[] {
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
  return directoryContents.sort((a, b) => b.modifiedAt.getTime() - a.modifiedAt.getTime())
}

export function getAllPaths(dir: string, basePath: string = ''): string[][] {
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
      paths.push(...getAllPaths(fullPath, relativePath))
    } else if (entry.endsWith('.mdx')) {
      paths.push(relativePath.replace(/\.mdx$/, '').split(path.sep))
    }
  }

  return paths
}
