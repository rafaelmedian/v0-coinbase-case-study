import Image from "next/image"
import { cn } from "@/lib/utils"

export function TimelineGraphic({ className }: { className?: string }) {
  return (
    <div className={cn("w-full py-12", className)}>
      <h3 className="text-[var(--color-brand)] text-2xl font-normal mb-8 text-center md:text-left">
        Graphic: Timeline of Coinbase x 0x
      </h3>
      <div className="relative w-full aspect-[3/1] min-h-[200px] overflow-hidden rounded-lg bg-gray-50">
        <Image
          src="/images/timeline-graphic.png"
          alt="Timeline of Coinbase x 0x partnership"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
