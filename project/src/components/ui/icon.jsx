"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { RiFacebookFill } from "react-icons/ri"
import { FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { SiTiktok } from "react-icons/si"

const iconVariants = cva(
  "inline-block transition-colors",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        destructive: "text-destructive",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
)

const Icon = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false,
  icon,
  ...props 
}, ref) => {
  if (!icon) {
    return null
  }

  let IconComponent = icon

  // Handle string identifiers for social media icons
  if (typeof icon === 'string') {
    switch (icon) {
      case 'facebook':
        IconComponent = RiFacebookFill
        break
      case 'instagram':
        IconComponent = FaInstagram
        break
      case 'whatsapp':
        IconComponent = FaWhatsapp
        break
      case 'tiktok':
        IconComponent = SiTiktok
        break
      default:
        IconComponent = icon
    }
  }

  return (
    <IconComponent
      ref={ref}
      className={cn(iconVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Icon.displayName = "Icon"

export { Icon, iconVariants }