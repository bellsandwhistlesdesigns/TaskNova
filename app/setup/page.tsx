"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

export default function SetupPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orgName, setOrgName] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  // Load user and check existing org
  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);

      // Check for existing org in DB
      const { data: membership } = await supabase
        .from("organization_members")
        .select("organizations(id, name, logo_url)")
        .eq("user_id", user.id)
        .single();

      if (membership?.organizations) {
        router.push("/company");
        return;
      }

      // Load draft from localStorage if exists
      const draft = localStorage.getItem("draftOrganization");
      if (draft) {
        const draftOrg = JSON.parse(draft);
        if (draftOrg.name) setOrgName(draftOrg.name);
        // Note: File objects cannot be stored in localStorage, so logo will need re-upload
      }

      setLoading(false);
    };

    init();
  }, [router]);

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
        console.log("Logo upload error:", uploadError);
      } else {
        const { data } = supabase.storage
        .from("organization-logos")
        .getPublicUrl(fileName);

        logoUrl = data.publicUrl;
    }
  }

    // Create organization
    const { data: newOrg, error: orgError } = await supabase
      .from("organizations")
      .insert([{ name: orgName, owner_id: user.id, logo_url: logoUrl }])
      .select("id, name, logo_url")
      .single();

    if (orgError) return console.log("Error creating organization:", orgError);

    // Add self to organization_members as admin
    await supabase
      .from("organization_members")
      .insert([{ user_id: user.id, organization_id: newOrg.id, role: "admin" }]);

    // Clear draft after successful creation
    localStorage.removeItem("draftOrganization");

    router.push("/company");
  };

  const handleBackToCompany = () => {
    // Save draft before navigating back
    if (orgName) {
      localStorage.setItem("draftOrganization", JSON.stringify({ name: orgName }));
    }
    router.push("/company");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero
        title="Setup Your Company"
        subtitle={`Welcome, ${user?.user_metadata?.first_name || user?.email}!`}
        showButtons={false}
        heightClass="min-h-[22vh]"
      />

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
          {/* Back Button */}
          <div className="mb-4">
            <button
              onClick={handleBackToCompany}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              ← Back to Company
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4">Create Your Company</h2>

          <form onSubmit={handleCreateOrg} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="border p-2 rounded"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create Company
            </button>
          </form>
        </div>

        {/* Logout */}
        <div className="flex justify-end mt-10">
          <button
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/login");
            }}
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
}