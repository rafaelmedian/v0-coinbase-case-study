import Link from "next/link"

// Coinbase "C" logo component
function CoinbaseLogo({ variant = "blue" }: { variant?: "blue" | "white" | "outline" }) {
  if (variant === "white") {
    return (
      <div className="flex h-[85px] w-[85px] items-center justify-center rounded-full bg-white">
        <div className="h-[42px] w-[42px] rounded-sm bg-[#0052ff]" />
      </div>
    )
  }
  
  if (variant === "outline") {
    return (
      <div className="flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#2d2d2d]">
        <div className="h-[42px] w-[42px] rounded-full border-[5px] border-[#0052ff]" />
      </div>
    )
  }
  
  // Default blue variant
  return (
    <div className="flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#0052ff]">
      <div className="h-[42px] w-[42px] rounded-full border-[5px] border-white" />
    </div>
  )
}

// Diagonal arrow icon pointing up-right
function DiagonalArrow({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

// Variant configurations
const variantConfig = {
  light: {
    bg: "bg-[#c8d4fa]",
    textColor: "text-[#26272b]",
    arrowColor: "#26272b",
    logoVariant: "blue" as const,
    shadow: "hover:shadow-[0_-4px_20px_rgba(0,82,255,0.15)]",
  },
  blue: {
    bg: "bg-[#0052ff]",
    textColor: "text-white",
    arrowColor: "white",
    logoVariant: "white" as const,
    shadow: "hover:shadow-[0_-4px_20px_rgba(0,82,255,0.25)]",
  },
  dark: {
    bg: "bg-[#26272b]",
    textColor: "text-white",
    arrowColor: "white",
    logoVariant: "outline" as const,
    shadow: "hover:shadow-[0_-4px_30px_rgba(0,0,0,0.3)]",
  },
}

interface ProductCardProps {
  href: string
  title: string
  variant: "light" | "blue" | "dark"
  zIndex?: number
  isLast?: boolean
  className?: string
}

export function ProductCard({ 
  href, 
  title, 
  variant, 
  zIndex = 10, 
  isLast = false,
  className = "" 
}: ProductCardProps) {
  const config = variantConfig[variant]
  
  return (
    <Link
      href={href}
      aria-label={`Learn about ${title} integration`}
      className={`
        group relative flex w-full items-center justify-between 
        rounded-tl-[30px] rounded-tr-[30px] 
        px-8 pt-10 pb-[52px]
        ${isLast ? "pb-[76px]" : "pb-[52px]"}
        transition-all duration-300 
        hover:-translate-y-3
        ${config.bg} ${config.shadow}
        ${className}
      `}
      style={{ zIndex }}
    >
      <div className="flex items-center gap-6">
        <CoinbaseLogo variant={config.logoVariant} />
        <h2 className={`text-[32px] md:text-[36px] font-normal ${config.textColor}`}>
          {title}
        </h2>
      </div>
      <DiagonalArrow color={config.arrowColor} />
    </Link>
  )
}

interface HeroNavigationCardsProps {
  className?: string
}

export function HeroNavigationCards({ className }: HeroNavigationCardsProps) {
  return (
    <nav className={className} aria-label="Product sections">
      <ProductCard
        href="/retail-dex"
        title="DEX Trading"
        variant="light"
        zIndex={10}
      />
      <ProductCard
        href="/base-app"
        title="Base App"
        variant="blue"
        zIndex={20}
        className="-mt-6"
      />
      <ProductCard
        href="/developer-platform"
        title="Developer Platform"
        variant="dark"
        zIndex={30}
        isLast={true}
        className="-mt-6"
      />
    </nav>
  )
}
