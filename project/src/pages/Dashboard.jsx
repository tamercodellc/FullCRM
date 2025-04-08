import { Header } from "../components/advancedComponents/header"
import { DashboardSidebar } from "../components/advancedComponents/sidebar"

export function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <DashboardSidebar />
      </div>
    </div>
  )
}