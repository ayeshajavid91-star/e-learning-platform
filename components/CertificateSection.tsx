"use client";

import { useMemo, useState } from "react";
import { Award, CheckCircle2, Download } from "lucide-react";
import Reveal from "./Reveal";

const courseOptions = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Data Analysis",
  "Artificial Intelligence",
  "Machine Learning",
];

export default function CertificateSection() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState(courseOptions[0]);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const displayName = name.trim() || "Your Name Here";
  const displayDate = useMemo(() => {
    const [y, m, d] = date.split("-").map(Number);
    if (!y || !m || !d) return "";
    return new Date(y, m - 1, d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [date]);
  const certId = useMemo(() => {
    const year = date.split("-")[0] || new Date().getFullYear();
    const seed = (name.trim().length + course.length) * 137 + 4021;
    const num = String((seed % 90000) + 10000);
    return `EL-${year}-${num}`;
  }, [name, course, date]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
            <Award size={14} />
            Unlocked on course completion
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Finish the Course, Earn Your Certificate.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-text-muted leading-relaxed">
            Pass the final quiz with 70% or higher and your certificate unlocks
            automatically — type your name below to see exactly what
            you&rsquo;ll achieve.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[280px_1fr]">
        {/* progress / unlock tracker */}
        <div className="rounded-2xl border border-line bg-paper-raised p-6">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-muted">
            Your Progress
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <CheckCircle2 size={16} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">Complete lessons</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-line">
                  <div className="h-1.5 w-full rounded-full bg-teal" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <CheckCircle2 size={16} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">Pass final quiz</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-line">
                  <div className="h-1.5 w-full rounded-full bg-teal" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                <Award size={16} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">Certificate unlocked</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-line">
                  <div className="h-1.5 w-full rounded-full bg-coral" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-5 h-px w-full bg-line" />

          <label
            htmlFor="certName"
            className="text-xs font-semibold uppercase tracking-wide text-text-muted"
          >
            Your name
          </label>
          <input
            id="certName"
            type="text"
            placeholder="Type your name"
            maxLength={28}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-coral"
          />

          <label
            htmlFor="certCourse"
            className="mt-4 block text-xs font-semibold uppercase tracking-wide text-text-muted"
          >
            Course
          </label>
          <select
            id="certCourse"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-coral"
          >
            {courseOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label
            htmlFor="certDate"
            className="mt-4 block text-xs font-semibold uppercase tracking-wide text-text-muted"
          >
            Date
          </label>
          <input
            id="certDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-coral"
          />

          <button
            onClick={() => window.print()}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-soft"
          >
            <Download size={15} />
            Download / Print
          </button>
        </div>

        {/* live certificate preview */}
        <div>
          <svg
            viewBox="0 0 520 360"
            className="mx-auto w-full max-w-xl drop-shadow-xl"
            role="img"
            aria-label="Certificate of completion preview"
          >
            <defs>
              <linearGradient id="certBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbf8f4" />
                <stop offset="100%" stopColor="#f6f0f8" />
              </linearGradient>
              <linearGradient id="purpleText" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2c1b6b" />
                <stop offset="100%" stopColor="#4a3a8e" />
              </linearGradient>
            </defs>

            {/* card base */}
            <rect x="0" y="0" width="520" height="360" rx="10" fill="url(#certBg)" stroke="#e3d9ef" strokeWidth="1.5" />

            {/* decorative corner florals */}
            <g opacity="0.55">
              <ellipse cx="30" cy="330" rx="60" ry="34" fill="#c9b8de" />
              <ellipse cx="18" cy="300" rx="34" ry="50" fill="#dcd0ea" />
              <ellipse cx="55" cy="355" rx="40" ry="22" fill="#e8dcf2" />
            </g>
            <g opacity="0.5">
              <ellipse cx="500" cy="40" rx="55" ry="32" fill="#c9b8de" />
              <ellipse cx="512" cy="70" rx="30" ry="46" fill="#dcd0ea" />
            </g>
            {/* thin gold branch accents */}
            <path d="M8 340 Q30 300 20 260" stroke="#c9a24b" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M512 20 Q495 55 505 90" stroke="#c9a24b" strokeWidth="1" fill="none" opacity="0.6" />

            {/* ribbon badge top-right */}
            <path d="M452 0 h36 v58 l-18 -12 l-18 12 z" fill="#4a3a8e" />
            <circle cx="470" cy="20" r="11" fill="#f6f0f8" />
            <path
              d="M470 13 l2.2 4.6 5 0.7 -3.6 3.5 0.9 5 -4.5 -2.4 -4.5 2.4 0.9 -5 -3.6 -3.5 5 -0.7 z"
              fill="#4a3a8e"
            />

            {/* logo */}
            <g transform="translate(250,10)">
              <rect x="0" y="0" width="20" height="16" rx="2" fill="#1b2340" />
              <path d="M2 4 h16 M2 8 h16 M2 12 h10" stroke="#e8dcf2" strokeWidth="1.4" />
            </g>
            <text x="260" y="46" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fontWeight="700" fill="#1b2340">
              E-Learning
            </text>
            <text x="260" y="57" textAnchor="middle" fontFamily="Arial" fontSize="6" letterSpacing="2.5" fill="#4a3a8e">
              LEARN &middot; GROW &middot; SUCCEED
            </text>

            {/* title */}
            <text x="260" y="102" textAnchor="middle" fontFamily="Georgia, serif" fontSize="32" fontWeight="700" fill="url(#purpleText)" letterSpacing="1">
              CERTIFICATE
            </text>
            <text x="172" y="122" textAnchor="middle" fontFamily="Arial" fontSize="6" fill="#c9a24b">&#10022;</text>
            <text x="260" y="122" textAnchor="middle" fontFamily="Arial" fontSize="12" letterSpacing="4" fill="#2c1b6b">
              OF COMPLETION
            </text>
            <text x="348" y="122" textAnchor="middle" fontFamily="Arial" fontSize="6" fill="#c9a24b">&#10022;</text>

            <text x="260" y="150" textAnchor="middle" fontFamily="Arial" fontSize="10" letterSpacing="2" fill="#6b7086">
              THIS IS TO CERTIFY THAT
            </text>

            {/* name */}
            <text x="260" y="188" textAnchor="middle" fontFamily="'Segoe Script', 'Brush Script MT', cursive" fontStyle="italic" fontSize="30" fill="#2c1b6b">
              {displayName}
            </text>
            <line x1="150" y1="200" x2="370" y2="200" stroke="#c9a24b" strokeWidth="0.75" />

            <text x="260" y="222" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#6b7086">
              has successfully completed the course
            </text>
            <text x="260" y="238" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12.5" fontWeight="700" fill="#1b2340">
              &lsquo;{course}&rsquo;
            </text>
            <text x="260" y="253" textAnchor="middle" fontFamily="Arial" fontSize="8.5" fill="#8a90a3">
              and has shown dedication and consistent effort throughout the course.
            </text>

            {/* signatures */}
            <text x="150" y="292" textAnchor="middle" fontFamily="'Segoe Script', cursive" fontStyle="italic" fontSize="13" fill="#1b2340">
              Ayesha Javid
            </text>
            <line x1="100" y1="300" x2="200" y2="300" stroke="#c7cbdb" strokeWidth="0.75" />
            <text x="150" y="311" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#1b2340">
              COURSE INSTRUCTOR
            </text>

            <text x="370" y="292" textAnchor="middle" fontFamily="'Segoe Script', cursive" fontStyle="italic" fontSize="13" fill="#1b2340">
              Imran Qureshi
            </text>
            <line x1="320" y1="300" x2="420" y2="300" stroke="#c7cbdb" strokeWidth="0.75" />
            <text x="370" y="311" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#1b2340">
              HEAD OF ACADEMICS
            </text>

            {/* seal */}
            <g transform="translate(260,296)">
              <circle r="24" fill="#4a3a8e" />
              <circle r="24" fill="none" stroke="#c9a24b" strokeWidth="1" strokeDasharray="2.2 2.2" />
              <circle r="18" fill="#f6f0f8" />
              <path d="M0 -12 l2.6 6.2 6.6 0.6 -5 4.4 1.5 6.5 -5.7 -3.4 -5.7 3.4 1.5 -6.5 -5 -4.4 6.6 -0.6 z" fill="#c9a24b" />
              <path d="M-15 20 l6 8 M15 20 l-6 8" stroke="#4a3a8e" strokeWidth="6" strokeLinecap="round" />
            </g>

            {/* footer meta */}
            <line x1="30" y1="335" x2="110" y2="335" stroke="#e3d9ef" strokeWidth="1" />
            <text x="30" y="330" fontFamily="Arial" fontSize="9" fill="#1b2340">{displayDate}</text>
            <text x="30" y="346" fontFamily="Arial" fontSize="6.5" letterSpacing="1.5" fill="#8a90a3">DATE</text>

            <text x="490" y="330" textAnchor="end" fontFamily="Arial" fontSize="9" fill="#1b2340">{certId}</text>
            <line x1="410" y1="335" x2="490" y2="335" stroke="#e3d9ef" strokeWidth="1" />
            <text x="490" y="346" textAnchor="end" fontFamily="Arial" fontSize="6.5" letterSpacing="1.5" fill="#8a90a3">CERTIFICATE ID</text>
          </svg>
          <p className="mt-4 text-center text-xs text-text-muted">
            Live preview — this updates as you type, exactly like the
            certificate you&rsquo;ll unlock in your dashboard.
          </p>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
