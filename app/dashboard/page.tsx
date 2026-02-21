"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

export default function Dashboard() {
  const router = useRouter();

  // States
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [organization, setOrganization] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Initialize dashboard
  useEffect(() => {
    const initDashboard = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      setUser(session.user);

      // 1️⃣ Get or create organization
      let { data: orgData, error: orgError } = await supabase
        .from("organizations")
        .select("id, name, owner_id, created_at")
        .eq("owner_id", session.user.id)
        .maybeSingle();

      if (orgError && orgError.code !== "PGRST116") { // ignore "no rows" error
        console.log("Error fetching organization:", orgError);
        setLoading(false);
        return;
      }

      if (!orgData) {
        // Create default organization
        const orgName = `${session.user.user_metadata?.first_name || "My"} Organization`;
        const { data: newOrg, error: createOrgError } = await supabase
          .from("organizations")
          .insert([{ name: orgName, owner_id: session.user.id }])
          .select("id, name, owner_id, created_at")
          .single();

        if (createOrgError) {
          console.log("Error creating organization:", createOrgError);
          setLoading(false);
          return;
        }

        orgData = newOrg;

        // Add user to organization_members as Admin
        await supabase
          .from("organization_members")
          .insert([{ user_id: session.user.id, organization_id: orgData.id, role: "admin" }]);
      } else {
        // Ensure user is in organization_members
        const { data: memberData } = await supabase
          .from("organization_members")
          .select("id, user_id, organization_id, role, created_at")
          .eq("organization_id", orgData.id)
          .eq("user_id", session.user.id)
          .single();

        if (!memberData) {
          await supabase
            .from("organization_members")
            .insert([{ user_id: session.user.id, organization_id: orgData.id, role: "admin" }]);
        }
      }

      setOrganization(orgData);

      // 2️⃣ Fetch projects for organization
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("id, name, organization_id, created_at")
        .eq("organization_id", orgData.id)
        .order("created_at", { ascending: true });

      if (projectsError) console.log("Projects fetch error:", projectsError);
      else setProjects(projectsData || []);

      setLoading(false);
    };

    initDashboard();

    // Auth listener
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push("/login");
      else setUser(session.user);
    });

    return () => authListener.subscription.unsubscribe();
  }, [router]);

  // Fetch tasks when project changes
  useEffect(() => {
    if (selectedProjectId) fetchTasks(selectedProjectId);
    else setTasks([]);
  }, [selectedProjectId]);

  if (loading) return <p>Loading...</p>;

  // Handlers
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName || !organization) return;

    const { data, error } = await supabase
      .from("projects")
      .insert([{ name: newProjectName, organization_id: organization.id }])
      .select("id, name, organization_id, created_at");

    if (error) return console.log("Error adding project:", error);

    const createdProject = data[0];
    setProjects([...projects, createdProject]);
    setSelectedProjectId(createdProject.id);
    setNewProjectName("");
  };

  const deleteProject = async (projectId: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", projectId);
    if (error) return console.log("Error deleting project:", error);

    setProjects(projects.filter(p => p.id !== projectId));
    if (selectedProjectId === projectId) setSelectedProjectId(null);
    setTasks([]);
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle || !selectedProjectId || !organization) return;

    const { data, error } = await supabase
      .from("tasks")
      .insert([{ title: newTaskTitle, project_id: selectedProjectId, organization_id: organization.id, is_complete: false }])
      .select("id, title, project_id, organization_id, assigned_to, is_complete, created_at");

    if (error) return console.log("Error adding task:", error);

    setTasks([...tasks, data[0]]);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = async (taskId: string, currentValue: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({ is_complete: !currentValue })
      .eq("id", taskId);

    if (error) return console.log("Error updating task:", error);
    setTasks(tasks.map(t => t.id === taskId ? { ...t, is_complete: !currentValue } : t));
  };

  const deleteTask = async (taskId: string) => {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);
    if (error) return console.log("Error deleting task:", error);
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const fetchTasks = async (projectId: string) => {
    const { data, error } = await supabase
      .from("tasks")
      .select("id, title, project_id, organization_id, assigned_to, is_complete, created_at")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false });

    if (error) return console.log("Error fetching tasks:", error);
    setTasks(data || []);
  };

  // Render
  return (
    <>
      <Hero
        title={organization?.name || "Your Dashboard"}
        subtitle={`Welcome back, ${user?.user_metadata?.first_name || user?.email}!`}
        showButtons={false}
        heightClass="min-h-[22vh]"
        bgGradient="from-blue-100 to-blue-200"
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
              <p className="text-3xl font-bold">{tasks.filter(t => t.is_complete).length}</p>
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
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">+</button>
              </form>

              <ul className="space-y-2">
                {projects.map(p => (
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
                  onClick={() => { if (confirm("Delete this project and all its tasks?")) deleteProject(selectedProjectId); }}
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
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Add</button>
              </form>

              <ul className="space-y-3">
                {tasks.map(task => (
                  <li key={task.id} className="flex items-center justify-between p-4 rounded-xl border hover:shadow-sm transition">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.is_complete}
                        onChange={() => toggleTaskCompletion(task.id, task.is_complete)}
                      />
                      <span className={task.is_complete ? "line-through text-gray-400" : ""}>{task.title}</span>
                    </div>
                    <button onClick={() => { if (confirm("Delete this task?")) deleteTask(task.id); }} className="text-red-500 hover:text-red-700 text-sm">
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