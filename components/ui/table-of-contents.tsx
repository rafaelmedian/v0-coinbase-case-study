"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  items: {
    id: string
    label: string
  }[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -35% 0px" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav className={cn("space-y-2", className)}>
      <p className="font-medium text-sm text-muted-foreground mb-4 pl-4 uppercase tracking-wider">
        On this page
      </p>
      <ul className="space-y-2 text-sm border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block pl-4 py-1 border-l-2 -ml-[1px] transition-colors hover:text-foreground",
                activeId === item.id
                  ? "border-primary text-foreground font-medium"
                  : "border-transparent text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                })
                setActiveId(item.id)
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
