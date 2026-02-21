import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    console.log("New interest:", { firstName, lastName, email });

    // TODO: send email here (Resend, SendGrid, etc.)

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit interest." },
      { status: 500 }
    );
  }
}