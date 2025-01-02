'use client'

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  count?: number;
  show?: boolean;
  className?: string;
}

export function LikeButton({ count, show = false, className }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showCount, setShowCount] = useState(show);
  const displayCount = count ? (count > 999 ? `${(count / 1000).toFixed(1)}k` : count) : 0;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLiked(!isLiked);
    if (!show && !showCount) {
      setShowCount(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className={cn("gap-2 relative group", className)}
    >
      <Heart 
        className={cn(
          "h-4 w-4 transition-colors",
          isLiked && "fill-red-500 text-red-500"
        )}
      />
      <AnimatePresence mode="wait">
        {showCount ? (
          <motion.span
            key="count"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={cn(
              "text-sm",
              isLiked && "text-red-500"
            )}
          >
            {displayCount}
          </motion.span>
        ) : (
          <motion.span
            key="label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Like
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
