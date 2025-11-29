"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import { ContentSection } from "@/components/ui/content-section"
import { Footer } from "@/components/ui/footer"

type TransitionContent = {
  title: string
  bgColor: string
  iconBg: string
  iconBorder?: string
  iconFill?: string
  textColor: string
}

type CardRect = {
  top: number
  height: number
  left: number
  width: number
}

export default function HomePage() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionPhase, setTransitionPhase] = useState<"initial" | "expanding" | "repositioning">("initial")
  const [transitionContent, setTransitionContent] = useState<TransitionContent | null>(null)
  const [cardRect, setCardRect] = useState<CardRect | null>(null)
  const [contentFading, setContentFading] = useState(false)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  // Prefetch routes on mount for faster navigation
  useEffect(() => {
    router.prefetch("/retail-dex")
    router.prefetch("/base-app")
    router.prefetch("/developer-platform")
  }, [router])

  // Reset transition state and clean up timeouts when component unmounts
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [])

  // Prefetch on hover for even faster loads
  const handleHover = (href: string) => {
    router.prefetch(href)
  }

  // Helper to create a managed timeout that gets cleaned up on unmount
  const createTimeout = (callback: () => void, delay: number) => {
    const timeout = setTimeout(callback, delay)
    timeoutRefs.current.push(timeout)
    return timeout
  }

  const handleNavigation = (href: string, content: TransitionContent, buttonKey: string) => {
    const button = buttonRefs.current[buttonKey]
    if (!button || isTransitioning) return

    setTransitionContent(content)
    
    // Get card position immediately (no scroll needed)
    const rect = button.getBoundingClientRect()
    
    setCardRect({
      top: rect.top,
      height: rect.height,
      left: rect.left,
      width: rect.width,
    })

    setTransitionPhase("initial")
    setIsTransitioning(true)

    // Animation timeline (immediate start):
    // 50ms: Begin expansion animation
    // 400ms: Navigate to destination page
    // 500ms: Start content repositioning
    // 600ms: Fade out background content

    createTimeout(() => {
      setTransitionPhase("expanding")
    }, 50)

    createTimeout(() => {
      router.push(href)
    }, 400)

    createTimeout(() => {
      setTransitionPhase("repositioning")
    }, 500)

    createTimeout(() => {
      setContentFading(true)
    }, 600)

    // Failsafe: Reset states after animation completes
    createTimeout(() => {
      setContentFading(false)
      setIsTransitioning(false)
      setTransitionPhase("initial")
      setTransitionContent(null)
      setCardRect(null)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white grain-overlay">
      <Navigation />
      
      {/* Main content wrapper - fades during transition */}
      <div className={contentFading ? "animate-fade-out" : ""}>

      {/* Hero Section - Full width, aligned left */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] md:py-[var(--section-padding)]">
        <h1 className="mb-12 text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] text-headline">
          <span className="text-[var(--text-primary)]">Delivering end-to-end</span>
          <br />
          <span className="text-[var(--color-brand)]">onchain swap infrastructure</span>
          <br />
          <span className="text-[var(--text-primary)]">with Coinbase</span>
        </h1>

        <p className="max-w-xl text-[var(--text-lg)] leading-[var(--leading-normal)] text-[var(--text-secondary)] text-body">
          Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading
          experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer
          Platform.
        </p>
      </section>

      {/* Stats Section - Full width */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)]">
        <div className="relative">
          {/* Subtle divider line between cards on desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[var(--border-light)] to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-[var(--bg-card)] p-10 md:p-14 rounded-[24px] transition-all duration-300 hover:bg-[var(--bg-surface-hover)] hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
              {/* Brand accent dot */}
              <div className="absolute top-8 right-8 h-2.5 w-2.5 rounded-full bg-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-[clamp(4rem,12vw,7rem)] text-display text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1">$8B</p>
              <p className="text-[var(--text-md)] text-[var(--text-muted)] mt-2">in onchain volume</p>
            </div>
            <div className="group relative bg-[var(--bg-card)] p-10 md:p-14 rounded-[24px] transition-all duration-300 hover:bg-[var(--bg-surface-hover)] hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
              {/* Brand accent dot */}
              <div className="absolute top-8 right-8 h-2.5 w-2.5 rounded-full bg-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-[clamp(4rem,12vw,7rem)] text-display text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1">422m</p>
              <p className="text-[var(--text-md)] text-[var(--text-muted)] mt-2">total transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Coinbase Section */}
      <ContentSection label="About Coinbase" className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          Founded in 2012, Coinbase is a U.S.-based cryptocurrency exchange and custodian that has grown into one of
          the world's leading digital asset platforms. Publicly listed and operating in over 100 countries, Coinbase
          serves as a key platform for both retail and institutional participants in crypto.
        </p>
        <p>
          With over 120 million total users and 8.7 million monthly transacting users, Coinbase has become an
          industry leader in Web3 by building products with real-world utility and best-in-class user experience.
          Coinbase offers a wide portfolio of cryptocurrency products and services - including DEX trading through
          its retail app, an all-new onchain experience with the Base App, and an all-in-one developer toolkit for
          builders.
        </p>
      </ContentSection>

      {/* Quote Section */}
      <ContentSection showBorder={false}>
        <div className="relative">
          {/* Large decorative quote mark */}
          <span className="quote-mark">"</span>
          <blockquote className="relative">
            <p className="text-[var(--text-2xl)] md:text-[var(--text-3xl)] leading-[var(--leading-snug)] font-normal text-[var(--text-primary)] mb-10">
              0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.
            </p>
            <footer>
              <div className="w-16 h-1 bg-[var(--color-brand)] mb-5 rounded-full"></div>
              <cite className="not-italic">
                <span className="block text-[var(--text-base)] font-medium text-[var(--text-primary)]">Name</span>
                <span className="block text-[var(--text-sm)] text-[var(--text-muted)] mt-1">Role at Company</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </ContentSection>

      {/* Enterprise-grade infrastructure Section */}
      <ContentSection label="Infrastructure" showBorder={false}>
        <h3 className="text-caption text-[var(--text-muted)] mb-10">Enterprise-grade infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-3 w-3 bg-[var(--color-brand)] mb-8 rounded-sm"></div>
            <p className="text-[var(--text-4xl)] text-display text-[var(--text-primary)]">
              {"<500"}
              <span className="text-[var(--text-xl)]">ms</span>
            </p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">median response rate</p>
          </div>
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-3 w-full bg-gradient-to-r from-[var(--color-brand)] via-[#00cc88] to-[#00cc88] mb-8 rounded-full"></div>
            <p className="text-[var(--text-4xl)] text-display text-[var(--text-primary)]">99.9%</p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">uptime</p>
          </div>
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-3 mb-8"></div>
            <p className="text-[var(--text-4xl)] text-display text-[var(--text-primary)]">4.4%</p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">revert rates</p>
          </div>
        </div>
      </ContentSection>

      {/* The Story Section */}
      <ContentSection label="The Story" className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          When Coinbase launched in 2012, its mission was bold but simple: create an open financial system for the
          world. What began as an exchange for buying and selling Bitcoin quickly grew to become one of the world's
          leading digital asset platforms. Over the next decade, it expanded its reach - adding new assets,
          improving fiat rails, and building one of the industry's most recognizable brands around ease-of-use,
          safety, and compliance.
        </p>
        <p>
          As a result, Coinbase rapidly scaled to over 120 million users, becoming the #1 exchange in the U.S. But
          over that time, the market has evolved. Tokenization exploded - from a few hundred tokens in 2017 to tens
          of millions across dozens of networks now - fueled first by ICOs and more recently by stablecoins and
          memecoins. Users began moving onchain to access new assets and experiences, with monthly DEX volume
          surging to $500 billion.
        </p>
        <p>
          With onchain activity surging, a new challenge emerged. Coinbase's success was built on being a trusted
          custodian and regulated exchange - but that same model constrained its ability to list and support new
          tokens at onchain speed.
        </p>
        <p>
          As users increasingly turned to DEX platforms to access new tokens and DeFi tools, Coinbase needed to
          offer the same availability and speed of newly launched tokens as onchain venues, as well as a low-cost,
          developer-friendly platform for its onchain products. To serve them, Coinbase evolved again: bringing the
          power of onchain markets directly into its ecosystem.
        </p>
        <p>
          This evolution marks a broader shift happening across the industry, with centralized exchanges beginning
          to bridge the gap with DeFi.
        </p>
        <p className="font-medium text-[var(--text-primary)]">Three key opportunities emerged:</p>
      </ContentSection>

      {/* Key Opportunities Section */}
      <ContentSection showBorder={false} className="space-y-12">
        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">1. Expand access to millions of tokens</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            by bringing DEX trading to the Coinbase App, allowing users to swap any token instantly from within a
            unified interface.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">2. Reimagine the onchain experience</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            through the Base App - an all-in-one platform uniting social, payments, and DeFi activity, where every
            post and creator becomes a tradable asset.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">3. Empower builders</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            via the Coinbase Developer Platform (CDP), providing developers with everything they need to build great
            apps on Base.
          </p>
        </div>
      </ContentSection>

      {/* Closing Paragraphs Section */}
      <ContentSection showBorder={false} className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          And what unites all of these initiatives is tokens. No matter what you're building onchain, sooner or
          later you'll need to swap tokens. Swaps are the foundation of the onchain economy, from simple trades
          within wallets to powering more advanced functionality within DeFi apps.
        </p>
        <p>
          But building enterprise-grade swaps is hard. This explosion of tokens and DEXs has brought complexity to
          DEX routing, with a vast array of different token behaviors, liquidity models, and chain architectures to
          solve for. Delivering swaps at enterprise-scale and reliability requires deep expertise in DEX routing,
          liquidity and aggregation.
        </p>
        <p>
          With nearly a decade of experience building DEX infrastructure, Coinbase partnered with 0x to meet this
          challenge - helping power its onchain expansion with end-to-end onchain trading infrastructure at every
          layer of the stack; from DEX trading for millions of tokens in the Coinbase App to custom integrations to
          power an all-new social experience in the Base App.
        </p>
        <p>
          In this case study, we will dive deep into how Coinbase is bridging the gap from CeFi to DeFi and
          unlocking a new onchain era for its users and developer network.
        </p>
      </ContentSection>

      </div>{/* End of fade wrapper */}

      {/* Navigation Cards Section - positioned right above footer */}
      <section className="pb-0">
        {/* DEX Trading Section */}
        <button
          ref={(el) => {
            buttonRefs.current["dex"] = el
          }}
          onMouseEnter={() => handleHover("/retail-dex")}
          onClick={() =>
            handleNavigation(
              "/retail-dex",
              {
                title: "DEX Trading",
                bgColor: "#c8d4fa",
                iconBg: "#0052ff",
                iconBorder: "white",
                textColor: "#1d1d1d",
              },
              "dex",
            )
          }
          className="group relative z-10 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[var(--color-brand-light)] px-8 py-16 pt-10 pb-12 transition-all duration-300 hover:bg-[#b8c4ea] hover:shadow-[0_-4px_20px_rgba(0,82,255,0.15)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform duration-300 group-hover:scale-110">
              <div className="h-6 w-6 rounded-full border-4 border-white"></div>
            </div>
            <h2 className="text-4xl font-normal text-[var(--text-primary)] md:text-5xl">DEX Trading</h2>
          </div>
          <svg
            className="h-6 w-6 text-[var(--text-primary)] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Base App Section */}
        <button
          ref={(el) => {
            buttonRefs.current["base"] = el
          }}
          onMouseEnter={() => handleHover("/base-app")}
          onClick={() =>
            handleNavigation(
              "/base-app",
              {
                title: "Base App",
                bgColor: "#0052ff",
                iconBg: "white",
                iconFill: "#0052ff",
                textColor: "white",
              },
              "base",
            )
          }
          className="group relative z-20 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[var(--color-brand)] px-8 py-16 pb-12 transition-all duration-300 hover:bg-[var(--color-brand-hover)] hover:shadow-[0_-4px_20px_rgba(0,82,255,0.25)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
              <div className="h-6 w-6 bg-[var(--color-brand)]"></div>
            </div>
            <h2 className="text-4xl font-normal text-white md:text-5xl">Base App</h2>
          </div>
          <svg
            className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Developer Platform Section */}
        <button
          ref={(el) => {
            buttonRefs.current["dev"] = el
          }}
          onMouseEnter={() => handleHover("/developer-platform")}
          onClick={() =>
            handleNavigation(
              "/developer-platform",
              {
                title: "Developer Platform",
                bgColor: "#1d1d1d",
                iconBg: "#2d2d2d",
                iconBorder: "#0052ff",
                textColor: "white",
              },
              "dev",
            )
          }
          className="group relative z-30 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#18181b] px-8 pt-[60px] pb-24 transition-all duration-300 hover:bg-[#2d2d2d] hover:shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3d3d3d]">
              <div className="h-6 w-6 rounded-full border-4 border-[var(--color-brand)]"></div>
            </div>
            <h2 className="text-4xl font-normal text-white md:text-5xl">Developer Platform</h2>
          </div>
          <svg
            className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </section>

      {/* Footer - seamlessly connected to Developer Platform card */}
      <Footer className="-mt-8" />

      {/* Transition Overlay */}
      {isTransitioning && transitionContent && cardRect && (
        <div
          className={`transition-overlay fixed inset-x-0 z-40 ${
            transitionPhase === "initial"
              ? ""
              : transitionPhase === "expanding" || transitionPhase === "repositioning"
                ? "animate-card-expand"
                : ""
          }`}
          style={{
            backgroundColor: transitionContent.bgColor,
            top: transitionPhase === "initial" ? cardRect.top : undefined,
            height: transitionPhase === "initial" ? cardRect.height : undefined,
            borderRadius: "40px 40px 0 0",
            "--card-start-top": `${cardRect.top}px`,
            "--card-start-height": `${cardRect.height}px`,
            "--nav-height": "61px",
          } as React.CSSProperties}
        >
          <div 
            className={`flex items-center gap-4 ${
              transitionPhase === "repositioning" ? "animate-content-to-hero" : ""
            }`}
            style={{
              paddingTop: transitionPhase === "initial" || transitionPhase === "expanding" ? 40 : undefined,
              paddingLeft: 24,
              paddingBottom: 40,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{ 
                backgroundColor: transitionContent.iconBg,
                width: 64,
                height: 64,
              }}
            >
              {transitionContent.iconFill ? (
                <div className="h-8 w-8" style={{ backgroundColor: transitionContent.iconFill }}></div>
              ) : (
                <div
                  className="h-8 w-8 rounded-full border-4"
                  style={{ borderColor: transitionContent.iconBorder }}
                ></div>
              )}
            </div>
            <h2 
              style={{ 
                color: transitionContent.textColor,
              }}
            >
              {transitionContent.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}
