export function PartnerSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Deep DEX liquidity coverage",
      points: [
        "16+ networks and liquidity from 180+ exchanges, covering 20M+ tokens",
        "Exclusive 0x RFQ liquidity from leading market makers",
        "Buy/sell tax token support and Gasless API"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Execution excellence",
      points: [
        "Best-in-class price discovery with smart order routing",
        "MEV protection and private transactions",
        "Sub-second quote latency"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Enterprise-grade infrastructure",
      points: [
        "99.9% uptime SLA with redundant systems",
        "Audited smart contracts and battle-tested code",
        "24/7 monitoring and dedicated support"
      ]
    }
  ]

  return (
    <section id="partner" className="bg-white py-[80px] scroll-mt-[80px]">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="ml-0 lg:ml-[calc(33.33%-40px)]">
          <div className="flex flex-col gap-10 max-w-[800px]">
            {/* Header */}
            <h2 className="text-[40px] leading-[1.15] text-[#26272b]">
              As a key strategic partner for your onchain app
            </h2>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#18181b] rounded-[16px] p-6 flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[20px] leading-[1.3] text-white font-medium">
                      {feature.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-[16px] leading-[1.5] text-white/60 flex items-start gap-2">
                          <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-white/40" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
