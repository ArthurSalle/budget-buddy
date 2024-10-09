import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
  return (
    <div>
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}
