"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ScreenshotType = "dex" | "mobile" | "terminal"

interface AppScreenshotProps {
  type: ScreenshotType
  className?: string
}

export const AppScreenshot = ({ type, className }: AppScreenshotProps) => {
  return (
    <div className={cn("relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50", className)}>
      {type === "dex" && <DexScreenshot />}
      {type === "mobile" && <MobileScreenshot />}
      {type === "terminal" && <TerminalScreenshot />}
    </div>
  )
}

const DexScreenshot = () => (
  <div className="w-full h-full bg-white flex flex-col">
    {/* Header */}
    <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">C</div>
        <div className="font-semibold text-sm text-gray-900">Trade</div>
      </div>
      <div className="flex gap-2">
        <div className="w-20 h-8 rounded bg-gray-100" />
        <div className="w-8 h-8 rounded-full bg-gray-100" />
      </div>
    </div>
    
    <div className="flex-1 flex">
      {/* Chart Area */}
      <div className="flex-1 p-6 border-r border-gray-100">
        <div className="flex items-end gap-4 mb-6">
          <h3 className="text-3xl font-bold text-gray-900">$2,450.52</h3>
          <p className="text-green-500 mb-1">+5.2% (24h)</p>
        </div>
        <div className="h-64 relative flex items-end justify-between gap-1 opacity-20">
          {[40, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 80, 85, 70, 75, 60].map((h, i) => (
            <div key={i} className="flex-1 bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      
      {/* Order Panel */}
      <div className="w-72 p-4 bg-gray-50">
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Pay</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium">1,000</span>
              <span className="font-medium">USDC</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Receive</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium">0.41</span>
              <span className="font-medium">ETH</span>
            </div>
          </div>
          <div className="w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium shadow-md mt-8">
            Swap
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MobileScreenshot = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100">
    <div className="w-[280px] h-[580px] bg-white rounded-[40px] shadow-xl border-[8px] border-gray-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600 to-blue-500 rounded-b-[30px] p-6 text-white">
        <div className="flex justify-between items-center mt-8">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <div className="w-8 h-8 rounded-full bg-white/20" />
        </div>
        <p className="mt-4 text-sm opacity-80">Total Balance</p>
        <h3 className="text-2xl font-bold">$12,450.00</h3>
      </div>
      
      <div className="absolute top-36 left-0 right-0 p-6 space-y-4">
         <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
           <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">₿</div>
           <div className="flex-1">
             <p className="font-medium text-gray-900">Bitcoin</p>
             <p className="text-xs text-gray-500">BTC</p>
           </div>
           <div className="text-right">
             <p className="font-medium text-gray-900">0.42</p>
             <p className="text-xs text-gray-500">$10,240</p>
           </div>
         </div>
         
         <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">Ξ</div>
           <div className="flex-1">
             <p className="font-medium text-gray-900">Ethereum</p>
             <p className="text-xs text-gray-500">ETH</p>
           </div>
           <div className="text-right">
             <p className="font-medium text-gray-900">1.5</p>
             <p className="text-xs text-gray-500">$2,210</p>
           </div>
         </div>
      </div>
      
      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex justify-around items-center px-6">
        <div className="w-6 h-6 rounded bg-blue-600" />
        <div className="w-6 h-6 rounded bg-gray-200" />
        <div className="w-6 h-6 rounded bg-gray-200" />
        <div className="w-6 h-6 rounded bg-gray-200" />
      </div>
    </div>
  </div>
)

const TerminalScreenshot = () => (
  <div className="w-full h-full bg-[#1e1e1e] flex flex-col p-4 font-mono text-sm">
    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      <span className="ml-2 text-white/40 text-xs">cdp-swap-api — bash</span>
    </div>
    
    <div className="space-y-2 text-green-400">
      <div className="flex">
        <span className="text-blue-400 mr-2">➜</span>
        <span className="text-white">npm install @coinbase/onchain-kit</span>
      </div>
      <div className="text-white/60 pb-2">
        + @coinbase/onchain-kit@0.12.0<br/>
        added 24 packages in 1.4s
      </div>

      <div className="flex pt-2">
        <span className="text-blue-400 mr-2">➜</span>
        <span className="text-white">node swap-token.js</span>
      </div>
      
      <div className="pl-4 border-l-2 border-white/10 mt-2 space-y-1">
        <p>{`> initializing CDP Swap API...`}</p>
        <p>{`> fetching liquidity sources...`}</p>
        <p className="text-white">{`[SUCCESS] Connected to 100+ exchanges`}</p>
        <p className="text-white">{`[INFO] Best price routed via 0x`}</p>
        
        <div className="mt-4 p-3 bg-black/50 rounded border border-white/5 text-xs">
          <p className="text-blue-400">{`const swap = await zeroEx.quote({`}</p>
          <p className="pl-4 text-white">{`buyToken: 'USDC',`}</p>
          <p className="pl-4 text-white">{`sellToken: 'ETH',`}</p>
          <p className="pl-4 text-white">{`sellAmount: '1000000000000000000'`}</p>
          <p className="text-blue-400">{`});`}</p>
        </div>
      </div>
    </div>
  </div>
)
