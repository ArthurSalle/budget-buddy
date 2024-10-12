import NavBar from "@/modules/shared/NavBar"
import SideBar from "@/modules/shared/SideBar"
import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [isLoaded, navigate, userId])

  return (
    <div className="h-dvh flex flex-col w-full bg-muted/40">
      <SideBar />
      <NavBar />

      <main className="md:pl-48">
        <Outlet context={{ isLoaded }} />
      </main>
    </div>
  )
}
