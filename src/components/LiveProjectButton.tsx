export default function LiveProjectButton({
  href = '#',
  label = 'Live Project',
  download = false,
}: {
  href?: string
  label?: string
  download?: boolean
}) {
  return (
    <a
      href={href}
      download={download}
      target={!download && href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-mist/10 transition-colors whitespace-nowrap"
    >
      {label}
    </a>
  )
}
