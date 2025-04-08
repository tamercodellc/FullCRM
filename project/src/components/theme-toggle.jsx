import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Switch } from "./ui/switch"
import { Icon } from "./ui/icon"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Icon icon={Sun} size="sm" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Icon icon={Moon} size="sm" />
    </div>
  )
}