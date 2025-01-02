'use client'

import React from 'react';
import { LikeButton } from './buttons/LikeButton';
import { CommentButton } from './buttons/CommentButton';
import { ShareButton } from './buttons/ShareButton';

export function LikeShareButtons() {
  return (
    <div className="flex items-center gap-2">
      <LikeButton />
      <CommentButton />
      <ShareButton />
    </div>
  );
}
