"use server";

import { EMAIL } from '@/data/contact'
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: "idle" | "error" | "sent";
  error?: string;
};

function validateRequest(fromEmail: string, message: string): ContactFormState | null {
  if (!EMAIL_RE.test(fromEmail)) {
    return { status: "error", error: "Enter a valid email address." };
  }
  if (!message) {
    return { status: "error", error: "Message can't be empty." };
  }

  return null; // validation success
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fromEmail = String(formData.get("fromEmail") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errorResponse = validateRequest(fromEmail, message);
  if (errorResponse) return errorResponse;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact message was not sent.");
    return { status: "error", error: "Message couldn't be sent right now." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: EMAIL,
    replyTo: fromEmail,
    subject: `New message from ${fromEmail}`,
    text: message,
  });

  if (error) {
    console.error("Failed to send contact message:", error);
    return { status: "error", error: "Message couldn't be sent right now." };
  }

  return { status: "sent" };
}
