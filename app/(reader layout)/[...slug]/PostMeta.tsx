import Image from 'next/image'
import { ImageErrorBoundary } from './ImageErrorBoundary'

interface PostMetaProps {
  frontMatter: {
    title?: string
    date?: string
    tags?: string[]
    headerImg?: string
  }
}

export function PostMeta({ frontMatter }: PostMetaProps) {
  const { title, date, tags, headerImg } = frontMatter
  
  // Normalize the image path
  const imagePath = headerImg ? (
    headerImg.startsWith('http') ? headerImg : `/${headerImg}`
  ) : null

  return (
    <div className="mb-8">
      {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
      <div className="flex flex-col gap-2">
        {imagePath && (
          <ImageErrorBoundary imagePath={imagePath}>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src={imagePath}
                alt={title || 'Header image'}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </ImageErrorBoundary>
        )}
        <div className="flex items-center gap-4 text-gray-600">
          {date && (
            <time dateTime={date} className="text-sm">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          {tags && tags.length > 0 && (
            <div className="flex gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
