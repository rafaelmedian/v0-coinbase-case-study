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
      className="bg-[#26272b] rounded-[8px] py-[71px] px-0 flex flex-col items-center gap-[1px]"
    >
      <p className="text-[67px] leading-[1.2] tracking-[-1.34px] text-[#fcfcfc] text-center">
        {displayValue}+
      </p>
      <p className="text-[34px] leading-[1.2] text-[#fcfcfc] text-center">
        {label}
      </p>
    </div>
  )
}

export function DeveloperNetworkSection() {
  return (
    <section className="bg-[#18181b] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden">
      <div className="flex">
        {/* Left spacer for sidebar alignment */}
        <div className="hidden lg:block w-[calc(41.67%-43px)]" />
        
        {/* Content */}
        <div className="flex-1 py-[76px] pr-[132px]">
          <div className="flex flex-col gap-12 max-w-[701px]">
            {/* Header */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[44px] leading-[1.2] text-[#fcfcfc]">
                A fast, flexible, and reliable network for developers
              </h2>
              <p className="text-[22px] leading-[1.35] text-[#fcfcfc]">
                Fast, flexible, and reliable, 0x is the most trusted Web3 standard for exchanging tokenized value.
              </p>
            </div>

            {/* Stats - Vertical Stack */}
            <div className="flex flex-col gap-2 w-[582px]">
              <AnimatedStat value="$1.4B" label="Volume Traded" />
              <AnimatedStat value="2M" label="Token pairs" />
              <AnimatedStat value="5.6M" label="Transactions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
