import Navigation from "@/components/navigation"
import { NavigationCards } from "@/components/ui/navigation-cards"
import { Footer } from "@/components/ui/footer"

export default function StartBuildingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-20">
        <div className="grid grid-cols-1 gap-[var(--grid-gap)] lg:grid-cols-4 lg:gap-[var(--grid-gap-lg)]">
          {/* Empty first column for alignment */}
          <div className="hidden lg:block" />
          {/* Content spans columns 2-4 */}
          <div className="lg:col-span-3">
            <h1 className="mb-16 text-5xl md:text-6xl font-normal leading-tight tracking-tight">
              <span style={{ color: "#1d1d1d" }}>Delivering end-to-end</span>
              <br />
              <span style={{ color: "#0052ff" }}>onchain swap infrastructure</span>
              <br />
              <span style={{ color: "#1d1d1d" }}>with Coinbase</span>
            </h1>

            {/* Sign up form placeholder */}
            <div className="mb-20 flex h-48 max-w-4xl items-center justify-center" style={{ backgroundColor: "#d9d9d9" }}>
              <p className="text-3xl" style={{ color: "#ffffff" }}>
                Sign up form
              </p>
            </div>

            {/* Two column cards */}
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {/* Left Card - Build onchain */}
              <div className="flex min-h-[340px] flex-col justify-between p-10" style={{ backgroundColor: "#c8d4fa" }}>
                <h2 className="text-4xl font-normal" style={{ color: "#1d1d1d" }}>
                  Build onchain
                </h2>
                <p className="text-base" style={{ color: "#5d5d5d" }}>
                  Powering onchain trades across XXm users
                </p>
              </div>

              {/* Right Card - Onchain tools */}
              <div className="flex min-h-[340px] flex-col justify-between p-10" style={{ backgroundColor: "#0052ff" }}>
                <h2 className="text-4xl font-normal" style={{ color: "#ffffff" }}>
                  Onchain tools
                </h2>
                <p className="text-base" style={{ color: "#c8d4fa" }}>
                  Powering onchain trades across XXm users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <NavigationCards />

      {/* Footer */}
      <Footer className="-mt-8" />
    </div>
  )
}
