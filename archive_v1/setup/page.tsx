"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Hero from "@/components/Hero";

const supabase = createClient();

// ------------------ Types ------------------
interface Organization {
  id: string;
  name: string;
  logo_url?: string;
}

interface Membership {
  role: "admin" | "pm" | "tech" | "staff";
  organizations: Organization;
}

// ------------------ Component ------------------
export default function SetupPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orgName, setOrgName] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  useEffect(() => {
    const init = async () => {
      // 1️⃣ Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);

      // 2️⃣ Check for existing org membership
      const { data: membership, error } = await supabase
        .from<Membership>("organization_members")
        .select("organizations(id, name, logo_url)")
        .eq("user_id", user.id)
        .single();

      if (error && error.code !== "PGRST116") console.error(error);

      if (membership?.organizations) {
        router.push("/company");
        return;
      }

      // 3️⃣ Load draft from localStorage if exists
      const draft = localStorage.getItem("draftOrganization");
      if (draft) {
        const draftOrg = JSON.parse(draft);
        if (draftOrg.name) setOrgName(draftOrg.name);
        // Logo will need re-upload if present
      }

      setLoading(false);
    };

    init();
  }, [router]);

  // ------------------ Create Organization ------------------
  const handleCreateOrg = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !orgName) return;

    let logoUrl: string | null = null;

    if (logoFile) {
      const fileName = `organization-logos/${Date.now()}-${logoFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("organization-logos")
        .upload(fileName, logoFile, { upsert: true });

      if (uploadError) {
        console.error("Logo upload error:", uploadError);
      } else {
        const { data } = supabase.storage.from("organization-logos").getPublicUrl(fileName);
        logoUrl = data.publicUrl;
      }
    }

    const { data: newOrg, error: orgError } = await supabase
      .from<Organization>("organizations")
      .insert([{ name: orgName, owner_id: user.id, logo_url: logoUrl }])
      .select("id, name, logo_url")
      .single();

    if (orgError || !newOrg) {
      console.error("Error creating organization:", orgError);
      return;
    }

    // Add self as admin
    await supabase
      .from("organization_members")
      .insert([{ user_id: user.id, organization_id: newOrg.id, role: "admin" }]);

    localStorage.removeItem("draftOrganization");
    router.push("/company");
  };

  const handleBackToCompany = () => {
    if (orgName) {
      localStorage.setItem("draftOrganization", JSON.stringify({ name: orgName }));
    }
    router.push("/company");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero title="Setup Your Organization" subtitle={`Welcome, ${user?.user_metadata?.first_name || user?.email}`} showButtons={false} heightClass="min-h-[22vh]" />

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleCreateOrg} className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Create Organization</h2>
            <input
              type="text"
              placeholder="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="border p-2 rounded w-full mb-4"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              className="mb-4"
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Create</button>
              <button type="button" onClick={handleBackToCompany} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Back</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}