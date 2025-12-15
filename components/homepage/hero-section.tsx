import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-[66px] pb-[64px]">
      {/* Top Badge: Coinbase Icon + DEX Trading */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/images/coinbase-icon.svg"
          alt="Coinbase"
          width={50}
          height={50}
        />
        <span className="text-[26px] text-black leading-[1.2]">DEX Trading</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-[64px] leading-[1.2] text-center text-[#26272b] max-w-[891px] mx-auto mb-10">
        Plug into{" "}
        <span className="text-[#0052ff]">onchain markets</span>
        {" "}from your exchange app.
      </h1>

      {/* Quote Box */}
      <div className="bg-[#f1f1f3] rounded-[20px] p-4 max-w-[497px] mx-auto mb-10">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-[22px] leading-[1.35] text-[#26272b] text-center">
            &ldquo;Quote from team. 0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-[35px] h-[35px] rounded-[10px] bg-[#c8d4fa] overflow-hidden">
              <Image
                src="/images/coinbase-icon.svg"
                alt="Coinbase Team"
                width={35}
                height={35}
                className="object-cover"
              />
            </div>
            <span className="text-[14px] leading-[1.2] text-[#252629] opacity-50">
              Coinbase Team
            </span>
          </div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="flex justify-center">
        <div className="relative w-[343px] h-[294px]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="w-full h-full bg-white rounded-[32px] shadow-2xl border-[6px] border-gray-900 overflow-hidden relative">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-center">
        <div className="w-16 h-4 bg-black rounded-full" />
      </div>
      
      {/* App header */}
      <div className="absolute top-6 left-0 right-0 h-12 bg-white border-b border-gray-100 flex items-center justify-between px-3">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1d1d1d" strokeWidth={2}>
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-medium text-xs text-gray-900">DEX Trading</span>
        <div className="w-6 h-6 rounded-full bg-gray-100" />
      </div>

      {/* Swap interface */}
      <div className="absolute top-[72px] left-0 right-0 bottom-16 bg-white p-3 space-y-2">
        {/* From token */}
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-500 mb-1">From</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900">1,000</span>
            <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1 border border-gray-200">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="font-medium text-xs">USDC</span>
            </div>
          </div>
        </div>

        {/* Swap arrow */}
        <div className="flex justify-center -my-0.5">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth={2}>
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* To token */}
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-500 mb-1">To</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900">0.41</span>
            <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1 border border-gray-200">
              <div className="w-4 h-4 rounded-full bg-[#627eea]" />
              <span className="font-medium text-xs">ETH</span>
            </div>
          </div>
        </div>

        {/* Swap button */}
        <button className="w-full py-3 bg-[#0052ff] text-white rounded-xl text-sm font-medium mt-2">
          Preview Swap
        </button>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
        <div className="w-5 h-5 rounded bg-gray-200" />
        <div className="w-5 h-5 rounded bg-[#0052ff]" />
        <div className="w-5 h-5 rounded bg-gray-200" />
        <div className="w-5 h-5 rounded bg-gray-200" />
      </div>
    </div>
  )
}
