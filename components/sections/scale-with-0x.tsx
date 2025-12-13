import Link from "next/link"
import { ContentSection } from "@/components/ui/content-section"
import { TimelineGraphic } from "@/components/timeline-graphic"

export function ScaleWith0x() {
  return (
    <ContentSection label="SCALE WITH 0X" showBorder>
      <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-[1.5] mb-12 max-w-[800px]">
        0x delivered all the above and more, across the Coinbase product stack. As a key strategic partner for your onchain app, 0x will give you an edge:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Card 1 */}
        <div className="bg-[#f9fafb] p-8 rounded-[24px] border border-[var(--border-subtle)] hover:border-[var(--color-brand)]/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[var(--color-brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-[var(--text-xl)] font-medium text-[var(--text-primary)] mb-4">Deep DEX liquidity coverage</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>16+ networks and liquidity from 180+ exchanges, covering 20M+ tokens</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Exclusive 0x RFQ liquidity from leading market makers</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Buy/sell tax token support and Gasless API</span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f9fafb] p-8 rounded-[24px] border border-[var(--border-subtle)] hover:border-[var(--color-brand)]/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[var(--color-brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-[var(--text-xl)] font-medium text-[var(--text-primary)] mb-4">Advanced routing & execution</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Optimizes for all-in price (price + gas + slippage + taxes)</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Smart multi-hop, multi-plex routing unifies fragmented liquidity</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Reliable quotes and accurate gas estimates</span>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f9fafb] p-8 rounded-[24px] border border-[var(--border-subtle)] hover:border-[var(--color-brand)]/50 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[var(--color-brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-[var(--text-xl)] font-medium text-[var(--text-primary)] mb-4">Institutional-grade infrastructure</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Compliance: SOC2, smart contract audits</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Low latency, low error rates</span>
            </li>
            <li className="flex gap-3 text-[var(--text-base)] text-[var(--text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0" />
              <span>Dedicated support</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-[var(--text-base)] text-[var(--text-secondary)] leading-[1.5] mb-12">
        Explore our <Link href="https://0x.org/docs" target="_blank" className="underline hover:text-[var(--text-primary)]">Documentation</Link> or <Link href="/start-building" className="underline hover:text-[var(--text-primary)]">Book a Call</Link> now.
      </p>
      
      <TimelineGraphic />
    </ContentSection>
  )
}
