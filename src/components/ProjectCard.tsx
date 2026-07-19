import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Github, ExternalLink } from 'lucide-react'

interface Project {
  number: string
  category: string
  name: string
  stack: string
  description: string
  codeUrl?: string
  demoUrl?: string
}

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh] sticky flex items-start justify-center" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-mist bg-ink p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-mist font-black" style={{ fontSize: 'clamp(2rem, 6vw, 90px)' }}>
              {project.number}
            </span>
            <div>
              <p className="text-mist/60 font-medium uppercase tracking-widest text-xs sm:text-sm mb-1">
                {project.category}
              </p>
              <h3 className="text-mist font-medium uppercase" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.4rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <span className="inline-flex items-center rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest px-6 py-2 text-xs sm:text-sm whitespace-nowrap">
              {project.stack}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.codeUrl || '#'}
                target={project.codeUrl ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-mist/20 text-mist font-medium text-xs sm:text-sm px-5 py-2.5 hover:bg-white/15 transition-colors"
                title={project.codeUrl ? 'View source code' : 'Add your GitHub link in content.ts'}
              >
                <Github size={15} /> Code
              </a>
              <a
                href={project.demoUrl || '#'}
                target={project.demoUrl ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full text-white font-medium text-xs sm:text-sm px-5 py-2.5 transition-opacity hover:opacity-90"
                style={{ background: '#2563EB' }}
                title={project.demoUrl ? 'View live demo' : 'Add your demo link in content.ts'}
              >
                <ExternalLink size={15} /> Demo
              </a>
            </div>
          </div>
        </div>

        <div
          className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-mist/20 flex flex-col items-center justify-center gap-4 px-6 text-center"
          style={{ height: 'clamp(190px, 26vw, 320px)', background: '#131313' }}
        >
          <Code2 className="text-mist/50" size={40} />
          <p className="text-mist/70 max-w-md text-sm sm:text-base leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </div>
  )
}
