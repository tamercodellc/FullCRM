import { Building2, CircleDot, CircleOff, CircleDashed } from "lucide-react"
import { Icon } from "../../../../components/ui/icon"
import { Card, CardContent } from "../../../../components/ui/card"
import { CompanyTable } from "./company-table"

export function CompanyList() {
  const stats = [
    {
      title: "Total",
      value: "1500",
      icon: Building2
    },
    {
      title: "Active",
      value: "950",
      icon: CircleDot
    },
    {
      title: "Inactive",
      value: "3130",
      icon: CircleOff
    },
    {
      title: "Onboarding",
      value: "251",
      icon: CircleDashed
    }
  ]

  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="flex items-center gap-4 p-6 bg-sidebar text-sidebar-foreground">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Icon icon={stat.icon} size="sm" />
              </div>
              <div>
                <p className="text-sm font-medium text-sidebar-foreground/70">
                  {stat.title}
                </p>
                <h2 className="text-2xl font-bold text-sidebar-foreground">{stat.value}</h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 min-h-[calc(100vh-13rem)] flex-1 rounded-xl bg-background p-6 md:min-h-[calc(100vh-13rem)]">
        <CompanyTable />
      </div>
    </div>
  )
}