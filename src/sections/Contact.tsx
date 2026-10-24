import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../data/portfolio";
import { ExternalLink } from "../components/ui";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }
  return (
    <section id="contact" className="container pb-16">
      <div className="contact-panel relative overflow-hidden rounded-3xl bg-surface px-6 py-14 text-ink md:px-14 md:py-16">
        <div className="relative z-10">
          <p className="eyebrow text-[#b8b7ae]">05 / LET’S CONNECT</p>
          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-medium leading-[1.1] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                Have something
                <br />
                <span className="font-serif font-normal italic text-accent">
                  good in mind?
                </span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#b8b7ae]">
                A project, an opportunity, or a conversation about the web — I’d
                love to hear from you.
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="button-primary w-fit"
            >
              Let’s talk <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-6 lg:flex-row lg:items-center">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-sm hover:text-accent"
              >
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                className="rounded p-2 hover:bg-white/10"
                aria-label="Copy email address"
              >
                {copyState === "copied" ? (
                  <Check size={15} />
                ) : (
                  <Copy size={15} />
                )}
              </button>
              <span role="status" className="text-xs text-[#b8b7ae]">
                {copyState === "copied"
                  ? "Copied!"
                  : copyState === "failed"
                    ? "Please select and copy the email."
                    : ""}
              </span>
            </div>
            <div className="flex flex-wrap gap-5 text-xs text-[#b8b7ae]">
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <a href="tel:+916380707550" className="hover:text-white">
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
