import type React from "react"

interface PageHeroProps {
  title: string
  headline: React.ReactNode
  icon: React.ReactNode
  stats: {
    value: string
    label: string
  }[]
  quote?: {
    text: string
    author: string
    role: string
  }
  bulletStats?: string[]
}

export default function PageHero({ title, headline, icon, stats, quote, bulletStats }: PageHeroProps) {
  return (
    <div className="relative bg-white">
      {/* Header Section */}
      <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] pt-[var(--space-16)] pb-[var(--space-12)]">
        {/* Logo + Title */}
        <div className="flex items-center gap-6 mb-8">
          <div className="transition-transform duration-300 hover:scale-105">
            {icon}
          </div>
          <p className="text-[clamp(2rem,5vw,4.2rem)] leading-[1.2] text-[var(--text-primary)]">
            {title}
          </p>
        </div>

        {/* Large Headline */}
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.2] text-[var(--text-primary)] max-w-[1045px]">
          {headline}
        </h1>
      </div>

      {/* Stats Row */}
      <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] pb-[var(--space-12)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[var(--bg-card)] rounded-[22px] p-8 flex flex-col justify-between min-h-[200px]"
            >
              <p className="text-[clamp(4rem,10vw,8.8rem)] leading-none text-[var(--text-primary)] font-light">
                {stat.value}
              </p>
              <p className="text-[clamp(1.25rem,2vw,2.25rem)] leading-[1.2] text-[var(--text-muted)] mt-4">
                {stat.label}
              </p>
            </div>
          ))}
          
          {/* Third stat card with bullet list if bulletStats provided */}
          {bulletStats && bulletStats.length > 0 && (
            <div className="bg-[var(--bg-card)] rounded-[22px] p-8 flex flex-col justify-center">
              <ul className="space-y-2 text-[clamp(1rem,1.5vw,1.4rem)] leading-[1.2] text-[var(--text-primary)]">
                {bulletStats.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-primary)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Quote Section */}
      {quote && (
        <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] pb-[var(--space-16)]">
          <blockquote className="max-w-[1130px]">
            <p className="text-[clamp(1.75rem,4vw,4rem)] leading-[1.2] text-[var(--text-primary)]">
              "{quote.text}"
            </p>
            <footer className="mt-6">
              <p className="text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.3] text-[var(--text-secondary)]">
                {quote.author}, {quote.role}
              </p>
            </footer>
          </blockquote>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-[var(--border-light)]" />
    </div>
  )
}
