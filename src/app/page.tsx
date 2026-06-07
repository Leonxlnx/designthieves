import { thieves } from "@/data/thieves";
import { ThiefRow } from "@/components/ThiefRow";

export default function Home() {
  const count = thieves.length;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6">
      {/* Masthead */}
      <header className="flex items-center justify-between border-b border-line py-5">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Design Thieves
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          on X
        </span>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Design Thieves
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">
          A running ledger of design thieves caught on X — the accounts that
          lift, trace, and repost other people&apos;s design work as their own.
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          {count} {count === 1 ? "thief" : "thieves"} on record · curated by{" "}
          <a
            href="https://x.com/Leonxlnx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft underline-offset-4 hover:text-accent hover:underline"
          >
            @Leonxlnx
          </a>
        </p>
      </section>

      {/* Ledger */}
      <main className="flex-1">
        {count === 0 ? (
          <p className="border-t border-line py-16 text-center text-ink-faint">
            No thieves on record yet. The list stays clean for now.
          </p>
        ) : (
          <ol className="border-b border-line">
            {thieves.map((thief, index) => (
              <ThiefRow key={thief.handle} thief={thief} index={index} />
            ))}
          </ol>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-line py-8 font-mono text-xs leading-relaxed text-ink-faint">
        <p>
          Caught someone? Profiles live in{" "}
          <code className="text-ink-soft">src/data/thieves.ts</code> — add an
          entry and open a PR.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Design Thieves · receipts over rumors.
        </p>
      </footer>
    </div>
  );
}
