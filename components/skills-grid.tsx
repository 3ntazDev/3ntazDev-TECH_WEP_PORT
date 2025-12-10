import Image from "next/image"

interface Skill {
  name: string
  icon: string
}

interface SkillsData {
  qaSkills: Skill[]
  qaTools: Skill[]
  businessAnalysis: Skill[]
  programming: Skill[]
  databases: Skill[]
}

interface SkillsGridProps {
  skills: SkillsData
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const categories = [
    { title: "QA Skills", items: skills.qaSkills },
    { title: "QA Tools", items: skills.qaTools },
    { title: "Business Analysis", items: skills.businessAnalysis },
    { title: "Programming", items: skills.programming },
    { title: "Databases", items: skills.databases },
  ]

  return (
    <div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        <span className="text-foreground">PREMIUM</span>
        <br />
        <span className="text-muted-foreground">TOOLS</span>
      </h2>

      <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {category.items.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-center text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
