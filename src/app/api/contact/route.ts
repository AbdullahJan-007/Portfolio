import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactTo = process.env.CONTACT_TO ?? "abdullahjadoon0070@gmail.com";

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY configuration." },
      { status: 500 }
    );
  }

  const { name, email, message } = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: contactTo,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
