"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TableOfContentsProps {
  items: {
    id: string
    label: string
  }[]
  className?: string
  variant?: "sidebar" | "horizontal" | "floating"
}

export function TableOfContents({ items, className, variant = "sidebar" }: TableOfContentsProps) {
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

  if (variant === "floating") {
    const activeItem = items.find((item) => item.id === activeId) || items[0]

    return (
      <div className={cn("fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 bg-[#1A1A1A] rounded-full shadow-2xl border border-white/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="rounded-full text-white hover:bg-white/10 hover:text-white px-4 h-10 gap-3 font-normal min-w-[160px] justify-between"
            >
              {activeItem?.label || "Overview"}
              <div className="bg-white/10 rounded-full p-1 ml-1">
                <ChevronDown className="w-3 h-3" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-[#1A1A1A] border-white/10 text-white p-2">
            {items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                  setActiveId(item.id)
                }}
                className={cn(
                  "cursor-pointer focus:bg-white/10 focus:text-white rounded-md px-3 py-2",
                  activeId === item.id ? "bg-white/10" : ""
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="w-[1px] h-6 bg-white/20" />
        
        <Link href="/start-building">
          <Button 
            variant="ghost" 
            className="rounded-full text-white hover:bg-white/10 hover:text-white px-4 h-10 gap-3 font-normal"
          >
            Contact Sales
            <div className="bg-white/10 rounded-full p-1 ml-1">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </Button>
        </Link>
      </div>
    )
  }

  if (variant === "horizontal") {
    return (
      <nav className={cn("flex flex-wrap gap-x-8 gap-y-3", className)}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "text-[var(--text-sm)] transition-colors hover:text-[var(--text-primary)]",
              activeId === item.id
                ? "text-[var(--text-primary)] font-medium"
                : "text-[var(--text-muted)]"
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
        ))}
      </nav>
    )
  }

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
