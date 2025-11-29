import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
}

export function FeatureCard({ title, description, className, children }: FeatureCardProps) {
  return (
    <div className={cn(
      "rounded-[15px] bg-[var(--bg-surface)] p-8",
      "border border-transparent",
      "transition-all duration-300 ease-out",
      "hover:border-[var(--color-brand)]/20 hover:shadow-md",
      className
    )}>
      <div className="flex items-start gap-3">
        <span className="mt-1.5 inline-block h-5 w-5 shrink-0 rounded-[4px] bg-[var(--color-brand)] transition-transform duration-300 group-hover:scale-110"></span>
        <div className="flex-1">
          <h4 className="mb-4 text-[var(--text-primary)]">{title}</h4>
          <p className="text-[var(--text-secondary)] leading-[1.4]">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
