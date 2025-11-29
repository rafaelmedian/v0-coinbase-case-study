import Link from "next/link"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

const footerLinks = {
  developers: {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.0x.org", external: true },
      { label: "Help Center", href: "https://help.0x.org", external: true },
      { label: "API Status", href: "https://status.0x.org", external: true },
      { label: "API Reference", href: "https://docs.0x.org/api", external: true },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Cookie Notice", href: "/cookies" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Media Kit", href: "/media-kit" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "Twitter / X", href: "https://twitter.com/0xProject", external: true },
      { label: "Warpcast", href: "https://warpcast.com/0x", external: true },
      { label: "Discord", href: "https://discord.gg/0x", external: true },
    ],
  },
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn(
      "relative bg-[#18181b] overflow-hidden",
      "before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-gradient-to-b before:from-white before:to-transparent before:-translate-y-full before:pointer-events-none",
      className
    )}>
      {/* Colorful gradient bar */}
      <div className="flex h-[3px] w-full">
        <div className="flex-1 bg-[#1e54ff]" />
        <div className="flex-1 bg-[#8f5af4]" />
        <div className="flex-1 bg-[#01a74d]" />
        <div className="flex-1 bg-[#af974b]" />
        <div className="flex-1 bg-[#ca2240]" />
      </div>

      <div className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] pt-16 pb-8">
        {/* Main footer content - aligned with 4-column grid */}
        <div className="grid grid-cols-1 gap-[var(--grid-gap)] lg:grid-cols-4 lg:gap-[var(--grid-gap-lg)]">
          {/* Developers column */}
          <div>
            <h4 className="text-[14px] text-zinc-200/60 mb-4 font-normal">{footerLinks.developers.title}</h4>
            <ul className="space-y-2">
              {footerLinks.developers.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[16px] text-zinc-200 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <span className="text-zinc-400">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[14px] text-zinc-200/60 mb-4 font-normal">{footerLinks.company.title}</h4>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] text-zinc-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community column */}
          <div>
            <h4 className="text-[14px] text-zinc-200/60 mb-4 font-normal">{footerLinks.community.title}</h4>
            <ul className="space-y-2">
              {footerLinks.community.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-zinc-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email signup - Column 4 */}
          <div>
            <div className="flex items-center gap-2 rounded-[12px] bg-[#26272b] px-3 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-[16px] text-white placeholder:text-white/50 focus:outline-none min-w-0"
              />
              <button className="shrink-0 rounded-[12px] border border-zinc-200 bg-white px-4 py-1.5 text-[16px] font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                Sign up
              </button>
            </div>
            <p className="mt-3 text-[14px] text-[#fcfcfc] text-right">
              ZEROEX.INC TRADING DEPT.
            </p>
          </div>
        </div>

        {/* ZEROEX watermark - positioned at absolute bottom */}
        <div className="relative mt-16 overflow-hidden -mb-8 translate-y-[15%]">
          <p 
            className="text-[clamp(80px,20vw,291px)] font-medium leading-[1] tracking-[-0.02em] text-center select-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 18%, rgba(255,255,255,0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ZEROEX
          </p>
        </div>
      </div>
    </footer>
  )
}
