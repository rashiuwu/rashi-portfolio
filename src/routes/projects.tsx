import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SkipLink } from "@/components/SiteHeader";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rashi Sawardekar" },
      { name: "description", content: "Selected projects by Rashi Sawardekar: AuroraTrip AI travel planner, Czyprotex Sips & Snaps cafe website, Java Cafe Billing System, and a Python Student Management System." },
      { property: "og:title", content: "Projects — Rashi Sawardekar" },
      { property: "og:description", content: "AI, full-stack, and desktop application projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "AuroraTrip AI — Smart Travel Planner",
    stack: ["Python", "Streamlit", "MongoDB Atlas", "APIs"],
    bullets: [
      "AI-powered travel planning application built with a collaborative team.",
      "Leave Planner feature for office employees with Indian Government holiday calendar.",
      "Weather-based clothing recommendations wired to live weather APIs.",
      "MongoDB Atlas cloud database for persistence.",
    ],
  },
  {
    title: "Czyprotex Sips & Snaps — Cafe Website",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Responsive cafe website with Login, Registration, and Contact modules.",
      "Interactive menu with live price calculation and coupon system.",
      "Order confirmation, gallery, blog, and events pages.",
      "Deployed on GitHub Pages.",
    ],
    href: "https://github.com/rashiuwu",
  },
  {
    title: "Java Cafe Billing System",
    stack: ["Java Swing"],
    bullets: [
      "Desktop POS with login authentication and role-aware access.",
      "GST calculation, discount system, and bill generation.",
      "Menu management with a professional GUI interface.",
    ],
  },
  {
    title: "Student Management System",
    stack: ["Python", "Tkinter", "MySQL"],
    bullets: [
      "Complete CRUD operations against MySQL.",
      "Search, update, and delete workflows.",
      "User-friendly Tkinter graphical interface.",
    ],
  },
];

function Projects() {
  return (
    <>
      <SkipLink />
      <KeyboardShortcuts />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <header className="animate-fade-up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Projects</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Things I've built</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A mix of AI, full-stack web, and desktop application work.
            </p>
          </header>

          <ul className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Selected projects">
            {projects.map((p) => {
              const id = `proj-${p.title.split(" ")[0].toLowerCase()}`;
              return (
                <li key={p.title}>
                  <article
                    aria-labelledby={id}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
                  >
                    <div aria-hidden="true" className="absolute -right-16 -top-16 size-40 rounded-full bg-[var(--gradient-aurora)] opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
                    <header>
                      <h2 id={id} className="text-xl font-semibold">{p.title}</h2>
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
                        {p.stack.map((s) => (
                          <li key={s} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">{s}</li>
                        ))}
                      </ul>
                    </header>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/90">
                      {p.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    {p.href && (
                      <p className="mt-5">
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.title} on GitHub (opens in new tab)`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                        >
                          View on GitHub <ExternalLink aria-hidden="true" className="size-3.5" />
                        </a>
                      </p>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
