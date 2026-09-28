export type Project = {
  label: string;
  name: string;
  stack: string[];
  problem: string;
  role: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    label: "2020 - Check Point",
    name: "Product Catalog",
    stack: ["React", "Redux",],
    problem:
      "The existing product catalog was a large legacy codebase — slow and difficult to maintain.",
    role: "Led a small dev team to build Product Catalog 2.0 from scratch, owning all FE-related decisions in cross-team discussions.",
    outcome:
      "Huge improvment in UX, performance & maintainability. The project successfuly became the new system of record for official quotes across Check Point's global sales org, generating thousands of quotes a month, still in production today.",
  },
  {
    label: "2021 - Staylabs",
    name: "Frontend Architect",
    stack: ["Micro-Frontends", "React", "Parcel", "AWS"],
    problem:
      "An early-stage biotech startup needed a frontend architect to take ownership of the domain from the ground up.",
    role: "Setup the entire frontend domain — micro-frontends, core libraries, A/B testing and several customer-facing web apps.",
    outcome:
      "Within about a year, shipped several web apps on that foundation — customer onboarding, account management and microbiome reporting.",
  },
  {
    label: "2024 - One Zero",
    name: "IVR Authentication",
    stack: ["Claude", "Spec-Driven Development", "Kotlin", "Kafka", "Node", "Twilio", "GraphQL"],
    problem:
      "Bankers manually verified caller identity on every inbound support call, burning time on a repetitive task.",
    role: "Designed and built an automated phone-based identity verification flow end to end.",
    outcome: "Improved security and cut ~45sec off each incoming call, across hundreds of calls a day.",
  },
];
