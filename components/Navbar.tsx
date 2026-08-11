"use client";

import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Explore" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber transition-transform duration-300 hover:rotate-6">
            <BookOpen size={18} strokeWidth={2.25} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            E-Learning
          </span>
        </a>

        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#courses"
            className="btn-pulse hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep hover:shadow-lg hover:shadow-coral/30 sm:inline-flex"
          >
            Get Started
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div className="menu-drop border-t border-line bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1 text-sm font-medium text-ink-soft">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 transition hover:bg-teal-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-coral px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-coral-deep"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
