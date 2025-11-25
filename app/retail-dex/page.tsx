import Navigation from '@/components/navigation'

export default function RetailDexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="retail-dex" />
      
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex min-h-[60vh] items-center justify-center">
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl" style={{ color: '#1d1d1d' }}>
            Retail DEX
          </h1>
        </div>
      </main>
    </div>
  )
}
