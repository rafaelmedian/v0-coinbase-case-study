import Navigation from "@/components/navigation"
import { Footer } from "@/components/ui/footer"
import {
  HeroSection,
  SidebarNav,
  BestOfBothSection,
  DeveloperNetworkSection,
  UsersOnchainSection,
  DexVolumeSection,
  ThreeWaysSection,
  PartnerSection,
  CTASection,
} from "@/components/homepage"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Full Width */}
      <HeroSection />

      {/* Main Content with Sidebar */}
      <div className="relative">
        {/* Sticky Sidebar - positioned absolutely on left */}
        <div className="hidden lg:block absolute left-[48px] top-0 w-[calc(33.33%-87px)] h-full pointer-events-none">
          <div className="pointer-events-auto">
            <SidebarNav />
          </div>
        </div>

        {/* Content Sections */}
        <main>
          {/* The best of both worlds */}
          <BestOfBothSection />

          {/* Developer Network - Dark Section */}
          <DeveloperNetworkSection />

          {/* Users are moving onchain */}
          <UsersOnchainSection />

          {/* DEX Volume Section */}
          <DexVolumeSection />

          {/* Three Ways Section */}
          <ThreeWaysSection />

          {/* Partner Section */}
          <PartnerSection />

          {/* CTA Section */}
          <CTASection />
        </main>
      </div>

      <Footer />
    </div>
  )
}
