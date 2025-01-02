'use client'

import React from 'react';
import { Heart, MessageSquare, Share } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  onClick?: () => void;
  className?: string;
}

function ActionButton({ icon, label, count, onClick, className }: ActionButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn("gap-2", className)}
    >
      {icon}
      <span>{label}</span>
      {count !== undefined && (
        <span className="text-muted-foreground">({count})</span>
      )}
    </Button>
  );
}

export function LikeButton(props: Omit<ActionButtonProps, 'icon' | 'label'>) {
  return (
    <ActionButton
      icon={<Heart className="h-4 w-4" />}
      label="Like"
      {...props}
    />
  );
}

export function CommentButton(props: Omit<ActionButtonProps, 'icon' | 'label'>) {
  return (
    <ActionButton
      icon={<MessageSquare className="h-4 w-4" />}
      label="Comment"
      {...props}
    />
  );
}

export function ShareButton(props: Omit<ActionButtonProps, 'icon' | 'label'>) {
  return (
    <ActionButton
      icon={<Share className="h-4 w-4" />}
      label="Share"
      {...props}
    />
  );
}

export function LikeShareButtons() {
  return (
    <div className="flex items-center gap-2">
      <LikeButton />
      <CommentButton />
      <ShareButton />
    </div>
  );
}
