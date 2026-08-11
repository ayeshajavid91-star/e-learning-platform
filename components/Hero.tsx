import { ArrowRight, Sparkles } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section id="about" className="bg-sky">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-purple-deep">
            <Sparkles size={14} />
            Your learning journey starts here
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] text-purple-deep sm:text-6xl">
            E-Learning
          </h1>
          <p className="mt-1 font-display text-2xl text-purple-deep/80 sm:text-3xl">
            Learn Today, Lead Tomorrow.
          </p>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Build new skills, explore your potential, and learn from expert
            instructors—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-coral-deep"
            >
              Explore Courses
              <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-purple-deep/20 px-7 py-3.5 text-sm font-semibold text-purple-deep transition hover:border-purple-deep"
            >
              How It Works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-purple-deep/15 pt-6 text-sm text-purple-deep/70">
            <div>
              <p className="font-display text-2xl font-semibold text-purple-deep">12k+</p>
              <p>Students learning</p>
            </div>
            <div className="h-8 w-px bg-purple-deep/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-purple-deep">40+</p>
              <p>Expert instructors</p>
            </div>
            <div className="h-8 w-px bg-purple-deep/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-purple-deep">4.8/5</p>
              <p>Average rating</p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
