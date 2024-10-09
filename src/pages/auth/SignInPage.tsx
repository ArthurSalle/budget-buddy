import { SignIn } from "@clerk/clerk-react"

export default function SignInPage() {
  return (
    <div className="flex fex-col justify-center items-center">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}
