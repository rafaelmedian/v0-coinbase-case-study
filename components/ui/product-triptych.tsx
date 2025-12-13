"use client"

import Image from "next/image"

export function ProductTriptych() {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto h-[400px] md:h-[500px]">
      {/* DEX Trading - Left card (behind) */}
      <div 
        className="absolute left-0 top-8 w-[280px] md:w-[320px] h-[320px] md:h-[380px] rounded-[24px] bg-[#c8d4fa] p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
        style={{ zIndex: 1 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-4">
          <Image
            src="/images/coinbase-icon.svg"
            alt="Coinbase"
            width={28}
            height={28}
          />
        </div>
        <h3 className="text-lg font-normal text-[#26272b] mb-2">DEX Trading</h3>
        <p className="text-sm text-[#26272b]/70 mb-4">
          Millions of tokens available directly inside the main Coinbase App
        </p>
        {/* Mock swap interface */}
        <div className="bg-white/60 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#26272b]/60">You pay</span>
            <span className="text-sm font-medium text-[#26272b]">$1,000</span>
          </div>
          <div className="h-px bg-[#26272b]/10" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#26272b]/60">You receive</span>
            <span className="text-sm font-medium text-[#26272b]">0.42 ETH</span>
          </div>
        </div>
      </div>

      {/* Base App - Center card (front) */}
      <div 
        className="absolute left-1/2 top-0 w-[280px] md:w-[320px] h-[360px] md:h-[420px] rounded-[24px] bg-[#0052ff] p-6 shadow-2xl transform -translate-x-1/2 hover:scale-105 transition-transform duration-500"
        style={{ zIndex: 3 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
          <Image
            src="/images/base-app-icon.svg"
            alt="Base App"
            width={28}
            height={28}
          />
        </div>
        <h3 className="text-lg font-normal text-white mb-2">Base App</h3>
        <p className="text-sm text-white/80 mb-4">
          Onchain social, payments, and DeFi unified
        </p>
        {/* Mock social feed */}
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-white/30" />
              <span className="text-xs text-white/90">creator.base.eth</span>
            </div>
            <p className="text-xs text-white/70">Just launched my new collection 🚀</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Creator Coin</span>
              <span className="text-xs font-medium text-green-300">+24.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Platform - Right card (behind) */}
      <div 
        className="absolute right-0 top-8 w-[280px] md:w-[320px] h-[320px] md:h-[380px] rounded-[24px] bg-[#26272b] p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
        style={{ zIndex: 2 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8 9l3 3-3 3M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-normal text-white mb-2">Developer Platform</h3>
        <p className="text-sm text-white/70 mb-4">
          Everything developers need to build on Base
        </p>
        {/* Mock code block */}
        <div className="bg-black/40 rounded-xl p-4 font-mono text-xs">
          <div className="text-green-400">// Swap with CDP API</div>
          <div className="text-white/80 mt-1">
            <span className="text-purple-400">await</span>{" "}
            <span className="text-blue-400">cdp</span>.swap({`{`}
          </div>
          <div className="text-white/60 pl-4">from: &quot;USDC&quot;,</div>
          <div className="text-white/60 pl-4">to: &quot;ETH&quot;,</div>
          <div className="text-white/60 pl-4">amount: 1000</div>
          <div className="text-white/80">{`}`})</div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-gradient-to-t from-black/5 to-transparent rounded-full blur-xl" />
    </div>
  )
}




