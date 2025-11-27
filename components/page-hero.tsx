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
    <div className="rounded-tl-[40px] rounded-tr-[40px] py-12" style={{ backgroundColor: bgColor }}>
      <main className="px-6">
        <div className="p-8 md:p-12 lg:p-16 lg:px-0 lg:py-0">
          <div className="mb-8 flex items-center gap-4">
            {icon}
            <h2 className="text-[48px] leading-[1.2]" style={{ color: textColor }}>
              {title}
            </h2>
          </div>

          <h1 className="mb-12 max-w-3xl text-[64px] leading-[1.1] font-normal" style={{ color: textColor }}>
            {quote}
          </h1>

          <div className="mb-12 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[140px] leading-[1] font-normal" style={{ color: textColor }}>
                  {stat.value}
                </span>
                <small style={{ color: textColor, opacity: 0.7 }}>
                  {stat.label}
                </small>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
