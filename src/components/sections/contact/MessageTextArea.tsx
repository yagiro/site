import { fieldClass } from "@/components/sections/contact/contactFieldClass";

export function MessageTextArea() {
  return (
    <textarea
      name="message"
      defaultValue="Hi Yakir, I have an interesting opportunity for you. Let's talk!"
      rows={5}
      required
      className={`${fieldClass} flex-1 resize-y`}
    />
  );
}
