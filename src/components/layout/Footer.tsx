const currYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative z-2 flex justify-between border-t border-border-soft px-6 py-8 font-mono text-xs text-dim md:px-16">
      <span>© {currYear} yakir rabinovich</span>
    </footer>
  );
}
