import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Learning — Learn Today, Lead Tomorrow.",
  description:
    "Build new skills, explore your potential, and learn from expert instructors—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
