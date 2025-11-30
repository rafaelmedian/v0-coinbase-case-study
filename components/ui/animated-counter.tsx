"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: string // e.g., "$8B", "422m", "99.9%"
  duration?: number // animation duration in ms
  className?: string
}

export function AnimatedCounter({ value, duration = 2000, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasAnimated])

  const animateValue = () => {
    // Parse the value to extract number and formatting
    const parsed = parseValue(value)
    if (!parsed) {
      setDisplayValue(value)
      return
    }

    const { numericValue, prefix, suffix, decimals } = parsed
    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3)
      
      const currentValue = startValue + (numericValue - startValue) * eased
      
      // Format the display value
      let formatted: string
      if (decimals > 0) {
        formatted = currentValue.toFixed(decimals)
      } else {
        formatted = Math.floor(currentValue).toString()
      }
      
      setDisplayValue(`${prefix}${formatted}${suffix}`)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}

function parseValue(value: string): {
  numericValue: number
  prefix: string
  suffix: string
  decimals: number
} | null {
  // Match patterns like "$8B", "422m", "99.9%", "<500ms"
  const match = value.match(/^([<$]?)(\d+\.?\d*)(B|m|M|%|ms)?$/)
  
  if (!match) return null
  
  const [, prefix = "", numStr, suffix = ""] = match
  const numericValue = parseFloat(numStr)
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0
  
  return {
    numericValue,
    prefix,
    suffix,
    decimals,
  }
}

