import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TickerLinkProps {
  symbol: string;
  change?: number;
  compact?: boolean;
  className?: string;
}

export function TickerLink({ symbol, change, compact = false, className }: TickerLinkProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const changeColor = isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-muted-foreground';

  return (
    <div
      className={cn(
        "flex flex-row items-center rounded",
        "bg-secondary/50 px-3 py-1.5",
        "cursor-pointer",
        className
      )}
    >
      <span className="text-sm font-medium">{symbol}</span>
      
      {change !== undefined && (
        <>
          <div className="w-2" />
          <div className="flex flex-row items-center">
            {isPositive && <ArrowUpIcon className="w-3 h-3 text-green-500" />}
            {isNegative && <ArrowDownIcon className="w-3 h-3 text-red-500" />}
            <span className={cn("text-sm ml-1", changeColor)}>
              {Math.abs(change).toFixed(2)}%
            </span>
          </div>
        </>
      )}
    </div>
  );
}
