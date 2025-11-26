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
    <div className="py-12" style={{ backgroundColor: bgColor }}>
      <main className="px-6">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="mb-8 flex items-center gap-4">
            {icon}
            <h1 className="text-4xl font-normal md:text-5xl" style={{ color: textColor }}>
              {title}
            </h1>
          </div>

          <p className="mb-12 max-w-3xl text-2xl italic leading-relaxed md:text-3xl" style={{ color: textColor }}>
            {quote}
          </p>

          <div className="mb-12 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-6xl font-bold md:text-7xl" style={{ color: textColor }}>
                  {stat.value}
                </div>
                <div className="text-lg" style={{ color: textColor, opacity: 0.7 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
