import { ProjectCaseStudy } from "../types";

export const volunteerAcademicSupport: ProjectCaseStudy = {
  slug: "volunteer-academic-support",
  title: "Volunteer-Based Academic Support & Smart Matching Platform",
  category: "Full-Stack & Real-Time",
  status: "MERN + Socket.io",
  featured: true,
  order: 3,
  problem:
    "Students struggle to find timely, subject-specific peer or volunteer tutoring, while educational communities lack real-time session coordination and transparent tutor reputation tracking.",
  solution:
    "Built a collaborative educational MERN platform enabling smart subject-based matching, scheduled academic support sessions, interactive real-time assistance over WebSockets (Socket.io), and transparent community reputation scoring.",
  techStack: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Socket.io",
    "JWT Auth",
  ],
  metric: {
    value: "Real-Time",
    label: "Smart Tutor Matching & Socket.io Live Assistance",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXUJrYb_Snhdy5pDLNAHlRHrfgnkzv8iJ2qpMx0PHDtA0Hb3jZOR95blxiVtgnUN3153T7pUxkegdeyJFIiYEcZoC_Vfp8RVaAXVg6KxJ7CYxFFygKq6aFeWGaE15ZweX1ew_IZEQwlcvZuQ5ejyLiQgxgiUNSozcuCkIEJrJN8OQCmNd5wqN7BATjU8FMR5wMSCPkVHjxCpd2Zw35ZWR1zrb-T66XtmIn0gcujsCb",
  previewAlt:
    "Collaborative educational platform interface showing smart tutor matching, real-time Socket.io chat, and community reputation scoring",
  previewMetaLeft: "Socket.io WebSockets",
  previewMetaRight: "Smart Subject Matching",
  links: {
    github: "https://github.com/Mayuriga333/ITPM-PROJECT.git",
    live: "/projects/volunteer-academic-support",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A collaborative educational platform that bridges the gap between students and volunteer tutors by enabling smart subject-based matching, scheduled academic support sessions (StudentDashboard.jsx, RequestForm.jsx), interactive real-time assistance, and transparent community reputation scoring (Volunteer.js).",
    role: "Full-Stack Developer",
    duration: "ITPM University Project",
    status: "Completed",
    highlights: [
      "Decoupled client-server MERN architecture applying modular MVC design patterns on the backend (requestController.js, Volunteer.js).",
      "Reusable component-driven UI development with React and Tailwind CSS on the frontend.",
      "JWT-based authentication middleware and event-driven WebSockets (Socket.io) unifying authentication/chatbot, study support, and ratings/reviews.",
    ],
  },
  objectives: [
    {
      title: "Smart Subject-Based Matching",
      description:
        "Automatically connect student help requests with qualified volunteer tutors based on subject expertise and availability.",
      icon: "hub",
    },
    {
      title: "Real-Time Interactive Study Support",
      description:
        "Enable low-latency live messaging, chatbot assistance, and session updates via Socket.io WebSockets.",
      icon: "forum",
    },
    {
      title: "Transparent Reputation Scoring",
      description:
        "Build community trust through verified post-session ratings, reviews, and volunteer contribution metrics.",
      icon: "military_tech",
    },
  ],
  features: [
    {
      title: "Student Dashboard & Help Request Engine",
      description:
        "Intuitive StudentDashboard.jsx and RequestForm.jsx workflows for posting academic questions and scheduling support sessions.",
      tag: "Study Support",
    },
    {
      title: "Smart Volunteer Matching & Reputation",
      description:
        "Matches requests against volunteer profiles (Volunteer.js) and updates community reputation scores from student reviews.",
      tag: "Smart Matching",
    },
    {
      title: "Event-Driven Socket.io Communication",
      description:
        "Real-time WebSocket channels supporting live tutoring chat, notifications, and interactive chatbot guidance.",
      tag: "Real-Time",
    },
    {
      title: "JWT Authentication & Modular MVC Backend",
      description:
        "Clean controller-model separation securing student and tutor endpoints with stateless JWT middleware.",
      tag: "Security & MVC",
    },
  ],
  architecture: {
    summary:
      "Built on a decoupled client-server MERN architecture combining RESTful MVC controllers with event-driven Socket.io WebSocket channels.",
    layers: [
      {
        name: "01. React + Tailwind CSS Frontend",
        tech: "React.js • Tailwind CSS • Socket.io Client",
        description:
          "Component-driven views including StudentDashboard.jsx, RequestForm.jsx, live chat panels, and tutor rating interfaces.",
      },
      {
        name: "02. Modular MVC Backend & WebSocket Server",
        tech: "Node.js • Express.js • Socket.io • JWT Middleware",
        description:
          "Unifies authentication/chatbot, study support (requestController.js), and ratings/reviews domains.",
      },
      {
        name: "03. MongoDB Persistence Layer",
        tech: "MongoDB • Mongoose (Volunteer.js)",
        description:
          "Stores student requests, tutor expertise tags, session schedules, chat histories, and community reputation scores.",
      },
    ],
  },
  evaluation: {
    summary:
      "Unified multi-domain academic support into a cohesive real-time web application.",
    metrics: [
      {
        label: "Architecture",
        value: "Decoupled MVC",
        delta: "MERN Stack",
        description: "Clean separation between frontend SPA and backend API/WebSockets.",
      },
      {
        label: "Communication",
        value: "Socket.io",
        delta: "Event-Driven",
        description: "Real-time bidirectional messaging and session updates.",
      },
      {
        label: "Trust Engine",
        value: "Reputation",
        delta: "Ratings & Reviews",
        description: "Transparent community scoring for volunteer tutors.",
      },
    ],
  },
  learnings: [
    "Combining RESTful MVC endpoints for state persistence with Socket.io for live events creates a responsive collaborative UX.",
    "Modular component design in React + Tailwind CSS accelerates multi-developer feature integration.",
  ],
};
