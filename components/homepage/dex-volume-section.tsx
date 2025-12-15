export function DexVolumeSection() {
  return (
    <section id="opportunity" className="bg-white rounded-tl-[32px] rounded-tr-[32px] overflow-hidden h-[754px] scroll-mt-[50px]">
      <div className="ml-[calc(41.67%+43px)] mr-[132px] pt-[76px]">
        <div className="flex flex-col gap-8">
          <h2 className="text-[44px] leading-[1.2] text-[#161719]">
            DEX volume is surging as users route around exchanges that can&apos;t keep up
          </h2>
          <p className="text-[22px] leading-[1.35] text-[#161719]">
            The missing piece? Enterprise-grade swap infrastructure that keeps up with onchain markets and meets demands for reliability, speed, and security.
          </p>
        </div>

        {/* Challenge/Opportunity blocks */}
        <div className="mt-[80px]">
          <div className="text-[22px] leading-[1.35] text-black w-[709px]">
            <p className="mb-0 font-medium">The Challenge</p>
            <p>Users churn for DEXs to chase long-tail tokens that exchanges can&apos;t list or support at onchain speed.</p>
          </div>
        </div>

        <div className="mt-[54px]">
          <div className="text-[22px] leading-[1.35] text-black">
            <p className="mb-0 font-medium">The Opportunity</p>
            <p>Bring onchain markets into your app instead of competing with them.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
