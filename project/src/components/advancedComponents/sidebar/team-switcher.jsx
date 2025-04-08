import * as React from "react"
import { Building2, ChevronsUpDown } from "lucide-react"
import { useNavigation } from "../../../contexts/navigation-context"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../ui/sidebar"
import { Icon } from "../../ui/icon"

const companies = [
  {
    name: "TAMERDigital",
    description: "SEO Company",
    shortcut: "⌘1"
  },
  {
    name: "WebSolutions",
    description: "Web Development",
    shortcut: "⌘2"
  },
  {
    name: "DigitalPro",
    description: "Digital Marketing",
    shortcut: "⌘3"
  }
]

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  const [activeCompany, setActiveCompany] = React.useState(companies[0])

  if (!activeCompany) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <Icon icon={Building2} className="size-4 text-sidebar-primary-foreground" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeCompany.name}
                </span>
                <span className="truncate text-xs">{activeCompany.description}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Companies
            </DropdownMenuLabel>
            {companies.map((company) => (
              <DropdownMenuItem
                key={company.name}
                onClick={() => setActiveCompany(company)}
                className={`gap-2 py-2 mt-2 mb-2 ${activeCompany.name === company.name ? 'bg-accent' : ''}`}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <Icon icon={Building2} className="size-4 shrink-0 text-foreground" />
                </div>
                <div className="flex flex-col">
                  <span>{company.name}</span>
                  <span className="text-xs text-muted-foreground">{company.description}</span>
                </div>
                <DropdownMenuShortcut>{company.shortcut}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}