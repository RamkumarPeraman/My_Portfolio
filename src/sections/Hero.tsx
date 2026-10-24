import {
  ArrowDown,
  Download,
  MapPin,
  ArrowUpRight,
  Code2,
  Braces,
  Layers,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { ExternalLink } from "../components/ui";

function DeveloperVisual() {
  return (
    <div
      className="developer-stage"
      aria-label="Decorative illustration of frontend development"
    >
      <div className="stage-glow" />
      <div className="stage-orbit orbit-a" />
      <div className="stage-orbit orbit-b" />
      <div className="stage-label">
        <span className="status-dot" /> ENGINEERED WITH INTENTION
      </div>
      <div className="interface-window">
        <div className="interface-toolbar">
          <span className="flex gap-1.5">
            <i />
            <i />
            <i />
          </span>
          <span>ramkumar / workspace</span>
          <Braces size={13} />
        </div>
        <div className="interface-content">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted">
              COMPONENT / 001
            </span>
            <span className="interface-pill">React + TypeScript</span>
          </div>
          <div className="interface-heading">
            From logic.
            <br />
            <span>To experience.</span>
          </div>
          <div className="interface-chart" aria-hidden="true">
            {[30, 48, 37, 65, 52, 78, 62, 90, 76, 100].map((height, i) => (
              <span key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="interface-footer">
            <span>
              <span className="status-dot" /> Responsive by design
            </span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
      <div className="floating-chip chip-react">
        <span aria-hidden="true">⚛</span>
        <div>
          <strong>React</strong>
          <small>My everyday toolkit</small>
        </div>
      </div>
      <div className="floating-chip chip-code">
        <Code2 size={20} />
        <div>
          <strong>Clean code. Clear purpose.</strong>
          <small>One component at a time.</small>
        </div>
      </div>
      <div className="stage-caption">
        <Layers size={13} /> COMPONENTS THAT CONNECT.
      </div>
    </div>
  );
}
export function Hero() {
  return (
    <section className="container hero-section pt-12 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <p className="hero-kicker">
            <span className="status-dot" /> FRONT-END DEVELOPER{" "}
            <span className="text-muted">/ INDIA</span>
          </p>
          <p className="hero-intro">
            Hello, I’m Ramkumar P <span aria-hidden="true">↗</span>
          </p>
          <h1 className="hero-title">
            I build the
            <br />
            <span className="gradient-text">interface.</span>
            <br />
            <span className="outline-text">You feel the</span>
            <br />
            difference<span className="text-accent">.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-muted">
            Turning complex ideas into intuitive digital experiences. React,
            TypeScript, and a relentless attention to the details that make a
            product feel right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#work">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a
              className="button-secondary"
              href={profile.resume}
              download="Ramkumar_P_Resume.pdf"
            >
              Download CV <Download size={16} />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Tamil Nadu, India
            </span>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
        <DeveloperVisual />
      </div>
      <div className="hero-stats mt-16 grid grid-cols-3">
        <div className="stat">
          <strong>
            1<span>+</span>
          </strong>
          <span>Years of experience</span>
        </div>
        <div className="stat">
          <strong>
            20<span>+</span>
          </strong>
          <span>Reusable components</span>
        </div>
        <div className="stat">
          <strong>
            300<span>+</span>
          </strong>
          <span>LeetCode problems solved</span>
        </div>
      </div>
      <div className="tech-strip">
        <span>REACT</span>
        <i>✳</i>
        <span>TYPESCRIPT</span>
        <i>✳</i>
        <span>TAILWIND CSS</span>
        <i>✳</i>
        <span>UI ENGINEERING</span>
        <a href="#work" aria-label="Scroll to selected work">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
