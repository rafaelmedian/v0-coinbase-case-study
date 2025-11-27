import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-zinc-900 pb-16 pt-20", className)}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="mb-16 space-y-12">
          <p className="text-center text-[24px] text-white">Start building with 0x</p>
          <div className="rounded-[16px] bg-[#26272b] px-12 py-9">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="w-full space-y-6 lg:w-auto">
                <p className="text-[40px] leading-[1.2] text-white opacity-50">Enter your email</p>
                <p className="text-[18px] leading-[1.6] text-white opacity-90">Sign up for our newsletter</p>
              </div>
              <button className="rounded-[12px] border border-zinc-200 bg-white px-6 py-4 text-[18px] font-semibold text-zinc-900 transition-colors hover:bg-zinc-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div className="h-px bg-zinc-100 opacity-10"></div>
          <p className="text-center text-[14px] text-zinc-200 opacity-60">
            © ZeroEx Holdings, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

