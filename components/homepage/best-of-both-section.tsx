export function BestOfBothSection() {
  return (
    <section id="about" className="bg-[#fafafa] rounded-tl-[32px] rounded-tr-[32px] py-[76px]">
      <div className="ml-[calc(41.67%+43px)] mr-[132px]">
        <div className="flex flex-col gap-8 max-w-[665px]">
          <h2 className="text-[44px] leading-[1.2] text-[#161719]">
            The best of both worlds
          </h2>
          <div className="text-[22px] leading-[1.35] text-[#252629]">
            <p className="mb-6">
              Coinbase uses <span className="font-bold">0</span>x to power DEX trading directly inside the main Coinbase App, giving users access to millions of tokens and deep onchain liquidity, while preserving a familiar, professional trading experience.
            </p>
            <p className="mb-6">
              <span className="font-bold">0</span>x delivers <span className="font-bold">fast, comprehensive coverage</span> of onchain markets from within your existing app,
            </p>
            <p>
              with <span className="font-bold">enterprise‑grade</span> execution and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
