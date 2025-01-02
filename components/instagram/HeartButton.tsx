'use client'

import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeartButtonProps {
  initialIsLiked?: boolean;
  onToggle?: (isLiked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HeartButton = ({
  initialIsLiked = false,
  onToggle,
  size = 'md',
  className
}: HeartButtonProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPing, setShowPing] = useState(false);

  useEffect(() => {
    if (isAnimating && isLiked) {
      setShowPing(true);
      const timer = setTimeout(() => {
        setShowPing(false);
      }, 300); // Match the ping animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating, isLiked]);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setIsAnimating(true);
    onToggle?.(!isLiked);
  };

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative hover:opacity-70 transition-opacity",
        className
      )}
    >
      <Heart
        className={cn(
          sizeClasses[size],
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500',
          isAnimating && isLiked && 'animate-heart-burst',
          'transition-colors duration-200'
        )}
        onAnimationEnd={() => setIsAnimating(false)}
      />
      {showPing && isLiked && (
        <Heart
          className={cn(
            sizeClasses[size],
            'absolute inset-0 fill-red-500 text-red-500 animate-heart-ping'
          )}
        />
      )}
    </button>
  );
};

export default HeartButton;
