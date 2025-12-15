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
  { id: "about", label: "About Coinbase" },
  { id: "shift", label: "The shift" },
  { id: "opportunity", label: "The opportunity" },
  {
    id: "why-0x",
    label: "Why 0x",
    children: [
      { id: "coverage", label: "Coverage" },
      { id: "execution", label: "Execution" },
      { id: "reliability", label: "Reliability" },
    ],
  },
  { id: "partner", label: "Strategic partner" },
]

export function SidebarNav({ activeSection = "about" }: SidebarNavProps) {
  const [expandedSection, setExpandedSection] = useState<string>("")

  // Update expanded section when activeSection changes
  useEffect(() => {
    // Check if activeSection is a child of "why-0x"
    if (["coverage", "execution", "reliability"].includes(activeSection)) {
      setExpandedSection("why-0x")
    } else if (activeSection === "why-0x") {
      setExpandedSection("why-0x")
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
    <div className="sticky top-[80px] pt-[40px]">
      <nav className="flex flex-col gap-2">
        {navSections.map((section) => (
          <div key={section.id}>
            {section.children ? (
              // Expandable section
              <div>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full h-12 flex items-center justify-between px-5 rounded-[8px] text-[16px] leading-[1.4] transition-all ${
                    expandedSection === section.id || activeSection === section.id
                      ? "bg-[#17181c] text-white"
                      : "bg-[#f4f4f5] text-[#26272b] hover:bg-[#e4e4e7]"
                  }`}
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
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
                  <div className="mt-2 bg-[#f4f4f5] rounded-[8px] px-5 py-3 flex flex-col gap-2">
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
                className={`w-full h-12 flex items-center justify-between px-5 rounded-[8px] text-[16px] leading-[1.4] transition-all ${
                  activeSection === section.id
                    ? "bg-[#17181c] text-white"
                    : "bg-[#f4f4f5] text-[#26272b] hover:bg-[#e4e4e7]"
                }`}
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
  )
}
