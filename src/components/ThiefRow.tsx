import type { Thief } from "@/data/thieves";
import { displayName, formatCaughtOn, xProfileUrl } from "@/lib/thieves";

export function ThiefRow({ thief, index }: { thief: Thief; index: number }) {
  const name = displayName(thief);
  const caughtOn = formatCaughtOn(thief.caughtOn);

  return (
    <li className="group border-t border-line">
      <div className="flex flex-col gap-3 py-6 sm:flex-row sm:gap-6">
        {/* Index */}
        <span className="font-mono text-sm text-ink-faint tabular-nums sm:pt-1 sm:w-10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          {/* Name + handle */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <a
              href={xProfileUrl(thief.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold tracking-tight decoration-line underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {name}
            </a>
            <a
              href={xProfileUrl(thief.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink-faint transition-colors hover:text-ink-soft"
            >
              @{thief.handle.replace(/^@/, "")}
            </a>
          </div>

          {/* What they did */}
          <p className="mt-2 max-w-prose text-ink-soft">{thief.note}</p>

          {/* Meta line */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
            {thief.stolenFrom && (
              <span>
                stolen from <span className="text-ink-soft">{thief.stolenFrom}</span>
              </span>
            )}
            {caughtOn && <span>caught {caughtOn}</span>}
            {thief.evidenceUrl && (
              <a
                href={thief.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                receipts →
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
