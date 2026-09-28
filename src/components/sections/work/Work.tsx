import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/sections/work/WorkCard";
import { projects } from "@/data/projects";
import { sectionClassName } from "@/components/sections/sectionUtils";

export function Work() {
  return (
    <section id="work" className={`${sectionClassName} pb-24 md:pb-50`}>
      <Reveal className="mb-16 font-mono text-sm text-accent">{"// a few career highlights"}</Reveal>

      {projects.map((project) => (
        <WorkCard key={project.name} project={project} />
      ))}
    </section>
  );
}
