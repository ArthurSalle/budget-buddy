import { Button } from "@/components/ui/button"
import { SignedIn, UserButton } from "@clerk/clerk-react"

import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <nav className="p-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium">
          Budget Buddy
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
