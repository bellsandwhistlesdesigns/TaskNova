import { createClient } from '@supabase/supabase-js'

export const createServerClient = () => {
  // These environment variables must exist in your project
  const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceRoleKey=process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      // This ensures session cookies are handled properly
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
}