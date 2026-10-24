import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="container section-space grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-5">
            <span className="text-accent">02 /</span> A LITTLE ABOUT ME
          </p>
          <h2 className="section-title">
            A developer’s mind.
            <br />
            <span className="font-serif font-normal italic">
              An eye for detail.
            </span>
          </h2>
          <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-line px-4 py-2 text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#6e8062]" />{" "}
            Based in Tamil Nadu. Building for the web.
          </div>
        </div>
        <div>
          <p className="text-lg leading-8">
            I’m Ramkumar P, a front-end developer who enjoys making complex
            information feel simple and accessible.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted">
            My work spans responsive web applications, data-driven dashboards,
            and internal workflow tools. I focus on reusable components, clear
            state management, and thoughtful API integration to create
            interfaces that are easy to use and maintain.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            I bring hands-on experience from TVM Signalling and Transportation
            Systems and a project traineeship at Zoho. Beyond the UI, I enjoy
            sharpening my problem-solving skills — with 300+ LeetCode problems
            solved.
          </p>
          <div className="mt-8 flex items-start gap-4 border-t border-line pt-6">
            <GraduationCap size={23} className="shrink-0 text-accent" />
            <div>
              <h3 className="text-sm font-semibold">
                B.Tech in Information Technology
              </h3>
              <p className="mt-1 text-xs leading-6 text-muted">
                National Engineering College, Kovilpatti
                <br />
                2021 – 2025 <span className="mx-2">·</span> CGPA 7.68
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
