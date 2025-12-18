export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Deployed on Vercel • Next.js App Router • Tailwind
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Vibecoded website, ready to ship.
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-neutral-300">
              A minimal landing page with sections, CTA buttons, and a clean dark aesthetic.
              Edit the copy and links and you’re done.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
              href="#work"
            >
              See work
            </a>
            <a
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
            >
              Deploy on Vercel
            </a>
          </div>
        </header>

        <section id="work" className="mt-16 grid gap-6 sm:grid-cols-2">
          <Card
            title="Project One"
            desc="Short description of what it does, what stack you used, and the impact."
            tag="Case study"
          />
          <Card
            title="Project Two"
            desc="Add a link to a repo, demo, or write-up. Keep it simple and scannable."
            tag="Demo"
          />
          <Card
            title="Project Three"
            desc="One sentence problem, one sentence solution, one sentence result."
            tag="Build"
          />
          <Card
            title="Project Four"
            desc="Replace these cards with anything: posts, photos, services, etc."
            tag="Launch"
          />
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          <Stat label="Build time" value="~5 min" />
          <Stat label="Perf budget" value="Lean" />
          <Stat label="Deploy" value="1 click" />
        </section>

        <section id="contact" className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Replace with your email / calendar link. If you want a contact form, add a Vercel
            Function (API route) later.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90"
              href="mailto:you@example.com"
            >
              Email me
            </a>
            <a
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Your Name. Built with Next.js + Tailwind.
        </footer>
      </div>
    </main>
  );
}

function Card({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <article className="group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 transition hover:bg-neutral-900/60">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-300">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{desc}</p>
      <div className="mt-5 text-sm font-medium text-neutral-200">
        View details <span className="transition group-hover:translate-x-0.5 inline-block">→</span>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-neutral-400">{label}</div>
    </div>
  );
}
