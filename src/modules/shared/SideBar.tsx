import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { Coins, Ellipsis, Home, Lock, Settings } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

export default function SideBar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-48 flex-col  border-r bg-background md:flex ">
      <Link to="/" className="text-xl text-center font-medium p-4 border-b">
        Budget Buddy
      </Link>

      <div className="flex flex-col justify-between items-center flex-1 pt-8 pb-4">
        <nav className="flex flex-col gap-6 font-medium">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              cn(
                `flex items-center gap-4 text-muted-foreground hover:text-foreground`,
                isActive ? "text-foreground" : ""
              )
            }
          >
            <Home />
            Dashboard
          </NavLink>
          <NavLink
            to="finances"
            className={({ isActive }) =>
              cn(
                `flex items-center gap-4 text-muted-foreground hover:text-foreground`,
                isActive ? "text-foreground" : ""
              )
            }
          >
            <Coins />
            Finances
          </NavLink>
          <NavLink
            to="savings"
            className={({ isActive }) =>
              cn(
                `flex items-center gap-4 text-muted-foreground hover:text-foreground`,
                isActive ? "text-foreground" : ""
              )
            }
          >
            <Lock />
            Savings
          </NavLink>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              cn(
                `flex items-center gap-4 text-muted-foreground hover:text-foreground`,
                isActive ? "text-foreground" : ""
              )
            }
          >
            <Ellipsis />
            Others
          </NavLink>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              cn(
                `flex items-center gap-4 text-muted-foreground hover:text-foreground`,
                isActive ? "text-foreground" : ""
              )
            }
          >
            <Settings />
            Settings
          </NavLink>
        </nav>

        <div className="flex justify-center">
          <SignedIn>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonTrigger: "hover:bg-muted focus:!shadow-none",
                  userButtonBox: `${buttonVariants({
                    variant: "outline",
                  })} !px-4 !py-5 !w-full !justify-end`,
                  userButtonOuterIdentifier: "!pl-0 !text-sm",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </aside>
  )
}
