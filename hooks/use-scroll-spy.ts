import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], options: { offset: number } = { offset: 0 }) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY

      const active = ids.find((id) => {
        const element = document.getElementById(id)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        const top = rect.top + scroll
        const height = rect.height

        return scroll >= top - options.offset && scroll < top + height - options.offset
      })

      if (active) {
        setActiveId(active)
      }
    }

    listener()

    window.addEventListener("resize", listener)
    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("resize", listener)
      window.removeEventListener("scroll", listener)
    }
  }, [ids, options.offset])

  return activeId
}
