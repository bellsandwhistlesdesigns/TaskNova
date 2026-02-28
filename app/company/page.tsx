"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

const roles = ["admin", "pm", "tech", "staff"];

export default function CompanyAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [organization, setOrganization] = useState<any>(null);
  const [employees, setEmployees] = useState<any[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("staff");
  const [logoFile, setLogoFile] = useState<File | null>(null);

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

      // Check membership
      const { data: membership } = await supabase
        .from("organization_members")
        .select("role, organizations(id, name, logo_url)")
        .eq("user_id", user.id)
        .single();

      if (!membership) {
        router.push("/setup");
        return;
      }

      if (membership.role !== "admin") {
        router.push("/dashboard"); // employees go to dashboard
        return;
      }

      setOrganization(membership.organizations);

      // Fetch employees
      const { data: employeesData } = await supabase
        .from("organization_members")
        .select("id, user_id, role, users(email)")
        .eq("organization_id", membership.organizations.id)
        .order("created_at", { ascending: true });

      setEmployees(employeesData || []);
      setLoading(false);
    };

    init();
  }, [router]);

  // ======================
  // LOGO UPLOAD
  // ======================
  const handleLogoUpload = async () => {
    if (!logoFile || !organization) return;
    const fileName = `organization-logos/${organization.id}-${logoFile.name}`;
    const { data, error } = await supabase.storage
      .from("organization-logos")
      .upload(fileName, logoFile, { upsert: true });

    if (error) {
      console.log("Error uploading logo:", error);
      return;
    }

    const { publicUrl } = supabase.storage
      .from("organization-logos")
      .getPublicUrl(fileName);

    // Save URL to organization
    const { error: updateError } = await supabase
      .from("organizations")
      .update({ logo_url: publicUrl })
      .eq("id", organization.id);

    if (!updateError) setOrganization({ ...organization, logo_url: publicUrl });
    else console.log("Error saving logo URL:", updateError);
  };

  // ======================
  // ADD / INVITE EMPLOYEE
  // ======================
  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !organization) return;

    try {
      // Invite user via Magic Link
      const { data: inviteData, error: inviteError } =
        await supabase.auth.admin.inviteUserByEmail(newEmail);

      if (inviteError) {
        console.log("Error inviting user:", inviteError);
        return;
      }

      // Add to organization_members
      const { data: memberData, error: memberError } = await supabase
        .from("organization_members")
        .insert([
          {
            user_id: inviteData.user?.id,
            organization_id: organization.id,
            role: newRole,
          },
        ])
        .select("id, user_id, role, users(email)")
        .single();

      if (memberError) {
        console.log("Error adding employee:", memberError);
        return;
      }

      setEmployees([...employees, memberData]);
      setNewEmail("");
      setNewRole("staff");
    } catch (err) {
      console.log("Error adding employee:", err);
    }
  };

  // ======================
  // REMOVE EMPLOYEE
  // ======================
  const removeEmployee = async (id: string) => {
    if (!confirm("Remove this employee?")) return;

    const { error } = await supabase
      .from("organization_members")
      .delete()
      .eq("id", id);

    if (!error) setEmployees(employees.filter((e) => e.id !== id));
    else console.log("Error removing employee:", error);
  };

  if (loading) return <p className="text-center mt-20">Loading…</p>;

  return (
    <>
      <Hero
        title={organization?.name || "Company Admin"}
        subtitle={`Welcome back, ${user?.user_metadata?.first_name || user?.email}!`}
        showButtons={false}
        heightClass="min-h-[22vh]"
        bgGradient="from-purple-100 to-purple-200"
      />

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Logo Upload */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
            <h2 className="text-xl font-semibold mb-4">Company Logo</h2>
            {organization.logo_url && (
              <img src={organization.logo_url} alt="Logo" className="h-24 mb-4" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              className="mb-2"
            />
            <button
              onClick={handleLogoUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Upload Logo
            </button>
          </div>

          {/* Add Employee */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
            <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
            <form onSubmit={handleAddEmployee} className="flex gap-2 flex-wrap">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Employee email"
                className="border p-2 rounded flex-1 min-w-[200px]"
              />
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="border p-2 rounded"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Add
              </button>
            </form>
          </div>

          {/* Employee List */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Employees</h2>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Role</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{e.users?.email || "Pending Invite"}</td>
                    <td className="p-2">{e.role}</td>
                    <td className="p-2">
                      <button
                        onClick={() => removeEmployee(e.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </>
  );
}