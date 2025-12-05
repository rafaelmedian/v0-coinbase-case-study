import type { Metadata } from 'next'
import Image from "next/image"
import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"
import { StatCard } from "@/components/ui/stat-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Base App | 0x Coinbase Case Study',
  description: 'How 0x powers the Base App social trading experience, enabling seamless token swaps within Coinbase\'s onchain social platform.',
}

export default function BaseAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="base-app" />

      <PageHero
        title="Base App"
        headline={
          <>
            Powering <span className="text-[var(--color-brand)]">SocialFi and Zora creator coins</span> on Base.
          </>
        }
        icon={
          <Image
            src="/images/base-app-icon.svg"
            alt="Base App"
            width={85}
            height={85}
            className="rounded-full"
          />
        }
        stats={[
          { value: "$XB", label: "in onchain volume" },
          { value: "Xm", label: "total transactions" },
        ]}
        bulletStats={[
          "$B in trading volume",
          "XM transactions",
          "Xk users during Beta"
        ]}
        quote={{
          text: "The 0x team is at the forefront of best execution and routing for the largest apps in the industry.",
          author: "Jacob Horne",
          role: "Co-Founder of Zora"
        }}
      />

      {/* A Unified Consumer Experience Section */}
      <ContentSection label="A Unified Consumer Experience" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The Base App is an all-in-one Web3 consumer experience that brings non-native users into the Base ecosystem. 
          <strong className="text-[var(--text-primary)]"> 0x</strong> swap infrastructure supports its onchain mechanics 
          and novel token architecture like <strong className="text-[var(--text-primary)]">Zora Posts and Creator coins</strong>, 
          at social media scale.
        </p>

        {/* Video Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[22px] text-[var(--text-muted)]">[Base App highlight reel video]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          As the consumer gateway to crypto, Base App users demand a seamless and efficient experience across multiple touchpoints:
        </p>

        <ul className="ml-8 list-disc space-y-3 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">creator monetization</strong> via Farcaster and Zora, both powered by 0x
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">trade, earn, and swap</strong> cryptocurrencies
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">send payments</strong> globally
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">chat</strong>, including encrypted messaging with payments
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">mini-apps</strong> (games, DeFi, utilities) that run in one mobile interface
          </li>
        </ul>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          From an ecosystem perspective, Base App enables stronger network effects for the Base network by bringing together 
          end users and Web3 developers around social-finance use cases.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          A core part of the Base App social experience are <strong className="text-[var(--text-primary)]">Zora coins</strong>. 
          Every creator profile, and each individual post, becomes an ERC-20 token that enables novel ways to monetize 
          and interact with content onchain. That meant:
        </p>

        <ul className="ml-8 list-disc space-y-3 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">Tens of thousands</strong> of new tokens and pools daily, equal to a whole L1
          </li>
          <li>
            Pools need <strong className="text-[var(--text-primary)]">real-time indexing</strong> so new tokens are swappable instantly
          </li>
          <li>
            The growth rate must be managed efficiently to <strong className="text-[var(--text-primary)]">avoid latency spikes</strong>
          </li>
        </ul>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          This new token mechanism broke traditional DEX routing, making it impossible for Base App to let users swap these tokens.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          On top of that, the token graph is multi-layered:
        </p>

        <ul className="ml-8 list-disc space-y-3 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">Post coins</strong> are paired with Creator coins
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Creator coins</strong> are paired with ZORA
          </li>
        </ul>

        {/* ZORA Trading Flow Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] flex-col items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-[45px] leading-[1.2] text-[var(--text-primary)]">ZORA coin trading flow</p>
          <p className="text-[45px] leading-[1.2] text-[var(--text-primary)] opacity-60">Still needed?</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          For users, this complexity must be invisible. They simply want to trade Zora coins easily with deep liquidity, 
          and see new tokens when they're created.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Without seamless trade execution, users would struggle to access these assets and the social flywheel would fail 
          to gather momentum. Solving this problem required <strong className="text-[var(--text-primary)]">0x's</strong> deep 
          expertise in DEX routing and aggregation, outside the Base App team's core competency.
        </p>

        {/* Zora Case Study Link */}
        <div className="mx-auto my-12 flex max-w-[466px] items-center justify-center rounded-[15px] bg-[var(--bg-card)] py-6 px-8">
          <Link 
            href="https://0x.org/case-studies/zora" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[clamp(1.5rem,4vw,3.75rem)] leading-[1.2] text-[var(--text-primary)] hover:text-[var(--color-brand)] transition-colors"
          >
            Zora case study →
          </Link>
        </div>
      </ContentSection>

      {/* The Solution Section */}
      <ContentSection label="The Solution" className="space-y-6">
        {/* Base App UI Placeholder */}
        <div className="mx-auto my-8 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[22px] text-[var(--text-muted)]">[Graphic: Base App UI]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The Base App team turned to <strong className="text-[var(--text-primary)]">0x</strong> as a strategic partner 
          to build custom support for Zora coins for Day 1 of this critical launch. 0x worked with the Base team to:
        </p>

        <ul className="ml-8 list-disc space-y-3 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">Build custom routing</strong> for Zora Post and Creator coins on Base
          </li>
          <li>
            Detect and <strong className="text-[var(--text-primary)]">ingest large volumes</strong> of new pools and tokens in real time
          </li>
          <li>
            Determine <strong className="text-[var(--text-primary)]">optimal routes</strong> through ZORA, Creator, and Post coins
          </li>
          <li>
            Deliver <strong className="text-[var(--text-primary)]">lightning-fast latency</strong> across the board
          </li>
        </ul>

        {/* Quote Section */}
        <div className="my-16 flex flex-col items-center">
          <div className="max-w-[975px]">
            <img
              src="/images/quote-mark.svg"
              alt=""
              className="w-[89px] h-[67px] mb-6 select-none"
              aria-hidden="true"
            />
            <p className="text-[clamp(1.5rem,4vw,2.625rem)] leading-[1.2] text-[var(--text-primary)]">
              Zora coins have resulted in an explosion of liquidity pools, and the complexity of quoting and routing is 
              unique to Zora. To support this level of pool creation while maintaining latency, we had to build a custom 
              integration able to effectively route from any token to a Post coin.
            </p>
            <div className="mt-8 h-[6px] w-[98px] bg-[var(--color-brand)] rounded-full"></div>
            <p className="mt-4 text-[22px] leading-[1.3] text-[var(--text-secondary)]">Eric Wong, 0x Product Manager</p>
          </div>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          This custom engineering paid off. <strong className="text-[var(--text-primary)]">0x</strong> Swap API provides 
          <strong className="text-[var(--text-primary)]"> best-in-class routing</strong> for Zora coins, with the 
          <strong className="text-[var(--text-primary)]"> widest pair coverage</strong> at 
          <strong className="text-[var(--text-primary)]"> lightning-fast latency</strong>.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">0x is the only provider</strong> to offer full Zora coin support at scale. 
          Without 0x, swapping these coins within the Base App would not be possible.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <Link href="/start-building" className="underline text-[var(--text-primary)] hover:text-[var(--color-brand)] transition-colors">
            Speak to the team
          </Link> today to see how 0x can solve your routing needs.
        </p>

        {/* Zora Route Sankey Placeholder */}
        <div className="mx-auto my-8 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[22px] text-[var(--text-muted)]">[Zora coin route sankey]</p>
        </div>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-8">
        {/* Stats Grid */}
        <div className="space-y-6">
          {/* Row 1 - Full width */}
          <StatCard value="20M+" label="tokens supported" />

          {/* Row 2 - Two columns */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <StatCard value="99%" label="uptime" />
            <StatCard value="<500ms" label="median response time" />
          </div>

          {/* Row 3 - Right aligned */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div></div>
            <StatCard value="$B" label="in trading volume" />
          </div>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Coinbase launched the all-new Base App in July 2025 as a fully-featured SocialFi app, integrating Zora directly 
          into its social feed, powered by <strong className="text-[var(--text-primary)]">0x</strong>.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Instead of switching across platforms, users access Zora Posts and Creator coins alongside Farcaster, Bankr, 
          and more, <strong className="text-[var(--text-primary)]">in a single feed</strong>.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          With Zora and <strong className="text-[var(--text-primary)]">0x</strong> Swap API, Base App makes it easy for 
          creators to easily tokenize their content, for users to trade Creator and Post coins, and for the Base ecosystem 
          to exist in one powerful interface.
        </p>

        {/* Stats List */}
        <ul className="ml-8 list-disc space-y-2 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <li>
            5.2M Zora coins created [
            <a
              href="https://www.theblock.co/post/365384/base-solana-zora"
              className="underline hover:text-[var(--color-brand)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            ]
          </li>
          <li>$XM Zora coin trading volume on Base</li>
          <li>Xk Zora coin transactions on Base</li>
        </ul>
      </ContentSection>

      {/* CTA Section */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)]">
        <div className="bg-[var(--bg-card)] rounded-[20px] p-8 md:p-12 text-center max-w-[898px] mx-auto">
          <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)] mb-8">
            0x provides hundreds of crypto teams with essential tools for faster trading, better prices, and superior UX. 
            We can help you scale to meet customer demand, no matter how complex the challenge. Speak to our team about 
            custom routing today.
          </p>
          <Link
            href="/start-building"
            className="inline-flex items-center justify-center rounded-[15px] bg-[var(--bg-surface)] px-12 py-4 text-[clamp(1.5rem,4vw,3.75rem)] leading-[1.2] text-[var(--text-primary)] hover:bg-[var(--border-light)] transition-colors"
          >
            Book a call
          </Link>
        </div>
      </section>

      {/* Navigation Cards */}
      <NavigationCards />

      {/* Footer */}
      <Footer className="-mt-8" />
    </div>
  )
}
