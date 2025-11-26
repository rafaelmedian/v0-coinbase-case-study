import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"

export default function DeveloperPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="developer-platform" />

      {/* Hero Card */}
      <PageHero
        title="Developer Platform"
        quote="Insert quote placeholder text here about Developer Platform Insert quote placeholder text here"
        bgColor="#1d1d1d"
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
              <p>Developer Platform content goes here with relevant information about developer tools and APIs.</p>
              <p>
                Additional information about how developers can leverage the platform to build onchain applications.
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
              <p>Description of the challenges developers face and how the Developer Platform addresses them.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
