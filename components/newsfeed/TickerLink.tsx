import React from 'react';
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerLinkProps {
  symbol: string;
  change?: number;
  className?: string;
}

export function TickerLink({ symbol, change, className }: TickerLinkProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <a
      href={`/ticker/${symbol}`}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2",
        "bg-secondary rounded-lg",
        "hover:bg-secondary/80 transition-colors",
        className
      )}
    >
      <span className="font-medium">{symbol}</span>
      {change && (
        <span className={cn(
          "flex items-center gap-1",
          isPositive && "text-green-500",
          isNegative && "text-red-500"
        )}>
          {isPositive && <TrendingUp className="h-3 w-3" />}
          {isNegative && <TrendingDown className="h-3 w-3" />}
          {Math.abs(change).toFixed(2)}%
        </span>
      )}
    </a>
  );
}
