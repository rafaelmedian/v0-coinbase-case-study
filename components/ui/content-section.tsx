import { cn } from "@/lib/utils"

interface ContentSectionProps {
  label?: string
  children: React.ReactNode
  showBorder?: boolean
  className?: string
  id?: string
  variant?: "sidebar" | "stacked"
}

export function ContentSection({ 
  label, 
  children, 
  showBorder = true, 
  className,
  id,
  variant = "sidebar"
}: ContentSectionProps) {
  const sectionId = id || label?.toLowerCase().replace(/\s+/g, '-')
  
  if (variant === "stacked") {
    return (
      <section 
        id={sectionId}
        aria-labelledby={label ? `${sectionId}-label` : undefined}
        className={cn(
          "py-[var(--space-16)] md:py-[var(--space-20)]",
          showBorder && "border-t border-[var(--border-subtle)]"
        )}
      >
        {label && (
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-4 w-4 shrink-0 rounded-[3px] bg-[var(--color-brand)]" aria-hidden="true" />
            <h2 
              id={`${sectionId}-label`}
              className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[var(--text-primary)]"
            >
              {label}
            </h2>
          </div>
        )}
        <div className={cn("max-w-[1080px]", className)}>
          {children}
        </div>
      </section>
    )
  }

  return (
    <section 
      id={sectionId}
      aria-labelledby={label ? `${sectionId}-label` : undefined}
      className={cn(
        "px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] md:py-[var(--section-padding)]",
        showBorder && "border-t border-[var(--border-subtle)]"
      )}
    >
      <div className="grid grid-cols-1 gap-[var(--grid-gap)] lg:grid-cols-4 lg:gap-[var(--grid-gap-lg)]">
        {/* Column 1 - Sticky Label */}
        <div className="lg:relative">
          {label && (
            <div className="lg:sticky lg:top-[120px] flex items-start gap-2">
              <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-[2px] bg-[var(--color-brand)]" aria-hidden="true" />
              <span 
                id={`${sectionId}-label`}
                className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]"
              >
                {label}
              </span>
            </div>
          )}
        </div>
        {/* Columns 2-4 - Content with max-width for legibility */}
        <div className={cn("lg:col-span-3 max-w-[1080px]", className)}>
          {children}
        </div>
      </div>
    </section>
  )
}
