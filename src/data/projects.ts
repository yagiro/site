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
    name: "Check Point — Product Catalog",
    stack: ["React", "Redux", "Java", "Spring Boot", "SQL"],
    problem:
      "The existing product catalog was a large legacy codebase — slow and difficult to maintain.",
    role: "Tech lead and owner — rebuilt the SPA from the ground up, led two engineers, set branching/CI-CD standards and coding practices.",
    outcome:
      "Became the system of record for official quotes across Check Point's global sales org, processing thousands of quotes a month, still in production today.",
  },
  {
    year: "02",
    name: "Staylabs — Frontend Domain, Ground Up",
    stack: ["React", "Parcel", "AWS Lambda", "PostgreSQL", "DynamoDB", "Stripe"],
    problem:
      "An early-stage biotech startup needed a frontend architect to take ownership of the domain from the ground up.",
    role: "Owned frontend architecture solo alongside the CTO — built micro-frontend infra, core client libraries, and an A/B testing framework from zero.",
    outcome:
      "Within about a year, shipped three production apps on that foundation — customer onboarding with Stripe billing, account management, and annual microbiome reporting.",
  },
  {
    year: "03",
    name: "One Zero — IVR Authentication",
    stack: ["Kotlin", "Spring Boot", "Twilio", "GraphQL"],
    problem:
      "Bankers manually verified caller identity on every inbound support call, burning time on a repetitive task.",
    role: "Designed and built an automated phone-based identity verification flow end to end.",
    outcome: "Cut roughly 45 seconds off every verification call, across hundreds of calls a day.",
  },
];
