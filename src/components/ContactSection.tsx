import { useState } from 'react'
import FadeIn from './FadeIn'
import { Mail, Phone, MessageCircle, Linkedin, Github, Copy, Check } from 'lucide-react'
import { profile } from '../data/content'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const whatsappHref = `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`

  const cards = [
    { key: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { key: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
    { key: 'whatsapp', label: 'WhatsApp', value: profile.whatsapp, href: whatsappHref, Icon: MessageCircle },
    { key: 'linkedin', label: 'LinkedIn', value: 'malik-idrees', href: profile.linkedin, Icon: Linkedin },
    { key: 'github', label: 'GitHub', value: 'Idreessofteng', href: profile.github, Icon: Github },
  ]

  return (
    <section id="contact" className="bg-ink-glow px-5 sm:px-8 md:px-10 py-24 sm:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-4"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-mist/60 text-center max-w-md mx-auto mb-12 sm:mb-16">
          Have an opportunity, an internship, or just want to talk about AI? I'm always glad to hear from people building things.
        </p>
      </FadeIn>

      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 mb-8">
        {cards.map(({ key, label, value, href, Icon }, i) => (
          <FadeIn key={key} delay={i * 0.08} y={20}>
            <a
              href={href}
              target={key === 'linkedin' || key === 'whatsapp' || key === 'github' ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-[24px] border-2 border-mist/40 p-5 hover:border-mist transition-colors"
            >
              <Icon className="text-mist" size={20} />
              <div>
                <p className="text-mist/50 uppercase tracking-widest text-[10px] mb-0.5">{label}</p>
                <p className="text-mist text-sm sm:text-base">{value}</p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full border-2 border-mist/40 text-mist/70 font-medium uppercase tracking-widest px-5 py-2.5 text-xs hover:border-mist hover:text-mist transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied' : 'Copy Email Address'}
        </button>
      </div>
    </section>
  )
}
