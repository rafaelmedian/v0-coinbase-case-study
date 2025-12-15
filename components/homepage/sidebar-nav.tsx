"use client"

import { useState, useEffect } from "react"

interface SidebarNavProps {
  activeSection?: string
}

interface NavSection {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

const navSections: NavSection[] = [
  {
    id: "about",
    label: "About Dex Trading",
    children: [
      { id: "fast", label: "Fast" },
      { id: "base-app", label: "Base App" },
      { id: "cdp", label: "Coinbase Developer Platform" },
    ],
  },
  { id: "shift", label: "The shift" },
  { id: "opportunity", label: "The opportunity" },
  { id: "why-0x", label: "Why 0x" },
  { id: "onchain", label: "The onchain opportunity" },
]

export function SidebarNav({ activeSection = "about" }: SidebarNavProps) {
  const [expandedSection, setExpandedSection] = useState<string>("about")

  // Update expanded section when activeSection changes
  useEffect(() => {
    // Check if activeSection is a child of "about"
    if (["fast", "base-app", "cdp"].includes(activeSection)) {
      setExpandedSection("about")
    } else if (activeSection === "about") {
      setExpandedSection("about")
    } else {
      // For other top-level sections, we can either close "about" or keep it as is
      // Let's close it if we move to another main section to focus attention
      if (navSections.some(s => s.id === activeSection && s.id !== "about")) {
        setExpandedSection("")
      }
    }
  }, [activeSection])

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? "" : id)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="sticky top-[76px] pt-[76px]">
      <nav className="flex flex-col gap-4">
        {navSections.map((section) => (
          <div key={section.id}>
            {section.children ? (
              // Expandable section
              <div>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full h-14 flex items-center justify-between px-6 rounded-[8px] text-[20px] leading-[36px] transition-all ${
                    expandedSection === section.id || activeSection === section.id
                      ? "bg-[#17181c] text-white"
                      : "bg-[#e4e4e7] text-black hover:bg-[#d4d4d8]"
                  }`}
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {expandedSection === section.id && section.children && (
                  <div className="mt-4 bg-[#e4e4e7] rounded-[8px] px-6 py-4 flex flex-col gap-3">
                    {section.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => scrollToSection(child.id)}
                        className={`h-[29px] flex items-center text-[17.5px] leading-[1.2] transition-colors text-left ${
                          activeSection === child.id ? "text-black font-medium" : "text-[#252629] hover:text-black"
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Simple section
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full h-14 flex items-center justify-between px-6 rounded-[8px] text-[20px] leading-[36px] transition-all ${
                  activeSection === section.id
                    ? "bg-[#17181c] text-white"
                    : "bg-[#e4e4e7] text-black hover:bg-[#d4d4d8]"
                }`}
              >
                <span>{section.label}</span>
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
