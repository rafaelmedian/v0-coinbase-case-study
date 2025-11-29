interface DottedPatternProps {
  className?: string
}

export function DottedPattern({ className }: DottedPatternProps) {
  // Generate a tight uniform grid of small squares
  const generateSquares = () => {
    const squares: JSX.Element[] = []
    const gridSize = 40 // 40x40 grid for tighter pattern
    const spacing = 24 // tight spacing between squares
    const squareSize = 4 // small uniform square size
    const baseSize = 964 // total size of the pattern area
    
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = col * spacing
        const y = row * spacing
        
        // Calculate distance from center for circular fade
        const centerX = baseSize / 2
        const centerY = baseSize / 2
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
        const maxDistance = baseSize / 2
        
        // Only render squares within the circular area
        if (distance < maxDistance * 0.9) {
          // Opacity based on distance from center
          const opacity = Math.max(0.15, 1 - (distance / maxDistance) * 0.85)
          
          squares.push(
            <rect
              key={`${row}-${col}`}
              x={x}
              y={y}
              width={squareSize}
              height={squareSize}
              fill="#0052ff"
              opacity={opacity * 0.35}
            />
          )
        }
      }
    }
    return squares
  }

  return (
    <div 
      className={`pointer-events-none select-none ${className}`}
      style={{
        maskImage: 'radial-gradient(circle at center, black 0%, black 35%, transparent 65%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, black 35%, transparent 65%)',
      }}
    >
      <svg
        width="964"
        height="964"
        viewBox="0 0 964 964"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {generateSquares()}
      </svg>
    </div>
  )
}
