import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow mb-5">
          <span className="text-accent">{number} /</span> {label}
        </p>
        <h2 className="section-title">{title}</h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line px-3 py-1.5 text-xs font-medium">
      {children}
    </span>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
