export const SITE = {
  name: "AI for Good",
  domain: "aiforgood.my",
  description:
    "Open-source AI projects, community, and advocacy for social impact in Southeast Asia and beyond.",
  email: "rashad@aiforgood.my",
  github: "https://github.com/mfrashad/aiforgood",
  twitter: "https://x.com/maboroshiiii",
  tiktok: "https://tiktok.com/@mfrashad",
  volunteerForm: "https://forms.gle/placeholder",
};

export const STATS = [
  { value: "20+", label: "Hackathons & Meetups" },
  { value: "5M+", label: "Content Views" },
  { value: "1", label: "Open Source Projects" },
  { value: "Growing", label: "Community" },
];

export const NAV_LINKS = [
  { href: "#community", label: "Community" },
  { href: "#advocacy", label: "Advocacy" },
  { href: "#projects", label: "Projects" },
];

export const ROLES = [
  {
    id: "builder",
    title: "Builder",
    description:
      "Contribute code to open-source projects. Ship tools that help real orgs.",
    emoji: "wrench",
  },
  {
    id: "advocate",
    title: "Advocate",
    description:
      "Create content, translate materials, speak at events, spread the word.",
    emoji: "megaphone",
  },
  {
    id: "organizer",
    title: "Organizer",
    description:
      "Help run meetups, connect with NGOs, coordinate build cycles.",
    emoji: "clipboard",
  },
];

export const FEATURED_PROJECT = {
  title: "AI Adoption by Country",
  description:
    "Interactive visualization + open data API tracking AI adoption across 16 countries. From UAE at 64% to Nigeria at 7%. Data sourced from Microsoft, Stanford HAI, OECD, and 11 other authoritative sources.",
  tags: ["Open Data", "JSON API", "16 Countries", "React"],
  liveUrl: "https://aiadoption-gray.vercel.app",
  githubUrl: "https://github.com/mfrashad/aiadoption",
};

export const CONTENT_TYPES = [
  {
    id: "videos",
    badge: "TikTok · Instagram",
    title: "Short-form Videos",
    description:
      "Making AI concepts accessible in 60 seconds. AI safety, open source, and tech for good explained for everyone.",
  },
  {
    id: "articles",
    badge: "Blog · Tutorials",
    title: "Articles & Guides",
    description:
      "Technical tutorials, AI safety guides, and thought pieces on responsible AI. Published in English and Bahasa Malaysia.",
  },
  {
    id: "infographics",
    badge: "Infographics · Data Viz",
    title: "Infographics & Data",
    description:
      "Visual explainers on AI adoption, safety, and impact. Open data visualizations anyone can share and build on.",
  },
];

export const VISION = {
  problem: [
    "Open-source social impact projects already exist: pasarmalam.app, sedekah.je, wikiimpact. Each built by one person, grown by contributors. They prove the model works, but they stay isolated. No shared infrastructure, no way to build on each other's work.",
    "Meanwhile, social impact orgs rarely show up in AI builder communities. The people who need AI most aren't in the room where it's being built.",
  ],
  vision: [
    "An open platform connecting builders to social impact orgs. Each shipped project feeds reusable components back into a shared library: datasets, APIs, templates. sedekah.je already solved donation directories. pasarmalam.app already solved night market mapping. The next builder should inherit that, not rebuild it.",
    "One builder helped Pocket of Pink, a youth education nonprofit, ship their website in a single day using AI. That's the ratio now. This infrastructure makes it repeatable.",
  ],
};

export const TALKS_DESCRIPTION =
  "20+ speaking engagements at meetups, conferences, and government briefings including Malaysia's Foreign Affairs Ministry (IDFR) and Yayasan Peneraju. Featured on Bernama TV, RTM TV1, Era.fm, and Kosmo.";
