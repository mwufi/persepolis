import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SourceLinkProps {
  name: string;
  url: string;
  className?: string;
}

export function SourceLink({ name, url, className }: SourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2",
        "text-sm text-muted-foreground",
        "bg-secondary rounded-lg",
        "hover:bg-secondary/80 transition-colors",
        className
      )}
    >
      <ExternalLink className="h-4 w-4" />
      <span>Source: {name}</span>
    </a>
  );
}
