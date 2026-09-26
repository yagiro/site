import { fieldClass } from "@/components/sections/contact/contactFieldClass";

export function MessageTextArea() {
  return (
    <textarea
      name="message"
      placeholder="Or just send me a message.."
      rows={5}
      required
      className={`${fieldClass} flex-1 resize-y`}
    />
  );
}
