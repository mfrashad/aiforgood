export const SITE = {
  name: "AI for Good",
  domain: "aiforgood.my",
  description:
    "Open-source AI projects, community, and advocacy for social impact in Southeast Asia and beyond.",
  email: "m.fathyrashad@gmail.com",
  github: "https://github.com/mfrashad/aiforgood",
  twitter: "https://x.com/maboroshiiii",
  tiktok: "https://tiktok.com/@mfrashad",
  volunteerForm: "https://forms.gle/placeholder",
};

export const STATS = [
  { value: "20+", label: "Builders" },
  { value: "2", label: "NGOs Helped" },
  { value: "1", label: "Projects" },
  { value: "5M+", label: "Content Views" },
];

export const NAV_LINKS = [
  { href: "#community", label: "Community" },
  { href: "#advocacy", label: "Advocacy" },
  { href: "#projects", label: "Projects" },
  { href: "#vision", label: "Vision" },
  { href: "#join", label: "Join" },
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
    image: "/sprites/advocacy-videos.png",
  },
  {
    id: "articles",
    badge: "Blog · Tutorials",
    title: "Articles & Guides",
    description:
      "Technical tutorials, AI safety guides, and thought pieces on responsible AI. Published in English and Bahasa Malaysia.",
    image: "/sprites/advocacy-articles.png",
  },
  {
    id: "infographics",
    badge: "Infographics · Data Viz",
    title: "Infographics & Data",
    description:
      "Visual explainers on AI adoption, safety, and impact. Open data visualizations anyone can share and build on.",
    image: "/sprites/advocacy-infographics.png",
  },
];

export const VISION = {
  problem: [
    "AI is arguably humanity's most transformative invention — yet the systems around it only reward profit. Some of the world's most pressing problems will stay unsolved if we only optimize for revenue.",
    "Without deliberate intervention, AI will only solve problems for the privileged few — not the problems that matter most. The people who need it most — underserved communities, nonprofits, social enterprises — get left behind.",
  ],
  problemImage: "/sprites/vision-problem.png",
  vision: [
    {
      title: "Incentivize Impact, Not Just Profit",
      text: "We fund, build, and champion projects that exist for social good — not shareholder returns. If the market won't support it, we will.",
      image: "/sprites/vision-fund.png",
    },
    {
      title: "Enable NGOs & Everyone to Benefit from AI",
      text: "AI lets a single volunteer build what used to take a team. We educate people on AI, help NGOs build their own tech, and connect builders directly to organizations that need them.",
      image: "/sprites/vision-volunteer.png",
    },
    {
      title: "Open Source & Democratize AI",
      text: "AI was trained on the collective knowledge of the internet — it should belong to everyone. We keep our work open source to democratize access, share data, and prevent the centralization of power.",
      image: "/sprites/vision-opensource.png",
    },
  ],
};

export const COMMUNITY_PROJECTS = [
  {
    name: "MyMP",
    url: "https://mymp.org.my",
    description: "Track Malaysian Members of Parliament — voting records, attendance, and more.",
  },
  {
    name: "Sedekah.je",
    url: "https://sedekah.je",
    description: "Open-source donation directory connecting donors to verified causes across Malaysia.",
  },
  {
    name: "Lepak Masjid",
    url: "https://lepakmasjid.app",
    description: "Find mosques, prayer times, and community events near you.",
  },
  {
    name: "Pasar Malam",
    url: "https://pasarmalam.app",
    description: "Night market directory mapping locations and schedules across Malaysia.",
  },
];

export const HELPED_NGOS = [
  {
    name: "Pocket of Pink",
    url: "https://www.pocketofpink.com",
    description: "Youth education nonprofit — we helped ship their website in a single day using AI.",
    badge: "NGO WE HELPED",
  },
];

export const AI_COMMUNITIES = [
  {
    name: "Build Club",
    description:
      "AI learning community focused on building, with AI-native courses and certifications.",
    url: "https://www.buildclub.ai/",
    image: "/communities/build-club-logo-navbar.webp",
  },
  {
    name: "Build with AI",
    description:
      "Project showcase for the Build With AI Malaysia community, featuring AI projects built by Malaysian builders.",
    url: "https://buildwithai.my/",
    image: "/communities/build_with_ai_logo.jpeg",
  },
  {
    name: "AI Tinkerers",
    description:
      "Global community of AI engineers and researchers building real systems and sharing unfinished work.",
    url: "https://kuala-lumpur.aitinkerers.org/",
    image: "/communities/ai_tinkerers_logo.png",
  },
  {
    name: "AI Hackerdorm",
    description:
      "Student-first community hosting regular builder sessions with project showcases and mentorship.",
    url: "https://aihackerdorm.com/",
    image: "/communities/ai_hackerdorm.webp",
  },
  {
    name: "AI SEA",
    description:
      "Southeast Asia grassroots builder movement connecting local communities into a coalition.",
    url: "https://www.aisea.builders/",
    image: "/communities/aisea_logo.png",
  },
  {
    name: "Rakan Tutor",
    description:
      "Free AI programs for ASEAN youth through hands-on workshops and a digital learning platform.",
    url: "https://rakantutor.org/",
    image: "/communities/rakan-tutor-logo.png",
  },
  {
    name: "Cursor Malaysia",
    description:
      "The Cursor community for Malaysia, hosting hackathons, meetups, and workshops.",
    url: "https://www.instagram.com/cursor.my/",
    image: "/communities/cursor_my_logo.jpg",
  },
  {
    name: "CoderPuffs",
    description:
      "A women-first initiative where we learn coding and AI while cafe-hopping together.",
    url: "https://www.instagram.com/coderpuffs/",
    image: "/communities/coderpuffs_logo.jpg",
  },
  {
    name: "500 AI Residency",
    description:
      "An AI residency program focused on rapid building and shipping, bringing together builders to create and scale AI projects.",
    url: "https://www.500.house/",
  },
];

export const TALKS_DESCRIPTION =
  "20+ speaking engagements at meetups, conferences, and government briefings including Malaysia's Foreign Affairs Ministry (IDFR) and Yayasan Peneraju. Featured on Bernama TV, RTM TV1, Era.fm, and Kosmo.";
