"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

// Quote data - replace images with actual GIFs/images when available
const quotes = [
  {
    id: 1,
    text: "0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.",
    author: "Coinbase Team",
    role: "Product Engineering",
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    text: "The integration was seamless and allowed us to scale our swap infrastructure globally in weeks.",
    author: "Brian Armstrong",
    role: "CEO, Coinbase",
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    text: "0x's aggregation layer gives our users the best prices across dozens of liquidity sources.",
    author: "Product Team",
    role: "Coinbase Wallet",
    image: "/placeholder-user.jpg",
  },
]

const ROTATION_INTERVAL = 7000 // 7 seconds

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToQuote = useCallback((index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setProgress(0)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 200)
  }, [currentIndex])

  const nextQuote = useCallback(() => {
    goToQuote((currentIndex + 1) % quotes.length)
  }, [currentIndex, goToQuote])

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextQuote()
          return 0
        }
        return prev + (100 / (ROTATION_INTERVAL / 50))
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [isPaused, nextQuote])

  const currentQuote = quotes[currentIndex]

  return (
    <section className="relative pt-[80px] pb-[60px] px-6 md:px-[50px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Headline */}
        <h1 className="text-[clamp(2.5rem,8vw,5.25rem)] leading-[1.2] tracking-[-0.04em] text-center text-[#26272b] max-w-[900px] mx-auto mb-10">
          Delivering the end-to-end{" "}
          <br className="hidden md:block" />
          <span className="text-[#0052ff]">on-chain infra</span>
          <br className="hidden md:block" />
          {" "}running Coinbase.
        </h1>

        {/* Quote Card */}
        <div 
          className="relative bg-[#f4f4f5] rounded-[16px] p-6 max-w-[480px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex flex-col gap-4 items-center transition-all duration-300 ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Quote Text */}
            <p className="text-[16px] leading-[1.5] text-[#3f3f46] text-center">
              &ldquo;{currentQuote.text}&rdquo;
            </p>
            
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#0052ff] to-[#00d4ff] overflow-hidden ring-2 ring-white shadow-md">
                <Image
                  src={currentQuote.image}
                  alt={currentQuote.author}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium leading-[1.2] text-[#18181b]">
                  {currentQuote.author}
                </span>
                <span className="text-[12px] leading-[1.2] text-[#71717a]">
                  {currentQuote.role}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Timer Pills - Outside below the card */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {quotes.map((quote, index) => (
            <button
              key={quote.id}
              onClick={() => {
                goToQuote(index)
                setIsPaused(false)
              }}
              className="group relative h-[6px] rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052ff] focus-visible:ring-offset-2"
              style={{ width: index === currentIndex ? '48px' : '24px' }}
              aria-label={`Go to quote ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              {/* Background pill */}
              <div className="absolute inset-0 bg-[#e4e4e7] rounded-full" />
              
              {/* Progress fill */}
              <div 
                className="absolute inset-y-0 left-0 bg-[#18181b] rounded-full transition-all"
                style={{ 
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  transitionDuration: index === currentIndex ? '50ms' : '300ms'
                }}
              />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#0052ff] opacity-0 group-hover:opacity-20 rounded-full transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative pixel grid - bottom right */}
      <div className="absolute bottom-[40px] right-[60px] hidden lg:block">
        <PixelDecoration />
      </div>
    </section>
  )
}

function PixelDecoration() {
  // Create a 6x6 grid with some cells filled in blue with varying opacities
  const grid = [
    [0, 0, 0, 0, 0.15, 0.25],
    [0, 0, 0, 0.2, 0.4, 0.6],
    [0, 0, 0.15, 0.35, 0.55, 0.75],
    [0, 0.1, 0.3, 0.5, 0.7, 0.9],
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0.3, 0.5, 0.7, 0.9, 1],
  ]

  return (
    <div className="flex flex-col gap-[3px]">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-[3px]">
          {row.map((opacity, colIndex) => (
            <div
              key={colIndex}
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{
                backgroundColor: opacity > 0 ? `rgba(0, 82, 255, ${opacity})` : 'transparent',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}




