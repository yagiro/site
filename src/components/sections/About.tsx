import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative z-[2] mx-auto max-w-[1400px] px-6 py-24 md:px-16 md:py-[200px]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal className="font-mono text-sm text-accent">{"// 01 — about"}</Reveal>
        <Reveal className="max-w-[760px]">
          <p className="mb-8 text-[26px] leading-relaxed tracking-[-0.01em] text-ink md:text-[30px]">
            I&apos;ve spent the better part of a decade on the frontend — but never only there.
            I&apos;ve led enterprise React applications used by thousands, built a startup&apos;s
            entire frontend domain from scratch, and been just as hands-on in the{" "}
            <em className="italic text-accent">backend</em>, owning the decisions that make an
            interface actually work.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted">
            I care about the system as much as the screen: architecture that scales past the
            first six months, infrastructure a team can build on without asking me first. Lately
            that includes working spec-first alongside AI agents — treating them as another
            disciplined part of the process, not a shortcut around one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
