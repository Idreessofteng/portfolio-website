export default function SkillRing({ name, level }: { name: string; level: number }) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <div className="rounded-2xl border border-mist/15 bg-white/[0.03] hover:border-mist/40 transition-colors flex flex-col items-center justify-center gap-3 py-8 px-4">
      <div className="relative flex items-center justify-center" style={{ width: 88, height: 88 }}>
        <svg width="88" height="88" viewBox="0 0 88 88" className="-rotate-90">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(215,226,234,0.12)" strokeWidth="7" />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="#2563EB"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute font-medium text-mist" style={{ fontSize: 15 }}>
          {level}%
        </span>
      </div>
      <p className="text-mist font-medium uppercase tracking-wide text-sm">{name}</p>
    </div>
  )
}
