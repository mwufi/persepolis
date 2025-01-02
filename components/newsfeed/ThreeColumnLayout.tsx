import React from 'react';
import { cn } from "@/lib/utils";

interface ThreeColumnLayoutProps {
  leftSidebar?: React.ReactNode;
  mainContent: React.ReactNode;
  rightSidebar?: React.ReactNode;
  className?: string;
}

export function ThreeColumnLayout({
  leftSidebar,
  mainContent,
  rightSidebar,
  className
}: ThreeColumnLayoutProps) {
  return (
    <div className={cn("flex min-h-screen", className)}>
      {/* Left Sidebar */}
      {leftSidebar && (
        <aside className="hidden lg:block w-[56px] xl:w-[260px] border-r border-line flex-none">
          <div className="fixed top-0 w-[56px] xl:w-[260px] h-screen overflow-y-auto">
            {leftSidebar}
          </div>
        </aside>
      )}
      
      {/* Main Content */}
      <main className="flex-1 min-w-0 relative pb-16 md:pb-0">
        {mainContent}
      </main>

      {/* Right Sidebar */}
      {rightSidebar && (
        <aside className="hidden lg:block w-[350px] border-l border-line flex-none">
          <div className="fixed top-0 w-[350px] h-screen overflow-y-auto">
            {rightSidebar}
          </div>
        </aside>
      )}
    </div>
  );
}
