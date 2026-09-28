import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedinIcon } from "@/components/ui/icons/LinkedinIcon";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { EMAIL } from '@/data/contact'

const LINKEDIN = 'https://www.linkedin.com/in/yagiro'

const LINKS = [
  { href: `mailto:${EMAIL}`, label: EMAIL, icon: Mail },
  { href: LINKEDIN, label: "LinkedIn", icon: LinkedinIcon },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-[2] mx-auto max-w-[1400px] px-6 pb-20 pt-10 md:px-16 md:pb-40">
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="mb-7 font-mono text-sm text-accent">{"// contact"}</div>
          <h2 className="mb-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[58px]">
            Let&apos;s build stuff.
          </h2>
          <div className="flex flex-col gap-7">
            <p className="max-w-[480px] text-[17px] leading-[1.7] text-muted">
              I am now looking for the next chapter in my career. Open to fully-remote engagements.
            </p>
            <Reveal className="flex flex-col items-start gap-1 text-lg">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 py-1 text-accent/90 transition-all duration-900 hover:-translate-y-0.5 hover:text-accent-hover/90"
                  target="_blank"
                >
                  <link.icon className="size-5" aria-hidden />
                  {link.label}
                </a>
              ))}
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="flex flex-col text-lg">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
