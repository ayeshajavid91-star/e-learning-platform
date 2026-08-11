import {
  Code2,
  Palette,
  Megaphone,
  BarChart3,
  BrainCircuit,
  FileCode2,
  Paintbrush,
  Braces,
  Terminal,
  Coffee,
} from "lucide-react";
import type { Course } from "./data";

// All gradients are tints of the same brand palette (navy / amber / teal /
// purple / coral) so every card feels part of one family instead of a
// random rainbow.
export const categoryMap: Record<
  Course["category"],
  { icon: typeof Code2; from: string; to: string }
> = {
  code: { icon: Code2, from: "#1b2340", to: "#3d4566" }, // navy
  design: { icon: Palette, from: "#c97f1f", to: "#e8a33d" }, // amber
  marketing: { icon: Megaphone, from: "#2f6f6d", to: "#4a938f" }, // teal
  data: { icon: BarChart3, from: "#2c1b6b", to: "#4a3a8e" }, // purple-deep
  ai: { icon: BrainCircuit, from: "#c94a32", to: "#f0654a" }, // coral
  html: { icon: FileCode2, from: "#a83f22", to: "#d9663f" }, // deep coral/rust
  css: { icon: Paintbrush, from: "#24345c", to: "#46628f" }, // ink-blue
  javascript: { icon: Braces, from: "#b98a2e", to: "#e8c169" }, // golden amber
  python: { icon: Terminal, from: "#1f4f4d", to: "#3f8f85" }, // deep teal
  java: { icon: Coffee, from: "#5c3a1e", to: "#8a5a34" }, // coffee brown
};
