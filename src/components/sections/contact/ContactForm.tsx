"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage, type ContactFormState } from "@/app/actions/contact";
import { Confirmation } from "@/components/sections/contact/Confirmation";
import { FromEmailField } from "@/components/sections/contact/FromEmailField";
import { MessageTextArea } from "@/components/sections/contact/MessageTextArea";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-8 bg-accent text-bg font-mono font-semibold text-[15px] border-none cursor-pointer transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_32px_var(--color-accent-glow)] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const sent = state.status === "sent";

  return (
    <div className="relative flex min-h-[380px] flex-col gap-4 overflow-hidden border border-border-soft bg-card p-7">
      <div className="relative flex-1">
        <Confirmation sent={sent} />

        <form
          action={formAction}
          className={`absolute inset-0 flex flex-col gap-3.5 transition-all duration-500 ease-reveal ${
            sent ? "-translate-x-[130%] opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <FromEmailField />
          <MessageTextArea />
          {state.status === "error" && (
            <p className="font-mono text-sm text-red-400" aria-live="polite">
              {state.error}
            </p>
          )}
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
