import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Good Malaysia",
  description:
    "Open-source AI projects, community, and advocacy for social impact in Southeast Asia and beyond.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-silk)] antialiased">
        {children}
      </body>
    </html>
  );
}
