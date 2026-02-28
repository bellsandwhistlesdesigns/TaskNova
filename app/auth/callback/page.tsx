"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (!user || error) {
        router.push("/login");
        return;
      }

      // Check membership
      const { data: membership } = await supabase
        .from("organization_members")
        .select("role, organizations(id)")
        .eq("user_id", user.id)
        .single();

      if (!membership) {
        // First-time signup / no org yet
        router.push("/setup");
      } else if (membership.role === "admin") {
        router.push("/company"); // Admin page
      } else {
        router.push("/dashboard"); // Employee page
      }
    };

    redirectUser();
  }, [router]);

  return <p className="text-center mt-20">Logging in…</p>;
}