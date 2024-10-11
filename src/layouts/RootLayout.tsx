import { Button } from "@/components/ui/button"

import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <nav className="p-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium">
          Budget Buddy
        </Link>

        <Link to="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
