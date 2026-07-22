import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

const nav: ReadonlyArray<{ to: "/" | "/about" | "/projects" | "/resume" | "/contact"; label: string; exact?: boolean }> = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-medium focus:text-primary-foreground"
    >
      Skip to main content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header role="banner" className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight" aria-label="Rashi Sawardekar — Home">
          <span className="text-gradient">Rashi</span>
          <span className="text-foreground">.czyprotex</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1 text-sm sm:gap-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={n.exact ? { exact: true } : undefined}
                  activeProps={{
                    "aria-current": "page",
                    className: "bg-secondary text-foreground",
                  }}
                  className="inline-flex rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function ContactShortcuts({ className = "" }: { className?: string }) {
  const items = [
    { href: "mailto:rashi.sawardekar@somaiya.edu", label: "Email Rashi", Icon: Mail, kbd: "E" },
    { href: "https://github.com/rashiuwu", label: "Rashi on GitHub", Icon: Github, kbd: "G" },
    { href: "https://www.linkedin.com/in/rashi-sawardekar-9ab835328", label: "Rashi on LinkedIn", Icon: Linkedin, kbd: "L" },
  ];
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Contact shortcuts">
      {items.map(({ href, label, Icon, kbd }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            data-shortcut={kbd}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
          >
            <Icon aria-hidden="true" className="size-4 text-primary" />
            <span>{label.replace("Rashi on ", "").replace("Email Rashi", "Email")}</span>
            <kbd className="ml-1 hidden rounded border border-border bg-background/60 px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline">{kbd}</kbd>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Rashi Sawardekar. Built with care for accessibility.</p>
        <ContactShortcuts />
      </div>
    </footer>
  );
}
