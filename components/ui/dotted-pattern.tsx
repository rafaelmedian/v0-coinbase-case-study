"use client"

import { useEffect, useRef } from "react"

type Corner = "bottom-left" | "bottom-right" | "bottom-both" | "center"

interface DottedPatternProps {
  className?: string
  corner?: Corner
}

export function DottedPattern({ className, corner = "center" }: DottedPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, isActive: false })

  // Get mask gradient based on corner position
  const getMaskGradient = () => {
    switch (corner) {
      case "bottom-left":
        return 'radial-gradient(circle at 0% 100%, black 0%, transparent 70%)'
      case "bottom-right":
        return 'radial-gradient(circle at 100% 100%, black 0%, transparent 70%)'
      case "bottom-both":
        // Two radial gradients - smaller on left, much larger on right
        return 'radial-gradient(ellipse 50% 50% at 0% 100%, black 0%, transparent 55%), radial-gradient(ellipse 90% 100% at 100% 100%, black 0%, transparent 65%)'
      default:
        return 'radial-gradient(circle at center, black 0%, transparent 80%)'
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuration
    const SQUARE_SIZE = 14
    const GAP = 6
    const STEP = SQUARE_SIZE + GAP
    
    // Grid state
    let squares: Float32Array[] = [] // [x, y, baseOpacity, sparkleIntensity, offset]
    let animationFrameId: number

    const init = () => {
      if (!canvas) return
      
      const width = corner === "bottom-both" ? 1920 : 964
      const height = corner === "bottom-both" ? 800 : 964
      
      // Set canvas size (internal resolution)
      canvas.width = width
      canvas.height = height

      // Clear existing squares
      squares = []

      // Create grid
      const cols = Math.ceil(width / STEP)
      const rows = Math.ceil(height / STEP)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * STEP
          const y = row * STEP
          
          let opacity: number
          
          if (corner === "bottom-both") {
            // For full-width grid - right side is much taller/more prominent
            const distFromBottomLeft = Math.sqrt(x * x + (height - y) * (height - y))
            const distFromBottomRight = Math.sqrt((width - x) * (width - x) + (height - y) * (height - y))
            // Use weighted minimum - right corner has larger influence radius
            const leftMaxDist = Math.max(width, height) * 0.5
            const rightMaxDist = Math.max(width, height) * 1.0
            const leftNorm = distFromBottomLeft / leftMaxDist
            const rightNorm = distFromBottomRight / rightMaxDist
            // Take the minimum normalized distance for blending
            const normalizedDist = Math.min(leftNorm, rightNorm)
            opacity = Math.max(0.12, 0.38 * (1 - normalizedDist * 0.75))
          } else {
            // Original corner-based logic
            let originX: number, originY: number
            switch (corner) {
              case "bottom-left":
                originX = 0; originY = height; break
              case "bottom-right":
                originX = width; originY = height; break
              default:
                originX = width / 2; originY = height / 2
            }
            const dx = x - originX
            const dy = y - originY
          const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = Math.max(width, height)
            const normalizedDist = distance / maxDistance
            opacity = Math.max(0.15, 0.4 * (1 - normalizedDist * 0.7))
          }
            
          // [x, y, baseOpacity, sparkleIntensity, randomOffset, colorType]
          // colorType: 0 = blue, 1 = black
          const colorType = Math.random() > 0.7 ? 1 : 0 // 30% black, 70% blue
            squares.push(new Float32Array([
              x, 
              y, 
              opacity, 
              0, 
            Math.random() * Math.PI * 2,
            colorType
            ]))
        }
      }
    }

    const render = (time: number) => {
      if (!canvas || !ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const { x: mouseX, y: mouseY, isActive } = mouseRef.current
      
      // Pre-calculate glitter sine wave part
      const timeFactor = time * 0.002

      for (let i = 0; i < squares.length; i++) {
        const square = squares[i]
        // square[0] = x
        // square[1] = y
        // square[2] = baseOpacity
        // square[3] = sparkleIntensity
        // square[4] = randomOffset

        // Distance check
        const dx = mouseX - square[0]
        const dy = mouseY - square[1]
        // Simple distance check without square root for performance first
        // 150 * 150 = 22500
        const distSq = dx * dx + dy * dy
        
        if (isActive && distSq < 22500) {
          const dist = Math.sqrt(distSq)
          const boost = Math.max(0, 1 - dist / 150)
          // Increase intensity
          square[3] = Math.min(1, square[3] + boost * 0.2)
        }

        // Decay
        square[3] *= 0.92

        // Draw
        // Only draw if opacity is significant
        if (square[2] > 0.01 || square[3] > 0.01) {
          let sparkle = square[3]
          
          // Glitter effect
          if (sparkle > 0.01) {
             const glitter = Math.sin(timeFactor + square[4]) * 0.3 * sparkle
             sparkle += glitter
          }
          
          // Clamp sparkle
          sparkle = Math.max(0, Math.min(1, sparkle))
          
          const currentOpacity = Math.min(1, square[2] + sparkle * 0.8)
          
          // Color based on colorType (square[5])
          // 0 = blue, 1 = black
          const isBlack = square[5] === 1
          const mix = sparkle
          
          let r: number, g: number, b: number
          if (isBlack) {
            // Black squares: dark gray base, sparkle to white
            // Base: 50, 50, 60
            // Target: 255, 255, 255 (bright white sparkle)
            r = 50 + (255 - 50) * mix
            g = 50 + (255 - 50) * mix
            b = 60 + (255 - 60) * mix
          } else {
            // Blue squares: light blue base
            // Base: 168, 184, 232 (#a8b8e8)
            // Target: 255, 255, 255
            r = 168 + (255 - 168) * mix
            g = 184 + (255 - 184) * mix
            b = 232 + (255 - 232) * mix
          }

          ctx.fillStyle = `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${currentOpacity.toFixed(3)})`
          ctx.fillRect(square[0], square[1], SQUARE_SIZE, SQUARE_SIZE)
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      
      mouseRef.current.x = (e.clientX - rect.left) * scaleX
      mouseRef.current.y = (e.clientY - rect.top) * scaleY
      mouseRef.current.isActive = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
    }

    // Initialize
    init()
    
    // Event listeners
    window.addEventListener('resize', init)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    // Start loop
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', init)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [corner])

  const maskGradient = getMaskGradient()

  return (
    <div 
      className={`select-none ${className}`}
      style={{
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
