import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export function WorkCard({ project }: { project: Project }) {
  return (
    <Reveal
      className="mb-8 grid grid-cols-1 gap-10 border border-border/60 bg-card/50 p-8 transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-accent-hover/60 hover:shadow-[0_24px_60px_-20px_oklch(0.3_0.15_140_/_0.2)] md:grid-cols-[0.7fr_2fr] md:gap-14 md:p-12"
    >
      <div>
        <div className="mb-3.5 font-mono text-[13px] text-accent">mission {project.year}</div>
        <h3 className="mb-4 text-[26px] font-semibold tracking-[-0.01em] text-ink md:text-[30px]">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-border px-3 py-1.5 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        <div>
          <div className="mb-2.5 font-mono text-xs text-faint">problem</div>
          <p className="text-[15px] leading-[1.7] text-body">{project.problem}</p>
        </div>
        <div>
          <div className="mb-2.5 font-mono text-xs text-faint">role</div>
          <p className="text-[15px] leading-[1.7] text-body">{project.role}</p>
        </div>
        <div>
          <div className="mb-2.5 font-mono text-xs text-faint">outcome</div>
          <p className="text-[15px] font-medium leading-[1.7] text-accent-bright">
            {project.outcome}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
