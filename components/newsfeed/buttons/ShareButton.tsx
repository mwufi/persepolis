'use client'

import React, { useState } from 'react';
import { Share } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  count?: number;
  show?: boolean;
  className?: string;
}

export function ShareButton({ count, show = false, className }: ShareButtonProps) {
  const [showCount, setShowCount] = useState(show);
  const displayCount = count ? (count > 999 ? `${(count / 1000).toFixed(1)}k` : count) : 0;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
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
      <Share className="h-4 w-4" />
      <AnimatePresence mode="wait">
        {showCount ? (
          <motion.span
            key="count"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-sm"
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
            Share
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
