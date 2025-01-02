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
    <div className={cn(
      "group transition-colors p-4 rounded-lg",
      "hover:bg-secondary/50",
      className
    )}>
      {/* Author */}
      <ArticleAuthor
        name={author.name}
        avatar={author.avatar}
        timestamp={author.timestamp}
      />
      
      <div className="h-4" />

      <div className="flex flex-col space-y-3">
        {/* Title */}
        <div className="flex-1">
          <h3 className="text-16 text-c_t01 leading-[26px] font-normal line-clamp-3 md:line-clamp-5">
            {title}
          </h3>
        </div>

        {/* Image */}
        {image && (
          <div className="relative rounded-md overflow-hidden bg-muted">
            <img
              src={image.url}
              alt={image.alt || title}
              className="object-cover w-full relative z-10"
              style={{ aspectRatio: image.aspectRatio || "2.03 / 1" }}
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Tickers */}
      {tickers && tickers.length > 0 && (
        <div className="mt-3 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            {tickers.map((ticker) => (
              <TickerLink
                key={ticker.symbol}
                symbol={ticker.symbol}
                change={ticker.change}
                compact
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
