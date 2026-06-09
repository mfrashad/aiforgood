import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Take Action — Youth for Responsible AI",
  description:
    "Find exactly what you can do for AI safety and responsible AI, given your time and skills — as a Creator or Researcher.",
};

export default function ActLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
