import { navLinks } from "@/data/navLinks";

type MobileMenuProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

/** Full-screen nav overlay shown on narrow viewports. */
export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[39] flex flex-col items-center justify-center gap-10 backdrop-blur-2xl transition-[opacity,visibility] duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{ background: "oklch(0.14 0.02 260 / 0.4)" }}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="font-mono text-[26px] text-ink"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
