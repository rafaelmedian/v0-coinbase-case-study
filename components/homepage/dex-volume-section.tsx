export function DexVolumeSection() {
  return (
    <section id="opportunity" className="bg-white py-[80px] scroll-mt-[80px]">
      <div className="px-6 md:px-[80px] lg:px-[132px]">
        <div className="ml-0 lg:ml-[calc(33.33%-40px)]">
          <div className="flex flex-col gap-8 max-w-[700px]">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] leading-[1.15] text-[#26272b]">
                DEX volume is surging as users route around exchanges that can&apos;t keep up
              </h2>
              <p className="text-[20px] leading-[1.5] text-[#51525c]">
                The missing piece? Enterprise-grade swap infrastructure that keeps up with onchain markets and meets demands for reliability, speed, and security.
              </p>
            </div>

            {/* Challenge/Opportunity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#fef2f2] rounded-[16px] p-6">
                <p className="text-[14px] uppercase tracking-[0.05em] text-[#dc2626] font-medium mb-3">The Challenge</p>
                <p className="text-[18px] leading-[1.5] text-[#26272b]">
                  Users churn for DEXs to chase long-tail tokens that exchanges can&apos;t list or support at onchain speed.
                </p>
              </div>
              <div className="bg-[#eff6ff] rounded-[16px] p-6">
                <p className="text-[14px] uppercase tracking-[0.05em] text-[#0052ff] font-medium mb-3">The Opportunity</p>
                <p className="text-[18px] leading-[1.5] text-[#26272b]">
                  Bring onchain markets into your app instead of competing with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



