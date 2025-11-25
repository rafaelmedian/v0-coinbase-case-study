import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function HomePage() {
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
            Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer Platform.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* DEX Trading Card */}
          <Link href="/retail-dex" className="group relative flex min-h-[320px] flex-col justify-between bg-[#c8d4fa] p-8 transition-colors hover:bg-[#b8c4ea]">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0052ff]">
                <div className="h-6 w-6 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-3xl font-normal text-[#1d1d1d]">DEX Trading</h3>
            </div>
          </Link>

          {/* Base App Card */}
          <Link href="/base-app" className="group relative flex min-h-[320px] flex-col justify-between bg-[#0052ff] p-8">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <div className="h-6 w-6 bg-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Base App</h3>
            </div>
            <p className="text-sm text-white/80">
              Powering onchain trades across XXm users
            </p>
          </Link>

          {/* Developer Platform Card */}
          <Link href="/developer-platform" className="group relative flex min-h-[320px] flex-col justify-between bg-[#1d1d1d] p-8">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2d2d]">
                <div className="h-6 w-6 rounded-full border-4 border-[#0052ff]"></div>
              </div>
              <h3 className="text-3xl font-normal text-white">Developer Platform</h3>
            </div>
            <p className="text-sm text-white/70">
              Powering onchain trades across XXm users
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
