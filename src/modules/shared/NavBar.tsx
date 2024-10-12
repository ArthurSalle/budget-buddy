import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { Coins, Ellipsis, Home, Lock, PanelLeft, Settings } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col md:hidden ">
        <header className="sticky bg-background top-0 z-30 flex justify-between h-14 items-center gap-4 border-b px-4 ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              List of navigation links
            </SheetDescription>

            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="md:max-w-xs"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <nav className="grid gap-6 text-lg font-medium py-4">
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    cn(
                      `flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`,
                      isActive ? "text-foreground" : ""
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>

                <NavLink
                  to="finances"
                  className={({ isActive }) =>
                    cn(
                      `flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`,
                      isActive ? "text-foreground" : ""
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Coins className="h-5 w-5" />
                  Finances
                </NavLink>

                <NavLink
                  to="savings"
                  className={({ isActive }) =>
                    cn(
                      `flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`,
                      isActive ? "text-foreground" : ""
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Lock className="h-5 w-5" />
                  Savings
                </NavLink>

                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    cn(
                      `flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`,
                      isActive ? "text-foreground" : ""
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Ellipsis className="h-5 w-5" />
                  Others
                </NavLink>

                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    cn(
                      `flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground`,
                      isActive ? "text-foreground" : ""
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="block md:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
      </div>
    </>
  )
}
