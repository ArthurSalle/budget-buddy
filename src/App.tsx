import { Link } from "react-router-dom"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"

export default function App() {
  return (
    <div className="h-[calc(100dvh-68px)] flex flex-col justify-center items-center gap-4 -mt-[68px]">
      <h1 className="text-2xl font-semibold text-center text-balance">
        Welcome to Budget Buddy, your personal finance tracker!
      </h1>

      <h2 className="text-lg text-center text-balance">
        Easily manage your income and expenses, and
        <br className="hidden md:block" /> take control of your budget with just
        a few clicks.
      </h2>

      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Lorem Ipsum</Button>

        <Link to={"/dashboard"}>
          <Button>
            Get started <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
