import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"
import { StatCard } from "@/components/ui/stat-card"

export const metadata: Metadata = {
  title: 'Developer Platform | 0x Coinbase Case Study',
  description: 'How 0x powers the Coinbase Developer Platform, providing builders with enterprise-grade swap infrastructure for their onchain applications.',
}

export default function DeveloperPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="developer-platform" />

      <PageHero
        title="Developer Platform"
        headline={
          <>
            The <span className="text-[var(--color-brand)]">unified toolkit for builders</span>—everything developers need to build great apps on Base.
          </>
        }
        icon={
          <Image
            src="/images/coinbase-icon.svg"
            alt="Coinbase"
            width={85}
            height={85}
            className="rounded-full"
          />
        }
        stats={[
          { value: "$1.4B", label: "Coinbase total volume" },
          { value: "5.6M", label: "distinct transactions" },
        ]}
        bulletStats={[
          "2M+ distinct token pairs",
          "$1.4B Coinbase total volume",
          "5.6M distinct transactions"
        ]}
        quote={{
          text: "CDP Swap API enables developers to build fully integrated, production-grade workflows in minutes.",
          author: "Coinbase",
          role: "Developer Platform"
        }}
      />

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The Coinbase Developer Platform (CDP) is a <strong className="text-[var(--text-primary)]">unified infrastructure suite</strong> that 
          allows developers and enterprises to build crypto-native applications using Coinbase's trusted custody, compliance, and on-chain tooling.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The platform offers modular APIs and SDKs supporting key functions such as payments, trading, wallets, fiat
          on-/off-ramp, staking/validation, on-chain data access, and multi-chain support. It is designed for
          scalability and composition: builders can pick and combine CDP tools using a single API key and leverage
          Coinbase's global reach, regulatory controls, and infrastructure reliability.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          As part of its effort to build an onchain ecosystem for users, Coinbase launched <strong className="text-[var(--text-primary)]">Base chain in 2023</strong>. 
          Base serves as a low-cost, developer-friendly chain to build apps onchain and a home for Coinbase's onchain products.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Base was developed to provide developers and users with a faster and cheaper ecosystem for onchain apps and
          products. In order to do this, developers need an easy-to-use unified toolkit to build on Base. Coinbase
          Developer Platform is critical to Coinbase's onchain ecosystem.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          And for developers building onchain apps, they'll need to touch tokens at some point. With <strong className="text-[var(--text-primary)]">tokens swaps at
          the core of everything in Web3</strong>, trading functionality within Coinbase's developer toolkit meant to be an
          all-in-one solution was a must.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The CDP team identified the lack of swap functionality as a critical pain point within its infra suite, with
          developers spending <strong className="text-[var(--text-primary)]">weeks integrating different third party solutions</strong> for swaps.
        </p>

        {/* Big Headline */}
        <div className="my-16 max-w-[1073px]">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.2] text-[var(--text-primary)]">
            CDP wanted to reduce that engineering time from weeks to just a{" "}
            <span className="text-[var(--color-brand)]">few lines of code</span>
          </h2>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          To do so it needed to provide developers with a tool to easily embed production-grade token swaps within
          their apps. However, building a swap API is challenging, and requires a significant amount of resources and
          engineering overhead.
        </p>
      </ContentSection>

      {/* The Solution Section */}
      <ContentSection label="The Solution" className="space-y-6">
        {/* Stats Grid */}
        <div className="space-y-6">
          {/* Row 1 - Full width */}
          <StatCard value="2M+" label="distinct token pairs" />

          {/* Row 2 - Two columns */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <StatCard value="5.6M" label="distinct transactions" />
            <StatCard value="$1.4B" label="Coinbase total volume" />
          </div>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Behind the scenes, <strong className="text-[var(--text-primary)]">CDP Swap API is powered by 0x</strong>, quickly giving developers 
          building on Base access to best-effort pricing across millions of tokens and liquidity from 200+ exchanges - without having 
          to manage the complexity themselves.
        </p>

        {/* CDP Demo Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[22px] text-[var(--text-muted)]">[CDP Demo video]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Whether developers are enabling seamless token swaps in their app, building multi-chain DeFi tools, or
          creating new user onboarding flows, they can integrate <strong className="text-[var(--text-primary)]">lightning-fast swaps in minutes</strong>, 
          without managing complex liquidity or smart contract infrastructure.
        </p>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          In June, Coinbase Developer Platform introduced <strong className="text-[var(--text-primary)]">Swap API</strong> - a simple, 
          developer-friendly way to embed production-grade token swaps in onchain apps with just a few lines of code.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Powered by 0x Swap API under the hood, CDP Swap API is built for <strong className="text-[var(--text-primary)]">backend-driven, 
          automated workflows</strong>. Unlike traditional integrations that rely on front-end wallet prompts, CDP Swap enables 
          programmatic execution -- ideal for bots, agents, and services that need to move fast.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          With no infrastructure to deploy, no wallet popups, and no manual approval steps, developers can automate
          advanced flows like real-time liquidity management, portfolio rebalancing, or dynamic token allocation. The
          API handles quoting, signing, and routing under the hood - so agents focus on decision logic, not transaction
          plumbing.
        </p>

        {/* Highlight Section */}
        <div className="my-16 flex items-center gap-6">
          <div className="flex h-[85px] w-[85px] shrink-0 items-center justify-center rounded-[18px] bg-[var(--bg-card)]">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--text-primary)]"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--text-primary)]"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--text-primary)]"
              />
            </svg>
          </div>
          <h3 className="text-[clamp(1.75rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)]">
            0x Swap API is integral to CDP's full developer stack
          </h3>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          It enables developers to build fully integrated, production-grade workflows. Swap API is fully compatible
          with other CDP products like <strong className="text-[var(--text-primary)]">Wallets, x402, AgentKit, and Onramp</strong> so 
          developers can build full-stack solutions fast.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          It can be used with Coinbase Onramp for fiat-to-token onboarding, with AgentKit to let smart agents respond
          to onchain events, or with x402 to enable token-powered API payments.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Since launch, Swap API has been integrated into X apps through the Coinbase Developer Platform, and has
          powered <strong className="text-[var(--text-primary)]">$1.4B in volume</strong> across <strong className="text-[var(--text-primary)]">5.6M transactions</strong>.
        </p>
      </ContentSection>

      {/* Conclusion Section */}
      <ContentSection label="Conclusion" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          As the Coinbase team looked to expand into the burgeoning onchain economy, their search for a swap provider
          with expertise in DEX markets and deep understanding of API infrastructure, reliability, and enterprise-grade
          security led them to <strong className="text-[var(--text-primary)]">0x</strong>.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Since then, 0x has served as a <strong className="text-[var(--text-primary)]">critical partner</strong> as part of its evolution - 
          providing end-to-end swap infrastructure that is integrated throughout its product portfolio.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Coinbase has successfully met this new challenge - rapidly expanding into the decentralized trading space,
          offering robust onchain swap experiences and building blocks within the Coinbase App, Base App, and Coinbase
          Developer platform.
        </p>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          If you lead product development or new business expansion for a centralized exchange and would like to
          understand more about how 0x can support decentralized trading for your business, 
          <Link href="/start-building" className="underline text-[var(--text-primary)] hover:text-[var(--color-brand)] transition-colors"> contact us</Link>.
        </p>
      </ContentSection>

      {/* CTA Section */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)]">
        <div className="bg-[var(--bg-card)] rounded-[20px] p-8 md:p-12 text-center max-w-[898px] mx-auto">
          <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)] mb-8">
            0x provides hundreds of crypto teams with essential tools for faster trading, better prices, and superior UX. 
            We can help you scale to meet customer demand, no matter how complex the challenge. Speak to our team about 
            custom integrations today.
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
