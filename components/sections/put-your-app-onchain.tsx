import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContentSection } from "@/components/ui/content-section"

export function PutYourAppOnchain() {
  const benefits = [
    "reduce user churn with direct access to the tokens they need",
    "plug in to cutting-edge infrastructure in hours without overheads",
    "scale quickly across apps and partners",
    "capture new token models and ecosystems as they emerge"
  ]

  return (
    <div className="bg-[#F2F2F2]">
      <ContentSection label="PUT YOUR APP ONCHAIN" variant="stacked" showBorder={false}>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          <div className="flex-1">
            <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-[1.5] mb-10">
              No matter what you&apos;re building onchain, sooner or later you&apos;ll need to handle tokens. Give your products the right foundation and build on top of 0x. As we&apos;ve seen with Coinbase, you can:
            </p>
          </div>
          
          <div className="flex-1">
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-lg)] text-[var(--text-primary)]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
