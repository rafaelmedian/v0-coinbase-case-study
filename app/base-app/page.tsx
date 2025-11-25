import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"

export default function BaseAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="base-app" />

      <PageHero
        title="Base App"
        quote="Insert quote placeholder text here about Base App Insert quote placeholder text here"
        bgColor="#0052ff"
        textColor="#ffffff"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <div className="h-8 w-8 bg-[#0052ff]"></div>
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
