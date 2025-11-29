import Navigation from "@/components/navigation"
import { ContentSection } from "@/components/ui/content-section"
import { Footer } from "@/components/ui/footer"
import { HeroNavigationCards } from "@/components/ui/hero-nav-cards"
import { DottedPattern } from "@/components/ui/dotted-pattern"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Two column layout with dotted pattern on right */}
      <section className="relative px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-20)] md:py-[var(--section-padding)] overflow-hidden">
        {/* Dotted Pattern - positioned on the right */}
        <div className="hidden lg:block absolute top-[50px] right-[-200px] xl:right-[-100px] w-[700px] xl:w-[900px] h-[700px] xl:h-[900px]">
          <DottedPattern className="w-full h-full" />
        </div>

        <div className="relative z-10">
          <h1 className="mb-12 text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] text-headline">
            <span className="text-[var(--text-primary)]">Delivering end-to-end</span>
            <br />
            <span className="text-[var(--color-brand)]">onchain swap infrastructure</span>
            <br />
            <span className="text-[var(--text-primary)]">with Coinbase</span>
          </h1>

          <p className="max-w-[750px] text-[var(--text-lg)] leading-[var(--leading-normal)] text-[var(--text-secondary)] text-body">
            Discover how 0x has become a major strategic partner with Coinbase, powering an end-to-end onchain trading
            experience with core infrastructure at every layer of the stack - from DEX trading to the Coinbase Developer
            Platform.
          </p>
        </div>
      </section>

      {/* Hero Navigation Cards - Full width */}
      <HeroNavigationCards className="w-full" />

      {/* Stats Section - Full width */}
      <section className="px-[var(--grid-padding)] lg:px-[var(--grid-padding-lg)] py-[var(--space-16)]">
        <div className="relative">
          {/* Subtle divider line between cards on desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[var(--border-light)] to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-card)] p-10 md:p-14 rounded-[24px]">
              <p className="text-[clamp(4rem,12vw,7rem)] text-display text-[var(--text-primary)]">$8B</p>
              <p className="text-[var(--text-md)] text-[var(--text-muted)] mt-2">in onchain volume</p>
            </div>
            <div className="bg-[var(--bg-card)] p-10 md:p-14 rounded-[24px]">
              <p className="text-[clamp(4rem,12vw,7rem)] text-display text-[var(--text-primary)]">422m</p>
              <p className="text-[var(--text-md)] text-[var(--text-muted)] mt-2">total transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Coinbase Section */}
      <ContentSection label="About Coinbase" className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          Founded in 2012, Coinbase is a U.S.-based cryptocurrency exchange and custodian that has grown into one of
          the world's leading digital asset platforms. Publicly listed and operating in over 100 countries, Coinbase
          serves as a key platform for both retail and institutional participants in crypto.
        </p>
        <p>
          With over 120 million total users and 8.7 million monthly transacting users, Coinbase has become an
          industry leader in Web3 by building products with real-world utility and best-in-class user experience.
          Coinbase offers a wide portfolio of cryptocurrency products and services - including DEX trading through
          its retail app, an all-new onchain experience with the Base App, and an all-in-one developer toolkit for
          builders.
        </p>
      </ContentSection>

      {/* Quote Section */}
      <ContentSection showBorder={false}>
        <div className="relative">
          {/* Large decorative quote mark */}
          <span className="quote-mark">"</span>
          <blockquote className="relative">
            <p className="text-[var(--text-2xl)] md:text-[var(--text-3xl)] leading-[var(--leading-snug)] font-normal text-[var(--text-primary)] mb-10">
              0x has one of the most extensive and reliable DEX API services in the Web3 ecosystem.
            </p>
            <footer>
              <div className="w-16 h-1 bg-[var(--color-brand)] mb-5 rounded-full"></div>
              <cite className="not-italic">
                <span className="block text-[var(--text-base)] font-medium text-[var(--text-primary)]">Name</span>
                <span className="block text-[var(--text-sm)] text-[var(--text-muted)] mt-1">Role at Company</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </ContentSection>

      {/* Enterprise-grade infrastructure Section */}
      <ContentSection label="Infrastructure" showBorder={false}>
        <h3 className="text-caption text-[var(--text-muted)] mb-10">Enterprise-grade infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px]">
            <div className="h-3 w-3 bg-[var(--color-brand)] mb-8 rounded-sm"></div>
            <p className="text-[var(--text-5xl)] text-display text-[var(--text-primary)]">
              {"<500"}
              <span className="text-[var(--text-2xl)]">ms</span>
            </p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">median response rate</p>
          </div>
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px]">
            <div className="h-3 w-full bg-gradient-to-r from-[var(--color-brand)] via-[#00cc88] to-[#00cc88] mb-8 rounded-full"></div>
            <p className="text-[var(--text-5xl)] text-display text-[var(--text-primary)]">99.9%</p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">uptime</p>
          </div>
          <div className="bg-[var(--bg-card)] p-8 md:p-10 rounded-[20px]">
            <div className="h-3 mb-8"></div>
            <p className="text-[var(--text-5xl)] text-display text-[var(--text-primary)]">4.4%</p>
            <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-4">revert rates</p>
          </div>
        </div>
      </ContentSection>

      {/* The Story Section */}
      <ContentSection label="The Story" className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          When Coinbase launched in 2012, its mission was bold but simple: create an open financial system for the
          world. What began as an exchange for buying and selling Bitcoin quickly grew to become one of the world's
          leading digital asset platforms. Over the next decade, it expanded its reach - adding new assets,
          improving fiat rails, and building one of the industry's most recognizable brands around ease-of-use,
          safety, and compliance.
        </p>
        <p>
          As a result, Coinbase rapidly scaled to over 120 million users, becoming the #1 exchange in the U.S. But
          over that time, the market has evolved. Tokenization exploded - from a few hundred tokens in 2017 to tens
          of millions across dozens of networks now - fueled first by ICOs and more recently by stablecoins and
          memecoins. Users began moving onchain to access new assets and experiences, with monthly DEX volume
          surging to $500 billion.
        </p>
        <p>
          With onchain activity surging, a new challenge emerged. Coinbase's success was built on being a trusted
          custodian and regulated exchange - but that same model constrained its ability to list and support new
          tokens at onchain speed.
        </p>
        <p>
          As users increasingly turned to DEX platforms to access new tokens and DeFi tools, Coinbase needed to
          offer the same availability and speed of newly launched tokens as onchain venues, as well as a low-cost,
          developer-friendly platform for its onchain products. To serve them, Coinbase evolved again: bringing the
          power of onchain markets directly into its ecosystem.
        </p>
        <p>
          This evolution marks a broader shift happening across the industry, with centralized exchanges beginning
          to bridge the gap with DeFi.
        </p>
        <p className="font-medium text-[var(--text-primary)]">Three key opportunities emerged:</p>
      </ContentSection>

      {/* Key Opportunities Section */}
      <ContentSection showBorder={false} className="space-y-12">
        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">1. Expand access to millions of tokens</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            by bringing DEX trading to the Coinbase App, allowing users to swap any token instantly from within a
            unified interface.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">2. Reimagine the onchain experience</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            through the Base App - an all-in-one platform uniting social, payments, and DeFi activity, where every
            post and creator becomes a tradable asset.
          </p>
        </div>

        <div>
          <h3 className="text-[30px] leading-[1.25] font-normal mb-4">
            <span className="text-[var(--color-brand)]">3. Empower builders</span>
          </h3>
          <p className="text-[22px] leading-[1.4] text-[var(--text-secondary)]">
            via the Coinbase Developer Platform (CDP), providing developers with everything they need to build great
            apps on Base.
          </p>
        </div>
      </ContentSection>

      {/* Closing Paragraphs Section */}
      <ContentSection showBorder={false} className="space-y-6 text-[22px] leading-[1.4] text-[var(--text-secondary)]">
        <p>
          And what unites all of these initiatives is tokens. No matter what you're building onchain, sooner or
          later you'll need to swap tokens. Swaps are the foundation of the onchain economy, from simple trades
          within wallets to powering more advanced functionality within DeFi apps.
        </p>
        <p>
          But building enterprise-grade swaps is hard. This explosion of tokens and DEXs has brought complexity to
          DEX routing, with a vast array of different token behaviors, liquidity models, and chain architectures to
          solve for. Delivering swaps at enterprise-scale and reliability requires deep expertise in DEX routing,
          liquidity and aggregation.
        </p>
        <p>
          With nearly a decade of experience building DEX infrastructure, Coinbase partnered with 0x to meet this
          challenge - helping power its onchain expansion with end-to-end onchain trading infrastructure at every
          layer of the stack; from DEX trading for millions of tokens in the Coinbase App to custom integrations to
          power an all-new social experience in the Base App.
        </p>
        <p>
          In this case study, we will dive deep into how Coinbase is bridging the gap from CeFi to DeFi and
          unlocking a new onchain era for its users and developer network.
        </p>
      </ContentSection>

      {/* Navigation Cards Section - positioned right above footer */}
      <HeroNavigationCards className="w-full" />

      {/* Footer - seamlessly connected to Developer Platform card */}
      <Footer className="-mt-10" />
    </div>
  )
}
