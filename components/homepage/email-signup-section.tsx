"use client"

import { useState } from "react"

export function EmailSignupSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-[#18181b] py-[80px] border-t border-white/10">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="max-w-[500px]">
          <h3 className="text-[24px] leading-[1.3] text-white mb-6">
            Email Address
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-[12px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 bg-white text-[#18181b] rounded-[8px] text-[14px] font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </div>
            
            {isSubmitted && (
              <p className="text-[14px] text-green-400">
                Thanks for subscribing!
              </p>
            )}
          </form>

          <p className="text-[16px] leading-[1.5] text-white/50 mt-8">
            On a mission to build the new internet.
          </p>
        </div>
      </div>
    </section>
  )
}



