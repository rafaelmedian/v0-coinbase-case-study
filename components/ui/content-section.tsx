"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  label?: string
  children: React.ReactNode
  showBorder?: boolean
  className?: string
}

export function ContentSection({ 
  label, 
  children, 
  showBorder = true, 
  className 
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] md:py-[var(--section-padding)]",
        showBorder && "border-t border-[var(--border-subtle)]",
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="grid grid-cols-1 gap-[var(--grid-gap)] lg:grid-cols-4 lg:gap-[var(--grid-gap-lg)]">
        {/* Column 1 - Label */}
        <div className={cn(
          "transition-all duration-500 delay-100",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        )}>
          {label && (
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-[2px] bg-[var(--color-brand)]"></span>
              <span className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {label}
              </span>
            </div>
          )}
        </div>
        {/* Columns 2-4 - Content with max-width for legibility */}
        <div className={cn(
          "lg:col-span-3 max-w-[1080px] transition-all duration-500 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          className
        )}>
          {children}
        </div>
      </div>
    </section>
  )
}
