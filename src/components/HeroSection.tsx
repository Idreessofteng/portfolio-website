import Navbar from './Navbar'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import LiveProjectButton from './LiveProjectButton'
import HeroGraphic from './HeroGraphic'
import { profile } from '../data/content'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col relative bg-ink-glow" style={{ overflowX: 'clip' }}>
      <Navbar />

      <FadeIn delay={0.05} y={-10} className="px-6 md:px-10 mt-4 sm:mt-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center md:justify-start">
          <span className="text-mist/70 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            {profile.title}
          </span>
          <span className="text-mist/30 hidden sm:inline">·</span>
          <span className="text-mist/70 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            {profile.city}, {profile.country}
          </span>
        </div>
      </FadeIn>

      <div className="flex-1 flex flex-col-reverse md:flex-row md:items-start gap-8 md:gap-10 px-6 md:px-10 py-8 md:py-10">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="overflow-hidden">
            <FadeIn delay={0.15} y={40}>
              <h1
                className="hero-heading font-black uppercase tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                Hi, i&apos;m {profile.fullName}
              </h1>
            </FadeIn>
          </div>

          <FadeIn delay={0.35} y={20} className="mt-5 sm:mt-6">
            <p
              className="text-mist font-light uppercase tracking-wide leading-snug max-w-[320px] sm:max-w-[380px]"
              style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.15rem)' }}
            >
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} className="mt-7 sm:mt-8">
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <LiveProjectButton href={profile.resumeUrl} label="Resume" download />
              <ContactButton />
            </div>
          </FadeIn>
        </div>

        <div className="flex justify-center md:justify-end shrink-0">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}
