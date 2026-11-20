import { ProjectCaseStudy } from "../types";

export const tutorMateMobileApp: ProjectCaseStudy = {
  slug: "tutormate-mobile-app",
  title: "TutorMate Mobile Application",
  category: "Mobile & Cloud",
  status: "React Native (Expo) & Supabase",
  featured: true,
  order: 4,
  problem:
    "Mobile learners and tutors need an always-accessible, cross-platform app with instant push notifications, real-time messaging, and secure session tracking without heavy client-side business logic.",
  solution:
    "Built a full-stack, cross-platform mobile tutoring platform using React Native (Expo) and Supabase, featuring Expo Router navigation, real-time WebSocket messaging, automated push notifications, PostgreSQL triggers, Row-Level Security (RLS), and Deno Edge Functions.",
  techStack: [
    "React Native (Expo)",
    "Expo Router",
    "Supabase",
    "PostgreSQL (RLS & Triggers)",
    "Supabase Realtime",
    "Deno Edge Functions",
  ],
  metric: {
    value: "Cross-Platform",
    label: "Event-Driven Mobile App with RLS & Edge Functions",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAciF6IUrT65VNXaByHd2G7ZpmaxRL8KBTG5fdxxO4ahUIr2ZfUpKbuHH35r_7HdPe5F0Z1vUsOj3V23FRzGYJ6bHTPi57D2s8px0CsIN-_ZarcQq3Lyybkb-GAVblLB1TdpHFD3cbHPZi96C_eVjx0C9g1rmUQ5oki88TNSAhDdpSOMEKQLhkzOMs1_MxH0hihZEJtSZXi_VqIsMc512TCXD_ovnS35VxL3VOIXkwf",
  previewAlt:
    "TutorMate cross-platform mobile application showing tutoring session schedules, real-time messaging, and push notification popovers",
  previewMetaLeft: "React Native • Expo Router",
  previewMetaRight: "Supabase RLS & Edge Functions",
  links: {
    github: "https://github.com/AshenEdi/TutorMate-Mobile-App-HCI",
    live: "/projects/tutormate-mobile-app",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A full-stack, cross-platform mobile tutoring platform built with React Native (Expo) and Supabase, enabling students and tutors to manage profiles, schedule and track tutoring sessions, communicate via real-time messaging, and receive automated push and in-app notifications.",
    role: "Mobile & Backend Architect",
    duration: "HCI University Project",
    status: "Completed",
    highlights: [
      "File-based navigation with Expo Router and reusable UI abstractions (global headers, notification popovers, custom hooks like usePushNotifications).",
      "Automated backend pipeline using PostgreSQL triggers and Row-Level Security (RLS) policies.",
      "Supabase Realtime WebSockets and Deno Edge Functions decoupling business logic from the mobile client.",
    ],
  },
  objectives: [
    {
      title: "Seamless Cross-Platform Mobile UX",
      description:
        "Deliver intuitive profile management, session scheduling, and real-time chat on iOS and Android from a single Expo codebase.",
      icon: "smartphone",
    },
    {
      title: "Event-Driven Push & In-App Notifications",
      description:
        "Alert students and tutors immediately on booking updates or new messages via custom hooks (usePushNotifications) and Edge Functions.",
      icon: "notifications_active",
    },
    {
      title: "Database-Enforced Security (RLS)",
      description:
        "Protect user profiles, messages, and session records directly at the PostgreSQL layer with Row-Level Security.",
      icon: "shield_lock",
    },
  ],
  features: [
    {
      title: "Expo Router & Reusable UI Abstractions",
      description:
        "Clean file-based routing paired with modular global headers, notification popovers, and custom React Native hooks.",
      tag: "Mobile UI/HCI",
    },
    {
      title: "Real-Time Messaging & Session Tracking",
      description:
        "Live chat and session status synchronization powered by Supabase Realtime WebSockets.",
      tag: "Realtime",
    },
    {
      title: "Automated Push Notification Pipeline",
      description:
        "PostgreSQL database triggers invoke Deno Edge Functions to dispatch push notifications via usePushNotifications.",
      tag: "Edge Functions",
    },
    {
      title: "PostgreSQL Row-Level Security (RLS)",
      description:
        "Fine-grained database policies ensuring users only access authorized tutoring sessions and chat threads.",
      tag: "Security",
    },
  ],
  architecture: {
    summary:
      "Decouples heavy business logic from the React Native client by leveraging PostgreSQL triggers, Supabase Realtime WebSockets, and serverless Deno Edge Functions.",
    layers: [
      {
        name: "01. React Native (Expo) Mobile Client",
        tech: "React Native • Expo Router • Custom Hooks",
        description:
          "Cross-platform mobile UI with reusable components and usePushNotifications hook integration.",
      },
      {
        name: "02. Realtime & Serverless Edge Layer",
        tech: "Supabase Realtime WebSockets • Deno Edge Functions",
        description:
          "Streams live chat/session events and executes serverless notification workflows.",
      },
      {
        name: "03. Managed PostgreSQL & Security Layer",
        tech: "PostgreSQL Triggers • Row-Level Security (RLS)",
        description:
          "Automates event triggers on data mutations while enforcing strict row-level authorization.",
      },
    ],
  },
  evaluation: {
    summary:
      "Designed with strong Human-Computer Interaction (HCI) principles and serverless mobile backend best practices.",
    metrics: [
      {
        label: "Mobile Stack",
        value: "Expo Router",
        delta: "Cross-Platform",
        description: "File-based navigation and reusable mobile UI abstractions.",
      },
      {
        label: "Backend Logic",
        value: "Edge + Triggers",
        delta: "Decoupled",
        description: "PostgreSQL triggers and Deno Edge Functions handle automation.",
      },
      {
        label: "Data Security",
        value: "Postgres RLS",
        delta: "Row-Level",
        description: "Database-level access control on all user tables.",
      },
    ],
  },
  learnings: [
    "Offloading notification triggers to PostgreSQL + Deno Edge Functions keeps the React Native client fast and lightweight.",
    "Reusable UI abstractions and custom hooks like usePushNotifications make mobile feature development consistent across screens.",
  ],
};
