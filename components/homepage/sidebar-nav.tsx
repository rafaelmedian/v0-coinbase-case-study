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
    label: "About Coinbase",
    children: [
      { id: "dex-trading", label: "Dex Trading" },
      { id: "base-app", label: "Base App" },
      { id: "dev-platform", label: "Coinbase Developer Platform" },
    ],
  },
  { id: "shift", label: "The shift" },
  { id: "opportunity", label: "The opportunity" },
  { id: "why-0x", label: "Why 0x" },
  { id: "partner", label: "The onchain opportunity" },
]

export function SidebarNav({ activeSection }: SidebarNavProps) {
  const [expandedSection, setExpandedSection] = useState<string>("")
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set())

  // Track visited sections and update expanded section when activeSection changes
  useEffect(() => {
    if (activeSection) {
      // Add current active section to visited sections
      setVisitedSections((prev) => {
        const newSet = new Set(prev)
        newSet.add(activeSection)
        return newSet
      })

      // Check if activeSection is a child of "about" or is "about" itself
      if (["dex-trading", "base-app", "dev-platform"].includes(activeSection)) {
        setExpandedSection("about")
        setVisitedSections((prev) => {
          const newSet = new Set(prev)
          newSet.add("about")
          return newSet
        })
      } else if (activeSection === "about") {
        setExpandedSection("about")
      } else {
        // Collapse "about" when scrolling past it
        setExpandedSection((prev) => prev === "about" ? "" : prev)
      }
    } else {
      // Collapse "about" when no section is active
      setExpandedSection((prev) => prev === "about" ? "" : prev)
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

  // Helper to determine section style
  const getSectionStyle = (sectionId: string) => {
    const isActive = activeSection === sectionId
    const isVisited = visitedSections.has(sectionId) && !isActive
    
    if (isActive) {
      return "bg-[#17181c] text-white"
    } else if (isVisited) {
      return "bg-[#71717a] text-white"
    } else {
      return "bg-[rgba(243,243,241,0.8)] text-[#26272b] hover:bg-[#e4e4e7]"
    }
  }

  return (
    <div
      className="absolute left-[48px] top-[40px] w-[280px] h-full"
    >
      <div className="sticky top-[120px] z-50">
      <nav className="flex flex-col gap-1">
        {navSections.map((section) => (
          <div key={section.id}>
            {section.children ? (
              // Expandable section
              <div>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full h-12 flex items-center justify-between px-5 rounded-[8px] text-[16px] leading-[1.4] transition-all duration-200 ${getSectionStyle(section.id)}`}
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
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
                  <div className="mt-2 bg-[rgba(243,243,241,0.8)] rounded-[8px] px-5 py-3 flex flex-col gap-2">
                    {section.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => scrollToSection(child.id)}
                        className={`h-[28px] flex items-center text-[15px] leading-[1.2] transition-colors text-left ${
                          activeSection === child.id ? "text-[#0052ff] font-medium" : "text-[#51525c] hover:text-[#26272b]"
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
                className={`w-full h-12 flex items-center justify-between px-5 rounded-[8px] text-[16px] leading-[1.4] transition-all duration-200 ${getSectionStyle(section.id)}`}
              >
                <span>{section.label}</span>
                <svg
                  className="w-5 h-5"
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
    </div>
  )
}




