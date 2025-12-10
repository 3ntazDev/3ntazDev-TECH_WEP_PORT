import Image from "next/image"
import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

interface EducationSectionProps {
  education: {
    institution: string
    institutionAr: string
    location: string
    degree: string
    degreeAr: string
    period: string
    gpa?: string
    logo: string
  }
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <GraduationCap className="w-8 h-8 text-primary" />
        <h2 className="text-5xl font-bold">
          EDUCATION
          <span className="block text-4xl text-muted-foreground mt-2">التعليم</span>
        </h2>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
        <div className="flex items-start gap-6">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-white flex-shrink-0 p-2">
            <Image
              src={education.logo || "/placeholder.svg"}
              alt={education.institution}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{education.institution}</h3>
              <p className="text-lg text-muted-foreground mt-1" dir="rtl">
                {education.institutionAr}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary">{education.degree}</p>
              <p className="text-base text-muted-foreground" dir="rtl">
                {education.degreeAr}
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{education.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{education.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
