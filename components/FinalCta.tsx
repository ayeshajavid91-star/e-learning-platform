import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-purple-deep px-8 py-16 text-center sm:px-16">
          {/* decorative dotted path */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 800 300"
            preserveAspectRatio="none"
          >
            <path
              d="M -20 250 C 200 100, 400 350, 820 80"
              fill="none"
              stroke="#f0654a"
              strokeWidth="2"
              className="path-dot"
            />
          </svg>

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-paper/70">
              Your journey towards new skills starts here.
            </p>
            <a
              href="#courses"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep hover:shadow-lg hover:shadow-coral/40"
            >
              Explore Courses
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
