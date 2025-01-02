'use client'

import React from 'react';
import { cn } from "@/lib/utils";
import { ArticleAuthor } from './ArticleAuthor';
import { LikeShareButtons } from './LikeShareButtons';
import { TweetImgPreview } from './TweetImgPreview';

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
  className?: string;
}

export function Tweet({
  author,
  content,
  timestamp,
  images,
  metrics,
  className
}: TweetProps) {
  return (
    <div className={cn("p-4 border rounded-lg", className)}>
      <ArticleAuthor
        name={author.name}
        avatar={author.avatar}
        timestamp={timestamp}
      />
      
      <div className="mt-3 text-base">
        {content}
      </div>

      {images && images.length > 0 && (
        <div className="mt-3">
          <TweetImgPreview images={images} />
        </div>
      )}

      <div className="mt-4">
        <LikeShareButtons />
      </div>
    </div>
  );
}
