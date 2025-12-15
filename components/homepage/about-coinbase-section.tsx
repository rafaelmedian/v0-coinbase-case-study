import Image from "next/image"

export function AboutCoinbaseSection() {
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
      </div>
    </section>
  )
}
