import Link from 'next/link'
import { Button } from '@/components/ui/button'

type NavigationProps = {
  activePage?: 'retail-dex' | 'base-app' | 'developer-platform'
}

export default function Navigation({ activePage }: NavigationProps) {
  return (
    <header className="border-b px-6 py-4" style={{ borderColor: '#e5e5e5' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: '#000000' }}>0x</span>
          <span style={{ color: '#d9d9d9' }}>|</span>
          <span className="text-2xl font-semibold" style={{ color: '#0052ff' }}>coinbase</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/retail-dex" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#5d5d5d' }}>
            {activePage === 'retail-dex' && (
              <span className="inline-block h-2 w-2" style={{ backgroundColor: '#0052ff' }}></span>
            )}
            RETAIL DEX
          </Link>
          <Link href="/base-app" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#5d5d5d' }}>
            {activePage === 'base-app' && (
              <span className="inline-block h-2 w-2" style={{ backgroundColor: '#0052ff' }}></span>
            )}
            BASE APP
          </Link>
          <Link href="/developer-platform" className="flex items-center gap-2 text-sm font-medium" style={{ color: '#5d5d5d' }}>
            {activePage === 'developer-platform' && (
              <span className="inline-block h-2 w-2" style={{ backgroundColor: '#0052ff' }}></span>
            )}
            DEVELOPER PLATFORM
          </Link>
        </nav>

        <Link href="/">
          <Button variant="outline" className="border text-sm font-medium" style={{ borderColor: '#1d1d1d', color: '#1d1d1d' }}>
            START BUILDING
          </Button>
        </Link>
      </div>
    </header>
  )
}
