export const SITE = {
  name: "Youth for Responsible AI",
  domain: "youthforresponsibleai.com",
  description:
    "A youth-led community publishing content on AI safety, responsible AI, and the real risks of AI — to grow the next generation of informed decision-makers.",
  email: "hello@youthforresponsibleai.com", // TODO: update with your real email
  github: "https://github.com/youthforresponsibleai", // TODO: update
  twitter: "https://x.com/youthforrai", // TODO: update
  tiktok: "https://tiktok.com/@youthforrai", // TODO: update
};

export const STATS = [
  { value: "TODO", label: "Youth Contributors" },
  { value: "TODO", label: "Countries Reached" },
  { value: "TODO", label: "Pieces Published" },
  { value: "100%", label: "Open Access" },
];

export const NAV_LINKS = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/why-now", label: "The Case" },
  { href: "/#advocacy", label: "Content" },
  { href: "/#projects", label: "Research" },
];

export const ROLES = [
  {
    id: "creator",
    title: "Creator",
    description:
      "Make AI safety and responsible AI understandable — short-form video, articles, infographics, and threads in your language.",
    emoji: "megaphone",
  },
  {
    id: "researcher",
    title: "Researcher",
    description:
      "Turn AI risks into visual, understandable explainers — data visualizations, open datasets, and interactive experiments anyone can cite.",
    emoji: "chart",
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "AI Adoption by Country",
    description:
      "A research experiment tracking AI adoption across 16 countries — interactive data visualization and open API. From UAE at 64% to Nigeria at 7%. Data sourced from Microsoft, Stanford HAI, OECD, and 11 other authoritative sources. Free for anyone to use.",
    tags: ["Open Data", "JSON API", "16 Countries", "Data Viz"],
    liveUrl: "https://aiadoption-gray.vercel.app",
    githubUrl: "https://github.com/mfrashad/aiadoption",
    imageUrl: "/sprites/projects/aiadoption.png",
    imageAlt: "AI Adoption by Country screenshot",
  },
  {
    title: "Foundation Model Transparency Tracker",
    description:
      "Tracking how transparent major AI systems are over time — because Stanford HAI's Foundation Model Transparency Index dropped from 58 to 40 in a single year. Open data anyone can build on.",
    tags: ["Open Data", "AI Safety", "Transparency", "Data Viz"],
    liveUrl: "#", // TODO: replace with real project URL
    githubUrl: "#",
    imageUrl: "/sprites/projects/bookshelf.png",
    imageAlt: "Foundation Model Transparency Tracker",
  },
];

/** @deprecated use FEATURED_PROJECTS */
export const FEATURED_PROJECT = FEATURED_PROJECTS[0];

export const CONTENT_TYPES = [
  {
    id: "videos",
    badge: "TikTok · Instagram · YouTube",
    title: "Short-form Videos",
    description:
      "Making AI safety and AI risk accessible in 60 seconds — algorithmic bias, AI concentration, autonomous systems, and what it all means for your generation. No jargon.",
    image: "/sprites/advocacy-videos.png",
  },
  {
    id: "articles",
    badge: "Blog · Deep Dives",
    title: "Articles & Guides",
    description:
      "Long-form explainers on AI safety, responsible AI policy, and the risks of unchecked AI development. Written for people who will eventually make decisions about AI.",
    image: "/sprites/advocacy-articles.png",
  },
  {
    id: "infographics",
    badge: "Infographics · Data Viz",
    title: "Infographics & Data",
    description:
      "Visual explainers on AI adoption, safety, and impact. Open data visualizations anyone can share, cite, and build on.",
    image: "/sprites/advocacy-infographics.png",
  },
];

export const VISION = {
  problem: [
    "AI is reshaping jobs, media, finance, and public services — but the people most affected by AI decisions have the least say in how those systems are built.",
    "The window to shape AI governance is narrow. The decisions being made now — about who owns AI infrastructure, who it serves, and who is accountable for its harms — will define the next century.",
  ],
  problemImage: "/sprites/vision-problem.png",
  vision: [
    {
      title: "Make AI Risks Understandable",
      text: "We publish content that makes AI safety and AI risks legible to everyone — short-form video, writing, and data designed for people who will vote on, regulate, or build with AI.",
      image: "/sprites/vision-fund.png",
    },
    {
      title: "Show, Don't Just Tell",
      text: "We build research experiments that make AI issues tangible: data visualizations, interactive tools, and open datasets anyone can explore and cite.",
      image: "/sprites/vision-volunteer.png",
    },
    {
      title: "Keep Everything Open",
      text: "Every dataset, project, and piece of content we produce is free. The next creator or researcher starts where we left off, not from scratch.",
      image: "/sprites/vision-opensource.png",
    },
  ],
};

export const AI_COMMUNITIES = [
  {
    name: "AI Safety Hub",
    description: "Global network of AI safety researchers and communicators.",
    url: "#", // TODO: replace with real partner communities
    image: "/communities/build-club-logo-navbar.webp",
  },
];

