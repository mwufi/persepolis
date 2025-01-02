import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SquareImagePreviewProps {
  src: string;
  alt: string;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SquareImagePreview = ({
  src,
  alt,
  href,
  className,
  onClick,
}: SquareImagePreviewProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "block relative aspect-square w-full overflow-hidden rounded-sm",
        className
      )}
      onClick={onClick}
    >
      <div className="group relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </Link>
  );
};

export default SquareImagePreview;
