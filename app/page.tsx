"use client"

import Navigation from "@/components/navigation"
import { Footer } from "@/components/ui/footer"
import {
  HeroSection,
  SidebarNav,
  AboutCoinbaseSection,
  DeveloperNetworkSection,
  UsersOnchainSection,
  DexVolumeSection,
  ThreeWaysSection,
  PartnerSection,
  CTASection,
  EmailSignupSection,
} from "@/components/homepage"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export default function HomePage() {
  const sectionIds = ["about", "fast", "shift", "opportunity", "why-0x", "partner", "cta"]
  const activeSection = useScrollSpy(sectionIds, { offset: 150 })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Full Width */}
      <HeroSection />

      {/* Content wrapper - TOC positioned relative to this */}
      <div className="relative">
        {/* TOC Sidebar - positioned relative to content wrapper */}
        <div className="hidden lg:block">
          <SidebarNav activeSection={activeSection} />
        </div>

        {/* Main Content */}
        <main>
          {/* About Coinbase */}
          <AboutCoinbaseSection />

          {/* Developer Network - Dark Section with Stats */}
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

          {/* Email Signup Section */}
          <EmailSignupSection />
        </main>
      </div>

      <Footer />
    </div>
  )
}
