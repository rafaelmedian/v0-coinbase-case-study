import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  className?: string
}

export function SectionHeader({ label, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="inline-block h-3.5 w-3.5 rounded-sm bg-[#0052ff]"></span>
      <span className="text-lg font-normal uppercase tracking-wide text-[#898e99]">
        {label}
      </span>
    </div>
  )
}

