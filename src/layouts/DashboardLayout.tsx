import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  console.log("test", userId)

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [isLoaded, navigate, userId])

  if (!isLoaded) return "Loading..."

  return <Outlet />
}
