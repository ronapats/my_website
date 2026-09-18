export type ProjectIcon = "fpl" | "football" | "fitness" | "broker";

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  type: "Work" | "Side project";
  meta: string; // company / period, shown next to the type tag
  summary: string; // one-line teaser shown on the collapsed card
  context: string;
  role: string;
  actions: string[];
  outcome: string;
  tags: string[];
  icon: ProjectIcon;
  screenshots?: Screenshot[];
}

export const projects: Project[] = [
  {
    slug: "broker-buzz",
    title: "Broker Buzz",
    type: "Side project",
    meta: "Personal · Python · 2026 · In progress",
    icon: "broker",
    summary:
      "A read-only research digest of Thai securities-broker Telegram channels — what brokers said, what changed, and which stocks get the most attention.",
    context:
      "Thai brokers publish research across a dozen Telegram channels and LINE accounts, as text, PDFs, and infographic images. Keeping up meant scrolling every channel and mentally diffing ratings and target prices.",
    role: "Solo build — scoped it in phases, designed the data model, and set the guardrails.",
    actions: [
      "Built a Telethon-based collector that incrementally pulls messages and PDF attachments from 13 configured channels into SQLite, with FloodWait handling and per-channel run summaries.",
      "Added an inspection step that sizes the data problem (media mix, PDF extraction health, where rating language actually appears) before any parsing is trusted.",
      "Built a vision-transcription bake-off comparing Gemini and Groq on broker infographics, using models strictly as transcribers rather than interpreters.",
      "Designed it read-only by construction: no trading, no brokerage connection, and no generated buy/sell view — any \"Buy\" label comes from the broker's own words.",
    ],
    outcome:
      "Phase 1 of 3 is working: 810 messages collected across 13 channels with a test suite. Rating and target-price parsing and the digest come next, once the real data has been reviewed.",
    tags: ["Python", "Telegram API", "SQLite", "Vision models", "Data pipeline"],
  },
  {
    slug: "fpl-line-bot",
    title: "FPL Companion Bot",
    type: "Side project",
    meta: "Personal · Cloudflare Workers · 2026",
    icon: "fpl",
    summary:
      "A Fantasy Premier League companion bot for a friend group's LINE chat — live scores, strategy alerts, and a running payout ledger.",
    context:
      "Our fantasy league tracks a weekly cash pot and runs on deadlines and chip timing the FPL app doesn't surface anywhere near where we actually talk — the group's LINE chat.",
    role: "Solo build, end to end — bot design, backend, and league logic.",
    actions: [
      "Built a Cloudflare Worker webhook bot with three on-demand commands: score (live standings), strategy (deadline countdown, chip-timing and price-change alerts), and money (weekly payout ledger with live point-gap projection).",
      "Set up a Friday 9am Cloudflare Cron Trigger for an automatic digest — a personal captain/transfer nudge plus a group strategy reminder.",
      "Persisted the payout ledger in Cloudflare KV and moved replies to LINE's Flex (rich) message format for readability.",
    ],
    outcome:
      "Running live for the group's weekly league — replaced a manually updated spreadsheet with an always-current bot.",
    tags: ["Cloudflare Workers", "LINE Messaging API", "Cron", "KV"],
    screenshots: [
      {
        src: "/projects/fpl-commands.jpg",
        alt: "LINE chat showing the FPL bot's strategy reminder, live score standings, and payout ledger replies",
      },
    ],
  },
  {
    slug: "line-football-bot",
    title: "Football Attendance Organizer",
    type: "Side project",
    meta: "Personal · Node.js → Cloudflare Workers · 2026",
    icon: "football",
    summary:
      "Turns a messy, hand-typed 5-a-side attendance list into position-sorted teams — no more manual sorting in the group chat.",
    context:
      "Weekly pickup football signups arrive as free-text in the LINE group — positions, jersey numbers, and payment checkmarks all mixed in inconsistently. Sorting it by hand every week was tedious and error-prone.",
    role: "Solo build.",
    actions: [
      "Built a LINE webhook bot (HMAC-signature verified) that reads a mentioned message and routes it: organize the list by position, randomize balanced teams, or flag unpaid players.",
      "Used an LLM (Groq) with a constrained extraction prompt to parse names and positions from unstructured, mixed-language text without inventing or dropping players.",
      "Migrated the deployment from Node/Express on Railway to a Cloudflare Worker for simpler hosting.",
    ],
    outcome:
      "In active weekly use in the group chat — replaced a recurring manual sorting task with an instant reply.",
    tags: ["LLM prompt engineering", "Groq", "LINE Messaging API", "Express"],
    screenshots: [
      {
        src: "/projects/football-organize.jpg",
        alt: "LINE group chat: a raw attendance list sent to the bot and its position-sorted reply (GK/CB/RLB/MF/FW)",
      },
      {
        src: "/projects/football-teams.jpg",
        alt: "LINE group chat: a participant list sent to the bot and its randomized three-team split reply",
      },
    ],
  },
  {
    slug: "garmin-line-bot",
    title: "Fitness Recap Bot",
    type: "Side project",
    meta: "Personal · Python · 2026",
    icon: "fitness",
    summary:
      "Daily and weekly Garmin fitness recaps — sleep, steps, training readiness — pushed straight to LINE.",
    context:
      "Fitness data lives inside the Garmin Connect app, which I don't open daily. Wanted a passive recap without another app to check.",
    role: "Solo build.",
    actions: [
      "Built a Python script against the Garmin Connect API pulling sleep, steps, and training-readiness data.",
      "Scheduled daily and weekly runs via launchd and pushed formatted recaps through the LINE push API.",
    ],
    outcome:
      "Running on a standing daily/weekly schedule — a small automation that quietly removed a manual check-in habit.",
    tags: ["Python", "Garmin Connect API", "Automation", "LINE Messaging API"],
  },
];
