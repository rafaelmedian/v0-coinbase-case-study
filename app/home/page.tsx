"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div>
          <h1 className="mb-8 text-5xl font-normal leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[#1d1d1d]">Delivering end-to-end</span>
            <br />
            <span className="text-[#0052ff]">onchain swap infrastructure</span>
            <br />
            <span className="text-[#1d1d1d]">with Coinbase</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-[#5d5d5d]">
            Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading
            experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer
            Platform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="space-y-4">
          {/* DEX Trading Section */}
          <button
            onClick={() => toggleSection("dex")}
            className="group relative flex w-full items-center justify-between bg-[#c8d4fa] p-8 transition-all hover:bg-[#b8c4ea]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0052ff]">
                <div className="h-6 w-6 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-3xl font-normal text-[#1d1d1d]">DEX Trading</h3>
            </div>
            <svg
              className={`h-6 w-6 text-[#1d1d1d] transition-transform ${expandedSection === "dex" ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
            </svg>
          </button>

          {expandedSection === "dex" && (
            <div className="bg-[#c8d4fa] p-8 pt-0">
              <div className="space-y-8">
                <p className="text-2xl italic text-[#1d1d1d]">
                  "Insert quote placeholder text here about Coinbase Dex trading Insert quote placeholder text here"
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="text-6xl font-bold text-[#1d1d1d]">$XB</div>
                    <div className="text-lg text-[#5d5d5d]">in onchain volume</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-[#1d1d1d]">Xm</div>
                    <div className="text-lg text-[#5d5d5d]">total transactions</div>
                  </div>
                </div>

                <hr className="border-t border-[#1d1d1d]/20" />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1 w-8 bg-[#0052ff]"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">INTRODUCTION</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-[#1d1d1d]">
                    <p>
                      With over 120 million total users and 8.7 million monthly transacting users, Coinbase is one of
                      the world's leading crypto exchanges.
                    </p>
                    <p>
                      Through Coinbase's app, users can buy, store, and trade more than 300 different cryptocurrencies.
                      Coinbase also offers additional services, including a fee-based plan with Coinbase One and
                      professional asset trading with Coinbase Advanced, in total serving over 120 million users.
                    </p>
                  </div>
                </div>

                <hr className="border-t border-[#1d1d1d]/20" />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1 w-8 bg-[#0052ff]"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-[#5d5d5d]">THE CHALLENGE</span>
                    </div>
                  </div>
                  <div className="text-[#1d1d1d]">
                    <p>
                      As the crypto ecosystem has grown, millions of new assets are launching onchain every day as the
                      barrier to entry for launching new tokens has been eliminated, creating a flourishing onchain
                      token ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Base App Section */}
          <button
            onClick={() => toggleSection("base")}
            className="group relative flex w-full items-center justify-between bg-[#0052ff] p-8 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <div className="h-6 w-6 bg-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Base App</h3>
            </div>
            <svg
              className={`h-6 w-6 text-white transition-transform ${expandedSection === "base" ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
            </svg>
          </button>

          {expandedSection === "base" && (
            <div className="bg-[#0052ff] p-8 pt-0 text-white">
              <div className="space-y-8">
                <p className="text-2xl italic">
                  "Insert quote placeholder text here about Base App Insert quote placeholder text here"
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="text-6xl font-bold">$XB</div>
                    <div className="text-lg text-white/70">in onchain volume</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold">Xm</div>
                    <div className="text-lg text-white/70">total transactions</div>
                  </div>
                </div>

                <hr className="border-t border-white/20" />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1 w-8 bg-white"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-white/70">INTRODUCTION</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p>
                      Base App content goes here with relevant information about the Base App platform and its features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Developer Platform Section */}
          <button
            onClick={() => toggleSection("dev")}
            className="group relative flex w-full items-center justify-between bg-[#1d1d1d] p-8 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d]">
                <div className="h-6 w-6 rounded-full border-4 border-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Developer Platform</h3>
            </div>
            <svg
              className={`h-6 w-6 text-white transition-transform ${expandedSection === "dev" ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17l10-10" />
            </svg>
          </button>

          {expandedSection === "dev" && (
            <div className="bg-[#1d1d1d] p-8 pt-0 text-white">
              <div className="space-y-8">
                <p className="text-2xl italic">
                  "Insert quote placeholder text here about Developer Platform Insert quote placeholder text here"
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="text-6xl font-bold">$XB</div>
                    <div className="text-lg text-white/70">in onchain volume</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold">Xm</div>
                    <div className="text-lg text-white/70">total transactions</div>
                  </div>
                </div>

                <hr className="border-t border-white/20" />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1 w-8 bg-[#0052ff]"></div>
                      <span className="text-sm font-medium uppercase tracking-wide text-white/70">INTRODUCTION</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p>
                      Developer Platform content goes here with relevant information about developer tools and APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
