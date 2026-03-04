import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")

  if (code) {
    const supabase = createServerClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Decide where to send them after login
  return NextResponse.redirect(`${origin}/company`)
}