"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionColor, setTransitionColor] = useState("")

  const handleNavigation = (href: string, color: string) => {
    setTransitionColor(color)
    setIsTransitioning(true)

    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push(href)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div>
          <h1 className="mb-8 text-5xl font-normal leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[#1d1d1d]">Delivering end-to-end</span>
            <br />
            <span className="text-[#0052ff]">onchain swap infrastructure</span>
            <br />
            <span className="text-[#1d1d1d]">with Coinbase</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-[#5d5d5d]">
            Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading
            experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer
            Platform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="space-y-4">
          {/* DEX Trading Section */}
          <button
            onClick={() => handleNavigation("/retail-dex", "#c8d4fa")}
            className="group relative flex w-full items-center justify-between bg-[#c8d4fa] p-8 transition-all hover:bg-[#b8c4ea]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0052ff]">
                <div className="h-6 w-6 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-3xl font-normal text-[#1d1d1d]">DEX Trading</h3>
            </div>
            <svg
              className="h-6 w-6 text-[#1d1d1d] transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Base App Section */}
          <button
            onClick={() => handleNavigation("/base-app", "#0052ff")}
            className="group relative flex w-full items-center justify-between bg-[#0052ff] p-8 transition-all hover:bg-[#0048dd]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <div className="h-6 w-6 bg-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Base App</h3>
            </div>
            <svg
              className="h-6 w-6 text-white transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Developer Platform Section */}
          <button
            onClick={() => handleNavigation("/developer-platform", "#1d1d1d")}
            className="group relative flex w-full items-center justify-between bg-[#1d1d1d] p-8 transition-all hover:bg-[#2d2d2d]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d]">
                <div className="h-6 w-6 rounded-full border-4 border-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Developer Platform</h3>
            </div>
            <svg
              className="h-6 w-6 text-white transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {isTransitioning && (
        <div className="fixed inset-0 z-50 animate-expand-overlay" style={{ backgroundColor: transitionColor }} />
      )}
    </div>
  )
}
