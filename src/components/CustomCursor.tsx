import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor hidden md:block"
        style={{ width: 6, height: 6, borderRadius: '50%', background: '#D7E2EA' }}
      />
      <div
        ref={ringRef}
        className="custom-cursor hidden md:flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          border: `1px solid ${hovering ? '#D7E2EA' : 'rgba(215,226,234,0.35)'}`,
          backgroundColor: hovering ? 'rgba(215,226,234,0.08)' : 'transparent',
        }}
      />
    </>
  )
}
