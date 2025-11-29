import { cn } from "@/lib/utils"

interface ContentSectionProps {
  label?: string
  children: React.ReactNode
  showBorder?: boolean
  className?: string
  id?: string
}

export function ContentSection({ 
  label, 
  children, 
  showBorder = true, 
  className,
  id 
}: ContentSectionProps) {
  const sectionId = id || label?.toLowerCase().replace(/\s+/g, '-')
  
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
        {/* Column 1 - Label */}
        <div>
          {label && (
            <div className="flex items-start gap-2">
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
