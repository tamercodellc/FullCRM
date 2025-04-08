import React, { useState } from "react"
import { ChevronRight } from "lucide-react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"
import { useNavigation } from "../../../contexts/navigation-context"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../../ui/sidebar"

export function NavMain({ items }) {
  const { updateNavigation } = useNavigation()
  const [selectedItem, setSelectedItem] = useState('Company List')

  React.useEffect(() => {
    // Set default navigation state for Company List
    const defaultParent = items.find(item => item.isActive)
    const defaultSection = defaultParent?.items?.find(item => item.title === 'Company List')
    if (defaultParent && defaultSection) {
      updateNavigation('parent', defaultParent)
      updateNavigation('section', defaultSection)
    }
  }, [])

  const handleSubItemClick = (parentItem, subItem) => {
    updateNavigation('parent', parentItem)
    updateNavigation('section', subItem)
    setSelectedItem(subItem.title)
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible.Root
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <Collapsible.Trigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a 
                          href={subItem.url} 
                          onClick={() => handleSubItemClick(item, subItem)}
                          data-active={selectedItem === subItem.title}
                        >
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </Collapsible.Content>
            </SidebarMenuItem>
          </Collapsible.Root>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}