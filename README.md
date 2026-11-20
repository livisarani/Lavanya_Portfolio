# Lavanya Kothalawala — Portfolio (Next.js + Tailwind CSS)

A modular portfolio and engineering case-study platform built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, featuring the **Oceanic Navy & Cyan** design system.

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## How to Customize Your Information

### 1. Personal Info, Hero, About, Skills, Experience & Contact
Edit **[src/data/portfolio.ts](src/data/portfolio.ts)**:
- `identity`: Your name, role subtitle, email, location, availability badge, resume link, and social links.
- `hero`: Eyebrow, headline, summary, and the 3 interactive telemetry counters (`Accuracy`, `Throughput`, `Efficiency`).
- `about`: Engineering story paragraphs, 4 core engineering values, profile card quick facts, and Python code snippet.
- `skills`: The 6 technical taxonomy categories and skill tags (set `highlighted: true` on any skill to highlight it in cyan).
- `experience`: Chronological work experience and academic milestones.
- `contact`: Direct coordinates, response latency, and contact form engagement dropdown options.

---

### 2. Modular Projects & Deep-Dive Case Studies
All projects live inside **[src/data/case-studies/projects/](src/data/case-studies/projects/)** as independent modules:

- [citation-aware-rag.ts](src/data/case-studies/projects/citation-aware-rag.ts)
- [clinic-workflow-management.ts](src/data/case-studies/projects/clinic-workflow-management.ts)
- [data-driven-survival-insights.ts](src/data/case-studies/projects/data-driven-survival-insights.ts)
- [laundry-management-system.ts](src/data/case-studies/projects/laundry-management-system.ts)

#### Adding a New Project
1. Duplicate any file in `src/data/case-studies/projects/` (e.g., `my-new-project.ts`) and fill in the `ProjectCaseStudy` fields (`slug`, `title`, `category`, `status`, `problem`, `solution`, `techStack`, `metric`, `previewImage`, `links`).
2. *(Optional)* Populate any of the deep-dive case study sections (`overview`, `objectives`, `features`, `architecture`, `keyDecisions`, `challenges`, `evaluation`, `learnings`, `futureWork`) to automatically generate a dedicated `/projects/my-new-project` page.
3. Import and add your project to `PROJECTS_REGISTRY` in **[src/data/case-studies/index.ts](src/data/case-studies/index.ts)**.
