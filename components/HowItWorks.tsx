import { UserPlus, BookOpen, PlayCircle, Award } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: UserPlus, label: "Create Account" },
  { icon: BookOpen, label: "Choose Course" },
  { icon: PlayCircle, label: "Start Learning" },
  { icon: Award, label: "Get Certificate" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
          How It Works
        </h2>
      </Reveal>
      <div className="mx-auto mt-3 mb-16 h-px w-24 bg-amber" />

      <div className="flex flex-col items-stretch gap-8 sm:flex-row sm:items-start sm:justify-between">
        {steps.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 120} className="flex flex-1 items-center sm:flex-col sm:text-center">
            <div className="flex flex-col items-center sm:flex-1">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-paper-raised text-ink transition-transform duration-300 hover:scale-110 hover:bg-ink hover:text-amber">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Step {i + 1}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-ink">
                {label}
              </p>
            </div>

            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="mx-4 hidden h-px flex-1 self-center bg-line sm:block sm:mt-[-2.5rem]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, var(--amber) 0 6px, transparent 6px 12px)",
                  height: "2px",
                }}
              />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
