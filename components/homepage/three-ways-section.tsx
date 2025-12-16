"use client"

import { useState } from "react"

export function ThreeWaysSection() {
  const [activeCard, setActiveCard] = useState(0)
  
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

            {/* Horizontally Stacked Cards */}
            <div className="relative h-[550px]">
              {cards.map((card, index) => {
                // Calculate position based on active card
                const isActive = index === activeCard
                const baseOffset = index * 72
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`${card.bgColor} rounded-[20px] p-8 absolute top-0 w-[520px] h-[550px] cursor-pointer transition-all duration-300 hover:translate-x-2`}
                    style={{ 
                      left: `${baseOffset}px`,
                      zIndex: isActive ? 10 : cards.length - index,
                    }}
                  >
                    <div className="flex flex-col gap-4 h-full">
                      <span className={`text-[14px] font-medium ${card.textColor} opacity-50`}>
                        {card.number}
                      </span>
                      <h3 className={`text-[28px] leading-[1.2] ${card.textColor}`}>
                        {card.title}
                      </h3>
                      
                      {/* Icon */}
                      <div className="w-8 h-8 mt-auto mb-4">
                        <svg
                          className={`w-full h-full ${card.textColor}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      
                      <p className={`text-[18px] leading-[1.5] ${card.descColor}`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



