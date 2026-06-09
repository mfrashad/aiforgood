"use client";

import { useState } from "react";

// Set your Formspree form ID here (from formspree.io/forms after creating a form)
// Or set NEXT_PUBLIC_FORMSPREE_ID in .env.local
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "your-form-id"; // TODO: replace with real ID

const CREATOR_FORMATS = [
  "Short-form video",
  "Blog / article",
  "Tweet / thread",
  "Infographic",
  "Other",
];
const CREATOR_LANGUAGES = ["English", "Other language"];

const RESEARCHER_SKILLS = [
  "Data analysis",
  "Data visualization",
  "Frontend / interactive tools",
  "Backend / APIs",
  "Academic / qualitative research",
  "Science writing",
  "Other",
];

const REFERRAL_SOURCES = [
  "Twitter / X",
  "TikTok",
  "Instagram",
  "Friend or colleague",
  "Meetup / event",
  "Google search",
  "Other",
];

type Role = "creator" | "researcher";

const ROLE_INFO: {
  id: Role;
  title: string;
  commitment: string;
  description: string;
  expectations: string[];
}[] = [
  {
    id: "creator",
    title: "Creator",
    commitment: "~1 post / week",
    description:
      "Make AI safety and responsible AI accessible to everyone — short-form video, articles, infographics, or threads in any language.",
    expectations: [
      "1 post/week in any format: video, blog, tweet, infographic",
      "Topics: AI safety, AI risk, algorithmic bias, responsible AI",
      "Any language — your language is a contribution in itself",
      "No prior audience needed — just consistency and clarity",
    ],
  },
  {
    id: "researcher",
    title: "Researcher",
    commitment: "3–5 hrs / week",
    description:
      "Turn AI risks into data people can see and share — interactive visualizations, open datasets, and focused research experiments anyone can explore and cite.",
    expectations: [
      "Build small, focused experiments that make an AI issue tangible",
      "Collect, clean, and analyze data on AI adoption and AI impact globally",
      "Produce summaries and findings the community can publish and share",
      "Contribute to open data projects tracking the AI divide",
    ],
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  linkedin: string;
  portfolio: string;
  about: string;
  motivation: string;
  roles: Role[];
  creatorFormats: string[];
  creatorLanguages: string[];
  creatorSamples: string;
  researcherFocus: string;
  researcherSkills: string[];
  researcherGithub: string;
  acknowledgesUnpaid: boolean;
  referralSource: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  linkedin: "",
  portfolio: "",
  about: "",
  motivation: "",
  roles: [],
  creatorFormats: [],
  creatorLanguages: [],
  creatorSamples: "",
  researcherFocus: "",
  researcherSkills: [],
  researcherGithub: "",
  acknowledgesUnpaid: false,
  referralSource: "",
  notes: "",
};

function toggle<T extends string>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

function isUrl(s: string) {
  return !s || /^https?:\/\/.+/.test(s);
}

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!d.name.trim()) e.name = "Required";
  else if (d.name.trim().length > 80) e.name = "Max 80 characters";
  if (!d.email.trim()) e.email = "Required";
  else if (!/^\S+@\S+\.\S+$/.test(d.email)) e.email = "Enter a valid email";
  if (!d.country.trim()) e.country = "Required";
  if (d.linkedin && !isUrl(d.linkedin)) e.linkedin = "Must start with https://";
  if (d.portfolio && !isUrl(d.portfolio)) e.portfolio = "Must start with https://";
  if (!d.about.trim()) e.about = "Required";
  else if (d.about.trim().length < 20) e.about = "Please write at least 20 characters";
  if (!d.motivation.trim()) e.motivation = "Required";
  else if (d.motivation.trim().length < 20)
    e.motivation = "Please write at least 20 characters";
  if (d.roles.length === 0) e.roles = "Please select at least one role";
  if (d.roles.includes("creator") && d.creatorFormats.length === 0)
    e.creatorFormats = "Select at least one format";
  if (!d.acknowledgesUnpaid) e.acknowledgesUnpaid = "You must check this box to apply";
  return e;
}

const inputBase =
  "w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:border-clay/50 transition-colors placeholder:text-text-secondary/40";

function ErrMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-600 mt-1.5">{msg}</p>;
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-text-secondary mb-1.5">
      {text}
      {required && <span className="text-clay ml-0.5">*</span>}
    </label>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-text-primary mb-5 pb-2.5 border-b border-border">
      {children}
    </h3>
  );
}

function PillToggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-pill text-sm py-1.5 px-4 transition-all ${
        active ? "btn-pill-clay" : "btn-pill-outline"
      }`}
    >
      {label}
    </button>
  );
}

function RoleCard({
  role,
  selected,
  onToggle,
  children,
}: {
  role: (typeof ROLE_INFO)[number];
  selected: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`card overflow-hidden transition-all ${
        selected ? "ring-2 ring-clay/40" : ""
      }`}
    >
      {/* Clickable header — toggles selection */}
      <button type="button" onClick={onToggle} className="w-full text-left p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                selected ? "bg-clay border-clay" : "border-border"
              }`}
            >
              {selected && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              className="text-base text-text-primary"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              {role.title}
            </span>
          </div>
          <span className="text-xs font-medium text-text-secondary bg-surface-raised px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">
            {role.commitment}
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 ml-7">
          {role.description}
        </p>
        <ul className="space-y-1 ml-7">
          {role.expectations.map((exp, i) => (
            <li key={i} className="text-xs text-text-secondary/60 flex gap-1.5">
              <span className="flex-shrink-0 mt-0.5">—</span>
              {exp}
            </li>
          ))}
        </ul>
        <p className="text-xs text-clay/70 mt-3 ml-7">
          {selected ? "Selected ↑ fill in the details below" : "Click to select this role →"}
        </p>
      </button>

      {/* Expandable details — only when selected */}
      {selected && children && (
        <div className="border-t border-border px-5 pb-6 pt-5 space-y-5 bg-surface/40">
          {children}
        </div>
      )}
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="card-flat p-10 text-center max-w-md mx-auto">
      <div className="w-16 h-16 rounded-full bg-olive/20 flex items-center justify-center mx-auto mb-6 text-3xl text-olive">
        ✓
      </div>
      <h3
        className="text-2xl text-text-primary mb-3"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
      >
        Application submitted!
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        Thanks for applying. We&apos;ll review your application and get back to
        you within 1–2 weeks.
      </p>
    </div>
  );
}

