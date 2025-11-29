import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"

export default function RetailDexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="retail-dex" />

      <PageHero
        title="DEX Trading"
        quote="Insert quote placeholder text here about Coinbase Dex trading Insert quote placeholder text here"
        bgColor="#c8d4fa"
        textColor="#1d1d1d"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0052ff]">
            <div className="h-8 w-8 rounded-full border-4 border-white"></div>
          </div>
        }
        stats={[
          { value: "$XB", label: "in onchain volume" },
          { value: "Xm", label: "total transactions" },
        ]}
      />

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>
          With over 120 million total users and 8.7 million monthly transacting users, Coinbase is one of the
          world&apos;s leading crypto exchanges.
        </p>
        <p>
          Through Coinbase&apos;s app, users can buy, store, and trade more than 300 different cryptocurrencies.
          Coinbase also offers additional services, including a fee-based plan with Coinbase One and professional
          asset trading with Coinbase Advanced, in total serving over 120 million users.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>
          As the crypto ecosystem has grown, millions of new assets are launching onchain every day as the barrier
          to entry for launching new tokens has been eliminated, creating a flourishing onchain token ecosystem.
        </p>
        <p>
          These assets are spread across dozens of chains and can be traded on hundreds of different decentralized exchanges.
        </p>
        <p>
          With this explosion of tokens has come the rise in decentralized exchanges (DEXs), with users and activity moving onchain and away from centralized venues. Starting at $666 million in January 2020, monthly trading volume on decentralized exchanges has exploded to $500 billion. DEXs have now settled more than $4 trillion in onchain transactions. [<a href="https://www.theblock.co/data/decentralized-finance/dex-non-custodial" className="underline">Source</a>]
        </p>
        <p>
          The vast majority of tokens are not available on centralized exchanges, where due to regulatory compliance, CEX token offerings require complicated and lengthy listing processes. This model has kept Coinbase from matching the speed of onchain trading, where new tokens can come and go in a matter of hours. By the time tokens have been approved for listing, they are often already irrelevant.
        </p>
        <p>
          As a result, crypto traders are increasingly turning to DEX platforms for their trading, with users leaving Coinbase&apos;s trading platform in search of trending tokens elsewhere in the onchain ecosystem.
        </p>
        <p>
          Monthly DEX volume has grown to 20% of CEX volume, up from just 10% in 2024. In Q2, CEXs recorded $3.9 trillion in spot trading volume, a decrease of 27.7% QoQ, while DEX trading volume rose to $876.3 billion, an increase of 25.3% over the same period. [<a href="https://www.coingecko.com/research/publications/2025-q2-crypto-report" className="underline">Source</a>]
        </p>
        <p>This represents both a major challenge and opportunity for Coinbase.</p>
      </ContentSection>

      {/* Coverage Section */}
      <ContentSection label="Coverage" className="space-y-8">
        <h2 className="text-[45px] leading-[1.2] text-[#26272b]">
          Coverage for millions of tokens across dozens of chains
        </h2>
        <div className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
          <p>
            In an effort to capture this activity and bridge the gap with DeFi, Coinbase launched its Wallet in 2021. A core component of the Coinbase Wallet is DEX swaps. Coinbase chose 0x to power this critical functionality as part of their expansion onchain.
          </p>
          <p>
            However, millions of users still trade directly from the Coinbase App, and Coinbase aimed to bridge that gap by giving users the ability to interact directly with tokens on DEXs without moving funds off-platform.
          </p>
        </div>

        {/* Coverage Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Expand coverage and provide instant access</h3>
                <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
                  Reviewing and adding new tokens for listing on Coinbase&apos;s platform is a slow and time consuming process. DEX trading provided an opportunity to give users access to millions of new assets directly onchain within moments of being indexed onchain, helping keep users on platform and capture onchain trading activity.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">One unified experience:</h3>
                <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
                  DEX trading on Coinbase offered the opportunity to provide a simple yet powerful gateway to onchain markets by abstracting away the complexities of navigating decentralized protocols. Users need to be able to fund trades seamlessly with their Coinbase balance or USDC, track performance, and manage their portfolio — all within one unified interface.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Transparent and safe trading</h3>
                <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
                  With millions of new tokens has come new and more sophisticated exploits that target users. Trading long-tail tokens on DEXs presents risks for users. Coinbase could offer a safer, more transparent trading experience by surfacing key market data and risks insights pulled directly from onchain data, differentiating them from many onchain venues.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">More networks, more assets, and more markets</h3>
                <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
                  DEX trading would enable Coinbase to rapidly expand to support new chains, while at the same time bring DEX trading to more countries and expand access to the global community.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#f4f4f5] p-8 text-center">
            <p className="font-medium text-[#5d5d5d]">
              [TOKEN GRAPHIC: TOPLINE MONTHLY TOKENS ISSUED # WITH LOTS OF TOKENS AROUND IT]
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div></div>
            <div className="space-y-4 text-[#1d1d1d] md:col-span-2">
              <p>
                These assets are spread across dozens of chains and can be traded on hundreds of different decentralized
                exchanges.
              </p>
              <p>
                With this explosion of tokens has come the rise in decentralized exchanges (DEXs), with users and
                activity moving onchain and away from centralized venues. Starting at $666 million in January 2020,
                monthly trading volume on decentralized exchanges has exploded to $500 billion. DEXs have now settled
                more than $4 trillion in onchain transactions.{" "}
                <a href="#" className="underline">
                  [Source]
                </a>
              </p>
            </div>
          </div>

          <div className="bg-[#f4f4f5] p-8 text-center">
            <p className="font-medium text-[#5d5d5d]">
              [LINE CHART: MONTHLY DEX VOLUME, STARTING IN JULY 2020 - DATA{" "}
              <a href="#" className="underline">
                HERE
              </a>
              ]
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div></div>
            <div className="space-y-4 text-[#1d1d1d] md:col-span-2">
              <p>
                The vast majority of tokens are not available on centralized exchanges, where due to regulatory
                compliance, CEX token offerings require complicated and lengthy listing processes. This model has kept
                Coinbase from matching the speed of onchain trading, where new tokens can come and go in a matter of
                hours. By the time tokens have been approved for listing, they are often already irrelevant.
              </p>
            </div>
          </div>

          <div className="bg-[#f4f4f5] p-8 text-center">
            <p className="font-medium text-[#0052ff]">
              [LINE CHART: DEX TO CEX SPOT TRADE VOLUME, STARTING IN JULY 2023 - DATA{" "}
              <a href="#" className="underline">
                HERE
              </a>
              ]
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div></div>
            <div className="space-y-4 text-[#1d1d1d] md:col-span-2">
              <p>
                As a result, crypto traders are increasingly turning to DEX platforms for their trading, with users
                leaving Coinbase's trading platform in search of trending tokens elsewhere in the onchain ecosystem.
              </p>
              <p>
                Monthly DEX volume has grown to 20% of CEX volume, up from just 10% in 2024. In Q2, CEXs recorded $3.9
                trillion in spot trading volume, a decrease of 27.7% QoQ, while DEX trading volume rose to $876.3
                billion, an increase of 25.3% over the same period.{" "}
                <a href="#" className="underline">
                  [Source]
                </a>
              </p>
              <p>This represents both a major challenge and opportunity for Coinbase.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Execution Section */}
      <ContentSection label="Execution" className="space-y-8">
        <div className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
          <p>
            At the same time, Coinbase has come to be known for the power of its trading experience. Historically, trade execution in DeFi has never been able to match the power and quality of tooling that is commonplace on CeFi exchanges and prime brokers.
          </p>
          <p>
            In order to both retain and bring new DEX users on-platform, Coinbase required the ability to deliver reliable, high-quality DEX execution for millions of tokens.
          </p>
          <p>
            Delivering the best trade execution in DeFi is a multi-faceted challenge that demands a number of sophisticated capabilities, including inspecting onchain liquidity conditions for slippage and price impact, controlling execution costs such as gas fees, and bundling it all up for execution that is reliable and fast. To solve this challenge requires deep expertise in DEX routing and aggregation.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[45px] leading-[1.2] text-[#26272b]">The challenges of DEX execution:</h3>
          <div className="space-y-0">
            <div className="flex items-start gap-4 border-b border-[#f2f2f2] py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
              <div className="flex-1">
                <h4 className="mb-2 text-[30px] leading-[1.2] text-black">&quot;All-in&quot; prices</h4>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-[#f2f2f2] py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
              <div className="flex-1">
                <h4 className="mb-2 text-[30px] leading-[1.2] text-black">Deep liquidity</h4>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-[#f2f2f2] py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
              <div className="flex-1">
                <h4 className="mb-2 text-[30px] leading-[1.2] text-black">Advanced routing</h4>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-[#f2f2f2] py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
              <div className="flex-1">
                <h4 className="mb-2 text-[30px] leading-[1.2] text-black">Reliability</h4>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-[#f2f2f2] py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0052ff]"></div>
              <div className="flex-1">
                <h4 className="mb-2 text-[30px] leading-[1.2] text-black">Latency</h4>
                <p className="text-[24px] leading-[1.3] text-[#aaaaaa]">
                  DEX trading can be slow, requiring routing through hundreds of different pools and sources. Swaps need to be lightning fast for users, with very quick latency across a number of chains that have different architectures, block times, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* The Solution Section */}
      <ContentSection label="The Solution" className="space-y-8">
        <h2 className="text-[45px] leading-[1.2] text-[#26272b]">
          Coinbase&apos;s drive to deliver best-in-class swaps with the widest token coverage led them to 0x.
        </h2>
        <div className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
          <p>
            Having been strategic partners since 2021, the Coinbase team trusted 0x&apos;s reliable, battle-tested DEX API infrastructure. Secure contracts, time-in-market, a professional and responsive team, and market-leading DEX execution were all important factors in the Coinbase team&apos;s decision to have 0x help power their DEX trading.
          </p>
          <p>
            0x empowers hundreds of developers with essential Web3 tools to enable faster trading, better prices, and superior UX. Our suite of APIs has processed over 60 million transactions and $154 billion in volume from more than 9 million users.
          </p>
        </div>
      </ContentSection>

      {/* Wide Token Coverage Section */}
      <ContentSection className="space-y-12">
        <h2 className="text-[45px] leading-[1.2] text-[#26272b]">Wide token coverage for users</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">16 EVM networks</h3>
                <p className="mb-6 text-[30px] leading-[1.2] text-[#5e5e5e]">
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

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Millions of tokens</h3>
                <p className="mb-6 text-[30px] leading-[1.2] text-[#5e5e5e]">
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

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Exclusive RFQ liquidity</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  Top-tier liquidity from sophisticated market makers. 0x RFQ outperforms AMMs on price 46% of the time where available.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div className="flex-1">
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Buy/sell tax token support</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  Real-time buy/sell tax detection and intelligent trade routing, minimizing error rates and enhancing the swap experience for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Advanced DEX Routing Section */}
      <ContentSection label="Advanced DEX routing">
        <div className="rounded-[15px] bg-[#f2f2f2] p-12">
          <p className="text-center text-[30px] leading-[1.2] text-black">SANKEY</p>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-64 w-full rounded-lg bg-white/50"></div>
          </div>
        </div>
      </ContentSection>

      {/* Institutional-grade Infrastructure Section */}
      <ContentSection label="Institutional-grade infrastructure">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Reliability</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  Placeholder text. Access to tokens on the largest chains, including Base, BNB Chain, Ethereum, and many more.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Latency</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  Placeholder text. Support for 20M+ tokens with unrivaled liquidity from 130+ exchanges.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Serious security</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  0x v2&apos;s new smart contracts are fully audited, with <a href="https://go.0x.org/0x-v2-audits" className="underline">four audits</a> from three separate firms, including Ourovoros, Trail of Bits, OpenZeppelin, and Trail of Bits a second time. 0x also leverages Dedaub&apos;s industry-leading security suite to continuously analyze our contracts as we develop them.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[15px] bg-neutral-100 p-8">
            <div className="mb-4 flex items-start gap-3">
              <span className="mt-1.5 inline-block h-5 w-5 rounded-sm bg-[#0052ff]"></span>
              <div>
                <h3 className="mb-4 text-[30px] leading-[1.2] text-black">Low error rates</h3>
                <p className="text-[30px] leading-[1.2] text-[#5e5e5e]">
                  Reliable quotes with accurate gas estimates, every time with Smart Validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* The Results Section */}
      <ContentSection label="The Results" className="space-y-8">
        <div className="rounded-[15px] bg-neutral-100 p-12">
          <p className="mb-8 text-center text-[22px] text-[#5e5e5e]">
            APP UI, with a before and after (showing available DEX tokens)
          </p>
          <div className="flex items-center justify-center">
            <div className="h-64 w-full max-w-2xl rounded-lg bg-white/50"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[42px] bg-zinc-100 px-8 py-12 text-center">
            <p className="mb-2 text-[76px] font-thin leading-none text-[#26272b]">20M+</p>
            <p className="text-[24px] leading-[1.4] text-[#70707b]">tokens supported</p>
          </div>
          <div className="rounded-[42px] bg-zinc-100 px-8 py-12 text-center">
            <p className="mb-2 text-[76px] font-thin leading-none text-[#26272b]">99%</p>
            <p className="text-[24px] leading-[1.4] text-[#70707b]">uptime</p>
          </div>
          <div className="rounded-[42px] bg-zinc-100 px-8 py-12 text-center">
            <p className="mb-2 text-[76px] font-thin leading-none text-[#26272b]">&lt;500ms</p>
            <p className="text-[24px] leading-[1.4] text-[#70707b]">median response time</p>
          </div>
        </div>

        <div className="rounded-[42px] bg-zinc-100 px-8 py-12 text-center">
          <p className="mb-2 text-[76px] font-thin leading-none text-[#26272b]">$B</p>
          <p className="text-[24px] leading-[1.4] text-[#70707b]">in trading volume</p>
        </div>

        <div className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
          <p>
            With DEX trading directly in-app, new assets become available to trade within moments of creation, helping Coinbase both retain users and tap into the growing onchain economy. And issuers no longer have to wait days, weeks or months for a traditional listing to get access to Coinbase&apos;s distribution.
          </p>
          <p>
            With DEX trading powered by 0x, Coinbase has unlocked a new era of access, going from just 300 assets to millions with just one integration, all tradable through the simple and familiar interface Coinbase users have come to trust. As a result, in Q4, Coinbase saw a 24% increase in total trading volume.
          </p>
          <p>
            DEX trading reinforces Coinbase&apos;s commitment to support the fast-evolving needs of the crypto trading community - moving Coinbase closer to its vision of becoming an &quot;everything&quot; app for crypto.
          </p>
        </div>
      </ContentSection>

      {/* Navigation Cards */}
      <NavigationCards />

      {/* Footer */}
      <Footer className="-mt-8" />
    </div>
  )
}
