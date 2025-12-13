import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '0x + Coinbase Case Study'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Top gradient accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            display: 'flex',
          }}
        >
          <div style={{ flex: 1, backgroundColor: '#0052ff' }} />
          <div style={{ flex: 1, backgroundColor: '#8F5AF4' }} />
          <div style={{ flex: 1, backgroundColor: '#01A74D' }} />
          <div style={{ flex: 1, backgroundColor: '#AF974B' }} />
          <div style={{ flex: 1, backgroundColor: '#CA2240' }} />
        </div>

        {/* Logo row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#26272b',
            }}
          >
            0x
          </span>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 300,
              color: '#d1d1d6',
            }}
          >
            +
          </span>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#0052ff',
            }}
          >
            Coinbase
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flex: 1,
          }}
        >
          <span
            style={{
              fontSize: '72px',
              fontWeight: 500,
              color: '#26272b',
              lineHeight: 1.1,
            }}
          >
            Powering the next billion
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 500,
              color: '#0052ff',
              lineHeight: 1.1,
            }}
          >
            onchain users
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#0052ff',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              fontSize: '24px',
              fontWeight: 400,
              color: '#71717a',
            }}
          >
            Case Study: End-to-end onchain swap infrastructure
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}






