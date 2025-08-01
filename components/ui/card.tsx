import * as React from "react"

import { cn } from "@/lib/utils"

const cardVariants = {
  default: "bg-card text-card-foreground border shadow-sm",
  glass: "bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:bg-black/5 dark:border-white/5",
}

function Card({ 
  className, 
  variant = "default",
  ...props 
}: React.ComponentProps<"div"> & { variant?: keyof typeof cardVariants }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl py-6 transition-all duration-300",
        cardVariants[variant],
        variant === "default" && "hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] hover:scale-[1.02] hover:border-purple-200/50 dark:hover:border-purple-700/30",
        variant === "glass" && "hover:bg-white/10 hover:border-white/20 dark:hover:bg-black/10 dark:hover:border-white/10",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}


