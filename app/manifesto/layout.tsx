import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Manifesto — Youth for Responsible AI",
  description:
    "Five numbered claims on what Youth for Responsible AI believes and why. Version 1.0, published 2026.",
};

export default function ManifestoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
