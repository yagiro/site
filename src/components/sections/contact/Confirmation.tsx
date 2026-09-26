export function Confirmation({ sent }: { sent: boolean }) {
  return (
    <div
      className={`font-mono absolute inset-0 flex justify-center items-center text-[15px] text-accent transition-all duration-500 ease-reveal ${
        sent ? "translate-x-0 opacity-100" : "translate-x-[130%] opacity-0"
      }`}
    >
      Message sent. I&apos;ll get back to you soon.
    </div>
  );
}
