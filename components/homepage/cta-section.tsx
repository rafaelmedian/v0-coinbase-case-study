import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-[#18181b] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden h-[641px] relative">
      <div className="absolute left-[96px] top-[224px] flex flex-col gap-6 text-center text-white">
        <h2 className="text-[44px] leading-[1.2] w-[1273px]">
          Put your app onchain
        </h2>
        <p className="text-[22px] leading-[1.35] w-[1273px]">
          Join Coinbase and hundreds of other apps using 0x to power enterprise-grade token swaps.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        href="/start-building"
        className="absolute left-1/2 -translate-x-1/2 top-[379px] h-14 w-[216px] flex items-center justify-between px-4 py-[13px] bg-white/10 rounded-[16px] hover:bg-white/20 transition-colors"
      >
        <span className="text-[17.5px] leading-[1.2] text-white">
          Contact Sales
        </span>
        <svg className="w-6 h-6 rotate-90" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </section>
  )
}
