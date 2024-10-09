import { useSession } from "@clerk/clerk-react"
import { createClient } from "@supabase/supabase-js"

export default function CreateClerckSupabaseClient() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  const { session } = useSession()

  return createClient(supabaseUrl, supabaseKey, {
    global: {
      fetch: async (url, options = {}) => {
        const clerkToken = await session?.getToken({
          template: "supabase",
        })

        const headers = new Headers(options?.headers)
        headers.set("Authorization", `Bearer ${clerkToken}`)

        return fetch(url, {
          ...options,
          headers,
        })
      },
    },
  })
}
