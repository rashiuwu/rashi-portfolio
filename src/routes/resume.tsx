import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SkipLink, ContactShortcuts } from "@/components/SiteHeader";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { Download, FileText, Eye } from "lucide-react";

const RESUME_FILE = "/rashi-sawardekar-resume.pdf";
const RESUME_NAME = "Rashi-Sawardekar-Resume.pdf";
const RESUME_SIZE_KB = 4.1; // approximate

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Rashi Sawardekar (PDF Download)" },
      { name: "description", content: "Download Rashi Sawardekar's resume — B.Sc. Information Technology student with a Minor in Finance, focused on AI, full-stack, Python, and FinTech." },
      { property: "og:title", content: "Resume — Rashi Sawardekar" },
      { property: "og:description", content: "Download Rashi Sawardekar's resume (PDF)." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

function Resume() {
  return (
    <>
      <SkipLink />
      <KeyboardShortcuts />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="resume-heading" className="mx-auto max-w-4xl px-6 py-16">
          <header className="animate-fade-up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Resume</p>
            <h1 id="resume-heading" className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Grab my <span className="text-gradient">resume</span>
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Everything you need — education, technical skills, projects, and experience — in one accessible PDF.
            </p>
          </header>

          <div
            role="region"
            aria-labelledby="resume-card-title"
            className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div
                aria-hidden="true"
                className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--gradient-aurora)] shadow-[var(--shadow-glow)]"
              >
                <FileText className="size-9 text-primary-foreground" />
              </div>

              <div className="flex-1">
                <h2 id="resume-card-title" className="text-xl font-semibold">
                  Rashi Sawardekar — Resume
                </h2>
                <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <div className="flex gap-1"><dt className="sr-only">File name</dt><dd>{RESUME_NAME}</dd></div>
                  <div aria-hidden="true">·</div>
                  <div className="flex gap-1"><dt className="sr-only">File type</dt><dd>PDF</dd></div>
                  <div aria-hidden="true">·</div>
                  <div className="flex gap-1"><dt className="sr-only">File size</dt><dd>~{RESUME_SIZE_KB} KB</dd></div>
                  <div aria-hidden="true">·</div>
                  <div className="flex gap-1"><dt className="sr-only">Updated</dt><dd>Updated 2025</dd></div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={RESUME_FILE}
                    download={RESUME_NAME}
                    aria-label={`Download resume, ${RESUME_NAME}, PDF, about ${RESUME_SIZE_KB} kilobytes`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    Download PDF
                  </a>
                  <a
                    href={RESUME_FILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume PDF in a new tab"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/60"
                  >
                    <Eye aria-hidden="true" className="size-4" />
                    Preview in new tab
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">What's inside</p>
              <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                {[
                  "Professional summary",
                  "Education & CGPA (9.13)",
                  "Technical skills matrix",
                  "Four featured projects",
                  "Work experience & leadership",
                  "Certifications & interests",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section aria-labelledby="shortcuts-heading" className="mt-12">
            <h2 id="shortcuts-heading" className="text-2xl font-semibold">Keyboard-friendly contact shortcuts</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every link below is fully focusable. Or press a single key anywhere on the site:
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">G</kbd> GitHub,
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">L</kbd> LinkedIn,
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">E</kbd> Email,
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">R</kbd> Resume,
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">C</kbd> Contact.
            </p>
            <div className="mt-5">
              <ContactShortcuts />
            </div>
          </section>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
