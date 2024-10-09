import { Link } from "react-router-dom"

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>

      <Link to="/" className="underline">
        Return to home
      </Link>
    </>
  )
}
