
import { DottedPattern } from "@/components/ui/dotted-pattern"

export default function GridTestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="w-[964px] h-[964px] relative border border-gray-200">
        <DottedPattern className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center text-gray-500 pointer-events-none">
        Move mouse over the grid to test sparkle trail effect
      </div>
    </div>
  )
}