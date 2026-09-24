"use client";

import { useState } from "react";
import { navLinks } from "@/data/navLinks";
import { MenuButton } from "@/components/layout/MenuButton";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-7 backdrop-blur-[6px] md:px-16">
        <div className="font-mono text-sm tracking-wide text-accent">
          <a href="#">yakir <span className="text-dim">/</span> dev</a>
        </div>
        <div className="flex gap-9 font-mono text-sm max-md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/85 hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <MenuButton isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((open) => !open)} />
      </nav>

      <MobileMenu isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
    </>
  );
}
