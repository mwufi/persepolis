'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  onClick?: () => void;
  className?: string;
}

export function ActionButton({ icon, label, count, onClick, className }: ActionButtonProps) {
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
