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

// Responsive Typography Data
const displaySizes = {
  large: {
    label: "1440 Large Display",
    description: "Screen widths 1024px and wider",
    breakpoint: "≥1024px",
    headings: [
      { level: "H1", size: "5.25rem", px: "84px", lineHeight: "120%", letterSpacing: "-4%" },
      { level: "H2", size: "4.125rem", px: "66px" },
      { level: "H3", size: "2.75rem", px: "44px" },
      { level: "H4", size: "2.125rem", px: "34px" },
    ]
  },
  regular: {
    label: "1024 Regular Display",
    description: "Screen widths 760px to 1023px",
    breakpoint: "760px–1023px",
    headings: [
      { level: "H1", size: "5.5rem", px: "88px", lineHeight: "120%", letterSpacing: "-4%" },
      { level: "H2", size: "3.8rem", px: "60.8px" },
      { level: "H3", size: "2.5rem", px: "40px" },
      { level: "H4", size: "2rem", px: "32px" },
    ]
  },
  mobile: {
    label: "760 Mobile Display",
    description: "Screen widths less than 760px",
    breakpoint: "<760px",
    headings: [
      { level: "H1", size: "2.5rem", px: "40px", lineHeight: "120%", letterSpacing: "-4%" },
      { level: "H2", size: "2.25rem", px: "36px" },
      { level: "H3", size: "1.7rem", px: "27.2px" },
    ]
  }
}

const bodySizes = {
  desktop: {
    label: "Display Body Sizes",
    description: "Screen widths 760px and larger",
    breakpoint: "≥760px",
    sizes: [
      { name: "Large", size: "1.375rem", px: "22px" },
      { name: "Text", size: "1.09rem", px: "17.44px" },
      { name: "Label", size: "0.85rem", px: "13.6px" },
    ]
  },
  mobile: {
    label: "Mobile Body Sizes",
    description: "Screen widths less than 760px",
    breakpoint: "<760px",
    sizes: [
      { name: "Large", size: "1.5rem", px: "24px" },
      { name: "Text", size: "1.25rem", px: "20px" },
      { name: "Label", size: "1rem", px: "16px" },
    ]
  }
}

