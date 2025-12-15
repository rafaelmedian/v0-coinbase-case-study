import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-[80px] pb-[60px] px-6 md:px-[50px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Headline */}
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.1] text-center text-[#26272b] max-w-[900px] mx-auto mb-8">
          Delivering the end-to-end{" "}
          <span className="text-[#0052ff]">on-chain infra</span>
          {" "}running Coinbase.
        </h1>

        {/* Quote Box */}
        <div className="bg-[#f1f1f3] rounded-[20px] p-6 max-w-[520px] mx-auto mb-12">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-[18px] leading-[1.4] text-[#26272b] text-center">
              &ldquo;0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem, and is a core partner powering our onchain trading experience.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#0052ff] overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/coinbase-icon.svg"
                  alt="Coinbase"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-[14px] leading-[1.2] text-[#252629]/60">
                Coinbase Team
              </span>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[580px]">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="w-full h-full bg-white rounded-[40px] shadow-2xl border-[8px] border-gray-900 overflow-hidden relative">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-center">
        <div className="w-20 h-5 bg-black rounded-full" />
      </div>
      
      {/* App header */}
      <div className="absolute top-8 left-0 right-0 h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#1d1d1d" strokeWidth={2}>
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-medium text-sm text-gray-900">DEX Trading</span>
        <div className="w-8 h-8 rounded-full bg-gray-100" />
      </div>

      {/* Swap interface */}
      <div className="absolute top-[88px] left-0 right-0 bottom-20 bg-white p-4 space-y-3">
        {/* From token */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs text-gray-500 mb-2">From</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-medium text-gray-900">1,000</span>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 border border-gray-200">
              <div className="w-5 h-5 rounded-full bg-blue-500" />
              <span className="font-medium text-sm">USDC</span>
            </div>
          </div>
        </div>

        {/* Swap arrow */}
        <div className="flex justify-center -my-1">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth={2}>
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* To token */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs text-gray-500 mb-2">To</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-medium text-gray-900">0.41</span>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 border border-gray-200">
              <div className="w-5 h-5 rounded-full bg-[#627eea]" />
              <span className="font-medium text-sm">ETH</span>
            </div>
          </div>
        </div>

        {/* Swap button */}
        <button className="w-full py-4 bg-[#0052ff] text-white rounded-2xl text-base font-medium mt-4">
          Preview Swap
        </button>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex justify-around items-center px-6">
        <div className="w-6 h-6 rounded bg-gray-200" />
        <div className="w-6 h-6 rounded bg-[#0052ff]" />
        <div className="w-6 h-6 rounded bg-gray-200" />
        <div className="w-6 h-6 rounded bg-gray-200" />
      </div>
    </div>
  )
}
