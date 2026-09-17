export type ProjectIcon = "fpl" | "football" | "fitness" | "chat";

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
}

export const projects: Project[] = [
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
  {
    slug: "line-group-bot",
    title: "Group Chat Summarizer",
    type: "Side project",
    meta: "Personal · Node.js · 2026",
    icon: "chat",
    summary:
      "Tag the bot in a busy LINE group and it replies with a structured summary — decisions, action items, open questions.",
    context:
      "Fast-moving group chats bury decisions and action items. Catching up after being away meant scrolling through dozens of messages.",
    role: "Solo build.",
    actions: [
      "Built a LINE Official Account webhook that buffers recent group messages and summarizes them via OpenAI into Summary / Key Decisions / Action Items / Open Questions on @-mention.",
      "Worked around LINE's API having no chat-history endpoint by having the bot build its own rolling window from messages it observes live.",
    ],
    outcome:
      "Working prototype — a reusable buffer-and-summarize pattern for any noisy group chat.",
    tags: ["OpenAI", "LINE Messaging API", "Node.js"],
  },
];
