import { useClerk } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"
import { Link } from "react-router-dom"

export default function App() {
  const clerk = useClerk()

  return (
    <div className=" flex flex-col items-center gap-8">
      <h1 className="text-xl font-medium mt-12">
        Welcome to your Budget Buddy application.
      </h1>

      <div className="flex items-center gap-4">
        <Link to={"/dashboard"}>
          <Button className="rounded">Dashboard</Button>
        </Link>
        <Button className="rounded">Sign In</Button>
        <Button onClick={() => clerk.openSignIn({})} className="rounded">
          Test
        </Button>
      </div>
    </div>
  )
}
