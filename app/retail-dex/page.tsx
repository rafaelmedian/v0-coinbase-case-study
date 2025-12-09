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
  title: 'DEX Trading | 0x Coinbase Case Study',
  description: 'How 0x powers DEX trading for Coinbase, enabling access to millions of tokens across 16 EVM networks with institutional-grade infrastructure.',
}

export default function RetailDexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="retail-dex" />

      <PageHero
        title="Retail DEX"
        headline={
          <>
            Powering <span className="text-[var(--color-brand)]">onchain trades</span> across XXm users.
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
          text: "0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.",
          author: "Coinbase Team",
          role: "Engineering"
        }}
      />

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          With over <strong className="text-[var(--text-primary)]">120 million total users</strong> and 
          <strong className="text-[var(--text-primary)]"> 8.7 million monthly transacting users</strong>, 
          Coinbase is one of the world's leading crypto exchanges.
        </p>
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Through Coinbase's app, users can buy, store, and trade more than 300 different cryptocurrencies.
          Coinbase also offers additional services, including a fee-based plan with Coinbase One and professional
          asset trading with Coinbase Advanced, in total serving over 120 million users.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6">
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          As the crypto ecosystem has grown, millions of new assets are launching onchain every day as the barrier
          to entry for launching new tokens has been eliminated, creating a flourishing onchain token ecosystem.
        </p>
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          These assets are spread across dozens of chains and can be traded on hundreds of different decentralized exchanges.
        </p>

        {/* Chart Placeholder */}
        <div className="mx-auto my-8 flex h-[300px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[var(--text-muted)]">[LINE CHART: MONTHLY DEX VOLUME, STARTING IN JULY 2020]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          With this explosion of tokens has come the rise in decentralized exchanges (DEXs), with users and activity 
          moving onchain and away from centralized venues. Starting at $666 million in January 2020, monthly trading 
          volume on decentralized exchanges has exploded to <strong className="text-[var(--text-primary)]">$500 billion</strong>. 
          DEXs have now settled more than <strong className="text-[var(--text-primary)]">$4 trillion</strong> in onchain transactions. 
          [<a href="https://www.theblock.co/data/decentralized-finance/dex-non-custodial" className="underline hover:text-[var(--color-brand)] transition-colors" target="_blank" rel="noopener noreferrer">Source</a>]
        </p>
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          The vast majority of tokens are not available on centralized exchanges, where due to regulatory compliance, 
          CEX token offerings require complicated and lengthy listing processes. This model has kept Coinbase from 
          matching the speed of onchain trading, where new tokens can come and go in a matter of hours. By the time 
          tokens have been approved for listing, they are often already irrelevant.
        </p>

        {/* Chart Placeholder */}
        <div className="mx-auto my-8 flex h-[300px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[var(--text-muted)]">[LINE CHART: DEX TO CEX SPOT TRADE VOLUME]</p>
        </div>

        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          As a result, crypto traders are increasingly turning to DEX platforms for their trading, with users leaving 
          Coinbase's trading platform in search of trending tokens elsewhere in the onchain ecosystem.
        </p>
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          Monthly DEX volume has grown to <strong className="text-[var(--text-primary)]">20% of CEX volume</strong>, 
          up from just 10% in 2024. In Q2, CEXs recorded $3.9 trillion in spot trading volume, a decrease of 27.7% QoQ, 
          while DEX trading volume rose to $876.3 billion, an increase of 25.3% over the same period. 
          [<a href="https://www.coingecko.com/research/publications/2025-q2-crypto-report" className="underline hover:text-[var(--color-brand)] transition-colors" target="_blank" rel="noopener noreferrer">Source</a>]
        </p>
        <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          This represents both a <strong className="text-[var(--text-primary)]">major challenge and opportunity</strong> for Coinbase.
        </p>
      </ContentSection>

      {/* Coverage Section */}
      <ContentSection label="Coverage" className="space-y-8">
        <h2 className="text-[clamp(1.75rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)]">
          Coverage for millions of tokens across dozens of chains
        </h2>
        <div className="space-y-6 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <p>
            In an effort to capture this activity and bridge the gap with DeFi, Coinbase launched its Wallet in 2021. 
            A core component of the Coinbase Wallet is DEX swaps. Coinbase chose <strong className="text-[var(--text-primary)]">0x</strong> to 
            power this critical functionality as part of their expansion onchain.
          </p>
          <p>
            However, millions of users still trade directly from the Coinbase App, and Coinbase aimed to bridge that 
            gap by giving users the ability to interact directly with tokens on DEXs without moving funds off-platform.
          </p>
        </div>

        {/* Coverage Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Expand coverage and provide instant access</h3>
                <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
                  Reviewing and adding new tokens for listing on Coinbase's platform is a slow and time consuming process. 
                  DEX trading provided an opportunity to give users access to millions of new assets directly onchain within 
                  moments of being indexed onchain, helping keep users on platform and capture onchain trading activity.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">One unified experience</h3>
                <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
                  DEX trading on Coinbase offered the opportunity to provide a simple yet powerful gateway to onchain markets 
                  by abstracting away the complexities of navigating decentralized protocols. Users need to be able to fund 
                  trades seamlessly with their Coinbase balance or USDC, track performance, and manage their portfolio — all 
                  within one unified interface.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Transparent and safe trading</h3>
                <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
                  With millions of new tokens has come new and more sophisticated exploits that target users. Trading 
                  long-tail tokens on DEXs presents risks for users. Coinbase could offer a safer, more transparent trading 
                  experience by surfacing key market data and risks insights pulled directly from onchain data, differentiating 
                  them from many onchain venues.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">More networks, more assets, and more markets</h3>
                <p className="text-[22px] leading-[1.3] text-[var(--text-secondary)]">
                  DEX trading would enable Coinbase to rapidly expand to support new chains, while at the same time bring 
                  DEX trading to more countries and expand access to the global community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Graphic Placeholder */}
        <div className="mx-auto my-8 flex h-[300px] max-w-[1092px] items-center justify-center rounded-[15px] bg-[var(--bg-card)]">
          <p className="text-center text-[var(--text-muted)]">[TOKEN GRAPHIC: TOPLINE MONTHLY TOKENS ISSUED]</p>
        </div>
      </ContentSection>

      {/* Execution Section */}
      <ContentSection label="Execution" className="space-y-8">
        <div className="space-y-6 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <p>
            At the same time, Coinbase has come to be known for the power of its trading experience. Historically, 
            trade execution in DeFi has never been able to match the power and quality of tooling that is commonplace 
            on CeFi exchanges and prime brokers.
          </p>
          <p>
            In order to both retain and bring new DEX users on-platform, Coinbase required the ability to deliver 
            <strong className="text-[var(--text-primary)]"> reliable, high-quality DEX execution</strong> for millions of tokens.
          </p>
          <p>
            Delivering the best trade execution in DeFi is a multi-faceted challenge that demands a number of 
            sophisticated capabilities, including inspecting onchain liquidity conditions for slippage and price impact, 
            controlling execution costs such as gas fees, and bundling it all up for execution that is reliable and fast. 
            To solve this challenge requires <strong className="text-[var(--text-primary)]">deep expertise in DEX routing and aggregation</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[clamp(1.75rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)]">The challenges of DEX execution:</h3>
          <div className="space-y-0">
            {[
              { title: '"All-in" prices', description: '' },
              { title: 'Deep liquidity', description: '' },
              { title: 'Advanced routing', description: '' },
              { title: 'Reliability', description: '' },
              { title: 'Latency', description: 'DEX trading can be slow, requiring routing through hundreds of different pools and sources. Swaps need to be lightning fast for users, with very quick latency across a number of chains that have different architectures, block times, and more.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 border-b border-[var(--border-light)] py-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]"></div>
                <div className="flex-1">
                  <h4 className="mb-2 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">{item.title}</h4>
                  {item.description && (
                    <p className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.3] text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* The Solution Section */}
      <ContentSection label="The Solution" className="space-y-8">
        <h2 className="text-[clamp(1.75rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)]">
          Coinbase's drive to deliver best-in-class swaps with the widest token coverage led them to 0x.
        </h2>
        <div className="space-y-6 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <p>
            Having been strategic partners since 2021, the Coinbase team trusted <strong className="text-[var(--text-primary)]">0x's</strong> reliable, 
            battle-tested DEX API infrastructure. Secure contracts, time-in-market, a professional and responsive team, 
            and market-leading DEX execution were all important factors in the Coinbase team's decision to have 0x help 
            power their DEX trading.
          </p>
          <p>
            0x empowers hundreds of developers with essential Web3 tools to enable faster trading, better prices, and 
            superior UX. Our suite of APIs has processed over <strong className="text-[var(--text-primary)]">60 million transactions</strong> and 
            <strong className="text-[var(--text-primary)]"> $154 billion in volume</strong> from more than 
            <strong className="text-[var(--text-primary)]"> 9 million users</strong>.
          </p>
        </div>
      </ContentSection>

      {/* Wide Token Coverage Section */}
      <ContentSection label="Wide Token Coverage" className="space-y-12">
        <h2 className="text-[clamp(1.75rem,4vw,2.8rem)] leading-[1.2] text-[var(--text-primary)]">Wide token coverage for users</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">16 EVM networks</h3>
                <p className="mb-6 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Access to tokens on the largest chains, including Base, BNB Chain, Ethereum, and many more.
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-white/50"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Millions of tokens</h3>
                <p className="mb-6 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Support for 20M+ tokens with unrivaled liquidity from 130+ exchanges.
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-white/50"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Exclusive RFQ liquidity</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Top-tier liquidity from sophisticated market makers. 0x RFQ outperforms AMMs on price 46% of the time where available.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Buy/sell tax token support</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Real-time buy/sell tax detection and intelligent trade routing, minimizing error rates and enhancing the swap experience for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Advanced DEX Routing Section */}
      <ContentSection label="Advanced DEX Routing">
        <div className="rounded-[15px] bg-[var(--bg-card)] p-12">
          <p className="text-center text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">SANKEY</p>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-64 w-full rounded-lg bg-white/50"></div>
          </div>
        </div>
      </ContentSection>

      {/* Institutional-grade Infrastructure Section */}
      <ContentSection label="Institutional-Grade Infrastructure">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Reliability</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Enterprise-grade uptime with battle-tested infrastructure serving millions of transactions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Latency</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Sub-500ms median response time across all supported networks.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Serious security</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  0x v2's new smart contracts are fully audited, with <a href="https://go.0x.org/0x-v2-audits" className="underline hover:text-[var(--color-brand)] transition-colors" target="_blank" rel="noopener noreferrer">four audits</a> from three separate firms, 
                  including Ourovoros, Trail of Bits, OpenZeppelin, and Trail of Bits a second time. 0x also leverages Dedaub's 
                  industry-leading security suite to continuously analyze our contracts as we develop them.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-[var(--bg-card)] p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[var(--color-brand)]"></span>
              <div>
                <h3 className="mb-4 text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-primary)]">Low error rates</h3>
                <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.2] text-[var(--text-secondary)]">
                  Reliable quotes with accurate gas estimates, every time with Smart Validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-8">
        {/* App UI Placeholder */}
        <div className="rounded-[15px] bg-[var(--bg-card)] p-12">
          <p className="mb-8 text-center text-[22px] text-[var(--text-muted)]">
            APP UI, with a before and after (showing available DEX tokens)
          </p>
          <div className="flex items-center justify-center">
            <div className="h-64 w-full max-w-2xl rounded-lg bg-white/50"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <StatCard value="2M+" label="distinct token pairs" />
            <StatCard value="5.6M" label="distinct transactions" />
          </div>

          <StatCard value="$1.4B" label="Coinbase total volume" />
        </div>

        <div className="space-y-6 text-[22px] leading-[1.3] text-[var(--text-secondary)]">
          <p>
            With DEX trading directly in-app, new assets become available to trade within moments of creation, helping 
            Coinbase both retain users and tap into the growing onchain economy. And issuers no longer have to wait days, 
            weeks or months for a traditional listing to get access to Coinbase's distribution.
          </p>
          <p>
            With DEX trading powered by <strong className="text-[var(--text-primary)]">0x</strong>, Coinbase has unlocked a new era of access, 
            going from just 300 assets to <strong className="text-[var(--text-primary)]">millions</strong> with just one integration, all tradable 
            through the simple and familiar interface Coinbase users have come to trust. As a result, in Q4, Coinbase saw 
            a <strong className="text-[var(--text-primary)]">24% increase in total trading volume</strong>.
          </p>
          <p>
            DEX trading reinforces Coinbase's commitment to support the fast-evolving needs of the crypto trading community 
            - moving Coinbase closer to its vision of becoming an "everything" app for crypto.
          </p>
        </div>
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
