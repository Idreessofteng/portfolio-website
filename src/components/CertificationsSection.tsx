import FadeIn from './FadeIn'
import { certifications } from '../data/content'
import { Award } from 'lucide-react'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-ink-glow px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {certifications.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 0.1} y={20}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] sm:rounded-[30px] border-2 border-mist p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <Award className="text-mist shrink-0" size={22} />
                <div>
                  <h3 className="text-mist font-medium uppercase text-sm sm:text-base">{cert.title}</h3>
                  <p className="text-mist/50 text-xs sm:text-sm mt-1">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest px-6 py-2 text-xs sm:text-sm whitespace-nowrap hover:bg-mist/10 transition-colors"
              >
                View Certificate
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
