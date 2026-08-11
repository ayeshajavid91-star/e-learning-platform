<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1B2340,50:2C1B6B,100:E8A33D&height=220&section=header&text=E-Learning&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Learn%20Today,%20Lead%20Tomorrow.&descAlignY=58&descSize=20" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Georgia&size=24&duration=3000&pause=800&color=E8A33D&center=true&vCenter=true&width=600&lines=Build+real+skills.+Not+just+watch+videos.;11+courses+%E2%80%A2+Live+certificate+preview;Web+Dev+%E2%80%A2+AI+%2F+ML+%E2%80%A2+Python+%E2%80%A2+Java+%2B+more" alt="Typing SVG" />

<br/><br/>

<img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />

<br/>

<img src="https://img.shields.io/github/stars/ayeshajavid91-star/e-learning-platform?style=social" />
<img src="https://img.shields.io/github/forks/ayeshajavid91-star/e-learning-platform?style=social" />
<img src="https://img.shields.io/badge/status-active-brightgreen?style=flat-square" />
<img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />

</div>

<br/>

## 🌟 Overview

**E-Learning** is a fully animated, from-scratch course-platform homepage —
no templates, no stock photography. Every illustration, gradient, and icon
lives in one hand-picked brand palette (navy · amber · teal · coral ·
purple), and every section reveals itself with a smooth scroll-triggered
animation as the visitor scrolls down the page. 🎬✨

<div align="center">
<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,ts,vercel,github&theme=dark" />
</div>

<br/>

## 📋 Table of Contents

