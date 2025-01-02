'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import SquareImagePreview from './SquareImagePreview';
import PostModal from './PostModal';

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    href: string;
  }>;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const ImageGrid = ({
  images,
  className,
  columns = 3,
}: ImageGridProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

  const handlePostClick = (href: string) => {
    const id = href.split('/').pop();
    router.push(`${pathname}?postId=${id}`, { scroll: false });
  };

  const handleModalClose = () => {
    router.push(pathname, { scroll: false });
  };

  return (
    <>
      <div
        className={cn(
          "grid gap-1",
          {
            'grid-cols-1': columns === 1,
            'grid-cols-2': columns === 2,
            'grid-cols-3': columns === 3,
            'grid-cols-4': columns === 4,
            'sm:grid-cols-2': columns >= 2,
            'md:grid-cols-3': columns >= 3,
            'lg:grid-cols-4': columns >= 4,
          },
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(image.href)}
            className="cursor-pointer"
          >
            <SquareImagePreview
              src={image.src}
              alt={image.alt}
              href={image.href}
              onClick={(e) => {
                e.preventDefault();
                handlePostClick(image.href);
              }}
            />
          </div>
        ))}
      </div>

      {postId && (
        <PostModal
          isOpen={!!postId}
          postId={postId}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ImageGrid;
