import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/sections/WorkCard";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="relative z-[2] mx-auto max-w-[1400px] px-6 pb-24 pt-10 md:px-16 md:pb-[200px] md:pt-10">
      <Reveal className="mb-16 font-mono text-sm text-accent">{"// 02 — selected work"}</Reveal>

      {projects.map((project) => (
        <WorkCard key={project.name} project={project} />
      ))}
    </section>
  );
}
