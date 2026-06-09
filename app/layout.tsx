import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "./PostHogProvider";

const DESCRIPTION =
  "A youth-led community publishing content on AI safety, responsible AI, and the real risks of AI — to grow the next generation of informed decision-makers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://youthforresponsibleai.com"),
  title: {
    default: "Youth for Responsible AI",
    template: "%s — Youth for Responsible AI",
  },
  description: DESCRIPTION,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: "Youth for Responsible AI",
    title: "Youth for Responsible AI",
    description: DESCRIPTION,
    url: "https://youthforresponsibleai.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Youth for Responsible AI" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@youthforrai",
    title: "Youth for Responsible AI",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://youthforresponsibleai.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
