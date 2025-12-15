"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedStatProps {
  value: string
  label: string
}

function AnimatedStat({ value, label }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateValue()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  const animateValue = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""))
    const duration = 1500
    const steps = 60
    const increment = numericValue / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        if (value.includes("B")) {
          setDisplayValue(`$${current.toFixed(1)}B`)
        } else if (value.includes("M")) {
          setDisplayValue(`${current.toFixed(1)}M`)
        } else {
          setDisplayValue(Math.floor(current).toString())
        }
      }
    }, duration / steps)
  }

  return (
    <div
      ref={ref}
      className="bg-[#26272b] rounded-[12px] py-8 px-6 flex flex-col items-center justify-center min-h-[140px]"
    >
      <p className="text-[48px] leading-[1] tracking-[-1px] text-white text-center font-medium">
        {displayValue}+
      </p>
      <p className="text-[16px] leading-[1.4] text-white/70 text-center mt-2">
        {label}
      </p>
    </div>
  )
}

export function DeveloperNetworkSection() {
  return (
    <section id="fast" className="bg-[#18181b] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden scroll-mt-[80px]">
      <div className="py-[80px] px-6 md:px-[80px] lg:px-[132px]">
        <div className="ml-0 lg:ml-[calc(33.33%-40px)]">
          <div className="flex flex-col gap-10 max-w-[800px]">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] leading-[1.15] text-white">
                A fast, flexible, and reliable network for developers
              </h2>
              <p className="text-[20px] leading-[1.5] text-white/70">
                Fast, flexible, and reliable, 0x is the most trusted Web3 standard for exchanging tokenized value.
              </p>
            </div>

            {/* Stats - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatedStat value="28" label="Networks" />
              <AnimatedStat value="5.6M" label="Transactions" />
              <AnimatedStat value="$1.4B" label="Volume" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
