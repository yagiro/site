import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";
import { sectionClassName } from "@/components/sections/sectionUtils";

export function Skills() {
  return (
    <section id="skills" className={`${sectionClassName} pb-24 md:pb-50`}>
      <Reveal className="mb-16 font-mono text-sm text-accent">{"// skills & stack"}</Reveal>

      <Reveal className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-14">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-5 text-[17px] font-semibold text-ink/90">{group.title}</div>
            <div className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="border-b border-border-soft py-2 font-mono text-[15px] text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
