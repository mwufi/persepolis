import React from 'react';
import { cn } from "@/lib/utils";
import { ArticleAuthor } from './ArticleAuthor';
import { TickerLink } from './TickerLink';
import Link from 'next/link';

interface ArticlePreviewProps {
  title: string;
  image?: {
    url: string;
    alt?: string;
    aspectRatio?: number;
  };
  author: {
    name: string;
    avatar: string;
    timestamp: string;
  };
  tickers?: Array<{
    symbol: string;
    change?: number;
  }>;
  href: string;
  className?: string;
}

export function ArticlePreview({
  title,
  image,
  author,
  tickers,
  href,
  className
}: ArticlePreviewProps) {
  const content = (
    <div className={cn("flex flex-col space-y-4", className)}>
      {/* Author */}
      <div className="flex items-center">
        <ArticleAuthor
          name={author.name}
          avatar={author.avatar}
          timestamp={author.timestamp}
        />
      </div>

      {/* Title and Image */}
      <div className="flex flex-col space-y-3">
        <div className="line-clamp-3 relative md:line-clamp-5">
          <span className="text-16 text-c_t01 leading-[26px] font-normal">
            {title}
          </span>
        </div>

        {image && (
          <div className="mt-3">
            <div className="flex-1 rounded-md overflow-hidden relative min-h-[24px] bg-bglight">
              <img
                loading="lazy"
                src={image.url}
                alt={image.alt}
                className="object-cover w-full z-10 relative"
                style={{ aspectRatio: image.aspectRatio }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tickers */}
      {tickers && tickers.length > 0 && (
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            {tickers.map((ticker, index) => (
              <TickerLink
                key={index}
                symbol={ticker.symbol}
                change={ticker.change}
                className="mr-2"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
