import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ArrowUp } from "lucide-react";
import { navigation, profile } from "../data/portfolio";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <a
            href="#"
            aria-label="Ramkumar P home"
            className="text-xl font-bold tracking-tight"
          >
            Ramkumar <span className="text-accent">P</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="nav-link"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-3 text-sm font-semibold md:flex"
          >
            Let’s talk <ArrowUpRight size={18} />
          </a>
          <button
            className="p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="container flex flex-col gap-1 border-t border-line py-4 md:hidden"
          >
            {[...navigation, "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 hover:bg-white"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="container flex flex-col gap-5 border-t border-line py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with care & React.
      </p>
      <a href="#" className="inline-flex items-center gap-2 text-ink">
        Back to top <ArrowUp size={15} />
      </a>
    </footer>
  );
}
