import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20",
        success:
          "border-transparent bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-500 hover:bg-green-100 dark:hover:bg-green-500/20",
        impartial:
          "border-transparent bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/20",
        regular:
          "border-transparent bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-500/20",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }