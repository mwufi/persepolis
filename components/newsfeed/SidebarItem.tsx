'use client'

import React from 'react';
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon, label, href, isActive, onClick }: SidebarItemProps) {
  const content = (
    <div className={cn(
      "nav-item cursor-pointer group relative",
      "flex items-center gap-3 px-3 py-2 rounded-lg",
      "hover:bg-accent/50 transition-colors",
      isActive && "bg-accent"
    )}>
      <span className="nav-item-icon w-7 h-7">
        {icon}
      </span>
      <span className="nav-item-label hidden xl:block">
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="w-full text-left">
      {content}
    </button>
  );
}
