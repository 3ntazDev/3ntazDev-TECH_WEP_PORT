import { Card } from "@/components/ui/card"
import { GitBranch, CheckCircle } from "lucide-react"

interface ContributionsSectionProps {
  contributions: Array<{
    title: string
    repo: string
    description: string
    status: string
    date: string
    link: string
  }>
}

export function ContributionsSection({ contributions }: ContributionsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <GitBranch className="w-8 h-8 text-primary" />
        <h2 className="text-5xl font-bold">
          GITHUB
          <span className="block text-4xl text-muted-foreground mt-2">CONTRIBUTIONS</span>
        </h2>
      </div>

      <div className="grid gap-6">
        {contributions.map((contribution, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {contribution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{contribution.repo}</p>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">{contribution.description}</p>

                <div className="flex items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {contribution.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{contribution.date}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
