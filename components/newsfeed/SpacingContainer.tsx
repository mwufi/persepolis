import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SpacingContainerProps {
  children: ReactNode[] | ReactNode
  className?: string
  noDivider?: boolean
}

export function SpacingContainer({
  children,
  className,
  noDivider
}: SpacingContainerProps) {
  return (
    <div className={cn(
      "space-y-px",
      !noDivider && "divide-y divide-line",
      className
    )}>
      {Array.isArray(children) ? children.map((x, i) => (
        <div className="py-5" key={i}>
          {x}
        </div>
      )) : (
        <div className="py-5">
          {children}
        </div>
      )}
    </div>
  )
}