| | | |
|---|---|---|
| [✨ Features](#-features) | [🖥️ Tech Stack](#️-tech-stack) | [📁 Project Structure](#-project-structure) |
| [🎨 Design System](#-design-system) | [📚 Courses](#-courses) | [🚀 Getting Started](#-getting-started) |
| [🧩 Sections](#-sections) | [🛠️ Customization](#️-customization) | [👤 Author](#-author) |

<br/>

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Scroll animations** | Sections fade + slide into view as you scroll, powered by a custom `IntersectionObserver` React hook |
| ↔️ **Horizontal course carousel** | Smooth snap-scrolling course row with highlighted floating nav arrows |
| 🏆 **Live certificate preview** | Type a name, pick a course + date → watch an SVG certificate render in real time |
| 📱 **Animated mobile menu** | Slide-down hamburger navigation with staggered link transitions |
| 🌈 **One unified palette** | Every gradient across 11 course cards is a *tint* of the same 5 brand colors — nothing clashes |
| ▶️ **Direct-to-YouTube courses** | Course cards deep-link straight into curated tutorial searches |
| 🌙 **Dark, modern footer** | Multi-column footer with quick links, project info, and social/GitHub links |
| ⚡ **Zero layout shift** | Built on the Next.js App Router with static generation for instant loads |

<br/>

## 🖥️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| Framework | ![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white) |
| Styling | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| Language | ![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| UI Library | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) |
| Icons | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=lucide&logoColor=white) |
| Deployment | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

<br/>

## 📁 Project Structure

```
pw/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx             # Homepage — assembles all sections
│   └── globals.css          # 🎨 Design tokens (colors, fonts, keyframes)
│
├── components/
│   ├── Navbar.tsx            # Sticky header + animated mobile menu
│   ├── Hero.tsx               # Landing hero + illustration
│   ├── HeroIllustration.tsx   # Custom SVG artwork
│   ├── PopularCourses.tsx     # ↔️ Horizontal scroll course carousel
│   ├── CourseCard.tsx         # Individual course card → YouTube
│   ├── WhyChooseUs.tsx        # 4-feature icon grid
│   ├── HowItWorks.tsx         # 4-step dotted-line process
│   ├── CertificateSection.tsx # 🏆 Live SVG certificate generator
│   ├── FinalCta.tsx           # Closing call-to-action banner
│   ├── Footer.tsx             # Dark multi-column footer
│   └── Reveal.tsx             # 🎬 Scroll-triggered animation wrapper
│
├── lib/
│   ├── data.ts               # Course catalog (11 courses)
│   └── category.ts           # Category → icon + gradient map
│
├── start-website.bat         # One-click install + run (Windows)
└── package.json
```

<br/>

## 🎨 Design System

<div align="center">

| Color | Swatch | Used For |
|---|---|---|
| Ink Navy `#1B2340` | ![#1B2340](https://placehold.co/60x24/1B2340/1B2340.png) | Headings, Web Dev course |
| Amber `#E8A33D` | ![#E8A33D](https://placehold.co/60x24/E8A33D/E8A33D.png) | Accents, UI/UX course |
| Teal `#2F6F6D` | ![#2F6F6D](https://placehold.co/60x24/2F6F6D/2F6F6D.png) | Marketing course, icons |
| Purple Deep `#2C1B6B` | ![#2C1B6B](https://placehold.co/60x24/2C1B6B/2C1B6B.png) | Data course, final CTA |
| Coral `#F0654A` | ![#F0654A](https://placehold.co/60x24/F0654A/F0654A.png) | Buttons, AI course |

</div>

<br/>

## 📚 Courses

| Course | Category | Duration | Rating |
|---|---|---|---|
| 🌐 Web Development | Code | 8 Hours | ⭐ 4.8 |
| 🎨 UI/UX Design | Design | 6 Hours | ⭐ 4.7 |
| 📣 Digital Marketing | Marketing | 5 Hours | ⭐ 4.9 |
| 📊 Data Analysis | Data | 7 Hours | ⭐ 4.6 |
| 🤖 Artificial Intelligence | AI | 9 Hours | ⭐ 4.8 |
| 🧠 Machine Learning | AI | 10 Hours | ⭐ 4.9 |
| 🏷️ HTML | Web | 4 Hours | ⭐ 4.8 |
| 🎭 CSS | Web | 5 Hours | ⭐ 4.7 |
| ⚡ JavaScript | Web | 9 Hours | ⭐ 4.9 |
| 🐍 Python | Language | 8 Hours | ⭐ 4.8 |
| ☕ Java | Language | 10 Hours | ⭐ 4.6 |

<br/>

## 🧩 Sections

<table>
<tr>
<td width="33%" align="center">🏠<br/><b>Hero</b><br/><sub>Headline + custom illustration</sub></td>
<td width="33%" align="center">↔️<br/><b>Courses</b><br/><sub>Scrollable carousel, 11 cards</sub></td>
<td width="33%" align="center">💡<br/><b>Why Us</b><br/><sub>4 animated feature icons</sub></td>
</tr>
<tr>
<td width="33%" align="center">🪜<br/><b>How It Works</b><br/><sub>4-step dotted journey</sub></td>
<td width="33%" align="center">🏆<br/><b>Certificate</b><br/><sub>Live, typeable SVG preview</sub></td>
<td width="33%" align="center">🚀<br/><b>Final CTA</b><br/><sub>Dotted-path closing banner</sub></td>
</tr>
</table>

<br/>

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** 🎉

> 💻 On Windows? Just double-click **`start-website.bat`** — it installs and
> launches everything for you, no typing required.

**Build for production:**
```bash
npm run build
npm run start
```

<br/>

## 🛠️ Customization

| Want to change... | Edit this file |
|---|---|
| 🎨 Brand colors | `app/globals.css` |
| 📚 Course list | `lib/data.ts` |
| 🏷️ Category icons/gradients | `lib/category.ts` |
| 🧩 Any section's layout | its file in `components/` |
| 🏆 Certificate design | `components/CertificateSection.tsx` |

<br/>

<div align="center">

## 👤 Author

**Ayesha Javid**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayeshajavid91-star)

<br/>

### ⭐ If you like this project, give it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:E8A33D,50:2C1B6B,100:1B2340&height=120&section=footer" width="100%"/>

</div>
