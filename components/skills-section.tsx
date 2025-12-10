import Image from "next/image"
import { Card } from "@/components/ui/card"

interface SkillsSectionProps {
  skills: {
    qa: Array<{ name: string; icon: string }>
    tools: Array<{ name: string; icon: string }>
    programming: Array<{ name: string; icon: string }>
    databases: Array<{ name: string; icon: string }>
  }
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold">Technical Skills</h2>

      {/* QA Skills */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-primary"></div>
          <h3 className="text-xl font-bold text-primary">Quality Assurance</h3>
          <div className="h-px flex-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.qa.map((skill, index) => (
            <Card key={index} className="p-4 text-center hover:border-primary transition-colors group">
              <div className="space-y-3">
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{skill.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-secondary"></div>
          <h3 className="text-xl font-bold text-secondary">Testing Tools</h3>
          <div className="h-px flex-1 bg-secondary"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.tools.map((tool, index) => (
            <Card key={index} className="p-4 text-center hover:border-secondary transition-colors group">
              <div className="space-y-3">
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Programming */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-accent"></div>
          <h3 className="text-xl font-bold text-accent-foreground">Programming Languages</h3>
          <div className="h-px flex-1 bg-accent"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.programming.map((lang, index) => (
            <Card key={index} className="p-4 text-center hover:border-accent transition-colors group">
              <div className="space-y-3">
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={lang.icon || "/placeholder.svg"}
                    alt={lang.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{lang.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-chart-4"></div>
          <h3 className="text-xl font-bold text-foreground">Databases</h3>
          <div className="h-px flex-1 bg-chart-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.databases.map((db, index) => (
            <Card key={index} className="p-4 text-center hover:border-chart-4 transition-colors group">
              <div className="space-y-3">
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={db.icon || "/placeholder.svg"}
                    alt={db.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{db.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
