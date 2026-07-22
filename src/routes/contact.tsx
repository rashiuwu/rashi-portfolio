import { createFileRoute } from "@tanstack/react-router";
import { useState, useId } from "react";
import { SiteHeader, SiteFooter, SkipLink, ContactShortcuts } from "@/components/SiteHeader";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rashi Sawardekar" },
      { name: "description", content: "Get in touch with Rashi Sawardekar for internships, collaborations, or project inquiries." },
      { property: "og:title", content: "Contact — Rashi Sawardekar" },
      { property: "og:description", content: "Message Rashi about internships, collaborations, or projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const nameErrId = useId();
  const emailErrId = useId();
  const messageErrId = useId();

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: typeof errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      form.reset();
    } else {
      setSubmitted(false);
    }
  };

  const fieldClass =
    "mt-2 block w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-foreground placeholder:text-muted-foreground";

  return (
    <>
      <SkipLink />
      <KeyboardShortcuts />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="contact-heading" className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
            <h1 id="contact-heading" className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's <span className="text-gradient">build something</span>
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              I reply within a couple of days. For quick pings, use the shortcuts on the right or press
              <kbd className="mx-1 rounded border border-border bg-background/60 px-1.5">E</kbd> to email me.
            </p>

            <form onSubmit={handleSubmit} noValidate aria-labelledby="contact-heading" className="mt-8 space-y-5">
              <div>
                <label htmlFor={nameId} className="block text-sm font-medium">Name <span aria-hidden="true" className="text-primary">*</span></label>
                <input
                  id={nameId} name="name" type="text" required autoComplete="name"
                  aria-required="true" aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? nameErrId : undefined}
                  className={fieldClass}
                />
                {errors.name && <p id={nameErrId} role="alert" className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor={emailId} className="block text-sm font-medium">Email <span aria-hidden="true" className="text-primary">*</span></label>
                <input
                  id={emailId} name="email" type="email" required autoComplete="email"
                  aria-required="true" aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? emailErrId : undefined}
                  className={fieldClass}
                />
                {errors.email && <p id={emailErrId} role="alert" className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor={messageId} className="block text-sm font-medium">Message <span aria-hidden="true" className="text-primary">*</span></label>
                <textarea
                  id={messageId} name="message" rows={5} required
                  aria-required="true" aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? messageErrId : undefined}
                  className={fieldClass}
                />
                {errors.message && <p id={messageErrId} role="alert" className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>

              <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm text-foreground">
                {submitted && "Thanks — your message has been sent."}
              </div>
            </form>
          </div>

          <aside aria-labelledby="direct-heading" className="glass h-fit rounded-3xl p-6">
            <h2 id="direct-heading" className="text-lg font-semibold">Direct shortcuts</h2>
            <p className="mt-2 text-sm text-muted-foreground">One tap or one key. All keyboard-navigable.</p>
            <div className="mt-5">
              <ContactShortcuts className="flex-col items-stretch" />
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
