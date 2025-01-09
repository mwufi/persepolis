import Image from 'next/image'
import { ImageErrorBoundary } from './ImageErrorBoundary'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Subtitle, Title } from '@/components/Typography'

interface PostMetaProps {
  frontMatter: {
    title?: string
    subtitle?: string
    date?: string
    tags?: string[]
    headerImg?: string
  }
}

export function PostMeta({ frontMatter }: PostMetaProps) {
  const { title, subtitle, date, tags, headerImg } = frontMatter

  // Normalize the image path
  const imagePath = headerImg ? (
    headerImg.startsWith('http') ? headerImg : `/${headerImg}`
  ) : null

  return (
    <div className="">
      {title &&
        <Title>{title}</Title>
      }
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <div className="flex flex-col gap-2">
        {imagePath && (
          <div className="w-full max-w-[800px] mx-auto">
            <ImageErrorBoundary imagePath={imagePath}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={imagePath}
                  alt={title || 'Header image'}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  style={{
                    borderRadius: '5px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    filter: 'brightness(1.1)' // Added slight white tint
                  }}
                />
              </AspectRatio>
            </ImageErrorBoundary>
          </div>
        )}
      </div>
    </div>
  )
}
