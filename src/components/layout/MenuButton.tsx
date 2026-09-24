type MenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

/** Animated hamburger/close toggle for the mobile nav overlay. */
export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="z-50 hidden h-7 w-8 flex-col items-end justify-center gap-1.5 max-md:flex"
    >
      <span
        className={`block h-[1.5px] w-[26px] bg-ink/90 transition-transform duration-300 ${
          isOpen ? "translate-y-[3.75px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[1.5px] w-[26px] bg-ink/90 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-[1.5px] w-[26px] bg-ink/90 transition-transform duration-300 ${
          isOpen ? "-translate-y-[3.75px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}
