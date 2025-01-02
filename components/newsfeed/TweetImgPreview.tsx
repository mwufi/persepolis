import React from 'react';
import { cn } from "@/lib/utils";

interface TweetImgPreviewProps {
  images: string[];
  className?: string;
}

export function TweetImgPreview({ images, className }: TweetImgPreviewProps) {
  const imageCount = images.length;

  return (
    <div
      className={cn(
        "grid gap-1",
        {
          'grid-cols-1': imageCount === 1,
          'grid-cols-2': imageCount === 2,
          'grid-cols-2 grid-rows-2': imageCount === 3 || imageCount === 4,
        },
        className
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "relative aspect-square rounded-lg overflow-hidden",
            imageCount === 1 && "aspect-[16/9]",
            imageCount === 3 && index === 0 && "row-span-2"
          )}
        >
          <img
            src={image}
            alt={`Tweet image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
