export function PartnerSection() {
  return (
    <section className="bg-[#fafafa] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden py-[76px] px-[132px]">
      <div className="flex gap-2">
        {/* Left - Placeholder */}
        <div className="w-[527px] h-[296px] overflow-hidden shrink-0">
          <div className="w-[296px] h-[296px]" />
        </div>

        {/* Right - Content */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-[44px] leading-[1.2] text-[#161719]">
            As a key strategic partner for your onchain app
          </h2>

          {/* Stacked Cards */}
          <div className="flex flex-col py-4 overflow-hidden">
            <div className="flex flex-col pb-8 relative">
              {/* Front card - Dark */}
              <div className="relative z-[3] bg-[#252629] rounded-[8px] px-10 py-8 flex gap-6 -mb-8">
                <div className="shrink-0 w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-4 text-[22px]">
                  <p className="leading-[1.35] text-[#f3f3f1] w-[441px]">
                    Deep DEX liquidity coverage
                  </p>
                  <ul className="list-disc ml-8 text-[rgba(243,243,241,0.69)] leading-[1.35]">
                    <li>16+ networks and liquidity from 180+ exchanges, covering 20M+ tokens.</li>
                    <li>Exclusive 0x RFQ liquidity from leading market makers</li>
                    <li>Buy/sell tax token support and Gasless API</li>
                  </ul>
                </div>
              </div>

              {/* Middle card - Red/Orange */}
              <div className="relative z-[2] bg-[#f18f7d] rounded-[8px] h-[96px] px-10 py-8 -mb-8">
                <div className="w-8 h-8" />
              </div>

              {/* Back card - Brown */}
              <div className="relative z-[1] bg-[#9d7225] rounded-[8px] h-[96px] px-10 py-8 -mb-8">
                <div className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
