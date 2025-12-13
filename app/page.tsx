"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { TableOfContents } from "@/components/ui/table-of-contents"
import { ProductTriptych } from "@/components/ui/product-triptych"
import { AppScreenshot } from "@/components/app-screenshot"
import { ContentSection } from "@/components/ui/content-section"
import { TimelineGraphic } from "@/components/timeline-graphic"
import { PutYourAppOnchain } from "@/components/sections/put-your-app-onchain"
import { ScaleWith0x } from "@/components/sections/scale-with-0x"
import { BookACall } from "@/components/sections/book-a-call"

const tocItems = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About Coinbase" },
  { id: "products", label: "Products" },
  { id: "shift", label: "The Shift" },
  { id: "opportunity", label: "The Opportunity" },
  { id: "why-0x", label: "Why 0x?" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Floating Table of Contents */}
      <TableOfContents items={tocItems} variant="floating" />

      {/* Main Content */}
      <main>
          {/* Hero Section */}
          <section id="hero" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] xl:pr-[var(--grid-padding-lg)] pt-[var(--space-16)] pb-[var(--space-12)] md:pt-[100px] md:pb-[80px]">
            <div className="max-w-[1100px]">
              {/* Eyebrow */}
              <p className="text-[var(--color-brand)] text-[var(--text-sm)] uppercase tracking-[0.15em] font-medium mb-6">
                Coinbase Partnership
              </p>
              
              {/* Main Headline */}
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] font-normal mb-8">
                Enterprise-grade swap infrastructure for the onchain era
              </h1>
              
              {/* Subheadline */}
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] leading-[1.4] text-[var(--text-secondary)] max-w-[800px] mb-12">
                0x is a major strategic Coinbase partner, powering end-to-end onchain trading at every layer of the stack. 
                Discover how your app can capture onchain demand with infrastructure that meets the standards of a regulated, enterprise-grade exchange.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/start-building">
                  <Button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white px-8 py-6 text-[var(--text-base)] rounded-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Bar - Updated metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-[var(--border-subtle)]">
              <div>
                <p className="text-[clamp(2.5rem,6vw,4rem)] text-display text-[var(--text-primary)] leading-none">
                  $1.4B+
                </p>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-2">total trading volume through 0x</p>
              </div>
              <div>
                <p className="text-[clamp(2.5rem,6vw,4rem)] text-display text-[var(--text-primary)] leading-none">
                  2M+
                </p>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-2">distinct token pairs traded</p>
              </div>
              <div>
                <p className="text-[clamp(2.5rem,6vw,4rem)] text-display text-[var(--text-primary)] leading-none">
                  5.6M+
                </p>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-2">transactions processed</p>
              </div>
            </div>
          </section>

          {/* Product Triptych Visual */}
          <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)] overflow-hidden">
            <ProductTriptych />
          </section>

          {/* About Coinbase - Brief Context */}
          <section id="about" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)] bg-[var(--bg-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-[var(--text-sm)] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
                  About Coinbase
                </p>
                <p className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] text-[var(--text-primary)]">
                  The industry leader in crypto exchange and custody.
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[var(--text-lg)] leading-[1.5] text-[var(--text-secondary)] mb-6">
                  Coinbase is a U.S.-based cryptocurrency exchange and custodian that operates in 100+ countries and serves over 
                  <span className="text-[var(--text-primary)] font-medium"> 120M total users</span>, with 
                  <span className="text-[var(--text-primary)] font-medium"> 8.7M transacting each month</span>. 
                  Its reputation as the industry leader is built upon real-world utility and a trusted, easy-to-use experience.
                </p>
                <p className="text-[var(--text-base)] text-[var(--text-muted)]">
                  Today, Coinbase&apos;s onchain ecosystem includes three core products—all powered by 0x.
                </p>
              </div>
            </div>
          </section>

          {/* Product Showcase - Visual Cards */}
          <section id="products" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* DEX Trading Card */}
              <Link href="/retail-dex" className="group">
                <div className="bg-[#c8d4fa] rounded-[24px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-white/50">
                    <AppScreenshot type="dex" className="w-full h-full rounded-none border-none shadow-none" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[var(--text-xl)] font-normal text-[#26272b] mb-3">
                      DEX Trading
                    </h3>
                    <p className="text-[var(--text-base)] text-[#26272b]/70 mb-6 flex-grow">
                      Millions of tokens available directly inside the main Coinbase App—swap any token instantly.
                    </p>
                    <div className="flex items-center gap-2 text-[var(--color-brand)] text-[var(--text-sm)] font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Base App Card */}
              <Link href="/base-app" className="group">
                <div className="bg-[#0052ff] rounded-[24px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-white/10">
                    <AppScreenshot type="mobile" className="w-full h-full rounded-none border-none shadow-none bg-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[var(--text-xl)] font-normal text-white mb-3">
                      Base App
                    </h3>
                    <p className="text-[var(--text-base)] text-white/80 mb-6 flex-grow">
                      Onchain social, payments, and DeFi unified—where every post and creator becomes a tradable asset.
                    </p>
                    <div className="flex items-center gap-2 text-white text-[var(--text-sm)] font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Developer Platform Card */}
              <Link href="/developer-platform" className="group">
                <div className="bg-[#26272b] rounded-[24px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-full h-48 sm:h-64 relative overflow-hidden">
                    <AppScreenshot type="terminal" className="w-full h-full rounded-none border-none shadow-none" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[var(--text-xl)] font-normal text-white mb-3">
                      Developer Platform
                    </h3>
                    <p className="text-[var(--text-base)] text-white/70 mb-6 flex-grow">
                      The unified toolkit for builders—everything developers need to build great apps on Base.
                    </p>
                    <div className="flex items-center gap-2 text-white text-[var(--text-sm)] font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* The Shift Section */}
          <section id="shift" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] border-t border-[var(--border-subtle)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-[var(--text-sm)] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-6">
                  The Shift
                </p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[var(--text-primary)] mb-6">
                  Users are moving onchain
                </h2>
                <p className="text-[var(--text-lg)] leading-[1.5] text-[var(--text-secondary)]">
                  Tokenization has exploded from a few hundred tokens to tens of millions across dozens of networks. 
                  Users increasingly move onchain to:
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--text-lg)] text-[var(--text-primary)] font-medium">Find newly launched assets in seconds, not weeks</p>
                    <p className="text-[var(--text-base)] text-[var(--text-muted)] mt-1">Access tokens the moment they launch onchain</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--text-lg)] text-[var(--text-primary)] font-medium">Access DeFi without giving up self-custody</p>
                    <p className="text-[var(--text-base)] text-[var(--text-muted)] mt-1">Full control of assets while using advanced tools</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--text-lg)] text-[var(--text-primary)] font-medium">Participate in SocialFi and creator economies</p>
                    <p className="text-[var(--text-base)] text-[var(--text-muted)] mt-1">New economic models built on tokenization</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Opportunity Section */}
          <section id="opportunity" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] bg-[var(--bg-card)]">
            <div className="max-w-[900px]">
              <p className="text-[var(--text-sm)] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-6">
                The Opportunity
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[var(--text-primary)] mb-8">
                DEX volume is surging as users route around exchanges that can&apos;t keep up
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white rounded-[16px] p-6">
                  <p className="text-[var(--text-sm)] uppercase tracking-[0.1em] text-red-500 font-medium mb-3">The Challenge</p>
                  <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
                    Users churn for DEXs to chase long-tail tokens that exchanges can&apos;t list or support at onchain speed.
                  </p>
                </div>
                <div className="bg-white rounded-[16px] p-6">
                  <p className="text-[var(--text-sm)] uppercase tracking-[0.1em] text-[var(--color-brand)] font-medium mb-3">The Opportunity</p>
                  <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
                    Bring onchain markets into your app instead of competing with them.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-[var(--color-brand)] pl-6">
                <p className="text-[var(--text-xl)] text-[var(--text-primary)] leading-[1.4]">
                  The missing piece? <span className="font-medium">Enterprise-grade swap infrastructure</span> that keeps up with onchain markets and meets demands for reliability, speed, and security.
                </p>
              </div>
            </div>
          </section>

          {/* Why 0x Section */}
          <section id="why-0x" className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-24)]">
            <div className="text-center mb-16">
              <p className="text-[var(--text-sm)] uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
                Why 0x?
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[var(--text-primary)]">
                Three ways 0x powers Coinbase
              </h2>
            </div>

            <div className="space-y-16">
              {/* Value Prop 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="text-[clamp(4rem,10vw,8rem)] text-display text-[var(--color-brand)] leading-none">1</span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-[var(--text-primary)] mb-4">
                    Expand from hundreds to millions of tokens
                  </h3>
                  <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-[1.5] max-w-[700px]">
                    We enabled DEX trading directly within Coinbase Exchange, allowing users to swap any token instantly from a familiar, trusted interface.
                  </p>
                </div>
              </div>

              {/* Value Prop 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="text-[clamp(4rem,10vw,8rem)] text-display text-[var(--color-brand)] leading-none">2</span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-[var(--text-primary)] mb-4">
                    Reimagine the onchain experience
                  </h3>
                  <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-[1.5] max-w-[700px]">
                    With 0x powering the Base App, Coinbase unites social, payments, and DeFi—so every post and creator becomes a tradable asset.
                  </p>
                </div>
              </div>

              {/* Value Prop 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="text-[clamp(4rem,10vw,8rem)] text-display text-[var(--color-brand)] leading-none">3</span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-[var(--text-primary)] mb-4">
                    Empower builders
                  </h3>
                  <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-[1.5] max-w-[700px]">
                    As the Swap API provider for Coinbase Developer Platform (CDP), developers get everything they need to build great apps on Base.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* New Sections */}
          <PutYourAppOnchain />
          <ScaleWith0x />
          <BookACall />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
