import trustScreenshot from "../assets/raavanathalaigal-preview.png";

export function ProjectPreview({ kind }: { kind: string }) {
  if (kind === "trust") {
    return (
      <figure className="project-preview preview-trust real-project-preview">
        <a
          href="https://www.raavanathalaigal.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-link"
          aria-label="Visit Raavana Thalaigal website (opens in a new tab)"
        >
          <div className="preview-top">
            <span aria-hidden="true">● ● ●</span>
            <span>raavanathalaigal.in</span>
            <span aria-hidden="true">↗</span>
          </div>
          <img
            src={trustScreenshot}
            alt="Raavana Thalaigal Trust homepage with teal navigation, a yellow Donate Now button, and a community service hero section."
            width={1834}
            height={865}
            loading="lazy"
            decoding="async"
          />
        </a>
        <figcaption className="preview-caption">
          Actual website · Click to visit live site
        </figcaption>
      </figure>
    );
  }
  return (
    <div className={`project-preview preview-${kind}`} aria-hidden="true">
      <div className="preview-browser">
        <div className="preview-top">
          <span>● ● ●</span>
          <span>
            {kind === "grant"
              ? "GrantGo / Workspace"
              : "Predictor-M / Overview"}
          </span>
          <span>↗</span>
        </div>
        <div className="flex min-h-48">
          <div className="preview-sidebar">
            <b>{kind === "grant" ? "g." : "p."}</b>
            <span className="mt-6">▦</span>
            <span>▤</span>
            <span>◴</span>
            <span>⚙</span>
          </div>
          <div className="min-w-0 flex-1 p-4">
            <div className="flex justify-between text-[10px] font-semibold">
              <span>
                {kind === "grant"
                  ? "Your workspace, in sync."
                  : "Monitoring overview"}
              </span>
              <span className="text-[7px] text-muted">● Live</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(kind === "grant"
                ? ["All requests", "In review", "Completed"]
                : ["Performance", "Active systems", "System health"]
              ).map((label, i) => (
                <div
                  key={label}
                  className="rounded border border-black/5 bg-white p-2"
                >
                  <p className="text-[6px] text-muted">{label}</p>
                  <p className="mt-1 text-sm font-semibold">
                    {kind === "grant"
                      ? ["24", "08", "16"][i]
                      : ["98.4%", "32", "Optimal"][i]}
                  </p>
                </div>
              ))}
            </div>
            {kind === "grant" ? (
              <div className="mt-3 space-y-2">
                {[
                  "Equipment request",
                  "Software access",
                  "Project approval",
                ].map((text, i) => (
                  <div
                    key={text}
                    className="flex items-center justify-between rounded bg-white p-2 text-[7px]"
                  >
                    <span>
                      <span className="mr-2 text-violet-500">▧</span>
                      {text}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 ${i === 1 ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}
                    >
                      {i === 1 ? "Approved" : "In review"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded bg-white p-3">
                <p className="text-[7px] text-muted">Activity over time</p>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {[35, 52, 42, 66, 51, 78, 64, 85, 71, 94, 80, 98].map(
                    (n, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-[#728e83]"
                        style={{ height: `${n}%`, opacity: 0.4 + i * 0.05 }}
                      />
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="preview-caption">UI concept · project illustration</span>
    </div>
  );
}
