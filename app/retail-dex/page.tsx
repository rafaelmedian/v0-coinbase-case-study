import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"

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

      {/* Content Sections */}
      <main className="px-6 py-12">
        <div className="mt-12 space-y-12">
          <hr className="border-t border-[#1d1d1d]/20" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2" style={{ backgroundColor: "#0052ff" }}></span>
                <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">INTRODUCTION</span>
              </div>
            </div>
            <div className="space-y-4 text-[#1d1d1d] md:col-span-2">
              <p>
                With over 120 million total users and 8.7 million monthly transacting users, Coinbase is one of the
                world's leading crypto exchanges.
              </p>
              <p>
                Through Coinbase's app, users can buy, store, and trade more than 300 different cryptocurrencies.
                Coinbase also offers additional services, including a fee-based plan with Coinbase One and professional
                asset trading with Coinbase Advanced, in total serving over 120 million users.
              </p>
            </div>
          </div>

          <hr className="border-t border-[#1d1d1d]/20" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2" style={{ backgroundColor: "#0052ff" }}></span>
                <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">THE CHALLENGE</span>
              </div>
            </div>
            <div className="text-[#1d1d1d] md:col-span-2">
              <p>
                As the crypto ecosystem has grown, millions of new assets are launching onchain every day as the barrier
                to entry for launching new tokens has been eliminated, creating a flourishing onchain token ecosystem.
              </p>
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
      </main>
    </div>
  )
}
