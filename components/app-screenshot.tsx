"use client"

import React from "react"
import { motion } from "framer-motion"

interface AppScreenshotProps {
  type: "dex" | "base" | "cdp"
  className?: string
}

export const AppScreenshot = ({ type, className }: AppScreenshotProps) => {
  return (
    <div className={`relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] ${className}`}>
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl border-[8px] border-gray-900 overflow-hidden z-10">
        <div className="w-full h-full bg-white relative">
          
          {/* Status Bar */}
          <div className="h-12 w-full flex items-center justify-between px-6 text-black/80 font-medium text-xs">
             <span>9:41</span>
             <div className="flex gap-1.5">
               <div className="w-4 h-2.5 bg-black/80 rounded-[1px]" />
               <div className="w-3 h-2.5 bg-black/80 rounded-[1px]" />
               <div className="w-5 h-2.5 border border-black/30 rounded-[2px]" />
             </div>
          </div>

          {/* Dynamic Content Based on Type */}
          {type === "dex" && (
            <>
              {/* DEX Header */}
              <div className="px-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">C</div>
                  <h3 className="text-xl font-bold text-gray-900">Trade</h3>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 py-2 bg-gray-100 rounded-lg text-center font-medium text-sm text-gray-900">Buy</div>
                  <div className="flex-1 py-2 bg-blue-600 rounded-lg text-center font-medium text-sm text-white">Swap</div>
                  <div className="flex-1 py-2 bg-gray-100 rounded-lg text-center font-medium text-sm text-gray-900">Sell</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="p-6">
                <div className="mb-2">
                   <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">ETH / USD</span>
                   <div className="flex items-baseline gap-2 mt-1">
                     <h2 className="text-3xl font-bold text-gray-900">$2,450.52</h2>
                     <span className="text-green-500 font-medium">+5.2%</span>
                   </div>
                </div>
                <div className="h-40 w-full bg-gray-50 rounded-xl relative overflow-hidden mb-6">
                   <div className="absolute inset-0 flex items-end justify-between px-2 pb-0 opacity-40">
                      {[40, 55, 45, 70, 65, 85, 75, 95, 80, 60, 75, 50].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="w-4 bg-blue-500 rounded-t-sm mx-0.5" 
                        />
                      ))}
                   </div>
                </div>
              </div>

              {/* Recent Swaps List */}
              <div className="px-6 space-y-4">
                 <p className="text-sm font-medium text-gray-900">Recent Swaps</p>
                 {[
                   { from: "ETH", to: "USDC", amount: "1.5", val: "$3,675" },
                   { from: "USDC", to: "UNI", amount: "500", val: "$2,850" },
                   { from: "AAVE", to: "ETH", amount: "12", val: "$1,120" },
                 ].map((swap, i) => (
                   <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">{swap.from[0]}</div>
                         <div className="w-4 h-px bg-gray-300" />
                         <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600">{swap.to[0]}</div>
                         <div className="text-sm font-medium">{swap.from} → {swap.to}</div>
                      </div>
                      <div className="text-right">
                         <div className="text-sm font-bold text-gray-900">{swap.amount} {swap.from}</div>
                         <div className="text-xs text-gray-500">{swap.val}</div>
                      </div>
                   </div>
                 ))}
              </div>
            </>
          )}

          {type === "base" && (
             <>
               {/* Base App Header */}
               <div className="bg-blue-600 p-6 pb-8 text-white rounded-b-[30px]">
                 <div className="flex justify-between items-center mb-8">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                     <div className="w-6 h-6 bg-white rounded-full" />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-white/20" />
                 </div>
                 <p className="text-blue-100 text-sm mb-1">Total Balance</p>
                 <h2 className="text-4xl font-bold mb-4">$12,450.00</h2>
                 <div className="flex gap-3">
                   <div className="flex-1 py-2.5 bg-white/10 backdrop-blur rounded-xl text-center font-medium text-sm">Send</div>
                   <div className="flex-1 py-2.5 bg-white text-blue-600 rounded-xl text-center font-medium text-sm">Receive</div>
                   <div className="flex-1 py-2.5 bg-white/10 backdrop-blur rounded-xl text-center font-medium text-sm">More</div>
                 </div>
               </div>
               
               {/* Social Feed */}
               <div className="p-6 -mt-4 relative z-10">
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                       <div className="w-8 h-8 rounded-full bg-purple-100" />
                       <div>
                          <p className="text-sm font-bold text-gray-900">zora.eth</p>
                          <p className="text-xs text-gray-500">2m ago</p>
                       </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Just minted the new collection! 🎨✨ Check it out on Zora.</p>
                    <div className="h-32 bg-gray-100 rounded-xl mb-3 flex items-center justify-center text-gray-400 text-xs">NFT Preview</div>
                    <div className="flex gap-2">
                       <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">Mint</button>
                       <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold">Swap</button>
                    </div>
                 </div>
                 
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                    <div className="flex items-center gap-3 mb-3">
                       <div className="w-8 h-8 rounded-full bg-orange-100" />
                       <div>
                          <p className="text-sm font-bold text-gray-900">base.eth</p>
                          <p className="text-xs text-gray-500">1h ago</p>
                       </div>
                    </div>
                    <p className="text-sm text-gray-700">Building on Base is faster and cheaper than ever. 🔵</p>
                 </div>
               </div>
             </>
          )}

          {type === "cdp" && (
            <div className="bg-[#1e1e1e] w-full h-full text-white font-mono text-xs p-6 pt-12">
               <div className="flex gap-2 mb-6 opacity-50">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               
               <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 mb-1">// Initialize SDK</p>
                    <p className="text-blue-400">const<span className="text-white"> cdp = </span>new<span className="text-yellow-400"> Coinbase</span><span className="text-white">();</span></p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 mb-1">// Configure Swap</p>
                    <p className="text-purple-400">await<span className="text-white"> cdp.trade.</span>swap<span className="text-white">({'{'}</span></p>
                    <div className="pl-4 border-l border-gray-700 ml-1 my-1">
                      <p><span className="text-blue-300">from:</span> <span className="text-green-400">'ETH'</span>,</p>
                      <p><span className="text-blue-300">to:</span> <span className="text-green-400">'USDC'</span>,</p>
                      <p><span className="text-blue-300">amount:</span> <span className="text-orange-400">1.5</span></p>
                    </div>
                    <p className="text-white">{'}'});</p>
                  </div>

                  <div className="p-4 bg-black/30 rounded-lg border border-white/10 mt-8">
                     <p className="text-green-400 mb-2">→ Transaction Confirmed</p>
                     <p className="text-gray-400">Hash: 0x7f...3a2b</p>
                     <p className="text-gray-400">Gas: 0.0004 ETH</p>
                     <p className="text-gray-400">Time: 1.2s</p>
                  </div>
                  
                  <div className="absolute bottom-12 left-6 right-6">
                     <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                     </div>
                     <p className="text-center text-gray-500 mt-2">Processing...</p>
                  </div>
               </div>
            </div>
          )}

        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[50px] blur-xl -z-10" />
    </div>
  )
}
