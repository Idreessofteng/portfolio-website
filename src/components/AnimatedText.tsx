import { useRef } from 'react'
import type React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Char({ char, progress, index, total }: { char: string; progress: any; index: number; total: number }) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>{char}</motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className = '', style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <Char key={i} char={c === ' ' ? '\u00A0' : c} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  )
}
