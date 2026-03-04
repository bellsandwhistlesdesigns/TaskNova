"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

const roles = ["admin", "pm", "tech", "staff"];

export default function CompanyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [organization, setOrganization] = useState<any>(null);
  const [employees, setEmployees] = useState<any[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("staff");
  const [membership, setMembership] = useState<any>(null);

  // Load user, membership, org, employees
useEffect(() => {
  const init = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    setUser(user);

    const { data: membershipData, error } = await supabase
      .from("organization_members")
      .select("role, organizations(id, name)")
      .eq("user_id", user.id)
      .single();

    if (error || !membershipData?.organizations?.length) {
      router.push("/setup");
      return;
    }

    setMembership(membershipData);

    if (membershipData.role !== "admin") {
      router.push("/dashboard");
      return;
    }

    const org = membershipData.organizations[0];
    setOrganization(org);

    const { data: employeesData } = await supabase
      .from("organization_members")
      .select("id, user_id, role, users(email)")
      .eq("organization_id", org.id)
      .order("created_at", { ascending: true });

    setEmployees(employeesData || []);
    setLoading(false);
  };

  init();
}, [router]);

  // Preserve partial setup info in localStorage
  const handleBackToSetup = () => {
  if (organization) {
    // Save current org info as draft
    localStorage.setItem("draftOrganization", JSON.stringify(organization));
  }
  // Navigate to setup page
  router.push("/setup");
};

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !organization) return;

    const { data: inviteData, error: inviteError } = await supabase.auth.admin.inviteUserByEmail(newEmail);
    if (inviteError) return console.log("Error inviting user:", inviteError);

    const { data: memberData, error: memberError } = await supabase
      .from("organization_members")
      .insert([{ user_id: inviteData.user?.id, organization_id: organization.id, role: newRole }])
      .select("id, user_id, role, users(email)")
      .single();

    if (memberError) return console.log("Error adding employee:", memberError);

    setEmployees([...employees, memberData]);
    setNewEmail("");
    setNewRole("staff");
  };

  const removeEmployee = async (id: string) => {
    if (!confirm("Remove this employee?")) return;
    const { error } = await supabase.from("organization_members").delete().eq("id", id);
    if (error) return console.log("Error removing employee:", error);
    setEmployees(employees.filter((e) => e.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Hero
        title={organization?.name || "Company Admin"}
        subtitle={`Welcome back, ${user?.user_metadata?.first_name || user?.email}!`}
        showButtons={false}
        heightClass="min-h-[22vh]"
      />
	{/* Back Button for Admins */}
      {membership?.role === "admin" && (
        <div className="max-w-6xl mx-auto mb-6 flex items-center">
          <button
            onClick={handleBackToSetup}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Back to Setup
          </button>
        </div>
      )}
      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Add Employee Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
            <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
            <form onSubmit={handleAddEmployee} className="flex gap-2 flex-wrap">
              <input
                type="email"
                placeholder="Employee email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="border p-2 rounded flex-1 min-w-[200px]"
                required
              />
              <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="border p-2 rounded">
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add
              </button>
            </form>
          </div>

          {/* Employees Table */}
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
                      <button onClick={() => removeEmployee(e.id)} className="text-red-500 hover:text-red-700">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        </div>
      </main>
    </>
  );
}