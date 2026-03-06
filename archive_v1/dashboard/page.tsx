"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Hero from "@/components/Hero";

const supabase = createClient();

interface Organization {
  id: string;
  name: string;
}

interface Membership {
  role: "admin" | "pm" | "tech" | "staff";
  organization_id: string;
  organizations: Organization;
}

interface Project {
  id: string;
  name: string;
  organization_id: string;
  created_at: string;
}

interface Task {
  id: string;
  title: string;
  project_id: string;
  organization_id: string;
  assigned_to?: string;
  is_complete: boolean;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();

  // States
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [membership, setMembership] = useState<Membership | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // ======================
  // INITIAL LOAD
  // ======================
  useEffect(() => {
    const initDashboard = async () => {
      // 1️⃣ Get user
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push("/login");
        return;
      }
      setUser(user);

      // 2️⃣ Get membership
      const { data: membershipData, error: membershipError } = await supabase
        .from<Membership>("organization_members")
        .select("role, organization_id, organizations(id, name)")
        .eq("user_id", user.id)
        .single();

      if (membershipError && membershipError.code !== "PGRST116") console.error(membershipError);

      if (!membershipData || !membershipData.organizations) {
        router.push("/setup");
        return;
      }

      setMembership(membershipData);
      setOrganization(membershipData.organizations);

      // 3️⃣ Fetch projects for this org
      const { data: projectsData, error: projectsError } = await supabase
        .from<Project>("projects")
        .select("*")
        .eq("organization_id", membershipData.organization_id)
        .order("created_at", { ascending: true });

      if (projectsError) console.error(projectsError);
      else setProjects(projectsData || []);

      setLoading(false); // ✅ Only stop loading after all essential data is ready
    };

    initDashboard();
  }, [router]);

  // ======================
  // FETCH TASKS WHEN PROJECT SELECTED
  // ======================
  useEffect(() => {
    if (!selectedProjectId) return setTasks([]);

    const fetchTasks = async () => {
      const { data: tasksData, error } = await supabase
        .from<Task>("tasks")
        .select("*")
        .eq("project_id", selectedProjectId)
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching tasks:", error);
      else setTasks(tasksData || []);
    };

    fetchTasks();
  }, [selectedProjectId]);

  // ======================
  // HANDLERS
  // ======================
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName || !organization) return;

    const { data, error } = await supabase
      .from<Project>("projects")
      .insert([{ name: newProjectName, organization_id: organization.id }])
      .select("*");

    if (error) return console.log(error);

    setProjects([...projects, data![0]]);
    setSelectedProjectId(data![0].id);
    setNewProjectName("");
  };

  const deleteProject = async (projectId: string) => {
    if (!confirm("Delete this project and all its tasks?")) return;

    const { error } = await supabase.from("projects").delete().eq("id", projectId);
    if (error) return console.log(error);

    setProjects(projects.filter((p) => p.id !== projectId));
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
      setTasks([]);
    }
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle || !selectedProjectId || !organization) return;

    const { data, error } = await supabase
      .from<Task>("tasks")
      .insert([{
        title: newTaskTitle,
        project_id: selectedProjectId,
        organization_id: organization.id,
        is_complete: false
      }])
      .select("*");

    if (error) return console.log(error);

    setTasks([...tasks, data![0]]);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = async (taskId: string, currentValue: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({ is_complete: !currentValue })
      .eq("id", taskId);

    if (error) return console.log(error);

    setTasks(tasks.map((t) => t.id === taskId ? { ...t, is_complete: !currentValue } : t));
  };

  const deleteTask = async (taskId: string) => {
    if (!confirm("Delete this task?")) return;

    const { error } = await supabase.from("tasks").delete().eq("id", taskId);
    if (error) return console.log(error);

    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  if (loading) return <p className="text-center mt-20">Loading…</p>;

  // ======================
  // RENDER
  // ======================
  return (
    <>
      <Hero
        title={organization?.name || "Dashboard"}
        subtitle={`Welcome back, ${user?.user_metadata?.first_name || user?.email}!`}
        showButtons={false}
        heightClass="min-h-[22vh]"
      />

      <main className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm text-gray-500">Total Projects</h3>
              <p className="text-3xl font-bold">{projects.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm text-gray-500">Total Tasks</h3>
              <p className="text-3xl font-bold">{tasks.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm text-gray-500">Completed Tasks</h3>
              <p className="text-3xl font-bold">{tasks.filter((t) => t.is_complete).length}</p>
            </div>
          </div>

          {/* Projects / Tasks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projects */}
            <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <form onSubmit={handleAddProject} className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="New project name"
                  className="border p-2 rounded flex-1"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                >
                  +
                </button>
              </form>

              <ul className="space-y-2">
                {projects.map((p) => (
                  <li
                    key={p.id}
                    onClick={() => setSelectedProjectId(p.id)}
                    className={`p-3 rounded-lg cursor-pointer transition ${selectedProjectId === p.id ? "bg-blue-100 border border-blue-400" : "hover:bg-gray-100"}`}
                  >
                    {p.name}
                  </li>
                ))}
              </ul>

              {selectedProjectId && (
                <button
                  onClick={() => deleteProject(selectedProjectId)}
                  className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Delete Project
                </button>
              )}
            </div>

            {/* Tasks */}
            <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Tasks</h2>

              <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="New task title"
                  className="border p-2 rounded flex-1"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Add
                </button>
              </form>

              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li key={task.id} className="flex items-center justify-between p-4 rounded-xl border hover:shadow-sm transition">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.is_complete}
                        onChange={() => toggleTaskCompletion(task.id, task.is_complete)}
                      />
                      <span className={task.is_complete ? "line-through text-gray-400" : ""}>{task.title}</span>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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