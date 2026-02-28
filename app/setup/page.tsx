"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

export default function SetupPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [orgName, setOrgName] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // ======================
  // INITIAL LOAD
  // ======================
  useEffect(() => {
    const init = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push("/login");
        return;
      }
      setUser(user);

      // Check if user already has a membership
      const { data: membership } = await supabase
        .from("organization_members")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (membership) {
        // Already setup → redirect based on role
        router.push(membership.role === "admin" ? "/company" : "/dashboard");
        return;
      }

      setLoading(false);
    };

    init();
  }, [router]);

  // ======================
  // HANDLE ORGANIZATION CREATION
  // ======================
  const handleCreateOrg = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName || !user) return;

    setSubmitting(true);

    try {
      // 1️ Create organization
      const { data: orgData, error: orgError } = await supabase
        .from("organizations")
        .insert([{ name: orgName, owner_id: user.id }])
        .select("id, name")
        .single();

      if (orgError) throw orgError;

      // 2️ Upload logo if provided
      let logoUrl = null;
      if (logoFile) {
        const fileName = `organization-logos/${orgData.id}-${logoFile.name}`;
        const { data: fileData, error: fileError } = await supabase.storage
          .from("organization-logos")
          .upload(fileName, logoFile, { upsert: true });

        if (fileError) throw fileError;

        const { publicUrl } = supabase.storage
          .from("organization-logos")
          .getPublicUrl(fileName);

        logoUrl = publicUrl;

        // Save logo URL to organization
        await supabase
          .from("organizations")
          .update({ logo_url: logoUrl })
          .eq("id", orgData.id);
      }

      // 3️ Create membership for user (admin)
      await supabase.from("organization_members").insert([
        {
          user_id: user.id,
          organization_id: orgData.id,
          role: "admin",
        },
      ]);

      // 4️ Redirect to company page
      router.push("/company");
    } catch (err: any) {
      console.log("Error creating organization:", err);
      alert("Failed to create organization. Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading…</p>;

  return (
    <>
      <Hero
        title="Welcome to TaskNova"
        subtitle="Set up your company to get started"
        showButtons={false}
        bgGradient="from-purple-100 to-purple-200"
        heightClass="min-h-[22vh]"
      />

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Create Your Organization</h2>

          <form onSubmit={handleCreateOrg} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <label className="flex flex-col gap-1 text-sm">
              Optional Logo
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                className="border p-2 rounded"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className={`mt-4 py-3 rounded font-semibold text-white transition ${
                submitting ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {submitting ? "Creating…" : "Create Organization"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}