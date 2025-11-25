import Navigation from "@/components/navigation"

export default function BaseAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="base-app" />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero Card */}
        <div className="bg-[#0052ff] p-8 md:p-12 lg:p-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <div className="h-8 w-8 bg-[#0052ff]"></div>
            </div>
            <h1 className="text-4xl font-normal text-white md:text-5xl">Base App</h1>
          </div>

          <p className="mb-12 text-2xl italic leading-relaxed text-white md:text-3xl">
            "Insert quote placeholder text here about Base App Insert quote placeholder text here"
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="text-6xl font-bold text-white md:text-7xl">$XB</div>
              <div className="text-lg text-white/70">in onchain volume</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-white md:text-7xl">Xm</div>
              <div className="text-lg text-white/70">total transactions</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
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
              <p>Base App content goes here with relevant information about the Base App platform and its features.</p>
              <p>
                Additional information about Base App capabilities and how it integrates with the Coinbase ecosystem.
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
              <p>Description of the challenges that Base App addresses in the cryptocurrency ecosystem.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
