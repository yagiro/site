import { fieldClass } from "@/components/sections/contact/contactFieldClass";

export function FromEmailField() {
  return (
    <input
      type="email"
      name="fromEmail"
      placeholder="Your email"
      required
      className={fieldClass}
    />
  );
}
