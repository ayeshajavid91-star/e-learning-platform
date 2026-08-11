export type Course = {
  slug: string;
  title: string;
  tagline: string;
  instructor: string;
  rating: number;
  duration: string;
  category:
    | "code"
    | "design"
    | "marketing"
    | "data"
    | "ai"
    | "html"
    | "css"
    | "javascript"
    | "python"
    | "java";
  youtubeUrl: string;
};

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Learn to build modern websites from scratch.",
    instructor: "Ayesha Javid",
    rating: 4.8,
    duration: "8 Hours",
    category: "code",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Web+Development+Full+Course",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Design clean, usable interfaces people love.",
    instructor: "Bilal Ahmed",
    rating: 4.7,
    duration: "6 Hours",
    category: "design",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=UI+UX+Design+Full+Course+for+Beginners",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Grow brands with real-world marketing strategy.",
    instructor: "Sana Malik",
    rating: 4.9,
    duration: "5 Hours",
    category: "marketing",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Digital+Marketing+Full+Course+for+Beginners",
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    tagline: "Turn raw numbers into decisions that matter.",
    instructor: "Hamza Raza",
    rating: 4.6,
    duration: "7 Hours",
    category: "data",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Data+Analysis+with+Python",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    tagline: "Understand AI fundamentals and how smart systems think.",
    instructor: "Imran Qureshi",
    rating: 4.8,
    duration: "9 Hours",
    category: "ai",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Artificial+Intelligence+Course",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    tagline: "Build real ML models with Python, step by step.",
    instructor: "Fatima Noor",
    rating: 4.9,
    duration: "10 Hours",
    category: "ai",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Machine+Learning+Full+Course",
  },
  {
    slug: "html",
    title: "HTML",
    tagline: "The building blocks of every website, from scratch.",
    instructor: "Ayesha Javid",
    rating: 4.8,
    duration: "4 Hours",
    category: "html",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+HTML+Full+Course",
  },
  {
    slug: "css",
    title: "CSS",
    tagline: "Style and layout web pages that actually look good.",
    instructor: "Bilal Ahmed",
    rating: 4.7,
    duration: "5 Hours",
    category: "css",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+CSS+Full+Course",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    tagline: "Bring your web pages to life with real interactivity.",
    instructor: "Hamza Raza",
    rating: 4.9,
    duration: "9 Hours",
    category: "javascript",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+JavaScript+Full+Course",
  },
  {
    slug: "python",
    title: "Python",
    tagline: "A beginner-friendly language for apps, data, and AI.",
    instructor: "Fatima Noor",
    rating: 4.8,
    duration: "8 Hours",
    category: "python",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Python+Full+Course",
  },
  {
    slug: "java",
    title: "Java",
    tagline: "A powerful, in-demand language for real-world software.",
    instructor: "Imran Qureshi",
    rating: 4.6,
    duration: "10 Hours",
    category: "java",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=CodeWithHarry+Java+Full+Course",
  },
];

export const steps = [
  { label: "Create Account", icon: "user" as const },
  { label: "Choose Course", icon: "book" as const },
  { label: "Start Learning", icon: "play" as const },
  { label: "Get Certificate", icon: "award" as const },
];
