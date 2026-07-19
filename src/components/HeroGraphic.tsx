import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

// A mouse-parallax wrapper around an animated, software-engineering-themed
// avatar: a pulsing code icon inside a slowly rotating orbit of nodes.
export default function HeroGraphic() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setOffset({
        x: ((e.clientX - cx) / cx) * 14,
        y: ((e.clientY - cy) / cy) * 14,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])


  return (
    <div
      ref={ref}
      className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.6s ease-out',
        willChange: 'transform',
      }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }}
      />

      {/* outer dashed ring, slowly rotating -- circuit/orbit motif */}
      <motion.div
        className="absolute inset-6 rounded-full"
        style={{ border: '1.5px dashed rgba(215,226,234,0.3)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      {/* inner solid ring, counter-rotating */}
      <motion.div
        className="absolute inset-16 rounded-full border border-mist/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {[
          { top: '2%', left: '50%' },
          { top: '74%', left: '91.6%' },
          { top: '74%', left: '8.4%' },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-mist"
            style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </motion.div>

      {/* central pulsing code icon */}
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{ width: '38%', height: '38%', background: 'rgba(21,27,36,0.6)', border: '1px solid rgba(215,226,234,0.25)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code2 className="text-mist" style={{ width: '42%', height: '42%' }} strokeWidth={1.5} />
      </motion.div>
    </div>
  )
}
