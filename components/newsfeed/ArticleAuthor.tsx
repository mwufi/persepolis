import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleAuthorProps {
  name: string;
  avatar: string;
  timestamp: string;
}

export function ArticleAuthor({ name, avatar, timestamp }: ArticleAuthorProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-6 w-6">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{timestamp}</span>
      </div>
    </div>
  );
}
