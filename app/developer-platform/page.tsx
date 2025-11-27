import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"

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

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>Developer Platform content goes here with relevant information about developer tools and APIs.</p>
        <p>
          Additional information about how developers can leverage the platform to build onchain applications.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>Description of the challenges developers face and how the Developer Platform addresses them.</p>
      </ContentSection>
    </div>
  )
}
