import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const supabase = createClient();

  if (code) {
    // Exchange code for session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Auth exchange error:", error);
      return NextResponse.redirect(`${origin}/login`);
    }
  }

  // ✅ Fetch user and membership to decide redirect
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    // No session, go to login
    return NextResponse.redirect(`${origin}/login`);
  }

  // Check if user has any organization membership
  const { data: membershipData, error: membershipError } = await supabase
    .from("organization_members")
    .select("role, organizations(id, name)")
    .eq("user_id", user.id)
    .single();

  if (membershipError && membershipError.code !== "PGRST116") {
    console.error("Membership fetch error:", membershipError);
  }

  if (!membershipData || !membershipData.organizations) {
    // User has no organization → setup
    return NextResponse.redirect(`${origin}/setup`);
  }

  if (membershipData.role !== "admin") {
    // User is not admin → dashboard
    return NextResponse.redirect(`${origin}/dashboard`);
  }

  // Admin user with org → company page
  return NextResponse.redirect(`${origin}/company`);
}