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
  const [isFixed, setIsFixed] = React.useState(false)
  const [width, setWidth] = React.useState<number | null>(null)
  const [left, setLeft] = React.useState<number | null>(null)
  const [height, setHeight] = React.useState<number | null>(null)
  const [topOffset, setTopOffset] = React.useState<number>(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Track active section
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

  // Handle fixed positioning when scrolled past
  React.useEffect(() => {
    let originalTop: number | null = null
    let originalLeft: number | null = null

    const handleScroll = () => {
      if (!containerRef.current) return

      // Store original position on first render
      if (originalTop === null) {
        const rect = containerRef.current.getBoundingClientRect()
        originalTop = rect.top + window.scrollY
        originalLeft = rect.left
        setWidth(containerRef.current.offsetWidth)
        setHeight(containerRef.current.offsetHeight)
        setLeft(rect.left)
      }

      const scrollY = window.scrollY

      // Check if we've scrolled past the original top position
      if (originalTop !== null && scrollY >= originalTop - topOffset && !isFixed) {
        setIsFixed(true)
      } else if (originalTop !== null && scrollY < originalTop - topOffset && isFixed) {
        // Reset when scrolling back up
        setIsFixed(false)
        setLeft(null)
      }
    }

    // Set initial top offset (usually 0, but can be adjusted)
    setTopOffset(0)

    const handleResize = () => {
      // Reset original position on resize
      originalTop = null
      originalLeft = null
      handleScroll()
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isFixed, topOffset])

  return (
    <>
      {/* Spacer to maintain layout when fixed */}
      {isFixed && height !== null && (
        <div style={{ height: `${height}px`, width: width !== null ? `${width}px` : 'auto' }} />
      )}
      <div
        ref={containerRef}
        className={cn(
          "transition-all",
          isFixed && "fixed"
        )}
        style={
          isFixed && width !== null && left !== null
            ? {
                width: `${width}px`,
                left: `${left}px`,
                top: `${topOffset}px`,
              }
            : undefined
        }
      >
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
      </div>
    </>
  )
}
