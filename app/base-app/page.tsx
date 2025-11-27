import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import { ContentSection } from "@/components/ui/content-section"

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

      {/* Introduction Section */}
      <ContentSection label="Introduction" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>Base App content goes here with relevant information about the Base App platform and its features.</p>
        <p>
          Additional information about Base App capabilities and how it integrates with the Coinbase ecosystem.
        </p>
      </ContentSection>

      {/* The Challenge Section */}
      <ContentSection label="The Challenge" className="space-y-6 text-[#5e5e5e] text-[22px] leading-[1.3]">
        <p>Description of the challenges that Base App addresses in the cryptocurrency ecosystem.</p>
      </ContentSection>
    </div>
  )
}
