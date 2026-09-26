import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { EMAIL } from '@/data/contact'

const LINKEDIN = 'https://www.linkedin.com/in/yagiro'

const LINKS = [
  { href: `mailto:${EMAIL}`, label: EMAIL },
  { href: LINKEDIN, label: "LinkedIn" },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-[2] mx-auto max-w-[1400px] px-6 pb-20 pt-10 md:px-16 md:pb-40">
      <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="mb-7 font-mono text-sm text-accent">{"// 04 — contact"}</div>
          <h2 className="mb-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[58px]">
            Let&apos;s build something that lasts.
          </h2>
          <p className="max-w-[480px] text-[17px] leading-[1.7] text-muted">
            Open to fractional and remote engagements. Happiest joining early, owning a system end
            to end.
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-[18px] text-lg">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex justify-between border border-border px-6 py-[18px] text-ink/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_oklch(0.6_0.15_195_/_0.5)]"
              target="_blank"
            >
              {link.label} <span className="text-accent">→</span>
            </a>
          ))}
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
