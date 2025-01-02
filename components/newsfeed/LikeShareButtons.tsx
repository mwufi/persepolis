'use client'

import React from 'react';
import { LikeButton } from './buttons/LikeButton';
import { CommentButton } from './buttons/CommentButton';
import { ShareButton } from './buttons/ShareButton';

interface LikeShareButtonsProps {
  metrics?: {
    likes?: number;
    comments?: number;
    shares?: number;
  };
  showCounts?: boolean;
}

export function LikeShareButtons({ metrics, showCounts = false }: LikeShareButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      <LikeButton count={metrics?.likes} show={showCounts} />
      <CommentButton count={metrics?.comments} show={showCounts} />
      <ShareButton count={metrics?.shares} show={showCounts} />
    </div>
  );
}
