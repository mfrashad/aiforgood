"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Time = "5 Minutes" | "1 Hour" | "A Few Hours" | "Go All In";
type Role = "Creator" | "Researcher";

const TIME_KEYS: Time[] = ["5 Minutes", "1 Hour", "A Few Hours", "Go All In"];
const ROLE_KEYS: Role[] = ["Creator", "Researcher"];

const ROLE_COLOR: Record<Role, string> = {
  Creator: "var(--color-clay)",
  Researcher: "var(--color-fig)",
};

const ESCALATION: Record<Time, string> = {
  "5 Minutes": "Small actions compound. This one takes less time than a coffee.",
  "1 Hour": "One skilled hour on a real problem does something a donation cannot.",
  "A Few Hours": "Most volunteer impact concentrates in a few focused hours. This is that window.",
  "Go All In":
    "The ability to explain something clearly is the scarcest resource in AI discourse. Use it here.",
};

type Action = { title: string; why: string; href: string };

const ACTIONS: Record<Time, Record<Role, Action[]>> = {
  "5 Minutes": {
    Creator: [
      { title: "Share a Youth for Responsible AI post to your story", why: "Each share reaches people the algorithm has not surfaced yet.", href: "#" },
      { title: "Repost the AI adoption data with a one-line take", why: "Nobody shares raw numbers. They share your one-line take on them.", href: "https://aiadoption-gray.vercel.app" },
      { title: "Follow us on social media", why: "Discovery is the first barrier. Help us past it.", href: "#" },
    ],
    Researcher: [
      { title: "Browse the AI Adoption by Country API", why: "Sixteen countries, one open dataset. See what we have and what is missing.", href: "https://aiadoption-gray.vercel.app" },
      { title: "Star the aiadoption repo", why: "Stars signal credibility to researchers who will cite this data.", href: "https://github.com/mfrashad/aiadoption" },
      { title: "Read the AI Now 2025 Landscape Report", why: "The strongest contribution starts with knowing the field.", href: "https://ainowinstitute.org/publications/research/ai-now-2025-landscape-report" },
    ],
  },
  "1 Hour": {
    Creator: [
      { title: "Write one post about an AI safety concept in plain language", why: "If you can explain it to someone outside tech, you have done something useful.", href: "#" },
      { title: "Record a 60-second video explaining one AI risk concept", why: "Short-form content about real AI issues is rare. Yours will stand out.", href: "#" },
      { title: "Translate existing AI safety content for your audience", why: "Translation is not copying. It is giving access.", href: "#" },
    ],
    Researcher: [
      { title: "Pull one dataset and find one unexpected thing in it", why: "Unexpected findings are what make data useful to journalists and policymakers.", href: "https://aiadoption-gray.vercel.app" },
      { title: "Read the Stanford HAI AI Index and note three things worth communicating to general audiences", why: "The Index is comprehensive. The plain-language read is the gap we are filling.", href: "https://hai.stanford.edu/ai-index" },
      { title: "Write a two-paragraph summary of the AI adoption gap with a citation", why: "A citable summary is infrastructure. Others will build on it.", href: "#" },
    ],
  },
  "A Few Hours": {
    Creator: [
      { title: "Write a full article on one AI safety issue, backed by data", why: "A single well-sourced piece becomes the reference others link to for years.", href: "#" },
      { title: "Produce a three-part short-form video series on an AI risk topic", why: "Three connected videos reach the algorithm in ways a single one cannot.", href: "#" },
      { title: "Design one shareable infographic with real statistics on the AI divide", why: "Data that fits in a screenshot gets shared. Data in a PDF does not.", href: "#" },
    ],
    Researcher: [
      { title: "Build a simple visualization of one dataset that makes an AI issue tangible", why: "A good visualization explains in seconds what a report takes pages to convey.", href: "/volunteer" },
      { title: "Write a short explainer on AI governance in one country or region", why: "No one is tracking this in accessible language. The first person who does owns the reference.", href: "#" },
      { title: "Collect and clean one dataset on AI access or impact that does not exist yet", why: "The most useful datasets are the ones no one wanted to build alone.", href: "/volunteer" },
    ],
  },
  "Go All In": {
    Creator: [
      { title: "Commit to one post per week for three months", why: "Three months is long enough to build an audience. Most people stop at week three.", href: "/volunteer" },
      { title: "Build a small audience around AI safety in your language community", why: "An audience you own is infrastructure no algorithm can take away.", href: "/volunteer" },
      { title: "Become the voice of responsible AI for your generation", why: "Almost no one is doing this for young audiences. That is the opening.", href: "/volunteer" },
    ],
    Researcher: [
      { title: "Own an open dataset: expand it, maintain it, publish findings", why: "A dataset is only as useful as the person maintaining it.", href: "/volunteer" },
      { title: "Produce a quarterly explainer on the AI divide", why: "Quarterly cadence means policymakers and journalists have something to cite. Annual is too slow.", href: "/volunteer" },
      { title: "Build a research experiment that makes one AI issue understandable to a general audience", why: "The gap between AI research and public understanding is where this community works.", href: "/volunteer" },
    ],
  },
};

function ActionCard({ action, roleColor }: { action: Action; roleColor: string }) {
  return (
    <div className="card-flat p-5 flex gap-4 items-start">
      <div className="w-1 flex-shrink-0 self-stretch rounded-full" style={{ background: roleColor }} />
      <div className="flex-1">
        <h4
          className="text-base font-semibold text-text-primary mb-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {action.title}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">{action.why}</p>
        <a href={action.href} className="text-sm font-medium text-clay hover:text-clay-hover transition-colors">
          Do this →
        </a>
      </div>
    </div>
  );
}

export default function ActPage() {
  const [selectedTime, setSelectedTime] = useState<Time>("5 Minutes");
  const [selectedRole, setSelectedRole] = useState<Role>("Creator");
  const actions = ACTIONS[selectedTime][selectedRole];
  const roleColor = ROLE_COLOR[selectedRole];

  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-12 px-6 border-b-2 border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-display text-4xl sm:text-5xl text-text-primary mb-5">
            Pick your time. Pick your skill.{" "}
            <span className="text-clay">Here&apos;s exactly what to do.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Every action on this page connects to a concrete outcome. Five-minute ones compound. Going all in sets the direction of this initiative.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
              How much time?
            </p>
            <div className="flex flex-wrap gap-2">
              {TIME_KEYS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-full border-2 border-border text-sm font-semibold transition-all ${
                    selectedTime === time
                      ? "bg-clay text-white shadow-[3px_3px_0_#1a1b1f]"
                      : "bg-surface-raised text-text-secondary hover:bg-bg"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-3">
              You are a
            </p>
            <div className="flex flex-wrap gap-2">
              {ROLE_KEYS.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-full border-2 border-border text-sm font-semibold transition-all ${
                    selectedRole === role
                      ? "bg-clay text-white shadow-[3px_3px_0_#1a1b1f]"
                      : "bg-surface-raised text-text-secondary hover:bg-bg"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <p
            className="text-lg font-medium text-text-primary mb-8 border-l-4 pl-4"
            style={{ borderColor: roleColor }}
          >
            {ESCALATION[selectedTime]}
          </p>

          <div className="space-y-4">
            {actions.map((action, i) => (
              <ActionCard key={i} action={action} roleColor={roleColor} />
            ))}
          </div>

          <div className="mt-14 pt-10 border-t-2 border-border text-center">
            <p className="text-text-secondary mb-4">Ready to commit?</p>
            <a href="/volunteer" className="btn-pill btn-pill-clay px-8 py-3 text-base">
              Apply to contribute →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
