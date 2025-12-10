interface StatsSectionProps {
  stats: {
    projects: number
    certifications: number
    experience: number
  }
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {/* Projects */}
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-foreground">+{stats.projects}</span>
        <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
      </div>

      {/* Certifications */}
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-foreground">+{stats.certifications}</span>
        <span className="text-sm text-muted-foreground uppercase tracking-wider">Certs</span>
      </div>

      {/* Experience */}
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-foreground">+{stats.experience}</span>
        <span className="text-sm text-muted-foreground uppercase tracking-wider">Years</span>
      </div>
    </div>
  )
}
