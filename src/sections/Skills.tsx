import { Code2, Layers, Wrench } from "lucide-react";
import { profile, skillGroups } from "../data/portfolio";
import { SectionHeading, Tag, ExternalLink } from "../components/ui";

export function Skills() {
  const icons = [Code2, Layers, Wrench];
  return (
    <section
      id="skills"
      className="container border-t border-line section-space"
    >
      <SectionHeading
        number="04"
        label="MY TOOLKIT"
        title="The tools behind the work."
        description="A practical stack for building dependable, thoughtful web experiences."
      />
      <div className="grid gap-7 md:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i];
          return (
            <article
              key={group.title}
              className="skill-card rounded-2xl border border-line p-6 lg:p-7"
            >
              <Icon size={24} strokeWidth={1.5} className="mb-7 text-accent" />
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="mt-2 text-xs text-muted">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-7 flex flex-col justify-between gap-4 rounded-xl bg-surface p-5 text-sm sm:flex-row sm:items-center">
        <p>
          <span className="mr-2 font-mono text-accent">{"</>"}</span> A little
          better at problem-solving, every day.
        </p>
        <ExternalLink
          href={profile.leetcode}
          className="shrink-0 text-xs font-semibold"
        >
          300+ problems on LeetCode
        </ExternalLink>
      </div>
    </section>
  );
}
