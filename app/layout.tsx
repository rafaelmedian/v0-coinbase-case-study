import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://0x-coinbase.vercel.app'),
  title: 'ZeroEx | Coinbase Case Study',
  description: 'Discover how 0x has become a major strategic partner with Coinbase, powering end-to-end onchain swap infrastructure from DEX trading to the Coinbase Developer Platform.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ZeroEx | Coinbase Case Study',
    description: 'Discover how 0x has become a major strategic partner with Coinbase, powering end-to-end onchain swap infrastructure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroEx | Coinbase Case Study',
    description: 'Discover how 0x has become a major strategic partner with Coinbase, powering end-to-end onchain swap infrastructure.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
