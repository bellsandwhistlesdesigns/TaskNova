import { supabaseAdmin } from "@/lib/supabase/server";
import { openai } from "@/lib/openai/openai";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      message,
      businessType,
      challenge,
      source,
    } = body;

    console.log("Incoming submission:", body);

    // AI Analysis
    let aiData = {
    category: "unknown",
    urgency: "unknown",
    recommended_solution: "",
    response: "",
    };

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
        {
         role: "system",
          content: `
          You are an AI assistant for TaskNova.

          Return ONLY valid JSON:
        {
          "category": "",
          "urgency": "",
          "recommended_solution": "",
          "response": ""
        }
        `,
      },
      {
        role: "user",
        content: `
          Business Type: ${businessType}
          Challenge: ${challenge}
          Message: ${message}
        `,
      },
    ],
  });

  aiData = JSON.parse(completion.choices[0].message.content || "{}");
} catch (err: any) {
  console.error("OpenAI failed:", err);

  // IMPORTANT: do NOT crash the request
  if (err?.code === "insufficient_quota") {
    console.warn("OpenAI quota exceeded — skipping AI analysis");
  }
}

    // Store lead in Supabase
    const { error } = await supabaseAdmin.from("leads").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        message,
        business_type: businessType,
        challenge,
        source,

        ai_analysis: aiData,
        lead_category: aiData.category,
        urgency: aiData.urgency,
        recommended_solution: aiData.recommended_solution,
        ai_response: aiData.response,
},
    ]);

    if (error) {
      console.error("Supabase insert error:", error);

      return Response.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }
    try {
    await resend.emails.send({
    from: "notify@tasknova.ca",
    to: "tasknova2026@outlook.com",
    replyTo: email,
    subject: `New TaskNova Lead: ${firstName} ${lastName}`,
    html: `
      <h2>New Lead Submitted</h2>
      <p>${message}</p>
    `,
    });
    } catch (emailErr) {
    console.error("Email failed:", emailErr);
    }
    return Response.json({
      success: true,
      aiAnalysis: aiData,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}