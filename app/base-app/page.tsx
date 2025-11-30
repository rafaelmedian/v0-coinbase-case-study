import type { Metadata } from 'next'
import Image from "next/image"
import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"
import { StatCard } from "@/components/ui/stat-card"

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
        quote="Insert quote placeholder text here about Coinbase Dex trading Insert quote placeholder text here"
        bgColor="#0052ff"
        textColor="#ffffff"
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
      />

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          The Base App is the all-in-one Web3 application launched by Coinbase (via its Base ecosystem) that rebrands
          and expands the functionality of Coinbase Wallet into a unified platform.
        </p>

        {/* Video Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-neutral-100">
          <p className="text-center text-[22px] text-[#5e5e5e]">[Base App highlight reel video]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Users can post and earn via a social feed (powered by Farcaster and tokenized with Zora), trade and swap
          cryptocurrencies, send USDC payments globally, chat (including encrypted messaging with built-in payments),
          and access embedded mini-apps (games, DeFi, utilities) all within one mobile interface.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          From an ecosystem perspective, Base App is designed as the consumer-on-ramp for the broader Base Chain. It
          supports themes of creator monetization, low-fee/on-chain actions for everyday users, universal identity,
          mini-apps without separate downloads, and payments via USDC. The app remains in beta (waitlist access) and
          acts as the user gateway into the Base ecosystem, enabling stronger network effects for Web3 developers and
          social-finance use cases.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          With the launch of the all-new Base App, Zora Post and Creator coins became a critical component of the
          social experience Coinbase envisioned within the app. Zora's Post and Creator coins tokenize every post and
          creator profile, empowering a new creator economy that enables novel ways to monetize and engage with content
          onchain.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Base App needed to be able to integrate full support for Zora coins directly within the Base App experience.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          One of the major challenges, however, with the Zora token ecosystem is this entirely new token mechanism
          broke traditional DEX routing, making it impossible to provide swaps for these tokens to users.
        </p>

        {/* ZORA Trading Flow Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] flex-col items-center justify-center rounded-[15px] bg-neutral-100">
          <p className="text-[45px] leading-[1.2] text-[#26272b]">ZORA coin trading flow</p>
          <p className="text-[45px] leading-[1.2] text-[#26272b]">Still needed?</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">Why? Zora coins have led to an unprecedented surge in token and pool creation. That means:</p>

        <ul className="ml-8 list-disc space-y-2 text-[22px] leading-[1.3] text-[#5e5e5e]">
          <li>
            Tens of thousands of tokens and pools are created daily, a level of pool creation on the scale of the whole
            Solana ecosystem.
          </li>
          <li>Pools need to be detected in real-time to make them swappable instantly.</li>
          <li>
            With this explosion of pools, new pools need to be managed efficiently to reduce the impact on latency so
            that swaps remain fast for users.
          </li>
        </ul>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          At the same time, Post coins are paired with Creator coins and Creator coins are paired with ZORA. That means
          that swaps for these coins must take into account these pairings and route across a number of intermediate
          tokens.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Users need to be able to easily trade and access deep liquidity for Zora Post and Creator coins, and new
          token pools (created with every post) must be instantly swappable. Without seamless trade execution available
          in the Base App, users would struggle to access these assets and the flywheel would fail to gather momentum.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          However, solving this problem required deep expertise in DEX routing and aggregation, which was outside of
          the Base App team's core competency.
        </p>
      </ContentSection>

      {/* The Solution Section */}
      <ContentSection label="The Solution" className="space-y-6">
        {/* Base App UI Placeholder */}
        <div className="mx-auto my-8 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-neutral-100">
          <p className="text-center text-[22px] text-[#5e5e5e]">[Graphic: Base App UI]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          The Base App team needed a strategic partner with the necessary experience to provide full support for Zora
          coin swaps from Day 1. With a strong relationship building together since 2021 and the deepest DEX routing
          expertise in the industry, Coinbase trusted 0x to custom build a solution to support this critical launch.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          In order to solve this and meet the needs of the Base App team, 0x built custom routing for Zora coins to
          manage the surge of new tokens created to determine the optimal route for a given trade, while maintaining
          lightning-fast latency.
        </p>

        {/* Quote Section */}
        <div className="my-16 flex flex-col items-center">
          <div className="max-w-[975px]">
            <div className="text-[88px] leading-none text-[#c2c2c2]">"</div>
            <p className="text-[42px] leading-[1.2] text-[#26272b]">
              Zora coins have resulted in an explosion of liquidity pools. The complexity in quoting and routing is
              very unique to Zora. The challenge was to support this level of pool creation while maintaining latency.
              In order to solve this, we had to build a custom integration to support the large number of liquidity
              pools and be able to effectively route from any token to a Post coin.
            </p>
            <div className="mt-8 h-[6px] w-[98px] bg-[#0052ff]"></div>
            <p className="mt-4 text-[22px] leading-[1.3] text-[#5e5e5e]">Eric Wong, 0x Product Manager</p>
          </div>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          As a result of this custom engineering, Swap API now provides best-in-class routing for Zora coins, with the
          widest pair coverage at lightning-fast latency. For instance, when buying a Post coins with USDC, 0x will
          automatically route from USDC through the ZORA token, the associated Creator coin, and finally into the Post
          coin.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          0x is the only provider to offer full Zora coin support, without which swapping for these coins within the
          Base App would not be possible.
        </p>

        {/* Zora Route Sankey Placeholder */}
        <div className="mx-auto my-8 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-neutral-100">
          <p className="text-center text-[22px] text-[#5e5e5e]">[Zora coin route sankey]</p>
        </div>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-8">
        {/* Stats Grid */}
        <div className="space-y-6">
          {/* Row 1 - Full width */}
          <StatCard value="5.2M" label="Zora coins created" />

          {/* Row 2 - Two columns */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <StatCard value="99%" label="uptime" />
            <StatCard value="<4B" label="transactions on Base" />
          </div>

          {/* Row 3 - Right aligned */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div></div>
            <StatCard value="$B" label="in trading Zora volume on Base" />
          </div>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Coinbase launched the all-new Base App in July as a fully-featured SocialFi app, integrating Zora directly
          into its social feed.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Instead of having to visit Zora directly, or move between a number of other apps and platforms, Zora is
          integrated alongside Farcaster, Bankr, and more into a single feed - with full support for Zora coin swaps
          integrated directly into the app.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          With Zora and 0x Swap API, Base App makes it easy for creators to easily tokenize their posts, users to trade
          Creator and Post coins, and much more - all directly in one powerful interface.
        </p>

        {/* Stats List */}
        <ul className="ml-8 list-disc space-y-2 text-[22px] leading-[1.3] text-[#5e5e5e]">
          <li>
            5.2M Zora coins created [
            <a
              href="https://www.theblock.co/post/365384/base-solana-zora"
              className="underline"
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

      {/* Navigation Cards */}
      <NavigationCards />

      {/* Footer */}
      <Footer className="-mt-8" />
    </div>
  )
}
