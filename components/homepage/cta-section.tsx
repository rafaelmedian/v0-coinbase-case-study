import Link from "next/link"

export function CTASection() {
  return (
    <section id="cta" className="bg-[#18181b] py-[100px] scroll-mt-[80px]">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-[48px] leading-[1.1] text-white mb-6">
            Put your app onchain
          </h2>
          <p className="text-[20px] leading-[1.5] text-white/70 mb-10 max-w-[600px] mx-auto">
            Join Coinbase and hundreds of other apps using 0x to power enterprise-grade token swaps.
          </p>
          <Link
            href="/start-building"
            className="inline-flex items-center gap-3 h-14 px-8 bg-white/10 hover:bg-white/20 rounded-[16px] text-white text-[18px] font-medium transition-colors"
          >
            Contact Sales
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
