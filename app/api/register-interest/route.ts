import { supabase } from "@/lib/supabase/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message, source } = body;

    console.log("Incoming submission:", body);

    const { error } = await supabase.from("leads").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        message,
        source,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return Response.json({ error: "Database insert failed" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}