"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { courses } from "@/lib/data";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";

export default function PopularCourses() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Explore Our Popular Courses
        </h2>
      </Reveal>
      <div className="mt-3 mb-10 h-px w-24 bg-amber" />

      <div className="relative">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {courses.map((course, i) => (
            <Reveal
              key={course.slug}
              delay={i * 60}
              className="w-[260px] flex-shrink-0 snap-start sm:w-[280px]"
            >
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        {/* floating scroll controls, right side of the course row */}
        <div className="pointer-events-none absolute -right-2 top-1/2 flex -translate-y-1/2 gap-2 sm:-right-4">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep hover:shadow-xl hover:shadow-coral/40"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep hover:shadow-xl hover:shadow-coral/40"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-text-muted sm:hidden">
        Swipe to see more courses &rarr;
      </p>
    </section>
  );
}
