import React from 'react';
import { cn } from "@/lib/utils";
import { ArticleAuthor } from './ArticleAuthor';
import { LikeShareButtons } from './LikeShareButtons';
import { TweetImgPreview } from './TweetImgPreview';
import Link from 'next/link';

interface TweetProps {
  author: {
    name: string;
    avatar: string;
    handle: string;
  };
  content: string;
  timestamp: string;
  images?: string[];
  metrics?: {
    likes?: number;
    retweets?: number;
    replies?: number;
  };
  isFullView?: boolean;
  className?: string;
}

export function Tweet({
  author,
  content,
  timestamp,
  images,
  metrics,
  isFullView,
  className
}: TweetProps) {
  const tweetContent = (
    <div className={cn(
      "group transition-colors p-4 rounded-lg",
      !isFullView && "hover:bg-secondary/50",
      className
    )}>
      <ArticleAuthor
        name={author.name}
        avatar={author.avatar}
        timestamp={timestamp}
      />

      <div className={cn(
        "mt-3",
        isFullView ? "text-lg" : "text-base"
      )}>
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-3">{paragraph}</p>
        ))}
      </div>

      {images && images.length > 0 && (
        <div className="mt-3">
          <TweetImgPreview images={images} />
        </div>
      )}

      <div className={cn(
        "mt-4",
        isFullView && "border-t border-line pt-4"
      )}>
        <LikeShareButtons
          metrics={{
            likes: metrics?.likes,
            comments: metrics?.replies,
            shares: metrics?.retweets
          }}
          showCounts={isFullView}
        />
      </div>
    </div>
  );

  if (isFullView) {
    return tweetContent;
  }

  return (
    <Link href={`/newsfeed/tweet/1`}
      className="block w-full text-left"
    >
      {tweetContent}
    </Link>
  );
}