export default function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [d, setD] = useState<FormData>(INITIAL);

  function set<K extends keyof FormData>(k: K, v: FormData[K]) {
    setD((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(d);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document
        .getElementById(`field-${firstKey}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("submitting");
    setServerError(null);
    try {
      const payload: Record<string, string> = {
        name: d.name.trim(),
        email: d.email.trim(),
        country: d.country.trim(),
        roles: d.roles.join(", "),
        about: d.about.trim(),
        motivation: d.motivation.trim(),
        acknowledgesUnpaid: d.acknowledgesUnpaid ? "yes" : "no",
      };
      if (d.phone) payload.phone = d.phone;
      if (d.city) payload.city = d.city;
      if (d.linkedin) payload.linkedin = d.linkedin;
      if (d.portfolio) payload.portfolio = d.portfolio;
      if (d.referralSource) payload.referralSource = d.referralSource;
      if (d.notes) payload.notes = d.notes;
      if (d.roles.includes("creator")) {
        if (d.creatorFormats.length) payload.creatorFormats = d.creatorFormats.join(", ");
        if (d.creatorLanguages.length) payload.creatorLanguages = d.creatorLanguages.join(", ");
        if (d.creatorSamples) payload.creatorSamples = d.creatorSamples;
      }
      if (d.roles.includes("researcher")) {
        if (d.researcherFocus) payload.researcherFocus = d.researcherFocus;
        if (d.researcherSkills.length) payload.researcherSkills = d.researcherSkills.join(", ");
        if (d.researcherGithub) payload.researcherGithub = d.researcherGithub;
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error ?? "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") return <SuccessCard />;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {/* ── 1. About you ── */}
      <div>
        <SectionHeading>About you</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-5">
          <div id="field-name">
            <Label text="Full name" required />
            <input
              type="text"
              value={d.name}
              onChange={(e) => set("name", e.target.value)}
              className={inputBase}
              placeholder="Your name"
            />
            <ErrMsg msg={errors.name} />
          </div>
          <div id="field-email">
            <Label text="Email" required />
            <input
              type="email"
              value={d.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputBase}
              placeholder="you@example.com"
            />
            <ErrMsg msg={errors.email} />
          </div>
          <div>
            <Label text="WhatsApp / phone" />
            <input
              type="tel"
              value={d.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={inputBase}
              placeholder="+1 555 000 0000"
            />
          </div>
          <div id="field-country">
            <Label text="Country" required />
            <input
              type="text"
              value={d.country}
              onChange={(e) => set("country", e.target.value)}
              className={inputBase}
              placeholder="Your country"
            />
            <ErrMsg msg={errors.country} />
          </div>
          <div>
            <Label text="City" />
            <input
              type="text"
              value={d.city}
              onChange={(e) => set("city", e.target.value)}
              className={inputBase}
              placeholder="Your city"
            />
          </div>
          <div id="field-linkedin">
            <Label text="LinkedIn" />
            <input
              type="url"
              value={d.linkedin}
              onChange={(e) => set("linkedin", e.target.value)}
              className={inputBase}
              placeholder="https://linkedin.com/in/..."
            />
            <ErrMsg msg={errors.linkedin} />
          </div>
          <div className="sm:col-span-2" id="field-portfolio">
            <Label text="Portfolio / GitHub / personal site" />
            <input
              type="url"
              value={d.portfolio}
              onChange={(e) => set("portfolio", e.target.value)}
              className={inputBase}
              placeholder="https://..."
            />
            <ErrMsg msg={errors.portfolio} />
          </div>
        </div>
      </div>

      {/* ── 2. Tell us about yourself ── */}
      <div>
        <SectionHeading>Tell us about yourself</SectionHeading>
        <div className="space-y-5">
          <div id="field-about">
            <Label text="Your background and relevant experience" required />
            <div className="relative">
              <textarea
                value={d.about}
                onChange={(e) => set("about", e.target.value)}
                maxLength={1000}
                rows={4}
                className={inputBase}
                placeholder="Tell us about your skills, past projects, work, or studies — doesn't have to be technical..."
              />
              <span className="absolute bottom-2.5 right-3 text-xs text-text-secondary/40 select-none pointer-events-none">
                {d.about.length}/1000
              </span>
            </div>
            <ErrMsg msg={errors.about} />
          </div>
          <div id="field-motivation">
            <Label text="Why do you want to join?" required />
            <div className="relative">
              <textarea
                value={d.motivation}
                onChange={(e) => set("motivation", e.target.value)}
                maxLength={1000}
                rows={4}
                className={inputBase}
                placeholder="What draws you to Youth for Responsible AI? What would you like to contribute or learn?"
              />
              <span className="absolute bottom-2.5 right-3 text-xs text-text-secondary/40 select-none pointer-events-none">
                {d.motivation.length}/1000
              </span>
            </div>
            <ErrMsg msg={errors.motivation} />
          </div>
        </div>
      </div>

      {/* ── 3. Role selection ── */}
      <div id="field-roles">
        <SectionHeading>Which role(s) are you applying for?</SectionHeading>
        <p className="text-sm text-text-secondary mb-5">
          Click a card to select it. You can pick more than one. Each role expands
          with a few quick questions once selected.
        </p>
        <div className="space-y-4">

          {/* Creator */}
          <RoleCard
            role={ROLE_INFO[0]}
            selected={d.roles.includes("creator")}
            onToggle={() => set("roles", toggle(d.roles, "creator"))}
          >
            <div id="field-creatorFormats">
              <Label text="Content formats you work in" required />
              <div className="flex flex-wrap gap-2.5">
                {CREATOR_FORMATS.map((fmt) => (
                  <PillToggle
                    key={fmt}
                    label={fmt}
                    active={d.creatorFormats.includes(fmt)}
                    onClick={() =>
                      set("creatorFormats", toggle(d.creatorFormats, fmt))
                    }
                  />
                ))}
              </div>
              <ErrMsg msg={errors.creatorFormats} />
            </div>

            <div>
              <Label text="Languages you create content in" />
              <div className="flex flex-wrap gap-2.5">
                {CREATOR_LANGUAGES.map((lang) => (
                  <PillToggle
                    key={lang}
                    label={lang}
                    active={d.creatorLanguages.includes(lang)}
                    onClick={() =>
                      set("creatorLanguages", toggle(d.creatorLanguages, lang))
                    }
                  />
                ))}
              </div>
            </div>

            <div>
              <Label text="Link to past content or portfolio (optional)" />
              <input
                type="url"
                value={d.creatorSamples}
                onChange={(e) => set("creatorSamples", e.target.value)}
                className={inputBase}
                placeholder="https://..."
              />
              <p className="text-xs text-text-secondary/50 mt-1.5">
                TikTok, Instagram, YouTube, blog, newsletter — anything that shows your work.
              </p>
            </div>
          </RoleCard>

          {/* Researcher */}
          <RoleCard
            role={ROLE_INFO[1]}
            selected={d.roles.includes("researcher")}
            onToggle={() => set("roles", toggle(d.roles, "researcher"))}
          >
            <div>
              <Label text="What AI issue do you want to explore? (optional)" />
              <textarea
                value={d.researcherFocus}
                onChange={(e) => set("researcherFocus", e.target.value)}
                maxLength={500}
                rows={3}
                className={inputBase}
                placeholder="e.g. AI adoption gaps in the Global South, facial recognition bias, AI energy use, model transparency — even a rough idea is fine..."
              />
            </div>

            <div>
              <Label text="Skills / tools you work with" />
              <div className="flex flex-wrap gap-2.5">
                {RESEARCHER_SKILLS.map((skill) => (
                  <PillToggle
                    key={skill}
                    label={skill}
                    active={d.researcherSkills.includes(skill)}
                    onClick={() => set("researcherSkills", toggle(d.researcherSkills, skill))}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label text="GitHub (optional)" />
              <input
                type="text"
                value={d.researcherGithub}
                onChange={(e) => set("researcherGithub", e.target.value)}
                className={inputBase}
                placeholder="yourusername"
              />
            </div>
          </RoleCard>

        </div>
        <ErrMsg msg={errors.roles} />
      </div>

      {/* ── 4. Final details ── */}
      <div>
        <SectionHeading>Final details</SectionHeading>
        <div className="space-y-5">
          <div>
            <Label text="How did you hear about us?" />
            <select
              value={d.referralSource}
              onChange={(e) => set("referralSource", e.target.value)}
              className={inputBase}
            >
              <option value="">Select one...</option>
              {REFERRAL_SOURCES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label text="Anything else you'd like to share?" />
            <textarea
              value={d.notes}
              onChange={(e) => set("notes", e.target.value)}
              maxLength={500}
              rows={3}
              className={inputBase}
              placeholder="Questions, comments, or anything we should know..."
            />
          </div>
          <div id="field-acknowledgesUnpaid" className="flex items-start gap-3 pt-2">
            <input
              id="acknowledgesUnpaid"
              type="checkbox"
              checked={d.acknowledgesUnpaid}
              onChange={(e) => set("acknowledgesUnpaid", e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-border accent-clay flex-shrink-0 cursor-pointer"
            />
            <div>
              <label
                htmlFor="acknowledgesUnpaid"
                className="text-sm text-text-secondary cursor-pointer leading-relaxed"
              >
                I understand this role is{" "}
                <span className="text-text-primary font-medium">
                  unpaid and volunteer-run
                </span>
                , and I&apos;m committing to consistent weekly contributions.{" "}
                <span className="text-clay">*</span>
              </label>
              <ErrMsg msg={errors.acknowledgesUnpaid} />
            </div>
          </div>
        </div>
      </div>

      {serverError && (
        <div className="card-flat p-4 border border-red-500/30 rounded-xl">
          <p className="text-sm text-red-600">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-pill btn-pill-clay text-base px-10 py-3 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting…" : "Submit application →"}
      </button>
    </form>
  );
}
