import { AlertTriangle, CheckCircle, Globe, MapPin } from "lucide-react"
import Image from "next/image"

interface BugReport {
  company: string
  companyNameAr: string
  type: "local" | "global"
  title: string
  titleAr: string
  severity: string
  description: string
  descriptionEn: string
  impact: string
  impactAr: string
  status: string
  logo: string
  reportImage?: string // Added optional reportImage field
}

interface BugReportsSectionProps {
  reports: BugReport[]
}

export function BugReportsSection({ reports }: BugReportsSectionProps) {
  const localReports = reports.filter((r) => r.type === "local")
  const globalReports = reports.filter((r) => r.type === "global")

  return (
    <div>
      <h2 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-foreground">CRITICAL</span>
        <br />
        <span className="text-muted-foreground">DISCOVERIES</span>
      </h2>

      <div className="mt-16 space-y-12">
        {/* Saudi Companies */}
        {localReports.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">شركات سعودية (Saudi Companies)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {localReports.map((report, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={report.logo || "/placeholder.svg"}
                        alt={report.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">{report.companyNameAr}</h4>
                      <p className="text-sm text-muted-foreground">{report.company}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full">
                          {report.severity}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-foreground mb-1">{report.titleAr}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{report.title}</p>
                    </div>

                    {report.reportImage && (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden border border-border/30 mb-3">
                        <Image
                          src={report.reportImage || "/placeholder.svg"}
                          alt={`${report.company} Report`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed">{report.description}</p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">{report.descriptionEn}</p>

                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-medium text-foreground mb-1">{report.impactAr}</p>
                      <p className="text-xs text-muted-foreground">{report.impact}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-500">{report.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Companies */}
        {globalReports.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">شركات عالمية (Global Companies)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {globalReports.map((report, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={report.logo || "/placeholder.svg"}
                        alt={report.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">{report.companyNameAr}</h4>
                      <p className="text-sm text-muted-foreground">{report.company}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-bold rounded-full">
                          {report.severity}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-foreground mb-1">{report.titleAr}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{report.title}</p>
                    </div>

                    {report.reportImage && (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden border border-border/30 mb-3">
                        <Image
                          src={report.reportImage || "/placeholder.svg"}
                          alt={`${report.company} Report`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed">{report.description}</p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">{report.descriptionEn}</p>

                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-medium text-foreground mb-1">{report.impactAr}</p>
                      <p className="text-xs text-muted-foreground">{report.impact}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-blue-500">{report.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
