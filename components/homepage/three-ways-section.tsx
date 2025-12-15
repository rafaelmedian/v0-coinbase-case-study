export function ThreeWaysSection() {
  const cards = [
    {
      number: "01",
      title: "Expand from hundreds to millions of tokens",
      description: "We enabled DEX trading directly within Coinbase Exchange, allowing users to swap any token instantly from a familiar, trusted interface.",
      bgColor: "bg-[#18181b]",
      textColor: "text-white",
      descColor: "text-white/70"
    },
    {
      number: "02", 
      title: "Reimagine the onchain experience",
      description: "With 0x powering the Base App, Coinbase unites social, payments, and DeFi—so every post and creator becomes a tradable asset.",
      bgColor: "bg-[#cab9ee]",
      textColor: "text-[#26272b]",
      descColor: "text-[#26272b]/70"
    },
    {
      number: "03",
      title: "Empower builders",
      description: "As the Swap API provider for Coinbase Developer Platform (CDP), developers get everything they need to build great apps on Base.",
      bgColor: "bg-[#dfd5f5]",
      textColor: "text-[#26272b]",
      descColor: "text-[#26272b]/70"
    }
  ]

  return (
    <section id="why-0x" className="bg-[#fafafa] py-[80px] scroll-mt-[80px]">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="ml-0 lg:ml-[calc(33.33%-40px)]">
          <div className="flex flex-col gap-10 max-w-[800px]">
            {/* Header */}
            <h2 className="text-[40px] leading-[1.15] text-[#26272b]">
              Three ways 0x powers Coinbase
            </h2>

            {/* Stacked Cards */}
            <div className="relative">
              <div className="flex flex-col gap-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`${card.bgColor} rounded-[20px] p-8 transition-all hover:-translate-y-1`}
                    style={{ 
                      marginLeft: `${index * 16}px`,
                      position: 'relative',
                      zIndex: cards.length - index
                    }}
                  >
                    <div className="flex flex-col gap-4">
                      <span className={`text-[14px] font-medium ${card.textColor} opacity-50`}>
                        {card.number}
                      </span>
                      <h3 className={`text-[28px] leading-[1.2] ${card.textColor}`}>
                        {card.title}
                      </h3>
                      <p className={`text-[18px] leading-[1.5] ${card.descColor}`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
