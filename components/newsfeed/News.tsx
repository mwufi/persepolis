import React from 'react';
import { cn } from "@/lib/utils";
import { Circle } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  url: string;
}

interface NewsProps {
  items: NewsItem[];
  className?: string;
}

export function News({ items, className }: NewsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="font-bold text-lg px-3">News</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="h-4 w-px bg-border" />
              <Circle className="h-2 w-2 fill-current" />
              <div className="flex-1 w-px bg-border" />
            </div>
            <div className="flex-1 py-2">
              <div className="text-sm text-muted-foreground">
                {item.timestamp} {item.source}
              </div>
              <a
                href={item.url}
                className="block mt-2 text-base hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
