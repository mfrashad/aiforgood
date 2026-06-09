# AI for Good Malaysia

A media and science-communication initiative making AI safety and AI literacy understandable for everyone — videos, explainers, and small research experiments in English and Bahasa Malaysia.

**Live site:** [aiforgood.my](https://aiforgood.my)  
**Part of:** [BuildForPublic](https://buildforpublic.com)

## What is this?

AI shapes jobs, money, media, and public services — but most people affected by it have no way to understand it or question it. Clear, honest explanation of AI is concentrated in English-speaking tech circles. The people most affected by AI decisions are the least informed about them.

AI for Good Malaysia makes AI safety and literacy accessible to Southeast Asian audiences in English and Bahasa Malaysia. We are a volunteer initiative, not a company.

## Three things we do

### 1. Content & Media *(active)*

Short-form videos, articles, and infographics explaining AI safety and AI literacy in plain language. No jargon. In English and Bahasa Malaysia.

- 5M+ combined content views
- 20+ speaking engagements at meetups, conferences, and government briefings
- Featured on Bernama TV, RTM TV1, Era.fm, and Kosmo

### 2. Research Experiments *(active)*

Small, focused experiments that make AI issues tangible — interactive data visualizations and open datasets anyone can explore, cite, and build on.

| Project | Description | Links |
|---------|-------------|-------|
| [AI Adoption by Country](https://github.com/mfrashad/aiadoption) | Interactive data viz + open API tracking AI adoption across 16 countries | [Live](https://aiadoption-gray.vercel.app) · [API](https://aiadoption-gray.vercel.app/api/v1/countries.json) |
| [Bookshelf](https://github.com/mfrashad/bookshelf) | Turn your reading library into a shareable poster. Built for World Book Day to surface global literacy numbers. | [Live](https://bookshelf.aiforgood.my) |

### 3. Talks & Speaking *(active)*

Briefings, talks, and panel sessions at meetups, universities, conferences, and government on AI safety, AI literacy, and the AI divide in Southeast Asia.

## Contribute

We are looking for Creators (video, writing, infographics) and Researchers (data, visualization, open datasets).

| Role | What you'd do |
|------|---------------|
| **Creator** | Make AI safety and literacy accessible — short-form video, articles, infographics in English and Bahasa Malaysia. ~1 post/week. |
| **Researcher** | Turn AI issues into data people can see and share — interactive visualizations, open datasets. 3–5 hrs/week. |

Apply: [aiforgood.my/volunteer](https://aiforgood.my/volunteer)  
Contact: m.fathyrashad@gmail.com

## Run locally

```bash
bun install
bun run dev
```

Build for production:

```bash
bun run build
```

Convex is required for the volunteer form. Set `NEXT_PUBLIC_CONVEX_URL` in `.env.local`.

## Tech stack

- **Framework:** Next.js (App Router)
- **Database:** Convex (volunteer applications)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Package manager:** Bun

## License

MIT
