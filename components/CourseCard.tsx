import { Star, Clock, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/data";
import { categoryMap } from "@/lib/category";

export default function CourseCard({ course }: { course: Course }) {
  const { icon: Icon, from, to } = categoryMap[course.category];

  return (
    <a
      href={course.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
    >
      <div
        className="flex h-36 items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Icon
          size={44}
          strokeWidth={1.75}
          className="text-paper transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          {course.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
          {course.tagline}
        </p>

        <div className="my-4 h-px w-full bg-line" />

        <div className="flex items-center justify-between text-sm text-ink-soft">
          <span>{course.instructor}</span>
          <span className="flex items-center gap-1 font-semibold text-amber-deep">
            <Star size={14} fill="currentColor" />
            {course.rating}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 font-semibold text-ink transition group-hover:gap-2 group-hover:text-amber-deep">
            Watch on YouTube
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
