import { GraduationCap, BookOpen, Clock3, Trophy } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    text: "Mentors who guide and cheer you on at every single step.",
  },
  {
    icon: BookOpen,
    title: "Quality Courses",
    text: "Lessons built to make you confident, not confused.",
  },
  {
    icon: Clock3,
    title: "Learn Anytime",
    text: "Your pace, your schedule — small steps still count as progress.",
  },
  {
    icon: Trophy,
    title: "Earn Certificates",
    text: "Celebrate every milestone with proof of what you've achieved.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-paper-raised py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-text-muted">
            You&rsquo;re capable of more than you think — we&rsquo;re just here
            to help you prove it to yourself.
          </p>
        </Reveal>
        <div className="mx-auto mt-5 mb-14 h-px w-24 bg-amber" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group flex flex-col items-center text-center transition hover:-translate-y-1">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-soft text-teal transition group-hover:scale-110 group-hover:bg-teal group-hover:text-white">
                  <Icon size={30} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-text-muted">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
