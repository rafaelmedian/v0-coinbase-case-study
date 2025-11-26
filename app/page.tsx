"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"

type TransitionContent = {
  title: string
  bgColor: string
  iconBg: string
  iconBorder?: string
  iconFill?: string
  textColor: string
}

export default function HomePage() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionContent, setTransitionContent] = useState<TransitionContent | null>(null)

  const handleNavigation = (href: string, content: TransitionContent) => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    setTimeout(() => {
      setTransitionContent(content)
      setIsTransitioning(true)

      setTimeout(() => {
        router.push(href)
      }, 800)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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

          <p className="max-w-lg text-base leading-relaxed text-[#5d5d5d]">
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
          onClick={() =>
            handleNavigation("/retail-dex", {
              title: "DEX Trading",
              bgColor: "#c8d4fa",
              iconBg: "#0052ff",
              iconBorder: "white",
              textColor: "#1d1d1d",
            })
          }
          className="group relative z-10 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#c8d4fa] px-8 py-16 transition-all hover:bg-[#b8c4ea] pt-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0052ff]">
              <div className="h-6 w-6 rounded-full border-4 border-white"></div>
            </div>
            <h3 className="text-3xl font-normal text-[#1d1d1d]">DEX Trading</h3>
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
          onClick={() =>
            handleNavigation("/base-app", {
              title: "Base App",
              bgColor: "#0052ff",
              iconBg: "white",
              iconFill: "#0052ff",
              textColor: "white",
            })
          }
          className="group relative z-20 -mt-6 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#0052ff] px-8 py-16 transition-all hover:bg-[#0048dd]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <div className="h-6 w-6 bg-[#0052ff]"></div>
            </div>
            <h3 className="text-3xl font-normal text-white">Base App</h3>
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
          onClick={() =>
            handleNavigation("/developer-platform", {
              title: "Developer Platform",
              bgColor: "#1d1d1d",
              iconBg: "#2d2d2d",
              iconBorder: "#0052ff",
              textColor: "white",
            })
          }
          className="group relative z-30 -mt-6 flex w-full items-center justify-between rounded-tl-[30px] rounded-tr-[30px] bg-[#1d1d1d] px-8 py-24 transition-all hover:bg-[#2d2d2d] pt-[60px] pb-24 pl-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d]">
              <div className="h-6 w-6 rounded-full border-4 border-[#0052ff]"></div>
            </div>
            <h3 className="text-3xl font-normal text-white">Developer Platform</h3>
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
      <section className="px-6 py-16 border-t border-[#f2f2f2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start gap-2">
            <span className="inline-block h-3 w-3 mt-1 bg-[#0052ff]"></span>
            <span className="text-sm font-medium text-[#5d5d5d] uppercase tracking-wide">About Coinbase</span>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              Founded in 2012, Coinbase is a U.S.-based cryptocurrency exchange and custodian that has grown into one of
              the world's leading digital asset platforms. Publicly listed and operating in over 100 countries, Coinbase
              serves as a key platform for both retail and institutional participants in crypto.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              With over 120 million total users and 8.7 million monthly transacting users, Coinbase has become an
              industry leader in Web3 by building products with real-world utility and best-in-class user experience.
              Coinbase offers a wide portfolio of cryptocurrency products and services - including DEX trading through
              its retail app, an all-new onchain experience with the Base App, and an all-in-one developer toolkit for
              builders.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-6xl text-[#c2c2c2] leading-none mb-4">"</div>
          <h2 className="text-3xl md:text-4xl font-normal text-[#1d1d1d] leading-tight mb-8">
            Quote from team. 0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.
          </h2>
          <div className="w-12 h-1 bg-[#0052ff] mb-4"></div>
          <p className="text-sm text-[#5d5d5d]">Name and role</p>
        </div>
      </section>

      {/* Enterprise-grade infrastructure Section */}
      <section className="px-6 py-16">
        <h3 className="text-lg font-medium text-[#1d1d1d] mb-8">Enterprise-grade infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f2f2f2] p-8">
            <div className="h-3 w-3 bg-[#0052ff] mb-6"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">
              {"<500"}
              <span className="text-2xl">ms</span>
            </p>
            <p className="text-sm text-[#a0a0ab] mt-2">median response rate</p>
          </div>
          <div className="bg-[#f2f2f2] p-8">
            <div className="h-3 w-full bg-gradient-to-r from-[#0052ff] via-[#00cc88] to-[#00cc88] mb-6 rounded-full"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">99.9%</p>
            <p className="text-sm text-[#a0a0ab] mt-2">uptime</p>
          </div>
          <div className="bg-[#f2f2f2] p-8">
            <div className="h-3 mb-6"></div>
            <p className="text-4xl md:text-5xl font-normal text-[#5d5d5d]">4.4%</p>
            <p className="text-sm text-[#a0a0ab] mt-2">revert rates</p>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="px-6 py-16 border-t border-[#f2f2f2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start gap-2">
            <span className="inline-block h-3 w-3 mt-1 bg-[#0052ff]"></span>
            <span className="text-sm font-medium text-[#5d5d5d] uppercase tracking-wide">The Story</span>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              When Coinbase launched in 2012, its mission was bold but simple: create an open financial system for the
              world. What began as an exchange for buying and selling Bitcoin quickly grew to become one of the world's
              leading digital asset platforms. Over the next decade, it expanded its reach - adding new assets,
              improving fiat rails, and building one of the industry's most recognizable brands around ease-of-use,
              safety, and compliance.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              As a result, Coinbase rapidly scaled to over 120 million users, becoming the #1 exchange in the U.S. But
              over that time, the market has evolved. Tokenization exploded - from a few hundred tokens in 2017 to tens
              of millions across dozens of networks now - fueled first by ICOs and more recently by stablecoins and
              memecoins. Users began moving onchain to access new assets and experiences, with monthly DEX volume
              surging to $500 billion.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              With onchain activity surging, a new challenge emerged. Coinbase's success was built on being a trusted
              custodian and regulated exchange - but that same model constrained its ability to list and support new
              tokens at onchain speed.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              As users increasingly turned to DEX platforms to access new tokens and DeFi tools, Coinbase needed to
              offer the same availability and speed of newly launched tokens as onchain venues, as well as a low-cost,
              developer-friendly platform for its onchain products. To serve them, Coinbase evolved again: bringing the
              power of onchain markets directly into its ecosystem.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              This evolution marks a broader shift happening across the industry, with centralized exchanges beginning
              to bridge the gap with DeFi.
            </p>
            <p className="text-base leading-relaxed text-[#1d1d1d] font-medium">Three key opportunities emerged:</p>
          </div>
        </div>
      </section>

      {/* Key Opportunities Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              <span className="text-[#0052ff]">1. Expand access to millions of tokens</span>
            </h3>
            <p className="text-xl md:text-2xl text-[#5d5d5d] leading-relaxed">
              by bringing DEX trading to the Coinbase App, allowing users to swap any token instantly from within a
              unified interface.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              <span className="text-[#0052ff]">2. Reimagine the onchain experience</span>
            </h3>
            <p className="text-xl md:text-2xl text-[#5d5d5d] leading-relaxed">
              through the Base App - an all-in-one platform uniting social, payments, and DeFi activity, where every
              post and creator becomes a tradable asset.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              <span className="text-[#0052ff]">3. Empower builders</span>
            </h3>
            <p className="text-xl md:text-2xl text-[#5d5d5d] leading-relaxed">
              via the Coinbase Developer Platform (CDP), providing developers with everything they need to build great
              apps on Base.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Paragraphs Section */}
      <section className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div></div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              And what unites all of these initiatives is tokens. No matter what you're building onchain, sooner or
              later you'll need to swap tokens. Swaps are the foundation of the onchain economy, from simple trades
              within wallets to powering more advanced functionality within DeFi apps.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              But building enterprise-grade swaps is hard. This explosion of tokens and DEXs has brought complexity to
              DEX routing, with a vast array of different token behaviors, liquidity models, and chain architectures to
              solve for. Delivering swaps at enterprise-scale and reliability requires deep expertise in DEX routing,
              liquidity and aggregation.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              With nearly a decade of experience building DEX infrastructure, Coinbase partnered with 0x to meet this
              challenge - helping power its onchain expansion with end-to-end onchain trading infrastructure at every
              layer of the stack; from DEX trading for millions of tokens in the Coinbase App to custom integrations to
              power an all-new social experience in the Base App.
            </p>
            <p className="text-base leading-relaxed text-[#5d5d5d]">
              In this case study, we will dive deep into how Coinbase is bridging the gap from CeFi to DeFi and
              unlocking a new onchain era for its users and developer network.
            </p>
          </div>
        </div>
      </section>

      {isTransitioning && transitionContent && (
        <div
          className="fixed inset-0 z-40 animate-expand-from-bottom flex items-end pb-8 px-8"
          style={{ backgroundColor: transitionContent.bgColor }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: transitionContent.iconBg }}
            >
              {transitionContent.iconFill ? (
                <div className="h-6 w-6" style={{ backgroundColor: transitionContent.iconFill }}></div>
              ) : (
                <div
                  className="h-6 w-6 rounded-full border-4"
                  style={{ borderColor: transitionContent.iconBorder }}
                ></div>
              )}
            </div>
            <h3 className="text-3xl font-normal" style={{ color: transitionContent.textColor }}>
              {transitionContent.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}
