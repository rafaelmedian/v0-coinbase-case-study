import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "rounded-[42px] bg-[var(--bg-surface)] px-8 py-12 text-center",
      "transition-all duration-300 ease-out",
      "hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5",
      "card-depth",
      className
    )}>
      <h3 className="mb-3 text-[76px] font-thin leading-none tracking-[-0.02em] text-[var(--text-primary)]">{value}</h3>
      <p className="!text-[18px] leading-[1.5] text-[var(--text-muted)]">{label}</p>
    </div>
  )
}
