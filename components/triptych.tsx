"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const Triptych = () => {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.5/1] max-w-6xl mx-auto flex items-center justify-center perspective-[2000px]">
      {/* Background/Base Layer - Developer Platform (Right) */}
      <motion.div
        className="absolute top-8 right-[5%] w-[45%] aspect-[4/3] rounded-xl bg-[#1e1e1e] shadow-2xl border border-white/10 overflow-hidden z-10"
        initial={{ opacity: 0, x: 50, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: -5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full h-8 bg-[#2d2d2d] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="p-6 font-mono text-xs text-green-400">
          <p className="mb-2">{`> initializing CDP Swap API...`}</p>
          <p className="mb-2">{`> fetching liquidity sources...`}</p>
          <p className="mb-2 text-white">{`[SUCCESS] Connected to 100+ exchanges`}</p>
          <p className="mb-2 text-white">{`[INFO] Best price routed via 0x`}</p>
          <div className="mt-4 p-4 bg-black/50 rounded border border-white/5">
            <p className="text-blue-400">{`const swap = await zeroEx.quote({`}</p>
            <p className="pl-4 text-white">{`buyToken: 'USDC',`}</p>
            <p className="pl-4 text-white">{`sellToken: 'ETH',`}</p>
            <p className="pl-4 text-white">{`sellAmount: '1000000000000000000'`}</p>
            <p className="text-blue-400">{`});`}</p>
          </div>
        </div>
      </motion.div>

      {/* Middle Layer - DEX Trading (Left) */}
      <motion.div
        className="absolute top-12 left-[5%] w-[50%] aspect-[16/10] rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-20"
        initial={{ opacity: 0, x: -50, rotateY: 10 }}
        animate={{ opacity: 1, x: 0, rotateY: 5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="w-full h-full bg-gray-50 flex flex-col">
          <div className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">C</div>
              <div className="font-semibold text-gray-900">Trade</div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">$2,450.52</h3>
                <p className="text-green-500 text-sm">+5.2% (24h)</p>
              </div>
              <div className="w-32 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium">
                Buy
              </div>
            </div>
            <div className="h-32 bg-white rounded-lg border border-gray-100 p-4 relative">
              <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 opacity-20">
                {[40, 60, 45, 70, 65, 80, 75, 90].map((h, i) => (
                  <div key={i} className="w-8 bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Front Layer - Mobile App (Center) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[580px] rounded-[40px] bg-black shadow-2xl border-[8px] border-gray-900 overflow-hidden z-30"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-full h-full bg-white relative">
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
      </motion.div>
    </div>
  )
}

