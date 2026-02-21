import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS,
      },
    });

    await transporter.sendMail({
      from: `"TaskNova Interest" <${process.env.OUTLOOK_USER}>`,
      to: "douglasmoth@outlook.com", // temporary destination
      subject: "New TaskNova Interest Submission",
      text: `New submission from TaskNova:\n\nName: ${firstName} ${lastName}\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to submit interest." },
      { status: 500 }
    );
  }
}