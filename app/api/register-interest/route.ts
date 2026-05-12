import { supabaseAdmin } from "@/lib/supabase/server";
import { openai } from "@/lib/openai/openai";


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
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: {type: "json_object" },
      messages: [
        {
          role: "system",
          content: `
You are an AI assistant for TaskNova.

Analyze incoming business leads.

Return ONLY valid JSON in this exact format:

{
  "category": "",
  "urgency": "",
  "recommended_solution": "",
  "response": ""
}

Do not include markdown.
Do not explain anything.
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

    const aiData = JSON.parse(
    completion.choices[0].message.content || "{}"
    );
    console.log("AI Analysis:", aiData);

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