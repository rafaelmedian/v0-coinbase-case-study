import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
}

export function FeatureCard({ title, description, className, children }: FeatureCardProps) {
  return (
    <div className={cn("rounded-[15px] bg-neutral-100 p-8", className)}>
      <div className="flex items-start gap-3">
        <span className="mt-1.5 inline-block h-5 w-5 shrink-0 rounded-sm bg-[#0052ff]"></span>
        <div className="flex-1">
          <h3 className="mb-4 text-[30px] leading-[1.2] text-black">{title}</h3>
          <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

