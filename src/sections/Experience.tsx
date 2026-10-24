import { experience } from "../data/portfolio";
import { SectionHeading } from "../components/ui";

export function Experience() {
  return (
    <section id="experience" className="container section-space">
      <SectionHeading
        number="03"
        label="THE JOURNEY"
        title="Learning. Building. Growing."
      />
      <div>
        {experience.map((job) => (
          <article
            key={job.company}
            className="grid gap-5 border-t border-line py-9 md:grid-cols-[.7fr_1.3fr] md:gap-12"
          >
            <div>
              <span className="font-mono text-xs text-muted">{job.period}</span>
              <p className="mt-3 text-xs text-muted">{job.place}</p>
              {job.current && (
                <span className="mt-4 inline-flex rounded-full bg-[#e8ebdf] px-3 py-1 text-[10px] font-semibold text-[#4f6342]">
                  CURRENT ROLE
                </span>
              )}
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-accent">{job.role}</p>
              <h3 className="text-xl font-semibold tracking-tight">
                {job.company}
                <span className="mt-1 block text-sm font-normal text-muted">
                  Private Limited
                </span>
              </h3>
              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-7 text-muted"
                  >
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
