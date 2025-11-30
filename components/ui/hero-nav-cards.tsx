import Link from "next/link"
import Image from "next/image"

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
    bgColor: "#c8d4fa",
    textColor: "text-[#26272b]",
    arrowColor: "#26272b",
    shadow: "shadow-[0_4px_20px_rgba(200,212,250,0.3),0_8px_40px_rgba(0,82,255,0.08)]",
    hoverShadow: "hover:shadow-[0_8px_30px_rgba(200,212,250,0.5),0_16px_50px_rgba(0,82,255,0.15)]",
    glow: "hover:ring-2 hover:ring-[#a8b8e8]/30",
  },
  blue: {
    bg: "bg-[#0052ff]",
    bgColor: "#0052ff",
    textColor: "text-white",
    arrowColor: "white",
    shadow: "hover:shadow-[0_-4px_20px_rgba(0,82,255,0.25)]",
  },
  dark: {
    bg: "bg-[#26272b]",
    bgColor: "#26272b",
    textColor: "text-white",
    arrowColor: "white",
    shadow: "hover:shadow-[0_-4px_30px_rgba(0,0,0,0.3)]",
  },
}

interface ProductCardProps {
  href: string
  title: string
  variant: "light" | "blue" | "dark"
  logo?: string
  zIndex?: number
  isLast?: boolean
  className?: string
}

export function ProductCard({ 
  href, 
  title, 
  variant, 
  logo = "/images/coinbase-icon.svg",
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
        px-8 pt-10
        ${isLast ? "pb-[76px]" : "pb-[52px]"}
        transition-all duration-300 ease-out
        hover:-translate-y-3
        ${config.bg} ${config.shadow}
        ${className}
      `}
      style={{ zIndex }}
    >
      {/* Background extension to fill gap when card lifts on hover */}
      <div 
        className="absolute inset-x-0 bottom-0 h-8 translate-y-full -z-10"
        style={{ backgroundColor: config.bgColor }}
      />
      <div className="flex items-center gap-6">
        <Image
          src={logo}
          alt={title}
          width={85}
          height={85}
          className="rounded-full"
        />
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
        logo="/images/base-app-icon.svg"
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
