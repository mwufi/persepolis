import { Breadcrumb } from '../../../components/Breadcrumb';
import { notFound } from 'next/navigation'
import {
  getMarkdownDir,
  getFullPath,
  getMdxPath,
  checkMdxExists,
  checkDirectoryExists,
  getDirectoryContents,
  getAllPaths,
  getMdxContent
} from './utils'
import Link from 'next/link';
import { PostMeta } from './PostMeta';
import { Metadata } from 'next'
import { getSiteConfig, getFullUrl } from '../../../lib/config'
import { Panel } from '@/components/3d/Panel';
import Environment from '@/components/3d/Environment';

interface BBProps {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const fullPath = getFullPath(params.slug)
  const mdxPath = getMdxPath(fullPath)

  if (!checkMdxExists(mdxPath)) {
    return {}
  }

  const [mdxData, siteConfig] = await Promise.all([
    getMdxContent(params.slug),
    getSiteConfig()
  ])

  if (!mdxData?.frontMatter) {
    return {}
  }

  const { title, headerImg, date } = mdxData.frontMatter
  const description = mdxData.mdxContent
    .split('\n')
    .find(line => line.trim() && !line.startsWith('#'))
    ?.slice(0, 200) + '...'

  const canonicalUrl = getFullUrl(`/${params.slug.join('/')}`)
  const imageUrl = headerImg ? (
    headerImg.startsWith('http') ? headerImg : getFullUrl(`/${headerImg}`)
  ) : undefined

  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description,
    alternates: {
      types: {
        'application/json+oembed': `${getFullUrl('/api/oembed')}?url=${encodeURIComponent(canonicalUrl)}`,
      },
    },
    openGraph: {
      title: title,
      description,
      type: 'article',
      publishedTime: date,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: imageUrl ? [
        {
          url: imageUrl,
          alt: title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

function getEnv(env: string) {
  return env ? `url(/${env})` : 'url(/env-mountains.png)'
}

export default async function Page({ params }: BBProps) {
  const { slug } = await params
  const fullPath = getFullPath(slug)
  const mdxPath = getMdxPath(fullPath)

  // Check if MDX file exists
  if (checkMdxExists(mdxPath)) {
    const [mdxData, { default: Post }] = await Promise.all([
      getMdxContent(slug),
      import(`@/markdown/${slug.join('/')}.mdx`)
    ])
    if (!mdxData) return notFound()

    return (
      <Environment bgImage={getEnv(mdxData.frontMatter.env)}>
        <Panel title={mdxData.frontMatter.title}>
          <div className="flex flex-col gap-10">
            {mdxData.frontMatter && <PostMeta frontMatter={mdxData.frontMatter} />}
            <div className="max-w-[600px] mx-auto main-article">
              <Post />
            </div>
            <Breadcrumb slug={slug} />
          </div>
        </Panel>
      </Environment>
    )
  }

  // Check if directory exists
  if (checkDirectoryExists(fullPath)) {
    const directoryContents = getDirectoryContents(fullPath, slug)

    // Sort by modification date, newest first
    directoryContents.sort((a, b) => b.modifiedAt.getTime() - a.modifiedAt.getTime())

    return (
      <div className="mt-10">
        <Breadcrumb slug={slug} />
        <h1 className="text-3xl font-bold mb-6">{slug[slug.length - 1]}</h1>
        <div className="grid gap-4">
          {directoryContents.map((entry) => (
            <Link
              key={entry.path}
              href={`/${entry.path}`}
              className="p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                {entry.isDirectory ? '📁' : '📄'} {entry.name}
                <span className="text-sm text-gray-500 ml-auto">
                  {entry.modifiedAt.toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-sm text-gray-500 italic">
          Views like this are <span className="font-semibold">collection views</span>, which are automatically generated from a folder!
        </div>
      </div>
    )
  }

  notFound() // This will show your 404 page
}

export async function generateStaticParams() {
  const markdownDir = getMarkdownDir()
  return getAllPaths(markdownDir)
}

// Allow dynamic paths in development for easier testing
export const dynamicParams = true
