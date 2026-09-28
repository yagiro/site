import { Reveal } from "@/components/ui/Reveal";
import { sectionClassName } from "@/components/sections/sectionUtils";

export function About() {
  return (
    <section id="about" className={`${sectionClassName} pb-24 md:mt-25 md:pb-50`}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal className="font-mono text-sm text-accent">{"// about"}</Reveal>
        <div>
          <Reveal className="max-w-[760px]">
            <p className="mb-8 text-[26px] leading-relaxed tracking-[-0.01em] text-ink md:text-[30px]">
              I have loved coding ever since I can remember. Been developing full-stack systems for nearly a decade now and I am grateful for still having the same enthusiasm for learning and building new things.
            </p>
          </Reveal>
          <Reveal className="max-w-[760px]">
            <p className="text-[17px] leading-[1.8] text-muted">
              I am no stranger to backend development, but my main passion is front-end. I have set up various front-end infrastructures & championed complex React applications. Worked in enterprises and small startups. I truly enjoy collaborating with people (and agents) to build software products that bring real value.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
