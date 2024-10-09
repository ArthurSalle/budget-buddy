import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react"
import { Link, Outlet, useNavigate } from "react-router-dom"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
    >
      <nav className="flex justify-between p-4 border border-b">
        <Link to="/">Budget Buddy</Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link to="/sign-in">Sign In</Link>
        </SignedOut>
      </nav>

      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}
