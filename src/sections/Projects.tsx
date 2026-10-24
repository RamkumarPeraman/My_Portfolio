import { useState } from "react";
import {
  Plus,
  Minus,
  BriefcaseBusiness,
  ArrowUpRight,
  UserRound,
} from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading, Tag, ExternalLink } from "../components/ui";
import { ProjectPreview } from "../components/ProjectPreview";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const personal = project.ownership === "Personal project";
  return (
    <article
      className={`project-card group ${personal ? "project-featured" : ""}`}
    >
      <div className="project-art">
        <ProjectPreview kind={project.id} />
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className={`ownership-badge ${personal ? "personal" : ""}`}>
            {personal ? (
              <UserRound size={12} />
            ) : (
              <BriefcaseBusiness size={12} />
            )}{" "}
            {project.ownership}
          </span>
          <span className="text-[10px] tracking-widest text-muted">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-xs text-accent">{project.role}</p>
        <p className="mt-5 text-sm leading-7 text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
          <button
            className="inline-flex min-h-10 items-center gap-3 text-xs font-semibold hover:text-accent"
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Close details" : "My contributions"}
            {expanded ? <Minus size={16} /> : <Plus size={16} />}
          </button>
          {project.url ? (
            <ExternalLink
              href={project.url}
              className="project-live text-xs font-semibold"
            >
              Visit website
            </ExternalLink>
          ) : (
            <span className="text-[10px] text-muted">Company-owned work</span>
          )}
        </div>
        <div
          id={`details-${project.id}`}
          hidden={!expanded}
          className="mt-4 rounded-xl border border-line bg-surface p-5"
        >
          <p className="mb-3 text-xs font-medium">
            {personal
              ? "Designed and developed as my own project."
              : "My frontend contributions as part of the company team."}
          </p>
          <ul className="list-disc space-y-2 pl-4 text-xs leading-6 text-muted">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
export function Projects() {
  const [filter, setFilter] = useState("All work");
  const filtered = projects.filter(
    (project) => filter === "All work" || project.ownership === filter,
  );
  return (
    <section id="work" className="container section-space">
      <SectionHeading
        number="01"
        label="IDEAS INTO INTERFACES"
        title="Selected work."
        description="An independently built platform, and the company products I’ve contributed to. Different challenges. The same attention to detail."
      />
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {["All work", "Personal project", "Company project"].map((label) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              aria-pressed={filter === label}
              className={filter === label ? "active" : ""}
            >
              {label === "All work" ? "All work" : `${label}s`}{" "}
              <span>
                {label === "All work"
                  ? "03"
                  : label === "Personal project"
                    ? "01"
                    : "02"}
              </span>
            </button>
          ))}
        </div>
        <span className="hidden items-center gap-2 text-xs text-muted sm:flex">
          Built with intention <ArrowUpRight size={14} />
        </span>
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
      <p role="status" className="sr-only">
        Showing {filtered.length} {filter.toLowerCase()} projects
      </p>
    </section>
  );
}
