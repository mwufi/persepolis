'use client'

import React from 'react';
import { Share } from 'lucide-react';
import { ActionButton } from './ActionButton';

type ShareButtonProps = Omit<React.ComponentProps<typeof ActionButton>, 'icon' | 'label'>;

export function ShareButton(props: ShareButtonProps) {
  return (
    <ActionButton
      icon={<Share className="h-4 w-4" />}
      label="Share"
      {...props}
    />
  );
}
