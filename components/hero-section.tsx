import { Layers, Briefcase } from "lucide-react"

interface HeroSectionProps {
  title: string
  titleSecondary: string
  description: string
  stats: {
    experience: { value: string; label: string; sublabel: string }
    projects: { value: string; label: string; sublabel: string }
    certifications: { value: string; label: string; sublabel: string }
  }
  skillCards: Array<{
    icon: string
    color: string
    title: string
    subtitle: string
  }>
}

export function HeroSection({ title, titleSecondary, description, stats, skillCards }: HeroSectionProps) {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Title */}
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none text-balance">
          <span className="text-primary">{title}</span>
          <br />
          <span className="text-muted-foreground">{titleSecondary}</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{stats.experience.value}</div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.experience.label}
            <br />
            {stats.experience.sublabel}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{stats.projects.value}</div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.projects.label}
            <br />
            {stats.projects.sublabel}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{stats.certifications.value}</div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wide">
            {stats.certifications.label}
            <br />
            {stats.certifications.sublabel}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {/* Added glass effect and enhanced shadows to skill cards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20">
          <div className="mb-4 sm:mb-6">
            <Layers className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wide">{skillCards[0].title}</div>
          <div className="text-[10px] sm:text-xs mt-2 opacity-90 uppercase tracking-wide">{skillCards[0].subtitle}</div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-lime-400 to-lime-500 text-black shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20">
          <div className="mb-4 sm:mb-6">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wide">{skillCards[1].title}</div>
          <div className="text-[10px] sm:text-xs mt-2 opacity-90 uppercase tracking-wide">{skillCards[1].subtitle}</div>
        </div>
      </div>
    </div>
  )
}
