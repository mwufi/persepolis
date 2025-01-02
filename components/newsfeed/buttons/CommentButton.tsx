'use client'

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ActionButton } from './ActionButton';

type CommentButtonProps = Omit<React.ComponentProps<typeof ActionButton>, 'icon' | 'label'>;

export function CommentButton(props: CommentButtonProps) {
  return (
    <ActionButton
      icon={<MessageSquare className="h-4 w-4" />}
      label="Comment"
      {...props}
    />
  );
}
