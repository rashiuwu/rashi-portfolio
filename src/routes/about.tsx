import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SkipLink } from "@/components/SiteHeader";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rashi Sawardekar" },
      { name: "description", content: "About Rashi Sawardekar — B.Sc. Information Technology student with a Minor in Finance, passionate about AI, full-stack development, and FinTech." },
      { property: "og:title", content: "About — Rashi Sawardekar" },
      { property: "og:description", content: "Background, skills, coursework, and leadership experience." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const skills: Array<[string, string[]]> = [
  [
    "Languages",
    [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
    ],
  ],

  [
    "Frontend",
    [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Responsive Design",
      "Accessibility (a11y)",
    ],
  ],

  [
    "Backend",
    [
      "Python",
      "PHP",
      "REST APIs",
      "Node.js (Basics)",
    ],
  ],

  [
    "Databases",
    [
      "MySQL",
      "MongoDB Atlas",
      "SQL Server",
    ],
  ],

  [
    "Frameworks & Libraries",
    [
      "React",
      "TanStack Router",
      "TanStack Query",
      "Streamlit",
      "Tkinter",
      "Radix UI",
      "Lucide React",
    ],
  ],

  [
    "Tools",
    [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Vite",
      "npm",
      "Google Sheets",
      "Microsoft Excel",
      "Netlify",
    ],
  ],

  [
    "Concepts",
    [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "REST APIs",
      "CRUD",
      "Responsive Web Design",
    ],
  ],
];

const coursework = [
  "Advanced Web Technology", "Core Java", "Python Programming", "Operating Systems",
  "Mobile Programming", "Database Management Systems", "Computer Networks",
  "Software Engineering", "Data Structures", "Object-Oriented Programming",
];

const softSkills = ["Leadership", "Teamwork", "Communication", "Problem Solving", "Time Management", "Adaptability", "Analytical Thinking", "Quick Learning"];

function About() {
  return (
    <>
      <SkipLink />
      <KeyboardShortcuts />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <article className="mx-auto max-w-4xl px-6 py-16">
          <header className="animate-fade-up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">About</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              I'm <span className="text-gradient">Rashi</span> — student, builder, trekker.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Highly motivated B.Sc. IT student (CGPA 9.13, Minor in Finance) passionate about Software Development,
              AI, Full-Stack Development, Python, and FinTech. I've shipped web apps, automation tools, Java desktop
              applications, and AI-powered projects — and I like working with people who care about the details.
            </p>
          </header>

          <section aria-labelledby="edu" className="mt-12">
            <h2 id="edu" className="text-2xl font-semibold">Education</h2>
            <div className="mt-4 rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="font-semibold text-foreground">B.Sc. Information Technology</h3>
              <p className="text-sm text-muted-foreground">Minor: Finance · Third Year</p>
              <p className="mt-2 text-sm">Current CGPA: <strong className="text-foreground">9.13</strong></p>
            </div>
          </section>

          <section aria-labelledby="skills" className="mt-12">
            <h2 id="skills" className="text-2xl font-semibold">Technical Skills</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {skills.map(([k, vals]) => (
                <div key={k} className="rounded-2xl border border-border bg-card/60 p-5">
                  <dt className="text-sm font-semibold text-primary">{k}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {vals.map((v) => (
                      <span key={v} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs">{v}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="exp" className="mt-12">
            <h2 id="exp" className="text-2xl font-semibold">Work Experience at La Pinoz</h2>
            <div className="mt-4 rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="font-semibold text-foreground">Operations & Data Assistant · Part-Time</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Managed daily sales reports (DSR) and inventory.</li>
                <li>Maintained employee attendance and generated salary sheets.</li>
                <li>Worked with POS software and Google Sheets / Excel reports.</li>
                <li>Assisted in day-to-day operational activities.</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="lead" className="mt-12">
           <h2 id="lead" className="text-2xl font-semibold">Leadership & Activities</h2>
  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
    <li>Core PR Member – AURA College Fest, contributing to event promotions, audience engagement, and on-ground coordination.</li>

    <li>Bar Operations Manager (SM Group) – Corona Bar, Lollapalooza India. Supervised bar operations, coordinated team members, delegated responsibilities, and ensured smooth customer flow throughout the event.</li>

    <li>Trek Leader – Unlimited Trekers, leading weekend treks, ensuring participant safety, coordinating logistics, and managing groups during outdoor adventures.</li>

    <li>Collaborated on software development projects, contributing to planning, development, testing, and teamwork.</li>

    <li>Experienced in leadership, event management, public communication, and coordinating large groups in fast-paced environments.</li>

    <li>Strong problem-solving, teamwork, organizational, and interpersonal skills.</li>
  </ul>
</section>

          <section aria-labelledby="course" className="mt-12">
            <h2 id="course" className="text-2xl font-semibold">Coursework</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {coursework.map((c) => (
                <li key={c} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs">{c}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="soft" className="mt-12">
            <h2 id="soft" className="text-2xl font-semibold">Soft Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((c) => (
                <li key={c} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs">{c}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cert" className="mt-12">
            <h2 id="cert" className="text-2xl font-semibold">Certifications</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Chinese Language Level 1 (College)</li>
            </ul>
          </section>

          <section aria-labelledby="interests" className="mt-12">
            <h2 id="interests" className="text-2xl font-semibold">Career Interests</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Software Engineering", "Artificial Intelligence", "Full Stack Development", "Python Development", "FinTech", "Cloud Computing", "Cybersecurity"].map((c) => (
                <li key={c} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs">{c}</li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
