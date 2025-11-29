import type React from "react"

interface PageHeroProps {
  title: string
  quote: string
  bgColor: string
  textColor: string
  icon: React.ReactNode
  stats: {
    value: string
    label: string
  }[]
}

export default function PageHero({ title, quote, bgColor, textColor, icon, stats }: PageHeroProps) {
  return (
    <div 
      className="relative rounded-tl-[40px] rounded-tr-[40px] py-12 overflow-hidden" 
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.05) 100%)`
        }}
      />
      
      {/* Full width hero content, aligned left */}
      <main className="relative px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-8 md:py-12">
        <div className="mb-8 flex items-center gap-4">
          <div className="transition-transform duration-300 hover:scale-110">
            {icon}
          </div>
          <h2 
            className="text-[48px] leading-[1.15] tracking-[-0.01em]" 
            style={{ color: textColor }}
          >
            {title}
          </h2>
        </div>

        <h1 
          className="mb-12 max-w-3xl text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal tracking-[-0.02em]" 
          style={{ color: textColor }}
        >
          {quote}
        </h1>

        <div className="mb-12 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span 
                className="text-[100px] md:text-[120px] lg:text-[140px] leading-[0.9] font-thin tracking-[-0.03em]" 
                style={{ color: textColor }}
              >
                {stat.value}
              </span>
              <small 
                className="mt-2 text-[16px] md:text-[18px] tracking-wide"
                style={{ color: textColor, opacity: 0.65 }}
              >
                {stat.label}
              </small>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
