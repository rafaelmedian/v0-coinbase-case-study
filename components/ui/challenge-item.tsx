import { cn } from "@/lib/utils"

interface ChallengeItemProps {
  title: string
  description?: string
  className?: string
}

export function ChallengeItem({ title, description, className }: ChallengeItemProps) {
  return (
    <div className={cn("flex items-start gap-4 border-b border-[#1d1d1d]/10 py-6", className)}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
      <div className="flex-1">
        <h4 className="text-[30px] leading-[1.2] text-black">{title}</h4>
        {description && (
          <p className="mt-2 text-[24px] leading-[1.3] text-[#aaaaaa]">{description}</p>
        )}
      </div>
    </div>
  )
}

