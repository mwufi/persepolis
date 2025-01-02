'use client'

import React from 'react';
import { Heart } from 'lucide-react';
import { ActionButton } from './ActionButton';

type LikeButtonProps = Omit<React.ComponentProps<typeof ActionButton>, 'icon' | 'label'>;

export function LikeButton(props: LikeButtonProps) {
  return (
    <ActionButton
      icon={<Heart className="h-4 w-4" />}
      label="Like"
      {...props}
    />
  );
}
