import { Reveal } from "@/components/ui/Reveal";
import { TypedTerminalLine } from "@/components/ui/TypedTerminalLine";

export function Hero() {
  return (
    <section className="relative z-[2] flex min-h-screen flex-col justify-center px-6 pt-28 md:px-16">
      <div className="max-w-[900px]">
        <Reveal className="mb-7">
          <TypedTerminalLine text="senior full-stack engineer & front-end architect " />
        </Reveal>

        <Reveal
          as="h1"
          className="mb-7 max-w-[820px] text-[46px] font-semibold leading-[1.03] tracking-[-0.02em] md:text-[88px]"
        >
          Yakir Rabinovich
        </Reveal>

        <Reveal as="p" className="mb-10 max-w-[540px] text-[19px] leading-relaxed text-muted">
          Welcome to my small corner of the web.
        </Reveal>

        <Reveal className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center px-8 py-4 text-[15px] font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_oklch(0.6_0.15_195_/_0.5)]"
            style={{ background: "var(--color-accent)" }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center backdrop-blur-xs border border-border px-8 py-4 text-[15px] text-ink/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_oklch(0.6_0.15_195_/_0.5)]"
          >
            Get in touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
