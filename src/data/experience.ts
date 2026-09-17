export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Employer {
  company: string;
  context: string;
  location: string;
  roles: Role[];
}

// Sourced from CV dated 2026-09-04. Bullets lightly edited for web
// readability; figures kept as-is.
export const experience: Employer[] = [
  {
    company: "Agoda",
    context: "Leading online travel agency, part of Booking Holdings",
    location: "Bangkok, Thailand",
    roles: [
      {
        title: "Project Manager — Partnership Excellence, B2B (Customer Experience Group)",
        period: "2026 – Present",
        bullets: [
          "Managing a CS tech-stack migration across 20+ stakeholders spanning Tech, Product, Engineering, Commercial, and Operations at Priceline and Agoda, supporting the setup of a new B2B entity, Booking Partner Division, under BHI Group.",
          "Initiated an AI-driven QA workflow that eliminated manual QA and saved 100+ work hours.",
          "Leading onboarding collaboration with 30+ B2B partners, developing short- and long-term product solutions to serve partner needs.",
        ],
      },
      {
        title:
          "Project Manager — Operational Excellence & Automation (Customer Experience Group)",
        period: "2023 – 2025",
        bullets: [
          "Drove a new feature for the case-management tool used by ~4,000 agents; led UAT with 120 agents across 4 funnels, boosting adoption from 0% to 80% and generating $0.9M in efficiency gains.",
          "Led an end-to-end initiative across 30+ stakeholders and 8+ teams to eliminate manual note-taking in case handling — projected to cut global handle time by ~5%, or $4M in annual efficiency gains.",
          "Co-led a department-wide summer internship program for 22 interns; introduced pulse surveys tracking excitement, support, and learning that lifted intern satisfaction to 4.5/5.0.",
        ],
      },
    ],
  },
  {
    company: "Poly.AI",
    context: "Conversational AI for automated customer service",
    location: "London, UK",
    roles: [
      {
        title: "Business Development — MBA Internship",
        period: "2022",
        bullets: [
          "Worked directly with the COO on market research, engaging 20+ qualified prospects to evaluate new business opportunities in Asia and inform key growth decisions.",
        ],
      },
    ],
  },
  {
    company: "Digital Boost",
    context:
      "EdTech mentorship platform connecting SMBs and charities with digital experts",
    location: "London, UK",
    roles: [
      {
        title: "Product Management — MBA Internship",
        period: "2022",
        bullets: [
          "Led 3 product initiatives (gamification, community, action plan); mapped the end-to-end user journey, designed UX/UI, and wrote product requirements — projected to lift monthly active engagement by 20%.",
        ],
      },
    ],
  },
  {
    company: "Carsome",
    context: "Southeast Asia's largest used-cars e-commerce platform",
    location: "Bangkok, Thailand",
    roles: [
      {
        title: "Growth Strategy — MBA Internship",
        period: "2021",
        bullets: [
          "Built a data-driven go-to-market strategy and 3-year roadmap for a new B2C business in Thailand, contributing to the Series D funding pitch and setting the course for $150M in annual revenue.",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    context: "Amazon Logistics",
    location: "Tokyo, Japan",
    roles: [
      {
        title: "Project Engineer II / Project Engineer",
        period: "2019 – 2021",
        bullets: [
          "Led a cross-functional team to launch 4 delivery stations ($21M investment), increasing last-mile delivery capacity by 75M packages annually.",
          "Spearheaded Amazon Japan's first automated labelling process, saving $10M annually and lifting productivity 40% — later scaled to all stations nationwide.",
          "Redesigned procurement across 4 teams with a standardized purchasing system, increasing work efficiency by 75%.",
        ],
      },
    ],
  },
  {
    company: "Mitsubishi Heavy Industries",
    context: "Global leader in engineering, manufacturing, and infrastructure projects",
    location: "Japan · Thailand · Macau",
    roles: [
      {
        title:
          "Project Engineer (Macau) / Schedule Control Engineer (Thailand) / Engineer (Japan)",
        period: "2016 – 2019",
        bullets: [
          "Supervised 3 schedule control engineers and managed resources of 20+ testing engineers on the Macau Light Rapid Transit Project ($670M) — now serving 750K+ commuters monthly.",
          "Coordinated with 8 functional managers across 5,000+ engineering, procurement, and construction activities for the Bangkok Red Line Mass Transit System ($1.1B) — now serving ~6M commuters monthly.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "London Business School",
    detail: "MBA, Technology and Analytics Concentration",
    location: "London, UK",
    period: "2021 – 2023",
  },
  {
    school: "Kellogg School of Management, Northwestern University",
    detail: "MBA International Exchange",
    location: "Illinois, USA",
    period: "Jan – Mar 2023",
  },
  {
    school: "Chulalongkorn University",
    detail:
      "BEng, Automotive Design and Manufacturing Engineering — First Class Honors, Top 5% (GPA 3.60/4.00)",
    location: "Bangkok, Thailand",
    period: "2012 – 2016",
  },
];

export const toolkit = {
  certifications: [
    "Project Management Professional (PMP)",
    "Certified Professional Data Analyst",
  ],
  technical: [
    "SQL",
    "Python",
    "R",
    "JavaScript",
    "Tableau",
    "Power BI",
    "Figma",
    "CAD",
    "LINE Messaging API",
    "Apps Script",
    "Claude",
  ],
  languages: [
    "Thai (native)",
    "English (fluent)",
    "Japanese (fluent — JLPT N2)",
  ],
};
