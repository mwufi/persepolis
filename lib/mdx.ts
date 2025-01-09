import { readdirSync, statSync, existsSync, readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface DirectoryEntry {
    name: string;
    path: string;
    isDirectory: boolean;
    modifiedAt: Date;
    frontMatter?: {
        title?: string;
        subtitle?: string;
        headerImg?: string;
        tags?: string[];
        date?: string;
    };
    snippet?: string;
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

export function getDirectoryContents(fullPath: string, slug: string[], flattenDirectories: boolean = true): DirectoryEntry[] {
    const entries = readdirSync(fullPath)
    let directoryContents: DirectoryEntry[] = []

    for (const entry of entries) {
        const entryPath = path.join(fullPath, entry)
        const stats = statSync(entryPath)
        const isDirectory = stats.isDirectory()
        const name = isDirectory ? entry : entry.replace(/\.mdx$/, '')
        const relativePath = [...slug, name].join('/')

        if (isDirectory && flattenDirectories) {
            // Recursively get contents of directory
            const subContents = getDirectoryContents(entryPath, [...slug, name], true)
            directoryContents.push(...subContents)
        } else if (!isDirectory && entry.endsWith('.mdx')) {
            // Process MDX file
            const content = readFileSync(entryPath, 'utf-8')
            const { data: frontMatter, content: mdxContent } = matter(content)

            // Get first non-empty, non-heading paragraph as snippet
            const snippet = mdxContent
                .split('\n')
                .find(line => line.trim() && !line.startsWith('#'))
                ?.slice(0, 200)

            directoryContents.push({
                name,
                path: relativePath,
                isDirectory,
                modifiedAt: stats.mtime,
                frontMatter,
                snippet: snippet && snippet.length === 200 ? snippet + '...' : snippet
            })
        } else if (!flattenDirectories) {
            // Include directory as an entry when not flattening
            directoryContents.push({
                name,
                path: relativePath,
                isDirectory,
                modifiedAt: stats.mtime
            })
        }
    }

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

export function parseMdxFile(content: string) {
    const { data: frontMatter, content: mdxContent } = matter(content)
    return { frontMatter, mdxContent }
}

export async function getMdxContent(slug: string[]) {
    const fullPath = getFullPath(slug)
    const mdxPath = getMdxPath(fullPath)

    if (checkMdxExists(mdxPath)) {
        const rawContent = readFileSync(mdxPath, 'utf-8')
        return parseMdxFile(rawContent)
    }
    return null
}
