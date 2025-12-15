export function ThreeWaysSection() {
  return (
    <section className="bg-[#fafafa] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden py-[76px] px-[132px]">
      <div className="flex flex-col gap-8 ml-[calc(41.67%-90px)]">
        {/* Header */}
        <h2 className="text-[44px] leading-[1.2] text-[#161719]">
          Three ways 0x powers Coinbase
        </h2>

        {/* Stacked Cards */}
        <div className="relative w-[666px] py-6">
          <div className="relative flex pr-[449px]">
            {/* Front Card - Dark */}
            <div className="relative z-[3] flex-1 min-w-[217px] -mr-[449px]">
              <div className="bg-[#161719] rounded-[16px] h-[550px] flex flex-col justify-between pt-8 pb-6 px-6">
                <h3 className="text-[34px] leading-[1.2] text-white h-8">
                  Expand from hundreds to millions of tokens
                </h3>
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path 
                        d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[22px] leading-[1.35] text-white h-[173px]">
                    We enabled DEX trading directly within Coinbase Exchange, allowing users to swap any token instantly from a familiar, trusted interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Card - Purple */}
            <div className="relative z-[2] flex-1 min-w-[217px] -mr-[449px]">
              <div className="bg-[#cab9ee] rounded-[16px] h-[550px]" />
            </div>

            {/* Back Card - Light Purple */}
            <div className="relative z-[1] flex-1 min-w-[217px] -mr-[449px]">
              <div className="bg-[#dfd5f5] rounded-[16px] h-[550px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
