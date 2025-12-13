import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BookACall() {
  return (
    <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] bg-[#F2F2F2] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1200px] mx-auto bg-white p-12 lg:p-16 rounded-[32px] shadow-sm text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[var(--text-primary)] font-medium mb-6">
          Ready to build?
        </h2>
        <p className="text-[var(--text-xl)] text-[var(--text-secondary)] leading-[1.5] max-w-[800px] mx-auto mb-10">
          Make 0x your strategic partner and expand your market onchain, across millions of tokens, and with best-in-class execution.
        </p>
        <Link href="/start-building">
          <Button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white px-12 py-8 text-[1.5rem] rounded-xl font-medium tracking-tight shadow-xl shadow-brand/20 transition-all hover:scale-[1.02]">
            Book a call
          </Button>
        </Link>
      </div>
    </section>
  )
}
