import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SkipLink, ContactShortcuts } from "@/components/SiteHeader";
import { HeroScene } from "@/components/HeroScene";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rashi Sawardekar — B.Sc. IT Student · Developer · AI & FinTech" },
      { name: "description", content: "Portfolio of Rashi Sawardekar — B.Sc. Information Technology student (CGPA 9.13, Minor in Finance) building AI, full-stack, and FinTech projects with Python, Java, and modern web tech." },
      { property: "og:title", content: "Rashi Sawardekar — B.Sc. IT Student · Developer · AI & FinTech" },
      { property: "og:description", content: "Portfolio of Rashi Sawardekar — B.Sc. Information Technology student (CGPA 9.13, Minor in Finance) building AI, full-stack, and FinTech projects with Python, Java, and modern web tech." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SkipLink />
      <KeyboardShortcuts />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-heading" className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles aria-hidden="true" className="size-3 text-primary" />
              Available for internships & collaborations
            </span>
            <h1 id="hero-heading" className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hi, I'm <span className="text-gradient">Rashi Sawardekar</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              B.Sc. Information Technology student (CGPA <strong className="text-foreground">9.13</strong>) with a Minor in Finance. I build AI-powered apps, full-stack websites, and desktop tools — with a soft spot for Python and FinTech.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                See projects <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/60"
              >
                <Download aria-hidden="true" className="size-4" /> Download resume
              </Link>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Quick shortcuts</p>
              <ContactShortcuts />
              <p className="mt-3 text-xs text-muted-foreground">
                Tip: press <kbd className="rounded border border-border bg-background/60 px-1.5">E</kbd>, <kbd className="rounded border border-border bg-background/60 px-1.5">G</kbd>, <kbd className="rounded border border-border bg-background/60 px-1.5">L</kbd>, <kbd className="rounded border border-border bg-background/60 px-1.5">R</kbd>, or <kbd className="rounded border border-border bg-background/60 px-1.5">C</kbd>.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <HeroScene />
          </div>
        </section>

        <section aria-labelledby="highlights-heading" className="mx-auto max-w-6xl px-6 pb-16">
          <h2 id="highlights-heading" className="text-2xl font-semibold">What I focus on</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              { t: "Software & AI", d: "Python-first apps, AI features, and automation tools that solve real problems." },
              { t: "Full-Stack Web", d: "HTML, CSS, JS, PHP, and MySQL — from responsive UIs to CRUD backends." },
              { t: "FinTech curiosity", d: "Minor in Finance + strong DSA fundamentals fuel my interest in FinTech." },
            ].map((c) => (
              <li key={c.t} className="rounded-2xl border border-border bg-card/60 p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-semibold text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
