import FadeIn from './FadeIn'
import SkillRing from './SkillRing'
import { technicalSkills } from '../data/content'

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="bg-ink-glow px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Technical Skills
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {technicalSkills.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 0.08} y={20}>
            <SkillRing name={skill.name} level={skill.level} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
