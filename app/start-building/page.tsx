import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function StartBuildingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <header className="border-b px-6 py-4" style={{ borderColor: "#e5e5e5" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: "#000000" }}>
              0x
            </span>
            <span style={{ color: "#d9d9d9" }}>|</span>
            <span className="text-2xl font-semibold" style={{ color: "#0052ff" }}>
              coinbase
            </span>
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/retail-dex" className="text-sm font-medium" style={{ color: "#5d5d5d" }}>
              RETAIL DEX
            </Link>
            <Link href="/base-app" className="text-sm font-medium" style={{ color: "#5d5d5d" }}>
              BASE APP
            </Link>
            <Link href="/developer-platform" className="text-sm font-medium" style={{ color: "#5d5d5d" }}>
              DEVELOPER PLATFORM
            </Link>
          </nav>

          <Button
            variant="outline"
            className="border text-sm font-medium bg-transparent"
            style={{ borderColor: "#1d1d1d", color: "#1d1d1d" }}
          >
            START BUILDING
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="mb-16 text-6xl font-normal leading-tight tracking-tight">
          <span style={{ color: "#1d1d1d" }}>Delivering end-to-end</span>
          <br />
          <span style={{ color: "#0052ff" }}>onchain swap infrastructure</span>
          <br />
          <span style={{ color: "#1d1d1d" }}>with Coinbase</span>
        </h1>

        {/* Sign up form placeholder */}
        <div className="mb-20 flex h-48 items-center justify-center" style={{ backgroundColor: "#d9d9d9" }}>
          <p className="text-3xl" style={{ color: "#ffffff" }}>
            Sign up form
          </p>
        </div>

        {/* Two column cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Left Card - Build onchain */}
          <div className="flex min-h-[340px] flex-col justify-between p-10" style={{ backgroundColor: "#c8d4fa" }}>
            <h2 className="text-4xl font-normal" style={{ color: "#1d1d1d" }}>
              Build onchain
            </h2>
            <p className="text-base" style={{ color: "#5d5d5d" }}>
              Powering onchain trades across XXm users
            </p>
          </div>

          {/* Right Card - Onchain tools */}
          <div className="flex min-h-[340px] flex-col justify-between p-10" style={{ backgroundColor: "#0052ff" }}>
            <h2 className="text-4xl font-normal" style={{ color: "#ffffff" }}>
              Onchain tools
            </h2>
            <p className="text-base" style={{ color: "#c8d4fa" }}>
              Powering onchain trades across XXm users
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: "#1d1d1d" }}>
        <div className="mx-auto max-w-2xl px-6">
          <h3 className="mb-8 text-center text-xl font-medium" style={{ color: "#ffffff" }}>
            Start building with 0x
          </h3>

          <div className="relative mb-8 rounded-lg p-6" style={{ backgroundColor: "#2d2d2d" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Enter your email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 bg-transparent placeholder:text-gray-500 focus-visible:ring-0"
                  style={{ color: "#5d5d5d" }}
                />
                <p className="mt-2 text-xs" style={{ color: "#5d5d5d" }}>
                  Sign up for our newsletter
                </p>
              </div>
              <Button className="text-sm font-medium" style={{ backgroundColor: "#ffffff", color: "#1d1d1d" }}>
                Sign Up
              </Button>
            </div>
          </div>

          <p className="text-center text-xs" style={{ color: "#5d5d5d" }}>
            © Zerohx Holdings, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
