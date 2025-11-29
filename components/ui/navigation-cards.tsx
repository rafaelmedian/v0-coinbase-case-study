import Link from "next/link"

interface NavigationCardsProps {
  className?: string
}

export function NavigationCards({ className }: NavigationCardsProps) {
  return (
    <section className={className}>
      {/* DEX Trading Section */}
      <Link
        href="/retail-dex"
        className="group relative z-10 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[var(--color-brand-light)] px-8 py-16 pt-10 pb-12 transition-all duration-300 hover:bg-[#b8c4ea] hover:shadow-[0_-4px_20px_rgba(0,82,255,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform duration-300 group-hover:scale-110">
            <div className="h-6 w-6 rounded-full border-4 border-white"></div>
          </div>
          <h2 className="text-4xl font-normal text-[var(--text-primary)] md:text-5xl">DEX Trading</h2>
        </div>
        <svg
          className="h-6 w-6 text-[var(--text-primary)] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>

      {/* Base App Section */}
      <Link
        href="/base-app"
        className="group relative z-20 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[var(--color-brand)] px-8 py-16 pb-12 transition-all duration-300 hover:bg-[var(--color-brand-hover)] hover:shadow-[0_-4px_20px_rgba(0,82,255,0.25)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
            <div className="h-6 w-6 bg-[var(--color-brand)]"></div>
          </div>
          <h2 className="text-4xl font-normal text-white md:text-5xl">Base App</h2>
        </div>
        <svg
          className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>

      {/* Developer Platform Section */}
      <Link
        href="/developer-platform"
        className="group relative z-30 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#18181b] px-8 pt-[60px] pb-24 transition-all duration-300 hover:bg-[#2d2d2d] hover:shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3d3d3d]">
            <div className="h-6 w-6 rounded-full border-4 border-[var(--color-brand)]"></div>
          </div>
          <h2 className="text-4xl font-normal text-white md:text-5xl">Developer Platform</h2>
        </div>
        <svg
          className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </section>
  )
}

