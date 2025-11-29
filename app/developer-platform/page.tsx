import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"
import { StatCard } from "@/components/ui/stat-card"

export default function DeveloperPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="developer-platform" />

      {/* Hero Card */}
      <PageHero
        title="Developer Platform"
        quote="Insert quote placeholder text here about Coinbase Dex trading Insert quote placeholder text here"
        bgColor="#18181b"
        textColor="#ffffff"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2d2d2d]">
            <div className="h-8 w-8 rounded-full border-4 border-[#0052ff]"></div>
          </div>
        }
        stats={[
          { value: "$XB", label: "in onchain volume" },
          { value: "Xm", label: "total transactions" },
        ]}
      />

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          The Coinbase Developer Platform (CDP) is a unified infrastructure suite that allows developers and
          enterprises to build crypto-native applications using Coinbase's trusted custody, compliance, and on-chain
          tooling.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          The platform offers modular APIs and SDKs supporting key functions such as payments, trading, wallets, fiat
          on-/off-ramp, staking/validation, on-chain data access, and multi-chain support. It is designed for
          scalability and composition: builders can pick and combine CDP tools using a single API key and leverage
          Coinbase's global reach, regulatory controls, and infrastructure reliability.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          As part of its effort to build an onchain ecosystem for users, Coinbase launched Base chain in 2023. Base
          serves as a low-cost, developer-friendly chain to build apps onchain and a home for Coinbase's onchain
          products.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Base was developed to provide developers and users with a faster and cheaper ecosystem for onchain apps and
          products. In order to do this, developers need an easy-to-use unified toolkit to build on Base. Coinbase
          Developer Platform is critical to Coinbase's onchain ecosystem.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          And for developers building onchain apps, they'll need to touch tokens at some point. With tokens swaps at
          the core of everything in Web3, trading functionality within Coinbase's developer toolkit meant to be an
          all-in-one solution was a must.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          The CDP team identified the lack of swap functionality as a critical pain point within its infra suite, with
          developers spending weeks integrating different third party solutions for swaps.
        </p>

        {/* Big Headline */}
        <div className="my-16 max-w-[1073px]">
          <h2 className="text-[80px] leading-[1.2] text-[#26272b]">
            CDP wanted to reduce that engineering time from weeks to just a{" "}
            <span className="text-[#0052ff]">few lines of code</span>
          </h2>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
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

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Behind the scenes, CDP Swap API is powered by 0x, quickly giving developers building on Base access to
          best-effort pricing across millions of tokens and liquidity from 200+ exchanges - without having to manage
          the complexity themselves.
        </p>

        {/* CDP Demo Placeholder */}
        <div className="mx-auto my-12 flex h-[511px] max-w-[1092px] items-center justify-center rounded-[15px] bg-neutral-100">
          <p className="text-center text-[22px] text-[#5e5e5e]">[CDP Demo video]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Whether developers are enabling seamless token swaps in their app, building multi-chain DeFi tools, or
          creating new user onboarding flows, they can integrate lightning-fast swaps in minutes, without managing
          complex liquidity or smart contract infrastructure.
        </p>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          In June, Coinbase Developer Platform introduced Swap API - a simple, developer-friendly way to embed
          production-grade token swaps in onchain apps with just a few lines of code.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Powered by 0x Swap API under the hood, CDP Swap API is built for backend-driven, automated workflows. Unlike
          traditional integrations that rely on front-end wallet prompts, CDP Swap enables programmatic execution --
          ideal for bots, agents, and services that need to move fast.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          With no infrastructure to deploy, no wallet popups, and no manual approval steps, developers can automate
          advanced flows like real-time liquidity management, portfolio rebalancing, or dynamic token allocation. The
          API handles quoting, signing, and routing under the hood - so agents focus on decision logic, not transaction
          plumbing.
        </p>

        {/* Highlight Section */}
        <div className="my-16 flex items-center gap-6">
          <div className="flex h-[85px] w-[85px] shrink-0 items-center justify-center rounded-[18px] bg-[#f2f2f2]">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="#26272b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="#26272b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#26272b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-[45px] leading-[1.2] text-[#26272b]">
            0x Swap API is integral to CDP's full developer stack
          </h3>
        </div>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          It enables developers to build fully integrated, production-grade workflows. Swap API is fully compatible
          with other CDP products like Wallets, x402, AgentKit, and Onramp so developers can build full-stack solutions
          fast.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          It can be used with Coinbase Onramp for fiat-to-token onboarding, with AgentKit to let smart agents respond
          to onchain events, or with x402 to enable token-powered API payments.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Since launch, Swap API has been integrated into X apps through the Coinbase Developer Platform, and has
          powered $XM in volume across Xk transactions.
        </p>
      </ContentSection>

      {/* Conclusion Section */}
      <ContentSection label="Conclusion" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          As the Coinbase team looked to expand into the burgeoning onchain economy, their search for a swap provider
          with expertise in DEX markets and deep understanding of API infrastructure, reliability, and enterprise-grade
          security led them to 0x.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Since then, the 0x has served as a critical partner as part of its evolution - providing end-to-end swap
          infrastructure that is integrated throughout its product portfolio.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          Coinbase has successfully met this new challenge - rapidly expanding into the decentralized trading space,
          offering robust onchain swap experiences and building blocks within the Coinbase App, Base App, and Coinbase
          Developer platform.
        </p>

        <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
          If you lead product development or new business expansion for a centralized exchange and would like to
          understand more about how 0x can support decentralized trading for your business, contact us.
        </p>
      </ContentSection>

      {/* Navigation Cards */}
      <NavigationCards />

      {/* Footer */}
      <Footer className="-mt-8" />
    </div>
  )
}
