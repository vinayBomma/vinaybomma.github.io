import React from "react";

interface AppShowcaseItem {
  name: string;
  slug: string;
  category: string;
  summary: string;
  icon: string;
  screenshot: string;
  landingUrl: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  gradient: string;
  glow: string;
  ring: string;
  details: string[];
}

const apps: AppShowcaseItem[] = [
  {
    name: "Calry",
    slug: "calry",
    category: "Health",
    summary:
      "Track meals without the usual food-app noise. Describe what you ate, scan a barcode, or use photos to keep calories, macros, water, and progress in one calm place.",
    icon: "/assets/icons/calry.png",
    screenshot: "/assets/screenshots/calry/1.png",
    landingUrl: "/calry/",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.vinaybomma.calry",
    appStoreUrl:
      "https://apps.apple.com/us/app/calry-eat-describe-done/id6768771101",
    gradient: "from-emerald-400/30 via-teal-500/10 to-slate-950",
    glow: "bg-emerald-400/30",
    ring: "ring-emerald-300/30",
    details: ["AI meal logging", "Barcode scanning", "Weekly insights"],
  },
  {
    name: "Coulda",
    slug: "coulda",
    category: "Productivity",
    summary:
      "A task app with just enough bite to get you moving. Coulda turns avoided work into tiny next steps, streaks, reports, and playful accountability.",
    icon: "/assets/icons/coulda.png",
    screenshot: "/assets/screenshots/coulda/1.png",
    landingUrl: "/coulda/",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.vinaybomma.coulda",
    appStoreUrl:
      "https://apps.apple.com/us/app/coulda-shoulda-didnt/id6769034372",
    gradient: "from-orange-400/35 via-rose-500/10 to-slate-950",
    glow: "bg-orange-400/30",
    ring: "ring-orange-300/30",
    details: ["Tiny tasks", "Streaks", "Focus modes"],
  },
  {
    name: "Toki",
    slug: "toki",
    category: "Lifestyle",
    summary:
      "A quiet journaling space for thoughts, moods, and memories. Toki is built around local-first writing, gentle prompts, and private reflection.",
    icon: "/assets/icons/toki.png",
    screenshot: "/assets/screenshots/toki/1.png",
    landingUrl: "/toki/",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.vinaybomma.toki",
    appStoreUrl:
      "https://apps.apple.com/in/app/toki-private-journal/id6765892333",
    gradient: "from-amber-300/35 via-stone-400/10 to-slate-950",
    glow: "bg-amber-300/30",
    ring: "ring-amber-200/30",
    details: ["Daily prompts", "Mood trends", "Private exports"],
  },
  {
    name: "Twister",
    slug: "twister",
    category: "Education",
    summary:
      "Practice pronunciation with tongue twisters across 100+ languages. Listen, record, replay, build streaks, and share your best attempts.",
    icon: "/assets/icons/twister.png",
    screenshot: "/assets/screenshots/twister/1.png",
    landingUrl: "/twister/",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.vinaybomma.twister",
    appStoreUrl:
      "https://apps.apple.com/in/app/twister-tongue-twister-app/id6763035442",
    gradient: "from-violet-400/35 via-fuchsia-500/10 to-slate-950",
    glow: "bg-violet-400/30",
    ring: "ring-violet-300/30",
    details: ["100+ languages", "Recordings", "Badges"],
  },
];

const Apps: React.FC = () => {
  return (
    <section
      id="apps"
      className="relative overflow-hidden bg-slate-950 py-24 text-white transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(47,133,90,0.28),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(139,92,246,0.24),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            Apps I have built
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Small apps for food, focus, journaling, and pronunciation.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.slug}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${app.gradient} p-5 shadow-2xl ring-1 ${app.ring} transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-7`}
            >
              <div
                className={`absolute right-8 top-10 h-44 w-44 rounded-full ${app.glow} blur-3xl transition duration-300 group-hover:scale-125`}
              />
              <div className="relative z-10 grid min-h-[480px] gap-8 md:grid-cols-[minmax(0,1fr)_190px] md:items-end">
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start gap-4">
                    <img
                      src={app.icon}
                      alt={`${app.name} app icon`}
                      className="h-16 w-16 rounded-2xl bg-white/15 object-cover shadow-xl ring-1 ring-white/20"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                        {app.category}
                      </p>
                      <h3 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {app.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-8 text-base leading-8 text-slate-200">
                    {app.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {app.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/80"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href={app.landingUrl}
                      className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-50 sm:col-span-2"
                    >
                      View app
                    </a>
                    <a
                      href={app.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      <i
                        className="fab fa-google-play shrink-0"
                        aria-hidden="true"
                      ></i>
                      <span className="truncate whitespace-nowrap">
                        Google Play
                      </span>
                    </a>
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      <i
                        className="fab fa-apple shrink-0"
                        aria-hidden="true"
                      ></i>
                      <span className="truncate whitespace-nowrap">
                        App Store
                      </span>
                    </a>
                  </div>
                </div>

                <a
                  href={app.landingUrl}
                  aria-label={`Open ${app.name}`}
                  className="mx-auto block w-44 rotate-3 rounded-[1.65rem] border border-white/20 bg-white/10 p-2 shadow-2xl transition duration-300 group-hover:rotate-0 group-hover:scale-105 md:mx-0"
                >
                  <img
                    src={app.screenshot}
                    alt={`${app.name} app screenshot`}
                    className="aspect-[9/19.5] w-full rounded-[1.25rem] object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-7 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-center">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
              <img
                src="/hashnode.png"
                alt="Hashnode on VSCode preview"
                className="mx-auto max-h-36 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
                Developer project
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Hashnode on VSCode
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                A VS Code extension for writing and managing Hashnode posts
                without leaving the editor.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-64 lg:grid-cols-1">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=VinayBomma.hashnode-on-vscode"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                View Project
              </a>
              <a
                href="https://github.com/vinayBomma/hashnode-vscode"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                View Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Apps;
