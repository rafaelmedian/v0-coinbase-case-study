import Image from "next/image"

interface ProductCardProps {
  id: string
  title: string
  subtitle: string
  bgColor: string
  textColor: string
  zIndex: number
  offset: number
}

function ProductCard({ id, title, subtitle, bgColor, textColor, zIndex, offset }: ProductCardProps) {
  return (
    <div
      id={id}
      className={`${bgColor} rounded-[20px] p-8 min-h-[400px] flex flex-col justify-between scroll-mt-[80px]`}
      style={{
        position: 'relative',
        marginTop: offset > 0 ? `-${340}px` : 0,
        marginLeft: `${offset}px`,
        zIndex,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Coinbase Icon */}
        <div className="w-[50px] h-[50px] rounded-[12px] bg-[#0052ff] flex items-center justify-center">
          <Image
            src="/images/coinbase-icon.svg"
            alt="Coinbase"
            width={30}
            height={30}
            className="brightness-0 invert"
          />
        </div>
        
        {/* Title */}
        <h3 className={`text-[28px] leading-[1.2] font-medium ${textColor}`}>
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className={`text-[18px] leading-[1.4] ${textColor} opacity-70`}>
          {subtitle}
        </p>
      </div>
      
      {/* Learn More Link */}
      <div className="flex items-center justify-between mt-auto pt-8">
        <a href="#" className={`text-[18px] ${textColor} hover:underline`}>
          Learn more
        </a>
        <svg
          className={`w-8 h-8 ${textColor}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export function AboutCoinbaseSection() {
  const productCards = [
    {
      id: "dex-trading",
      title: "DEX Trading",
      subtitle: "Powering onchain trades across Coinbase Exchange",
      bgColor: "bg-[#18181b]",
      textColor: "text-white",
    },
    {
      id: "base-app",
      title: "Base App",
      subtitle: "Powering onchain trades across Base",
      bgColor: "bg-[#a8c5ff]",
      textColor: "text-[#26272b]",
    },
    {
      id: "dev-platform",
      title: "Dev Platform",
      subtitle: "Powering onchain trades across CDP",
      bgColor: "bg-[#e8e0f5]",
      textColor: "text-[#26272b]",
    },
  ]

  return (
    <section id="about" className="bg-[#c8d4fa] rounded-tl-[32px] rounded-tr-[32px] py-[80px] scroll-mt-[80px]">
      <div className="ml-[calc(33.33%+48px)] mr-[80px] lg:mr-[132px]">
        <div className="flex flex-col gap-6 max-w-[700px]">
          {/* Coinbase Icon */}
          <div className="w-[60px] h-[60px] rounded-[16px] bg-[#0052ff] flex items-center justify-center">
            <Image
              src="/images/coinbase-icon.svg"
              alt="Coinbase"
              width={36}
              height={36}
              className="brightness-0 invert"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[40px] leading-[1.15] text-[#26272b]">
            The industry leader in crypto exchange and custody.
          </h2>

          {/* Description */}
          <div className="text-[20px] leading-[1.5] text-[#26272b]/80">
            <p className="mb-4">
              Coinbase is a U.S.-based cryptocurrency exchange and custodian that operates in 100+ countries and serves over{" "}
              <span className="font-semibold text-[#26272b]">120M total users</span>, with{" "}
              <span className="font-semibold text-[#26272b]">8.7M transacting each month</span>.
            </p>
            <p>
              Its reputation as the industry leader is built upon real-world utility and a trusted, easy-to-use experience. Today, Coinbase&apos;s onchain ecosystem includes three core products—all powered by 0x.
            </p>
          </div>
        </div>

        {/* Product Cards - Stacked/Overlapping */}
        <div className="mt-12 max-w-[600px]">
          {productCards.map((card, index) => (
            <ProductCard
              key={card.id}
              {...card}
              zIndex={productCards.length - index}
              offset={index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  )
}



