"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Hero from "@/components/Hero";

const supabase = createClient();
const roles = ["admin", "pm", "tech", "staff"];

// ------------------ Types ------------------
interface Organization {
  id: string;
  name: string;
}

interface Membership {
  role: "admin" | "pm" | "tech" | "staff";
  organizations: Organization;
}

interface Employee {
  id: string;
  user_id: string;
  role: string;
  users?: { email?: string };
}

// ------------------ Component ------------------
export default function CompanyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("staff");
  const [membership, setMembership] = useState<Membership | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);

      const { data: membershipData, error } = await supabase
        .from<Membership>("organization_members")
        .select("role, organizations(id, name)")
        .eq("user_id", user.id)
        .single();

      if (error && error.code !== "PGRST116") console.error(error);

      if (!membershipData || !membershipData.organizations) {
        router.push("/setup");
        return;
      }

      if (membershipData.role !== "admin") {
        router.push("/dashboard");
        return;
      }

      setMembership(membershipData);

      const org = membershipData.organizations;
      setOrganization(org);

      const { data: employeesData, error: employeesError } = await supabase
        .from<Employee>("organization_members")
        .select("id, user_id, role, users(email)")
        .eq("organization_id", org.id)
        .order("created_at", { ascending: true });

      if (employeesError) console.error(employeesError);

      setEmployees(employeesData || []);
      setLoading(false);
    };

    init();
  }, [router]);

  const handleBackToSetup = () => {
    if (organization) localStorage.setItem("draftOrganization", JSON.stringify(organization));
    router.push("/setup");
  };

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !organization) return;

    const { data: inviteData, error: inviteError } = await supabase.auth.admin.inviteUserByEmail(newEmail);
    if (inviteError) return console.log("Error inviting user:", inviteError);

    if (!inviteData.user?.id) return console.log("Invite did not return a user ID");

    const { data: memberData, error: memberError } = await supabase
      .from<Employee>("organization_members")
      .insert([{ user_id: inviteData.user.id, organization_id: organization.id, role: newRole }])
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

      {membership?.role === "admin" && (
        <div className="max-w-6xl mx-auto mb-6 flex items-center">
          <button onClick={handleBackToSetup} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            ← Back to Setup
          </button>
        </div>
      )}

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Add Employee */}
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
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add</button>
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