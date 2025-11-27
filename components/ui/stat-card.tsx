import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("rounded-[42px] bg-zinc-100 px-8 py-12 text-center", className)}>
      <h3 className="mb-2 text-[76px] font-thin leading-none text-[#26272b]">{value}</h3>
      <p className="!text-[18px] leading-[1.4] text-[#70707b]">{label}</p>
    </div>
  )
}

