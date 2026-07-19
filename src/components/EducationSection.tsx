import FadeIn from './FadeIn'
import { education } from '../data/content'

export default function EducationSection() {
  return (
    <section id="education" className="bg-ink-glow px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {education.map((item, i) => (
          <FadeIn key={item.institution} delay={i * 0.1} y={20}>
            <div className="rounded-[30px] sm:rounded-[40px] border-2 border-mist p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-mist font-medium uppercase" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.8rem)' }}>
                    {item.degree}
                  </h3>
                  <p className="text-mist/60 font-light text-sm sm:text-base mt-1">{item.institution}</p>
                </div>
                <span className="rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest px-4 py-1.5 text-xs sm:text-sm whitespace-nowrap">
                  {item.level}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6" style={{ borderTop: '1px solid rgba(215,226,234,0.15)' }}>
                <div>
                  <p className="text-mist/50 uppercase tracking-widest text-[10px] sm:text-xs mb-1">Period</p>
                  <p className="text-mist text-sm sm:text-base">{item.period}</p>
                </div>
                {item.gpa ? (
                  <div>
                    <p className="text-mist/50 uppercase tracking-widest text-[10px] sm:text-xs mb-1">CGPA</p>
                    <p className="text-mist text-sm sm:text-base">{item.gpa} / 4.0</p>
                  </div>
                ) : (
                  item.detail && (
                    <div>
                      <p className="text-mist/50 uppercase tracking-widest text-[10px] sm:text-xs mb-1">Detail</p>
                      <p className="text-mist text-sm sm:text-base">{item.detail}</p>
                    </div>
                  )
                )}
              </div>
              {item.gpa && item.detail && (
                <p className="text-mist/50 text-xs sm:text-sm mt-4">{item.detail}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
