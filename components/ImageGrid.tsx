import { cn } from '@/lib/utils';
import SquareImagePreview from './SquareImagePreview';

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
  return (
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
        <SquareImagePreview
          key={index}
          src={image.src}
          alt={image.alt}
          href={image.href}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