export const TALKS_DESCRIPTION =
  "Speaking at universities, policy forums, community events, and online panels on AI safety, AI risk, and responsible AI governance for the next generation.";

export const ROLE_DETAILS = [
  {
    id: "creator",
    title: "Creator",
    tagline: "Make AI safety and responsible AI understandable for everyone.",
    commitment: "~1 post / week",
    accentClass: "accent-clay",
    responsibilities: [
      "Publish ~1 piece of content per week: short-form video, blog post, thread, or infographic.",
      "Topics: AI safety, AI risk, algorithmic bias, AI rights, responsible AI — explained without jargon.",
      "Publish in any language — your language is a contribution in itself.",
      "Respond to content requests when the community needs coverage of a specific AI topic.",
    ],
    whoFits: [
      "Writers, video creators, illustrators, and graphic designers",
      "Anyone with a platform or learning to build one",
      "Young people who want to make AI topics accessible to their peers and communities",
    ],
  },
  {
    id: "researcher",
    title: "Researcher",
    tagline: "Turn AI risks into data people can see and share.",
    commitment: "3–5 hrs / week",
    accentClass: "accent-fig",
    responsibilities: [
      "Build small, focused research experiments: visualizations, interactive tools, and open datasets that make an AI issue tangible.",
      "Collect, clean, and analyze data on AI adoption, access gaps, and AI impact globally.",
      "Produce summaries and findings the community can publish, cite, and share.",
      "Contribute to open data projects tracking the AI divide across countries.",
    ],
    whoFits: [
      "Students, policy researchers, data journalists, or anyone with quantitative skills",
      "People interested in AI governance, AI safety, or the AI divide",
      "Developers who enjoy building small interactive tools around real data",
    ],
  },
];

export const MANIFESTO_CLAIMS = [
  {
    n: "01",
    claim:
      "AI's benefits are concentrating. This is the expected outcome of building AI to maximize returns for shareholders.",
    evidence:
      "Five companies control 71% of the world's AI compute, up from 63% eighteen months earlier. US private AI investment reached $285.9 billion in 2025. The rest of the world received a rounding error.",
    source: "Epoch AI 2025; Stanford HAI 2026 AI Index",
  },
  {
    n: "02",
    claim:
      "The communities that will be most transformed by AI are the least represented in building it.",
    evidence:
      "93% of the world's languages are absent from AI training data. Facial recognition systems misidentify dark-skinned faces 10 to 100 times more often than light-skinned ones. The Foundation Model Transparency Index dropped from 58 to 40 in a single year.",
    source: "Nature 2025; MIT Sloan; Stanford HAI 2026",
  },
  {
    n: "03",
    claim:
      "Young people will live longest with the consequences of AI decisions being made today — and they are almost entirely absent from those decisions.",
    evidence:
      "AI governance, model development, and infrastructure investment are led overwhelmingly by people over 40 in a handful of wealthy countries. The communities that will inherit AI's consequences are not at the table.",
    source: "",
  },
  {
    n: "04",
    claim:
      "AI literacy is not a luxury. AI systems already make decisions about jobs, loans, content, and public services. Communities that cannot read those decisions are subject to them.",
    evidence:
      "Automated systems screen job applicants, approve or deny loans, moderate speech, and allocate public resources. These decisions are opaque, consequential, and largely unchallenged because most people lack the vocabulary to question them.",
    source: "AI Now Institute 2025",
  },
  {
    n: "05",
    claim:
      "The window to build informed public understanding of AI is closing. The compute concentration ratio moved from 63% to 71% in eighteen months. The trend is not slowing.",
    evidence:
      "The OECD and the UN both concluded in 2024 that AI must be governed as public commons. The policy consensus exists. The implementation does not. Communities like this one are part of filling that gap.",
    source: "OECD.AI 2025; UN Governing AI for Humanity 2024",
  },
];

export const VOLUNTEER_EXPECTATIONS = [
  {
    icon: "🎯",
    title: "Passion for the Mission",
    body: "You believe AI should be understandable to the people it affects — not just the people who build it. You show up to contribute, not to build your portfolio.",
  },
  {
    icon: "🤲",
    title: "Volunteerism",
    body: "This role is unpaid. Contributors here publish content reaching real audiences, connect with researchers globally, and build relationships with people shaping AI policy.",
  },
  {
    icon: "🛠️",
    title: "Resourcefulness",
    body: "We run lean. If something is broken, fix it. If a tool doesn't exist, build it. We don't wait for resources.",
  },
  {
    icon: "📆",
    title: "Commitment",
    body: "We need consistent contributions — weekly for creators, focused hours for researchers. Deliver what you commit to. Show up when you say you will.",
  },
  {
    icon: "📱",
    title: "Clear Communication",
    body: "We work remotely. Reply to messages. Update your team before they ask. Don't go silent.",
  },
];
