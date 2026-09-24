import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative z-[2] mx-auto max-w-[1400px] px-6 py-24 md:px-16 md:py-[200px]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal className="font-mono text-sm text-accent">{"// 01 — about"}</Reveal>
        <Reveal className="max-w-[760px]">
          <p className="mb-8 text-[26px] leading-relaxed tracking-[-0.01em] text-ink md:text-[30px]">
            I&apos;ve spent the last decade moving between product and infrastructure — the kind
            of engineer teams call when a feature needs to ship <em className="italic text-accent">and</em>{" "}
            the system needs to survive it.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted">
            I like problems with a real user on the other end: onboarding flows people abandon,
            dashboards that time out, APIs that buckle under load. My work sits at the
            intersection of clean interfaces and the backend decisions that make them possible —
            most recently at early-stage startups where I owned both.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
