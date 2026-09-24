export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Accessibility (WCAG)"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PostgreSQL", "GraphQL", "Redis"],
  },
  {
    title: "Tools & Infra",
    items: ["AWS", "Docker", "CI/CD", "Terraform"],
  },
];
