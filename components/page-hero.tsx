"use client"

import React from "react"
import { AppScreenshot } from "./app-screenshot"

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
  screenshotType?: "dex" | "mobile" | "terminal"
}

export default function PageHero({ title, headline, icon, stats, quote, bulletStats, screenshotType }: PageHeroProps) {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />

      {/* Header Section */}
      <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] pt-[var(--space-16)] pb-[var(--space-12)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div>
            {/* Logo + Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                {icon}
              </div>
              <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-[var(--text-secondary)] uppercase tracking-wide">
                {title}
              </p>
            </div>

            {/* Large Headline */}
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[var(--text-primary)] mb-12 font-medium">
              {headline}
            </h1>

            {/* Quote Section (Moved here for better balance) */}
            {quote && (
              <div className="border-l-4 border-[var(--color-brand)] pl-6 py-2 max-w-xl">
                <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] leading-[1.4] text-[var(--text-primary)] italic mb-4">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-3">
                   {/* Author Avatar Placeholder */}
                   <div className="w-10 h-10 rounded-full bg-gray-200" />
                   <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{quote.author}</p>
                      <p className="text-sm text-[var(--text-muted)]">{quote.role}</p>
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: App Screenshot with Shadow */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Abstract blob behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 blur-3xl rounded-full -z-10" />
             
             {screenshotType && (
               <AppScreenshot type={screenshotType} className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500" />
             )}
          </div>
        </div>
      </div>

      {/* Stats Row - Full Width Strip */}
      <div className="border-y border-[var(--border-subtle)] bg-white/50 backdrop-blur-sm">
        <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
            {stats.map((stat, index) => (
              <div key={index} className="px-4 first:pl-0 text-center md:text-left">
                <p className="text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-[var(--text-primary)] font-medium mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--text-base)] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
            
            {/* Bullet Stats if available */}
            {bulletStats && bulletStats.length > 0 && (
               <div className="px-4 md:pl-8 flex items-center">
                 <ul className="space-y-2">
                   {bulletStats.map((item, index) => (
                     <li key={index} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                       <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
