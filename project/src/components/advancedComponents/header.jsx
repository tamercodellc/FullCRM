import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { ThemeToggle } from "../theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-[60] h-14 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="container flex items-center h-full">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
                Dashboard
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="#" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="#" className={navigationMenuTriggerStyle()}>
                Blog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="#" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="#" className={navigationMenuTriggerStyle()}>
                Tools
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}