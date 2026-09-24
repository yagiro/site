const LINKS = [
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-7 backdrop-blur-[6px] md:px-16">
      <div className="font-mono text-sm tracking-wide text-accent">
        yakir rabinovich <span className="text-dim">/</span> dev
      </div>
      <div className="flex gap-9 font-mono text-sm">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-ink/85 hover:text-accent">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
