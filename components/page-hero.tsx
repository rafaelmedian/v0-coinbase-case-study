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
      className="relative rounded-tl-[40px] rounded-tr-[40px] overflow-hidden h-auto md:h-[887px] flex flex-col justify-between px-6 md:px-[50px] py-10 md:py-[60px]" 
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.05) 100%)`
        }}
      />
      
      {/* Top content: Header + Quote */}
      <div className="relative flex flex-col gap-[62px] max-w-[1120px]">
        {/* Icon + Title row - gap-24px */}
        <div className="flex items-center gap-6">
          <div className="transition-transform duration-300 hover:scale-105">
            {icon}
          </div>
          <p 
            className="text-[32px] md:text-[36px] leading-[1.2] tracking-normal" 
            style={{ color: textColor }}
          >
            {title}
          </p>
        </div>

        {/* Quote with quotation marks - 64px, leading-1.2 */}
        <p 
          className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.2] font-normal" 
          style={{ color: textColor }}
        >
          "{quote}"
        </p>
      </div>

      {/* Bottom: Stats - pushed to bottom via justify-between */}
      <div className="relative flex flex-col md:flex-row gap-8 md:gap-[97px] mt-12 md:mt-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-[12px] w-full md:w-[338px]">
            {/* Stat value - 140px, leading-none */}
            <p 
              className="text-[80px] md:text-[120px] lg:text-[140px] leading-none font-normal" 
              style={{ color: textColor }}
            >
              {stat.value}
            </p>
            {/* Divider line */}
            <div 
              className="w-full h-px"
              style={{ backgroundColor: textColor, opacity: 0.3 }}
            />
            {/* Stat label - 32px */}
            <p 
              className="text-[24px] md:text-[32px] leading-[1.2]"
              style={{ color: textColor }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
