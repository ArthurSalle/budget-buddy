import { useUser } from "@clerk/clerk-react"
import { Smile } from "lucide-react"
import { useOutletContext } from "react-router-dom"

type OutletContextType = {
  isLoaded: boolean
}

export default function DashboardPage() {
  const { user } = useUser()
  const { isLoaded } = useOutletContext<OutletContextType>()

  if (!isLoaded) {
    return "Loading..."
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-medium flex items-center gap-2">
        Hello {user?.firstName} <Smile />
      </h1>
    </div>
  )
}
