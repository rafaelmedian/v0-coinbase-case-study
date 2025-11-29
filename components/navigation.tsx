"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type NavigationProps = {
  activePage?: "retail-dex" | "base-app" | "developer-platform" | "styleguide"
}

export default function Navigation({ activePage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/retail-dex", label: "RETAIL DEX", id: "retail-dex" as const },
    { href: "/base-app", label: "BASE APP", id: "base-app" as const },
    { href: "/developer-platform", label: "DEVELOPER PLATFORM", id: "developer-platform" as const },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <header 
        className={`sticky top-0 z-50 border-b px-4 py-4 md:px-6 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm" 
            : "bg-white/95 backdrop-blur-sm"
        }`} 
        style={{ borderColor: isScrolled ? "var(--border-light)" : "transparent" }}
      >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80">
          <span className="text-[22px] md:text-[26px] font-bold text-[var(--text-primary)] leading-[1] tracking-tight flex items-center">
            0x
          </span>
          <span className="w-px h-5 md:h-6 bg-[#d1d1d6] self-center"></span>
          <svg className="h-[16px] md:h-[20px] w-auto self-center" viewBox="0 0 202 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_nav_coinbase)">
              <path d="M40.7262 10.1543C33.3957 10.1543 27.6679 15.7696 27.6679 23.2869C27.6679 30.8042 33.251 36.3714 40.7262 36.3714C48.2014 36.3714 53.8815 30.7081 53.8815 23.2388C53.8815 15.8177 48.2984 10.1543 40.7262 10.1543ZM40.7756 30.9539C36.6012 30.9539 33.5422 27.6823 33.5422 23.2887C33.5422 18.8453 36.5517 15.5755 40.7262 15.5755C44.9501 15.5755 48.0072 18.8952 48.0072 23.2887C48.0072 27.6823 44.9501 30.9539 40.7756 30.9539ZM55.4824 15.8676H59.1238V35.8853H64.9487V10.6423H55.4824V15.8676ZM13.0088 15.5737C16.0677 15.5737 18.4947 17.4775 19.4161 20.3092H25.5816C24.4643 14.2558 19.5132 10.1543 13.0582 10.1543C5.72775 10.1543 0 15.7696 0 23.2887C0 30.8079 5.58304 36.3733 13.0582 36.3733C19.3685 36.3733 24.4167 32.2718 25.534 26.1685H19.4161C18.5424 29.0002 16.1154 30.9539 13.0564 30.9539C8.83249 30.9539 5.87245 27.6823 5.87245 23.2887C5.87428 18.8453 8.7867 15.5737 13.0088 15.5737ZM166.158 20.8471L161.886 20.2131C159.848 19.921 158.391 19.2371 158.391 17.6254C158.391 15.8676 160.285 14.9896 162.857 14.9896C165.672 14.9896 167.469 16.2095 167.858 18.2113H173.488C172.856 13.1339 168.973 10.1562 163.004 10.1562C156.838 10.1562 152.761 13.3298 152.761 17.8213C152.761 22.1169 155.431 24.6085 160.818 25.3885L165.09 26.0225C167.178 26.3145 168.343 27.1463 168.343 28.7081C168.343 30.7099 166.304 31.5398 163.489 31.5398C160.042 31.5398 158.1 30.124 157.809 27.9762H152.081C152.616 32.9076 156.45 36.3733 163.44 36.3733C169.799 36.3733 174.021 33.4436 174.021 28.4142C174.021 23.9227 170.964 21.579 166.158 20.8471ZM62.0362 0.243421C59.9005 0.243421 58.2977 1.80528 58.2977 3.95307C58.2977 6.10087 59.8986 7.66273 62.0362 7.66273C64.172 7.66273 65.7748 6.10087 65.7748 3.95307C65.7748 1.80528 64.172 0.243421 62.0362 0.243421ZM147.518 19.2852C147.518 13.8178 144.218 10.1562 137.228 10.1562C130.626 10.1562 126.937 13.5257 126.208 18.7011H131.985C132.277 16.6993 133.83 15.0395 137.131 15.0395C140.093 15.0395 141.549 16.3574 141.549 17.9692C141.549 20.0689 138.878 20.6049 135.577 20.9469C131.112 21.4348 125.578 22.9967 125.578 28.856C125.578 33.3974 128.928 36.3252 134.268 36.3252C138.442 36.3252 141.063 34.5674 142.375 31.7838C142.569 34.2735 144.414 35.8853 146.987 35.8853H150.385V30.6618H147.52V19.2852H147.518ZM141.791 25.6325C141.791 29.002 138.878 31.4918 135.334 31.4918C133.149 31.4918 131.304 30.5639 131.304 28.612C131.304 26.1223 134.266 25.4384 136.984 25.1463C139.605 24.9024 141.062 24.3164 141.791 23.1926V25.6325ZM110.87 10.1543C107.616 10.1543 104.898 11.5221 102.957 13.8159V-0.000562668H97.1318V35.8853H102.859V32.5657C104.801 34.9574 107.569 36.3733 110.87 36.3733C117.859 36.3733 123.151 30.8079 123.151 23.2887C123.151 15.7696 117.762 10.1543 110.87 10.1543ZM109.996 30.9539C105.821 30.9539 102.762 27.6823 102.762 23.2887C102.762 18.8952 105.869 15.5755 110.043 15.5755C114.267 15.5755 117.227 18.8471 117.227 23.2887C117.227 27.6823 114.17 30.9539 109.996 30.9539ZM83.1998 10.1543C79.4137 10.1543 76.9372 11.7162 75.481 13.9139V10.6423H69.7038V35.8835H75.5286V22.1649C75.5286 18.3074 77.9556 15.5737 81.5476 15.5737C84.8978 15.5737 86.9841 17.9655 86.9841 21.433V35.8853H92.8089V20.9949C92.8108 14.6458 89.5595 10.1543 83.1998 10.1543ZM201.788 22.4588C201.788 15.2336 196.546 10.1562 189.507 10.1562C182.031 10.1562 176.545 15.8195 176.545 23.2887C176.545 31.1498 182.42 36.3733 189.604 36.3733C195.672 36.3733 200.429 32.7597 201.642 27.6342H195.573C194.699 29.88 192.564 31.1498 189.699 31.1498C185.96 31.1498 183.145 28.8061 182.515 24.7046H201.786V22.4588H201.788ZM182.856 20.5051C183.779 16.9895 186.4 15.2817 189.409 15.2817C192.71 15.2817 195.234 17.1855 195.817 20.5051H182.856Z" fill="#0052FF"/>
            </g>
            <defs>
              <clipPath id="clip0_nav_coinbase">
                <rect width="201.788" height="36.3738" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                activePage === link.id 
                  ? 'text-[var(--text-primary)]' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="text-[#e5e5e5]">|</span>
          <Link
            href="/styleguide"
            className={`text-sm font-medium tracking-wide transition-all duration-200 ${
              activePage === "styleguide" 
                ? 'text-[var(--text-primary)]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            STYLEGUIDE
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/start-building" className="hidden md:block">
          <Button
            variant="outline"
            className="border bg-transparent text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[var(--color-brand)] hover:text-white hover:border-[var(--color-brand)]"
            style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
          >
            START BUILDING
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden transition-colors duration-200 hover:bg-[var(--bg-surface)]"
          aria-label="Toggle menu"
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="var(--text-primary)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="absolute left-0 right-0 top-full z-50 border-b bg-white shadow-lg lg:hidden animate-slide-down" 
          style={{ borderColor: "var(--border-light)" }}
        >
          <nav className="flex flex-col px-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b py-4 text-base font-medium transition-colors duration-200 ${
                  activePage === link.id 
                    ? 'text-[var(--text-primary)]' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                style={{ 
                  borderColor: "var(--border-subtle)",
                  animationDelay: `${index * 50}ms`
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/styleguide"
              onClick={() => setIsMenuOpen(false)}
              className={`border-b py-4 text-base font-medium transition-colors duration-200 ${
                activePage === "styleguide" 
                  ? 'text-[var(--text-primary)]' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              style={{ borderColor: "var(--border-subtle)" }}
            >
              STYLEGUIDE
            </Link>
            <Link href="/start-building" onClick={() => setIsMenuOpen(false)} className="mt-6">
              <Button
                variant="outline"
                className="w-full border bg-transparent text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[var(--color-brand)] hover:text-white hover:border-[var(--color-brand)]"
                style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
              >
                START BUILDING
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
    </>
  )
}
