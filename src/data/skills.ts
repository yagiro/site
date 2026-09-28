export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React / Next.js", "Redux", "Micro-Frontends", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Kotlin/Java", "Spring Boot", "GraphQL"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "Kafka", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "AI",
    items: ["Claude Code", "Spec-Driven Development", "Cursor", "MCP"],
  },
];
