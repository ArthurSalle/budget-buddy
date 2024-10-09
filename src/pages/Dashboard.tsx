import { useUser } from "@clerk/clerk-react"
import { Link } from "react-router-dom"

export default function DashboardPage() {
  const { user } = useUser()

  return (
    <>
      <h1>Welcome back {user?.firstName}</h1>

      <Link to="/" className="underline">
        Return to home
      </Link>
    </>
  )
}
