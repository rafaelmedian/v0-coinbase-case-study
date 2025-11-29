import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionHeader } from "@/components/ui/section-header"
import { FeatureCard } from "@/components/ui/feature-card"
import { StatCard } from "@/components/ui/stat-card"
import { ChallengeItem } from "@/components/ui/challenge-item"
import { Footer } from "@/components/ui/footer"
import PageHero from "@/components/page-hero"

// Color palette data
const colors = {
  primary: [
    { name: "Coinbase Blue", value: "#0052ff", textColor: "white" },
  ],
  dark: [
    { name: "Dark 1", value: "#1d1d1d", textColor: "white" },
    { name: "Dark 2", value: "#26272b", textColor: "white" },
    { name: "Zinc 900", value: "#18181b", textColor: "white" },
  ],
  grays: [
    { name: "Gray 1", value: "#5d5d5d", textColor: "white" },
    { name: "Gray 2", value: "#5e5e5e", textColor: "white" },
    { name: "Gray 3", value: "#898e99", textColor: "white" },
    { name: "Gray 4", value: "#aaaaaa", textColor: "black" },
    { name: "Gray 5", value: "#70707b", textColor: "white" },
  ],
  backgrounds: [
    { name: "Hero Blue", value: "#c8d4fa", textColor: "black" },
    { name: "Neutral 100", value: "#f4f4f5", textColor: "black" },
    { name: "Light Gray", value: "#f2f2f2", textColor: "black" },
    { name: "White", value: "#ffffff", textColor: "black", border: true },
  ],
}

// Font family data
const fonts = [
  { name: "PolySans Slim", weight: "100", cssWeight: "font-thin", description: "Used for large stat numbers and display text" },
  { name: "PolySans Neutral", weight: "400", cssWeight: "font-normal", description: "Primary font for body text and headings" },
  { name: "PolySans Median", weight: "600", cssWeight: "font-semibold", description: "Used for emphasis and buttons" },
]

// Typography scale data
const typography = [
  { size: "140px", weight: "font-normal", name: "Hero Stats", example: "$XB", description: "PageHero stat values" },
  { size: "76px", weight: "font-thin", name: "Stat Card Numbers", example: "20M+", description: "StatCard component values" },
  { size: "64px", weight: "font-normal", name: "H1 / Hero Quote", example: "Hero Quote", description: "Main page headings, PageHero quote" },
  { size: "48px", weight: "font-normal", name: "H2 / Page Title", example: "Page Title", description: "PageHero title, section titles" },
  { size: "45px", weight: "font-normal", name: "Section Headings", example: "Section Heading", description: "Large section headings" },
  { size: "36px", weight: "font-normal", name: "H3", example: "Heading 3", description: "Tertiary headings" },
  { size: "30px", weight: "font-normal", name: "H4 / Card Headings", example: "Card Heading", description: "FeatureCard titles, list items" },
  { size: "24px", weight: "font-normal", name: "H5 / Labels", example: "SECTION LABEL", description: "Uppercase section labels" },
  { size: "22px", weight: "font-normal", name: "Body / Paragraphs", example: "Body text for paragraphs and descriptions", description: "Primary body copy" },
  { size: "18px", weight: "font-medium", name: "H6 / Navigation", example: "NAVIGATION ITEM", description: "Navigation links, small headings" },
  { size: "14px", weight: "font-normal", name: "Small / Captions", example: "Small text and captions", description: "Labels, captions, metadata" },
]

