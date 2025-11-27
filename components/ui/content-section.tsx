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
  return (
    <section className={cn(
      "px-6 py-16",
      showBorder && "border-t border-[#f2f2f2]"
    )}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
          <div>
            {label && (
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-block h-3 w-3 bg-[#0052ff]"></span>
                <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">
                  {label}
                </span>
              </div>
            )}
          </div>
          <div className={className}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

