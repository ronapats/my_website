---
title: "Tech Simplified"
order: 4
dates: "18 Jan – 3 Feb 2023"
context: "Kellogg — PM"
tags: ["Entrepreneur", "Tech"]
---

## Websites
- HTML = basic static web page. CSS = beautify/responsive. JavaScript = interactivity.
- Responsive website = ability to adjust to screen size.
- App server = generates content dynamically, converting data from DB to web pages.
- Compiler = turns human-readable language into machine-readable language.
- Libraries can be inserted into your code; you insert your code into a framework.
- Efficiency = solving a problem in the least time with the least memory.

## Mobile apps
Building mobile websites:
- **Responsive m-site** — same HTML regardless of screen size, using CSS to rearrange elements. Use when you want the site to look and feel the same as desktop.
- **Adaptive serving** — same URL, adapts to devices, content changes. Reduces page load time on 3G, improves speed.
- **Separate site** — different subdomain starting with "m".
- **Accelerated Mobile Pages (AMP)** — loads faster, e.g. news articles and blogs.

## DevOps
- IDE = Integrated Development Environment.
- Native vs. Hybrid vs. Cross-platform apps: native takes longer to build but performs better; hybrid is faster to build but lower performance and higher security risk; cross-platform builds one codebase for multiple platforms. If offline usage is required, go native.
- Three stages of software development: Dev (local machine) → Staging (peer review, testing) → Production (real users).
- Git is a version control system; GitHub hosts it. Pushing changes is a pull request (PR).
- Dev team writes and pushes code; Ops team ensures it stays up and running.
- Testing on a subset of users: Alpha (internal, done by QA) vs. Beta (limited real-world users).
- CI/CD = Continuous Integration & Continuous Delivery, for fast and reliable release.

## System design
Why should a PM care?
- System design involves trade-offs (time, money, resources) and determines the user experience. Common in PM technical interviews.
- Two aspects of UX design: **Functional** (features) and **Non-functional** (performance, scalability, security, size/memory, availability, reliability).
- **Scalability**: vertical scaling (bigger instance) vs. horizontal scaling (more instances — better, no hard limit, fault-tolerant, low latency).
- **Partitioning**: breaking database tables to improve latency. Horizontal = break rows; Vertical = break columns.
- **Cache**: stores recently requested data to reduce database load. Client-side (static/slow-changing sites) vs. server-side (dynamic sites, large files).
- **CDN**: caches content closer to end-users for faster delivery.
- **Availability & robustness**: redundancy + replication (active/passive) to avoid system failure.
- **Communication protocols**:
  - HTTP Polling — client requests at fixed intervals; wastes resources on empty responses. Use case: live sports scores.
  - HTTP Long Polling — server waits until data is available before responding. Use case: chat apps.
  - WebSockets — a persistent connection between client and server.
  - HTTP Server-Side Events (SSE) — persistent connection, good for read-heavy apps like real-time dashboards.
- **CAP Theorem trade-off**: Consistency, Availability, Partition Tolerance — pick two.

## System design of popular products
- The objective is to spend the least money while not hurting the user experience.
- Four-step approach: (1) define scope — functional/non-functional requirements, what's out of scope; (2) high-level design — key components and how they interact; (3) details of important components — database choices, APIs; (4) details of how to meet non-functional requirements — scalability, latency, availability.

## Working with tech
- To build products consumers love, PMs should think without constraints at first — don't constrain yourself too early about what's possible. Once you have the vision, break it into a roadmap and execute.
- A PM needs to provide clarity of thought and prioritization, bring a unique perspective, and validate ideas fast with an MVP.
- When working with engineers, never make a general remark about how fast something can be done or challenge their ability — show intent to understand what it will actually take.
