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
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mt-12 space-y-12">
          <hr className="border-t border-[#1d1d1d]/20" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-8 bg-[#0052ff]"></div>
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
                <div className="h-1 w-8 bg-[#0052ff]"></div>
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
        </div>
      </main>
    </div>
  )
}
