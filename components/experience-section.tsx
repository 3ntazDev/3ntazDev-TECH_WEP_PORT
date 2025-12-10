import { Card } from "@/components/ui/card"

interface ExperienceSectionProps {
  experience: Array<{
    company: string
    location: string
    position: string
    period: string
    responsibilities: string[]
  }>
  education: {
    university: string
    degree: string
    period: string
    location: string
  }
}

export function ExperienceSection({ experience, education }: ExperienceSectionProps) {
  return (
    <div id="experience" className="space-y-8">
      <h2 className="text-4xl font-bold">
        {experience[0].period.split("–")[0].split(" ")[1]} YEARS OF{" "}
        <span className="text-muted-foreground">EXPERIENCE</span>
      </h2>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card key={index} className="p-6 hover:border-primary transition-colors">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                  <p className="text-muted-foreground mt-1">{exp.position}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}

        {/* Education */}
        <Card className="p-6 bg-muted/50">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{education.university}</h3>
            <p className="text-muted-foreground">{education.degree}</p>
            <p className="text-sm text-muted-foreground">{education.period}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
