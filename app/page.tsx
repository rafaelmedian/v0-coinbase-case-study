"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import { ContentSection } from "@/components/ui/content-section"

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

  // Prefetch routes on mount for faster navigation
  useEffect(() => {
    router.prefetch("/retail-dex")
    router.prefetch("/base-app")
    router.prefetch("/developer-platform")
  }, [router])

  // Reset transition state when component unmounts or if navigation fails
  useEffect(() => {
    return () => {
      setContentFading(false)
      setIsTransitioning(false)
      setTransitionPhase("initial")
    }
  }, [])

  // Prefetch on hover for even faster loads
  const handleHover = (href: string) => {
    router.prefetch(href)
  }

  const handleNavigation = (href: string, content: TransitionContent, buttonKey: string) => {
    const button = buttonRefs.current[buttonKey]
    if (!button) return

    // Store transition content for later
    setTransitionContent(content)
    
    // Smooth scroll to top with easing
    window.scrollTo({ top: 0, behavior: "smooth" })
    
    // Wait for scroll to complete, then start animation
    const scrollDelay = 350
    
    setTimeout(() => {
      // Recalculate card position after scroll completes
      const scrolledRect = button.getBoundingClientRect()
      
      setCardRect({
        top: scrolledRect.top,
        height: scrolledRect.height,
        left: scrolledRect.left,
        width: scrolledRect.width,
      })

      // Start transition
      setTransitionPhase("initial")
      setIsTransitioning(true)

      // Timeline (after scroll):
      // 0ms: Setup - position overlay at card location
      // 50ms: Start expansion animation (700ms duration)
      // 400ms: Navigate early so page loads underneath
      // 500ms: Start content repositioning  
      // 600ms: Fade out background content

      setTimeout(() => {
        setTransitionPhase("expanding")
      }, 50)

      // Navigate earlier - page loads while animation continues
      setTimeout(() => {
        router.push(href)
      }, 400)

      setTimeout(() => {
        setTransitionPhase("repositioning")
      }, 500)

      setTimeout(() => {
        setContentFading(true)
      }, 600)

      // Failsafe: Reset states after animation should be complete
      // This handles cases where navigation fails or is very slow
      setTimeout(() => {
        setContentFading(false)
        setIsTransitioning(false)
        setTransitionPhase("initial")
        setTransitionContent(null)
        setCardRect(null)
      }, 1500)
    }, scrollDelay)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main content wrapper - fades during transition */}
      <div className={contentFading ? "animate-fade-out" : ""}>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20">
        <div>
          <h1 className="mb-8 text-5xl font-normal leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[#1d1d1d]">Delivering end-to-end</span>
            <br />
            <span className="text-[#0052ff]">onchain swap infrastructure</span>
            <br />
            <span className="text-[#1d1d1d]">with Coinbase</span>
          </h1>

          <p className="max-w-lg text-[22px] leading-[1.3] text-[#5e5e5e]">
            Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading
            experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer
            Platform.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f2f2f2] p-8 md:p-12">
            <p className="text-6xl md:text-7xl lg:text-8xl font-normal text-[#1d1d1d]">$8B</p>
            <p className="text-lg text-[#a0a0ab] mt-2">in onchain volume</p>
          </div>
          <div className="bg-[#f2f2f2] p-8 md:p-12">
            <p className="text-6xl md:text-7xl lg:text-8xl font-normal text-[#1d1d1d]">422m</p>
            <p className="text-lg text-[#a0a0ab] mt-2">total transactions</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
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
          className="group relative z-10 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#c8d4fa] px-8 py-16 transition-all hover:bg-[#b8c4ea] pt-10 pb-12"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0052ff]">
              <div className="h-6 w-6 rounded-full border-4 border-white"></div>
            </div>
            <h2 className="text-4xl font-normal text-[#1d1d1d] md:text-5xl">DEX Trading</h2>
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
          className="group relative z-20 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#0052ff] px-8 py-16 transition-all hover:bg-[#0048dd] pb-12"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <div className="h-6 w-6 bg-[#0052ff]"></div>
            </div>
            <h2 className="text-4xl font-normal text-white md:text-5xl">Base App</h2>
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
          className="group relative z-30 -mt-8 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#1d1d1d] px-8 pt-[60px] pb-24 transition-all hover:bg-[#2d2d2d]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d]">
              <div className="h-6 w-6 rounded-full border-4 border-[#0052ff]"></div>
            </div>
            <h2 className="text-4xl font-normal text-white md:text-5xl">Developer Platform</h2>
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
      </section>

      {/* About Coinbase Section */}
      <ContentSection label="About Coinbase" className="space-y-6 text-[22px] leading-[1.3] text-[#5e5e5e]">
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
        <div className="text-6xl text-[#c2c2c2] leading-none mb-4">"</div>
        <h2 className="text-[30px] leading-[1.2] font-normal text-[#1d1d1d] mb-8">
          Quote from team. 0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.
        </h2>
        <div className="w-12 h-1 bg-[#0052ff] mb-4"></div>
        <p className="text-sm text-[#5d5d5d]">Name and role</p>
      </ContentSection>

      {/* Enterprise-grade infrastructure Section */}
      <ContentSection label="Infrastructure" showBorder={false}>
        <h3 className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d] mb-8">Enterprise-grade infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f2f2f2] p-8 rounded-[15px]">
            <div className="h-3 w-3 bg-[#0052ff] mb-6"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">
              {"<500"}
              <span className="text-2xl">ms</span>
            </p>
            <p className="text-sm text-[#a0a0ab] mt-2">median response rate</p>
          </div>
          <div className="bg-[#f2f2f2] p-8 rounded-[15px]">
            <div className="h-3 w-full bg-gradient-to-r from-[#0052ff] via-[#00cc88] to-[#00cc88] mb-6 rounded-full"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">99.9%</p>
            <p className="text-sm text-[#a0a0ab] mt-2">uptime</p>
          </div>
          <div className="bg-[#f2f2f2] p-8 rounded-[15px]">
            <div className="h-3 mb-6"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">4.4%</p>
            <p className="text-sm text-[#a0a0ab] mt-2">revert rates</p>
          </div>
        </div>
      </ContentSection>

      {/* The Story Section */}
      <ContentSection label="The Story" className="space-y-6 text-[22px] leading-[1.3] text-[#5e5e5e]">
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
        <p className="font-medium text-[#1d1d1d]">Three key opportunities emerged:</p>
      </ContentSection>

      {/* Key Opportunities Section */}
      <ContentSection showBorder={false} className="space-y-12">
        <div>
          <h3 className="text-[30px] leading-[1.2] font-normal mb-4">
            <span className="text-[#0052ff]">1. Expand access to millions of tokens</span>
          </h3>
          <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
            by bringing DEX trading to the Coinbase App, allowing users to swap any token instantly from within a
            unified interface.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.2] font-normal mb-4">
            <span className="text-[#0052ff]">2. Reimagine the onchain experience</span>
          </h3>
          <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
            through the Base App - an all-in-one platform uniting social, payments, and DeFi activity, where every
            post and creator becomes a tradable asset.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.2] font-normal mb-4">
            <span className="text-[#0052ff]">3. Empower builders</span>
          </h3>
          <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
            via the Coinbase Developer Platform (CDP), providing developers with everything they need to build great
            apps on Base.
          </p>
        </div>
      </ContentSection>

      {/* Closing Paragraphs Section */}
      <ContentSection showBorder={false} className="space-y-6 text-[22px] leading-[1.3] text-[#5e5e5e]">
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
            // Pass card position as CSS custom properties for the animation
            "--card-start-top": `${cardRect.top}px`,
            "--card-start-height": `${cardRect.height}px`,
            "--nav-height": "61px",
          } as React.CSSProperties}
        >
          {/* Card Content - matches PageHero positioning exactly */}
          {/* PageHero: py-12, px-6, then p-8 inner = roughly 48px top, 24px + 32px left */}
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
              className={`flex items-center justify-center rounded-full ${
                transitionPhase === "repositioning" ? "animate-icon-scale" : ""
              }`}
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
