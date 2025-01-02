import React from 'react';
import { cn } from "@/lib/utils";

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="h-5 flex-none" />
      <nav className="flex-1 overflow-auto px-2 xl:pr-5">
        {children}
      </nav>
      <div className="h-8 flex-none" />
    </div>
  );
}
