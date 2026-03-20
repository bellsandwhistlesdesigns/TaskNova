import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Incoming submission:", { firstName, lastName, email });

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
      to: process.env.OUTLOOK_USER, // send to yourself
      subject: "New TaskNova Interest Submission",
      text: `New submission from TaskNova:

Name: ${firstName} ${lastName}
Email: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}