export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="w-full max-w-lg mx-auto"
      role="img"
      aria-label="Students learning with a laptop, graduation cap, and books"
    >
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7a488" />
          <stop offset="100%" stopColor="#f0654a" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="270" cy="410" rx="190" ry="18" fill="#9fd0ee" opacity="0.6" />

      {/* laptop base */}
      <g>
        <rect x="120" y="330" width="300" height="18" rx="4" fill="#eaf6fd" stroke="#bfe4f8" />
        <rect x="140" y="150" width="260" height="180" rx="10" fill="#eaf6fd" stroke="#bfe4f8" strokeWidth="2" />
        <rect x="156" y="164" width="228" height="152" rx="4" fill="url(#screenGrad)" />

        {/* screen content: play card */}
        <rect x="176" y="182" width="120" height="72" rx="6" fill="#ffffff" opacity="0.95" />
        <circle cx="210" cy="218" r="16" fill="#f0654a" />
        <path d="M205 210 l14 8 -14 8 z" fill="#ffffff" />
        <rect x="176" y="264" width="90" height="8" rx="4" fill="#ffffff" opacity="0.85" />
        <rect x="176" y="278" width="60" height="6" rx="3" fill="#ffffff" opacity="0.6" />

        <rect x="308" y="182" width="60" height="8" rx="4" fill="#ffffff" opacity="0.85" />
        <rect x="308" y="196" width="60" height="8" rx="4" fill="#ffffff" opacity="0.7" />
        <rect x="308" y="210" width="40" height="8" rx="4" fill="#ffffff" opacity="0.55" />
      </g>

      {/* graduation cap */}
      <g transform="translate(322,72)">
        <path d="M40 0 L80 18 L40 36 L0 18 Z" fill="#2c1b6b" />
        <path d="M40 36 L40 52" stroke="#2c1b6b" strokeWidth="3" />
        <circle cx="40" cy="54" r="4" fill="#f0654a" />
        <path d="M15 22 v18 q25 12 50 0 v-18" fill="none" stroke="#2c1b6b" strokeWidth="2.5" />
      </g>

      {/* chat bubble */}
      <g transform="translate(392,150)">
        <rect x="0" y="0" width="64" height="40" rx="12" fill="#ffffff" stroke="#bfe4f8" strokeWidth="2" />
        <path d="M14 40 l0 14 16 -14 z" fill="#ffffff" stroke="#bfe4f8" strokeWidth="2" />
        <circle cx="18" cy="20" r="4" fill="#2c1b6b" />
        <circle cx="32" cy="20" r="4" fill="#2c1b6b" />
        <circle cx="46" cy="20" r="4" fill="#2c1b6b" />
      </g>

      {/* magnifying glass badge */}
      <g transform="translate(88,132)">
        <circle cx="24" cy="24" r="24" fill="#ffffff" stroke="#bfe4f8" strokeWidth="2" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="#f0654a" strokeWidth="3" />
        <line x1="26" y1="26" x2="33" y2="33" stroke="#f0654a" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* lightbulb badge */}
      <g transform="translate(70,190)">
        <circle cx="26" cy="26" r="26" fill="#ffffff" stroke="#bfe4f8" strokeWidth="2" />
        <path d="M26 12 a11 11 0 0 1 6 20 v4 h-12 v-4 a11 11 0 0 1 6 -20 z" fill="#f0654a" opacity="0.85" />
        <rect x="21" y="38" width="10" height="4" rx="1.5" fill="#2c1b6b" />
      </g>

      {/* stacked books */}
      <g transform="translate(150,300)">
        <rect x="0" y="18" width="80" height="16" rx="2" fill="#2c1b6b" />
        <rect x="6" y="0" width="68" height="16" rx="2" fill="#f0654a" />
      </g>

      {/* person sitting reading */}
      <g transform="translate(155,236)">
        <circle cx="24" cy="10" r="12" fill="#f3b88a" />
        <path d="M6 60 q0 -34 18 -34 q18 0 18 34 z" fill="#f0654a" />
        <rect x="0" y="52" width="48" height="10" rx="4" fill="#2c1b6b" />
      </g>

      {/* person standing with bag */}
      <g transform="translate(60,258)">
        <circle cx="20" cy="14" r="13" fill="#f3b88a" />
        <path d="M4 100 q0 -60 16 -60 q16 0 16 60 z" fill="#2c1b6b" />
        <rect x="-2" y="60" width="14" height="18" rx="3" fill="#f0654a" />
      </g>

      {/* person standing right with phone */}
      <g transform="translate(430,232)">
        <circle cx="18" cy="14" r="13" fill="#f3b88a" />
        <path d="M2 100 q0 -60 16 -60 q16 0 16 60 z" fill="#2c1b6b" />
        <rect x="26" y="46" width="9" height="16" rx="2" fill="#f0654a" opacity="0.9" />
      </g>

      {/* scroll */}
      <g transform="translate(322,352)">
        <rect x="0" y="0" width="44" height="12" rx="6" fill="#2c1b6b" />
      </g>

      {/* coffee cup */}
      <g transform="translate(372,336)">
        <rect x="0" y="8" width="46" height="30" rx="4" fill="#ffffff" stroke="#bfe4f8" strokeWidth="2" />
        <path d="M0 12 q-14 0 -14 14 q0 14 14 14" fill="none" stroke="#bfe4f8" strokeWidth="3" />
        <ellipse cx="23" cy="10" rx="20" ry="5" fill="#6b4326" />
      </g>
    </svg>
  );
}
