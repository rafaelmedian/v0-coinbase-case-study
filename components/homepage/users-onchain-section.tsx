export function UsersOnchainSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Find newly launched assets in seconds, not weeks",
      description: "Access tokens the moment they launch onchain"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Access DeFi without giving up self-custody",
      description: "Full control of assets while using advanced tools"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Participate in SocialFi and creator economies",
      description: "New economic models built on tokenization"
    }
  ]

  return (
    <section id="shift" className="bg-[#fafafa] py-[80px] scroll-mt-[80px]">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="ml-0 lg:ml-[calc(33.33%-40px)]">
          <div className="flex flex-col gap-8 max-w-[700px]">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] leading-[1.15] text-[#26272b]">
                Users are moving onchain
              </h2>
              <p className="text-[20px] leading-[1.5] text-[#51525c]">
                Tokenization has exploded from a few hundred tokens to tens of millions across dozens of networks.
              </p>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[12px] flex gap-4 items-start p-5 border border-[#e4e4e7]"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#0052ff] flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px] leading-[1.4] text-[#26272b] font-medium">{benefit.title}</p>
                    <p className="text-[16px] leading-[1.5] text-[#51525c]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



