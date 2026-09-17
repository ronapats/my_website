export interface TimelineItem {
  year: string;
  category: "Education" | "Work" | "Toolkit" | "Sport";
  title: string;
  org?: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2012–2016",
    category: "Education",
    title: "BEng, Automotive Design and Manufacturing Engineering",
    org: "Chulalongkorn University",
    description:
      "First Class Honors, Top 5% (GPA 3.60/4.00) — the engineering foundation underneath everything since.",
  },
  {
    year: "2016–2019",
    category: "Work",
    title: "Engineer → Schedule Control Engineer → Project Engineer",
    org: "Mitsubishi Heavy Industries",
    description:
      "Infrastructure delivery across Japan, Thailand, and Macau — coordinating thousands of activities on billion-dollar rail projects.",
  },
  {
    year: "2019–2021",
    category: "Work",
    title: "Project Engineer",
    org: "Amazon",
    description:
      "Tokyo — launched delivery stations and Amazon Japan's first automated labelling process, saving $10M a year.",
  },
  {
    year: "2021–2023",
    category: "Education",
    title: "MBA, Technology and Analytics Concentration",
    org: "London Business School (+ Kellogg exchange)",
    description:
      "Internships in growth strategy (Carsome), product (Digital Boost), and business development (Poly.AI) along the way.",
  },
  {
    year: "2023–Present",
    category: "Work",
    title: "Project Manager, Customer Experience Group",
    org: "Agoda",
    description:
      "CS tech-stack migration, automation initiatives, and B2B partner onboarding for a new Booking Holdings entity.",
  },
  {
    year: "Ongoing",
    category: "Toolkit",
    title: "PMP certified, and building",
    description:
      "SQL, Python, R, JavaScript, Figma, LINE Messaging API, Claude — the technical range behind the side projects.",
  },
  {
    year: "Ongoing",
    category: "Sport",
    title: "Personal records",
    description: "10K — 44:02 · Half marathon — 1:40:51 · Hyrox Men Solo Open — 1:21:57.",
  },
];