// Spacing scale
const spacing = [4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="border-b border-[#f2f2f2] bg-[#f4f4f5] px-6 py-16 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="mb-4 text-[64px] font-thin leading-none text-[#26272b]">Styleguide</h1>
          <p className="text-[22px] leading-[1.3] text-[#5e5e5e]">
            Design system documentation for the 0x + Coinbase case study
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="space-y-24">

          {/* ==================== COLORS ==================== */}
          <section>
            <SectionHeader label="Colors" className="mb-8" />
            
            <div className="space-y-12">
              {/* Primary */}
              <div>
                <h3 className="mb-4 text-[24px] font-medium text-[#26272b]">Primary</h3>
                <div className="flex flex-wrap gap-4">
                  {colors.primary.map((color) => (
                    <div key={color.value} className="w-48">
                      <div
                        className="mb-2 h-24 rounded-lg"
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-sm font-medium text-[#26272b]">{color.name}</p>
                      <p className="text-sm text-[#5e5e5e]">{color.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark */}
              <div>
                <h3 className="mb-4 text-[24px] font-medium text-[#26272b]">Dark</h3>
                <div className="flex flex-wrap gap-4">
                  {colors.dark.map((color) => (
                    <div key={color.value} className="w-48">
                      <div
                        className="mb-2 h-24 rounded-lg"
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-sm font-medium text-[#26272b]">{color.name}</p>
                      <p className="text-sm text-[#5e5e5e]">{color.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grays */}
              <div>
                <h3 className="mb-4 text-[24px] font-medium text-[#26272b]">Grays</h3>
                <div className="flex flex-wrap gap-4">
                  {colors.grays.map((color) => (
                    <div key={color.value} className="w-48">
                      <div
                        className="mb-2 h-24 rounded-lg"
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-sm font-medium text-[#26272b]">{color.name}</p>
                      <p className="text-sm text-[#5e5e5e]">{color.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backgrounds */}
              <div>
                <h3 className="mb-4 text-[24px] font-medium text-[#26272b]">Backgrounds</h3>
                <div className="flex flex-wrap gap-4">
                  {colors.backgrounds.map((color) => (
                    <div key={color.value} className="w-48">
                      <div
                        className={`mb-2 h-24 rounded-lg ${color.border ? "border border-[#e5e5e5]" : ""}`}
                        style={{ backgroundColor: color.value }}
                      />
                      <p className="text-sm font-medium text-[#26272b]">{color.name}</p>
                      <p className="text-sm text-[#5e5e5e]">{color.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== FONTS ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Fonts" className="mb-8" />
            
            <div className="mb-8 rounded-lg bg-[#f4f4f5] p-6">
              <p className="text-[18px] text-[#5e5e5e]">
                <strong className="text-[#26272b]">PolySans</strong> is the primary font family used throughout the 0x brand.
                Place font files in <code className="rounded bg-[#26272b] px-2 py-1 text-sm text-white">/public/fonts/</code>
              </p>
            </div>

            <div className="space-y-6">
              {fonts.map((font) => (
                <div key={font.name} className="rounded-lg border border-[#f2f2f2] p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-[24px] font-medium text-[#26272b]">{font.name}</h3>
                      <p className="text-sm text-[#5e5e5e]">
                        Weight: {font.weight} • CSS: <code className="text-[#0052ff]">{font.cssWeight}</code>
                      </p>
                    </div>
                  </div>
                  <p className={`${font.cssWeight} mb-4 text-[48px] leading-none text-[#26272b]`}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <p className={`${font.cssWeight} text-[24px] text-[#5e5e5e]`}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                  </p>
                  <p className="mt-4 text-sm text-[#898e99]">{font.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== TYPOGRAPHY ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Typography Scale" className="mb-8" />
            
            <div className="space-y-8">
              {typography.map((item) => (
                <div key={item.size} className="border-b border-[#f2f2f2] pb-8">
                  <div className="mb-2 flex items-center gap-4">
                    <span className="rounded bg-[#0052ff] px-2 py-1 text-xs font-medium text-white">{item.size}</span>
                    <span className="text-sm font-medium text-[#26272b]">{item.name}</span>
                    <span className="text-sm text-[#898e99]">{item.weight}</span>
                  </div>
                  <p
                    className={`${item.weight} mb-2 text-[#26272b]`}
                    style={{ fontSize: item.size, lineHeight: 1.1 }}
                  >
                    {item.example}
                  </p>
                  <p className="text-sm text-[#5e5e5e]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== SPACING ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Spacing" className="mb-8" />
            
            <div className="flex flex-wrap items-end gap-4">
              {spacing.map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <div
                    className="bg-[#0052ff]"
                    style={{ width: size, height: size }}
                  />
                  <p className="mt-2 text-sm text-[#5e5e5e]">{size}px</p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== COMPONENTS ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Components" className="mb-12" />
            
            <div className="space-y-20">

              {/* Button Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Button</h3>
                <div className="space-y-8">
                  <div>
                    <p className="mb-4 text-sm font-medium uppercase text-[#898e99]">Variants</p>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 text-sm font-medium uppercase text-[#898e99]">Sizes</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 text-sm font-medium uppercase text-[#898e99]">Custom Style (Navigation)</p>
                    <Button
                      variant="outline"
                      className="border bg-transparent text-sm font-medium"
                      style={{ borderColor: "#1d1d1d", color: "#1d1d1d" }}
                    >
                      START BUILDING
                    </Button>
                  </div>
                </div>
              </div>

              {/* Input Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Input</h3>
                <div className="max-w-md space-y-4">
                  <Input placeholder="Default input" />
                  <Input placeholder="Disabled input" disabled />
                </div>
              </div>

              {/* Section Header Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Section Header</h3>
                <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
                  Blue square indicator with uppercase label for section navigation.
                </p>
                <div className="space-y-4 rounded-lg bg-[#f4f4f5] p-8">
                  <SectionHeader label="Introduction" />
                  <SectionHeader label="The Challenge" />
                  <SectionHeader label="The Solution" />
                </div>
              </div>

              {/* Feature Card Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Feature Card</h3>
                <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
                  Gray rounded card with blue indicator, title, and description.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FeatureCard
                    title="16 EVM networks"
                    description="Access to tokens on the largest chains, including Base, BNB Chain, Ethereum, and many more."
                  />
                  <FeatureCard
                    title="Millions of tokens"
                    description="Support for 20M+ tokens with unrivaled liquidity from 130+ exchanges."
                  />
                </div>
              </div>

              {/* Stat Card Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Stat Card</h3>
                <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
                  Large rounded pill displaying a stat with label.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <StatCard value="20M+" label="tokens supported" />
                  <StatCard value="99%" label="uptime" />
                  <StatCard value="<500ms" label="median response time" />
                </div>
              </div>

              {/* Challenge Item Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Challenge Item</h3>
                <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
                  List item with blue circle indicator for feature lists.
                </p>
                <div className="max-w-2xl rounded-lg bg-[#f4f4f5] p-8">
                  <ChallengeItem title="&quot;All-in&quot; prices" />
                  <ChallengeItem title="Deep liquidity" />
                  <ChallengeItem title="Advanced routing" />
                  <ChallengeItem 
                    title="Latency" 
                    description="DEX trading can be slow, requiring routing through hundreds of different pools and sources."
                  />
                </div>
              </div>

              {/* Page Hero Component */}
              <div>
                <h3 className="mb-6 text-[30px] leading-[1.2] text-[#26272b]">Page Hero</h3>
                <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
                  Hero section with title, quote, icon, and stats.
                </p>
                <div className="overflow-hidden rounded-lg">
                  <PageHero
                    title="DEX Trading"
                    quote="Insert quote placeholder text here about Coinbase Dex trading"
                    bgColor="#c8d4fa"
                    textColor="#1d1d1d"
                    icon={
                      <div className="flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#0052ff]">
                        <div className="h-10 w-10 rounded-full border-4 border-white"></div>
                      </div>
                    }
                    stats={[
                      { value: "$XB", label: "in onchain volume" },
                      { value: "Xm", label: "total transactions" },
                    ]}
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ==================== FOOTER COMPONENT ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Footer" className="mb-8" />
            <p className="mb-4 text-[22px] leading-[1.3] text-[#5e5e5e]">
              Dark footer with newsletter signup section.
            </p>
          </section>

        </div>
      </main>

      {/* Footer Preview */}
      <Footer />
    </div>
  )
}

