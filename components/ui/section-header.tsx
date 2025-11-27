import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  className?: string
}

export function SectionHeader({ label, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <span className="mt-1 inline-block h-3 w-3 bg-[#0052ff]"></span>
      <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">
        {label}
      </span>
    </div>
  )
}

