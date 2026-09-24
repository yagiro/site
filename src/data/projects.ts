export type Project = {
  year: string;
  name: string;
  stack: string[];
  problem: string;
  role: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    year: "01",
    name: "Ledger — Financial Ops Platform",
    stack: ["React", "Next.js", "Node.js", "Postgres", "AWS"],
    problem:
      "Finance teams reconciled multi-currency transactions by hand across five disconnected tools.",
    role: "Led frontend & API architecture; built the reconciliation engine solo alongside one backend engineer.",
    outcome:
      "Reconciliation time dropped from 3 days to 40 minutes; adopted by 12 finance teams in 6 months.",
  },
  {
    year: "02",
    name: "Northwind — Logistics Dashboard",
    stack: ["TypeScript", "React", "GraphQL", "Redis"],
    problem:
      "Dispatch dashboard timed out under peak load, costing dispatchers real-time visibility.",
    role: "Rebuilt data layer and virtualized rendering; owned the migration end to end.",
    outcome: "P95 load time cut from 8.2s to 380ms; zero downtime during the migration.",
  },
  {
    year: "03",
    name: "Fieldnote — Mobile Field Reports",
    stack: ["React Native", "Node.js", "MongoDB", "Docker"],
    problem:
      "Field technicians needed offline-first reporting with reliable sync in low-connectivity areas.",
    role: "Sole engineer; designed offline sync protocol and shipped v1 to production in 10 weeks.",
    outcome: "Adopted by 400+ field technicians; sync failure rate under 0.3%.",
  },
];
