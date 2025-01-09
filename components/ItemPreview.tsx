import Link from 'next/link'
import Image from 'next/image'
import { DirectoryEntry } from '@/lib/mdx'

interface ItemPreviewProps {
    entry: DirectoryEntry
}

export function ItemPreview({ entry }: ItemPreviewProps) {
    const {
        name,
        path,
        isDirectory,
        modifiedAt,
        frontMatter,
        snippet
    } = entry

    const getImagePath = (src: string) => {
        if (src.startsWith('http')) return src
        return src.startsWith('/') ? src : `/${src}`
    }

    if (isDirectory) {
        return (
            <Link
                href={`/${path}`}
                className="p-4 rounded-lg hover:bg-white/20 transition-colors block"
            >
                <div className="flex items-center gap-2">
                    📁 {name}
                    <span className="text-sm text-white/60 ml-auto">
                        {modifiedAt.toLocaleDateString()}
                    </span>
                </div>
            </Link>
        )
    }

    const hasTitle = Boolean(frontMatter?.title)
    const mainContent = hasTitle ? (
        <>
            <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                {frontMatter?.title}
            </h2>
            {frontMatter?.subtitle && (
                <p className="text-white/75 mt-1">{frontMatter.subtitle}</p>
            )}
            {snippet && <p className="text-white/90 mt-2 line-clamp-2">{snippet}</p>}
        </>
    ) : (
        <p className="text-lg leading-relaxed text-white/90">{snippet}</p>
    )

    return (
        <Link
            href={`/${path}`}
            className="p-6 rounded-lg hover:bg-white/20 transition-colors block group"
        >
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    {frontMatter?.headerImg && (
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src={getImagePath(frontMatter.headerImg)}
                                alt={frontMatter.title || name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div className="flex-grow min-w-0">
                        {mainContent}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        {frontMatter?.tags?.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 rounded-full bg-white/10 text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-white/60 ml-auto">
                        {modifiedAt.toLocaleDateString()}
                    </span>
                </div>
            </div>
        </Link>
    )
} 