import { useEffect, useRef, useState } from 'react'
import { marqueeSkills } from '../data/content'

const row1 = marqueeSkills.slice(0, 7)
const row2 = marqueeSkills.slice(7)
const tripled = (arr: string[]) => [...arr, ...arr, ...arr]

function Tile({ label }: { label: string }) {
  return (
    <div
      className="shrink-0 rounded-2xl border border-mist/15 flex items-center justify-center px-8"
      style={{ width: 220, height: 130, background: '#131313' }}
    >
      <span className="text-mist font-medium uppercase tracking-wider text-center text-sm sm:text-base">{label}</span>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const value = (window.scrollY - top + window.innerHeight) * 0.3
      setOffset(value)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-ink-glow pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex gap-3 mb-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>
        {tripled(row1).map((label, i) => (
          <Tile key={`r1-${i}`} label={label} />
        ))}
      </div>
      <div className="flex gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}>
        {tripled(row2).map((label, i) => (
          <Tile key={`r2-${i}`} label={label} />
        ))}
      </div>
    </section>
  )
}
