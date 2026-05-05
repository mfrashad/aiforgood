import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { PostHogProvider } from "./PostHogProvider";

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
      <body className="antialiased">
        <PostHogProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
