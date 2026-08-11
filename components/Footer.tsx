import { BookOpen, ArrowRight } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0.5C5.373 0.5 0 5.873 0 12.5c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.004.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.104.823 2.226 0 1.606-.014 2.902-.014 3.297 0 .32.19.694.8.576C20.565 22.297 24 17.8 24 12.5 24 5.873 18.627 0.5 12 0.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-ink">
                <BookOpen size={20} strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  E-Learning
                </p>
                <p className="text-xs italic text-white/50">
                  Learn Today, Lead Tomorrow
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Helping students build real, job-ready skills through guided
              courses, hands-on projects, and a certificate you&rsquo;ve
              truly earned.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-coral-deep"
              >
                Explore Courses
                <ArrowRight size={15} />
              </a>
              <a
                href="https://github.com/ayeshajavid91-star/e-learning-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/50"
              >
                <GithubIcon size={15} />
                View Source
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="transition hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition hover:text-white">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition hover:text-white">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* About this project */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              About This Project
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Courses cover Web Development, UI/UX, Digital Marketing, Data
              Analysis, and AI &amp; Machine Learning &mdash; with a{" "}
              <a
                href="https://github.com/ayeshajavid91-star/e-learning-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber underline decoration-amber/40 underline-offset-2 transition hover:text-white"
              >
                GitHub source
              </a>{" "}
              you can explore anytime.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} E-Learning. All rights reserved.</p>
          <p>Built by Ayesha Javid &mdash; Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
