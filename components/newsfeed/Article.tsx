import React from 'react';
import { cn } from "@/lib/utils";
import { ArticleAuthor } from './ArticleAuthor';
import { SourceLink } from './SourceLink';
import { TickerLink } from './TickerLink';
import { LikeShareButtons } from './LikeShareButtons';

interface ArticleProps {
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    timestamp: string;
  };
  source?: {
    name: string;
    url: string;
  };
  tickers?: Array<{
    symbol: string;
    change?: number;
  }>;
  image?: {
    url: string;
    alt?: string;
  };
  className?: string;
}

export function Article({
  title,
  content,
  author,
  source,
  tickers,
  image,
  className
}: ArticleProps) {
  return (
    <article className={cn("flex flex-col gap-4", className)}>
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold leading-tight">
          {title}
        </h1>
        <ArticleAuthor
          name={author.name}
          avatar={author.avatar}
          timestamp={author.timestamp}
        />
      </div>

      {/* Image */}
      {image && (
        <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
          <img
            src={image.url}
            alt={image.alt || title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {content}
      </div>

      {/* Tickers */}
      {tickers && tickers.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tickers.map((ticker) => (
            <TickerLink
              key={ticker.symbol}
              symbol={ticker.symbol}
              change={ticker.change}
            />
          ))}
        </div>
      )}

      {/* Source */}
      {source && (
        <SourceLink name={source.name} url={source.url} />
      )}

      {/* Actions */}
      <LikeShareButtons />
    </article>
  );
}