// Spacing scale
const spacing = [4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="border-b border-[#f2f2f2] bg-[#f4f4f5] px-6 py-16 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="mb-4 font-normal leading-none text-[#26272b]">Styleguide</h1>
          <p className="body-large text-[#5e5e5e]">
            Design system documentation for the 0x + Coinbase case study
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="space-y-24">

          {/* ==================== TYPOGRAPHY SYSTEM ==================== */}
          <section>
            <SectionHeader label="Typography System" className="mb-8" />
            
            {/* Overview Box */}
            <div className="mb-12 rounded-lg bg-[#f4f4f5] p-6">
              <p className="body-text text-[#5e5e5e]">
                <strong className="text-[#26272b]">Responsive Typography</strong> — This design system uses CSS custom properties 
                that automatically adjust based on viewport width. Three breakpoints define the type scale: 
                <span className="mx-1 rounded bg-[#26272b] px-2 py-0.5 text-sm text-white">&lt;760px</span> (mobile),
                <span className="mx-1 rounded bg-[#26272b] px-2 py-0.5 text-sm text-white">760px–1023px</span> (regular), and
                <span className="mx-1 rounded bg-[#26272b] px-2 py-0.5 text-sm text-white">≥1024px</span> (large).
              </p>
            </div>

            {/* Display Headings Section */}
            <div className="mb-16">
              <h3 className="mb-8 text-[30px] font-medium text-[#26272b]">Display Headings</h3>
              
              <div className="space-y-12">
                {/* Large Display */}
                <div className="rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <div className="bg-[#f4f4f5] px-6 py-4 border-b border-[#e5e5e5]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[20px] font-medium text-[#26272b]">{displaySizes.large.label}</h4>
                        <p className="text-sm text-[#5e5e5e]">{displaySizes.large.description}</p>
                      </div>
                      <span className="rounded-full bg-[#0052ff] px-3 py-1 text-sm font-medium text-white">
                        {displaySizes.large.breakpoint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-[80px_1fr_120px] gap-4 items-center border-b border-[#f2f2f2] pb-2 mb-4">
                      <span className="text-sm font-medium text-[#898e99]">Level</span>
                      <span className="text-sm font-medium text-[#898e99]">Preview</span>
                      <span className="text-sm font-medium text-[#898e99] text-right">Size</span>
                    </div>
                    {displaySizes.large.headings.map((h) => (
                      <div key={h.level} className="grid grid-cols-[80px_1fr_120px] gap-4 items-center py-4 border-b border-[#f2f2f2] last:border-0">
                        <span className="text-lg font-medium text-[#26272b]">{h.level}</span>
                        <span className="text-[#26272b] truncate" style={{ fontSize: h.size, lineHeight: 1 }}>
                          The industry
                        </span>
                        <span className="text-right">
                          <span className="block text-lg font-medium text-[#26272b]">{h.size}</span>
                          <span className="text-sm text-[#898e99]">{h.px}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regular Display */}
                <div className="rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <div className="bg-[#f4f4f5] px-6 py-4 border-b border-[#e5e5e5]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[20px] font-medium text-[#26272b]">{displaySizes.regular.label}</h4>
                        <p className="text-sm text-[#5e5e5e]">{displaySizes.regular.description}</p>
                      </div>
                      <span className="rounded-full bg-[#5e5e5e] px-3 py-1 text-sm font-medium text-white">
                        {displaySizes.regular.breakpoint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-[80px_1fr_120px] gap-4 items-center border-b border-[#f2f2f2] pb-2 mb-4">
                      <span className="text-sm font-medium text-[#898e99]">Level</span>
                      <span className="text-sm font-medium text-[#898e99]">Preview</span>
                      <span className="text-sm font-medium text-[#898e99] text-right">Size</span>
                    </div>
                    {displaySizes.regular.headings.map((h) => (
                      <div key={h.level} className="grid grid-cols-[80px_1fr_120px] gap-4 items-center py-4 border-b border-[#f2f2f2] last:border-0">
                        <span className="text-lg font-medium text-[#26272b]">{h.level}</span>
                        <span className="text-[#26272b] truncate" style={{ fontSize: h.size, lineHeight: 1 }}>
                          The industry
                        </span>
                        <span className="text-right">
                          <span className="block text-lg font-medium text-[#26272b]">{h.size}</span>
                          <span className="text-sm text-[#898e99]">{h.px}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Display */}
                <div className="rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <div className="bg-[#f4f4f5] px-6 py-4 border-b border-[#e5e5e5]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[20px] font-medium text-[#26272b]">{displaySizes.mobile.label}</h4>
                        <p className="text-sm text-[#5e5e5e]">{displaySizes.mobile.description}</p>
                      </div>
                      <span className="rounded-full bg-[#898e99] px-3 py-1 text-sm font-medium text-white">
                        {displaySizes.mobile.breakpoint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-[80px_1fr_120px] gap-4 items-center border-b border-[#f2f2f2] pb-2 mb-4">
                      <span className="text-sm font-medium text-[#898e99]">Level</span>
                      <span className="text-sm font-medium text-[#898e99]">Preview</span>
                      <span className="text-sm font-medium text-[#898e99] text-right">Size</span>
                    </div>
                    {displaySizes.mobile.headings.map((h) => (
                      <div key={h.level} className="grid grid-cols-[80px_1fr_120px] gap-4 items-center py-4 border-b border-[#f2f2f2] last:border-0">
                        <span className="text-lg font-medium text-[#26272b]">{h.level}</span>
                        <span className="text-[#26272b] truncate" style={{ fontSize: h.size, lineHeight: 1 }}>
                          The industry
                        </span>
                        <span className="text-right">
                          <span className="block text-lg font-medium text-[#26272b]">{h.size}</span>
                          <span className="text-sm text-[#898e99]">{h.px}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Body Text Section */}
            <div className="mb-16">
              <h3 className="mb-8 text-[30px] font-medium text-[#26272b]">Body Text</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Desktop Body */}
                <div className="rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <div className="bg-[#f4f4f5] px-6 py-4 border-b border-[#e5e5e5]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[18px] font-medium text-[#26272b]">{bodySizes.desktop.label}</h4>
                        <p className="text-sm text-[#5e5e5e]">{bodySizes.desktop.description}</p>
                      </div>
                      <span className="rounded-full bg-[#0052ff] px-3 py-1 text-xs font-medium text-white">
                        {bodySizes.desktop.breakpoint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {bodySizes.desktop.sizes.map((s) => (
                      <div key={s.name} className="flex items-center justify-between border-b border-[#f2f2f2] pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                          <span className="w-16 text-sm font-medium text-[#898e99]">{s.name}</span>
                          <span className="text-[#26272b]" style={{ fontSize: s.size }}>
                            New internet
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm font-medium text-[#26272b]">{s.size}</span>
                          <span className="text-xs text-[#898e99]">{s.px}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Body */}
                <div className="rounded-lg border border-[#e5e5e5] overflow-hidden">
                  <div className="bg-[#f4f4f5] px-6 py-4 border-b border-[#e5e5e5]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[18px] font-medium text-[#26272b]">{bodySizes.mobile.label}</h4>
                        <p className="text-sm text-[#5e5e5e]">{bodySizes.mobile.description}</p>
                      </div>
                      <span className="rounded-full bg-[#898e99] px-3 py-1 text-xs font-medium text-white">
                        {bodySizes.mobile.breakpoint}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {bodySizes.mobile.sizes.map((s) => (
                      <div key={s.name} className="flex items-center justify-between border-b border-[#f2f2f2] pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                          <span className="w-16 text-sm font-medium text-[#898e99]">{s.name}</span>
                          <span className="text-[#26272b]" style={{ fontSize: s.size }}>
                            New internet
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm font-medium text-[#26272b]">{s.size}</span>
                          <span className="text-xs text-[#898e99]">{s.px}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div>
              <h3 className="mb-8 text-[30px] font-medium text-[#26272b]">Live Preview</h3>
              <p className="mb-6 body-text text-[#5e5e5e]">
                Resize your browser to see these headings respond to the breakpoints.
              </p>
              
              <div className="rounded-lg border border-[#e5e5e5] p-8 space-y-8 bg-white">
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#0052ff] px-2 py-1 text-xs font-medium text-white">H1</span>
                  <h1 className="text-[#26272b]">The industry</h1>
                </div>
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#0052ff] px-2 py-1 text-xs font-medium text-white">H2</span>
                  <h2 className="text-[#26272b]">The industry</h2>
                </div>
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#0052ff] px-2 py-1 text-xs font-medium text-white">H3</span>
                  <h3 className="text-[#26272b]">The industry</h3>
                </div>
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#0052ff] px-2 py-1 text-xs font-medium text-white">H4</span>
                  <h4 className="text-[#26272b]">New internet</h4>
                </div>
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#5e5e5e] px-2 py-1 text-xs font-medium text-white">Large</span>
                  <p className="body-large text-[#26272b]">New internet</p>
                </div>
                <div className="border-b border-[#f2f2f2] pb-6">
                  <span className="mb-2 inline-block rounded bg-[#5e5e5e] px-2 py-1 text-xs font-medium text-white">Text</span>
                  <p className="body-text text-[#26272b]">New internet</p>
                </div>
                <div>
                  <span className="mb-2 inline-block rounded bg-[#5e5e5e] px-2 py-1 text-xs font-medium text-white">Label</span>
                  <p className="body-label text-[#26272b]">New internet</p>
                </div>
              </div>
            </div>

            {/* CSS Variables Reference */}
            <div className="mt-12">
              <h3 className="mb-6 text-[30px] font-medium text-[#26272b]">CSS Variables</h3>
              <div className="rounded-lg bg-[#26272b] p-6 overflow-x-auto">
                <pre className="text-sm text-white font-mono leading-relaxed">
{`/* Display Headings */
--h1-size     /* Mobile: 2.5rem | Regular: 5.5rem | Large: 5.25rem (84px) */
              /* line-height: 120%, letter-spacing: -4% */
--h2-size     /* Mobile: 2.25rem  | Regular: 3.8rem | Large: 4.125rem */
--h3-size     /* Mobile: 1.7rem   | Regular: 2.5rem | Large: 2.75rem */
--h4-size     /* Mobile: 1.5rem   | Regular: 2rem   | Large: 2.125rem */

/* Body Text */
--text-large  /* Mobile: 1.5rem   | Desktop: 1.375rem */
--text-body   /* Mobile: 1.25rem  | Desktop: 1.09rem */
--text-label  /* Mobile: 1rem     | Desktop: 0.85rem */

/* Utility Classes */
.display-h1, .display-h2, .display-h3, .display-h4
.body-large, .body-text, .body-label`}
                </pre>
              </div>
            </div>
          </section>

          {/* ==================== COLORS ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
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
              <p className="body-text text-[#5e5e5e]">
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
                <p className="mb-4 body-text text-[#5e5e5e]">
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
                <p className="mb-4 body-text text-[#5e5e5e]">
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
                <p className="mb-4 body-text text-[#5e5e5e]">
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
                <p className="mb-4 body-text text-[#5e5e5e]">
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
                <p className="mb-4 body-text text-[#5e5e5e]">
                  Hero section with title, headline, icon, and stats.
                </p>
                <div className="overflow-hidden rounded-lg border border-[#e5e5e5]">
                  <PageHero
                    title="DEX Trading"
                    headline="Insert headline placeholder text here about Coinbase DEX trading"
                    icon={
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0052ff]">
                        <div className="h-5 w-5 rounded-full border-2 border-white"></div>
                      </div>
                    }
                    stats={[
                      { value: "$XB", label: "in onchain volume" },
                      { value: "Xm", label: "total transactions" },
                      { value: "130+", label: "liquidity sources" },
                    ]}
                    quote={{
                      text: "Insert quote placeholder text here about Coinbase DEX trading experience.",
                      author: "Author Name",
                      role: "Role at Company"
                    }}
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ==================== FOOTER COMPONENT ==================== */}
          <section className="border-t border-[#f2f2f2] pt-16">
            <SectionHeader label="Footer" className="mb-8" />
            <p className="mb-4 body-text text-[#5e5e5e]">
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
