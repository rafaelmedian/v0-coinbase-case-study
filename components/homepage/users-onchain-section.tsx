export function UsersOnchainSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#252629" strokeWidth={2}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Find newly launched assets in seconds, not weeks",
      description: "Access tokens the moment they launch onchain"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#252629" strokeWidth={2}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Access DeFi without giving up self-custody",
      description: "Full control of assets while using advanced tools"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#252629" strokeWidth={2}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8v4M12 16h.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Participate in SocialFi and creator economies",
      description: "New economic models built on tokenization"
    }
  ]

  return (
    <section id="shift" className="bg-[#fafafa] py-[76px]">
      <div className="ml-[calc(41.67%+43px)] mr-[132px]">
        <div className="flex flex-col gap-8 items-end max-w-[705px]">
          {/* Header */}
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-[44px] leading-[1.2] text-[#161719]">
              Users are moving onchain
            </h2>
            <p className="text-[22px] leading-[1.35] text-[#252629]">
              Tokenization has exploded from a few hundred tokens to tens of millions across dozens of networks.
            </p>
          </div>

          {/* Benefits list */}
          <div className="flex flex-col gap-4 w-full rounded-[8px] py-[6px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white flex gap-6 items-start px-4 py-[26px]"
              >
                <div className="shrink-0 w-8 h-8">
                  {benefit.icon}
                </div>
                <div className="flex flex-col text-[22px] leading-[1.35] text-[#252629] w-[578px]">
                  <p className="mb-0">{benefit.title}</p>
                  <p className="text-[rgba(37,38,41,0.6)]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
