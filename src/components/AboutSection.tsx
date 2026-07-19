import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import { about } from '../data/content'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative bg-ink-glow"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-3xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={about.intro}
          className="text-mist font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <div className="w-full flex flex-col gap-8 sm:gap-10">
          {about.qa.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.08} y={20}>
              <div className="border-l-2 border-mist/25 pl-5 sm:pl-6">
                <p className="text-mist font-medium uppercase tracking-wide text-sm sm:text-base mb-2">
                  {item.q}
                </p>
                <p className="text-mist/60 font-light leading-relaxed text-sm sm:text-base">
                  {item.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
