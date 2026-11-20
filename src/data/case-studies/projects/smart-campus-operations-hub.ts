import { ProjectCaseStudy } from "../types";

export const smartCampusOperationsHub: ProjectCaseStudy = {
  slug: "smart-campus-operations-hub",
  title: "Smart Campus Operations Hub",
  category: "Full-Stack Systems",
  status: "Spring Boot 3 & React",
  featured: true,
  order: 1,
  problem:
    "Fragmented campus resource booking, manual maintenance ticketing, and disconnected role permissions across university facilities.",
  solution:
    "Built a full-stack campus operations platform with a Spring Boot 3 (Java 17) & MySQL backend and React frontend, centralizing Resource & Booking management, Maintenance Ticketing workflows, Role-Based Access Control (JWT & OAuth2), notifications, and PDF reporting.",
  techStack: [
    "Java 17",
    "Spring Boot 3",
    "React.js",
    "MySQL",
    "Spring Security (JWT & OAuth2)",
    "GitHub Actions CI/CD",
  ],
  metric: {
    value: "4-Tier",
    label: "Layered Modular Architecture + Automated CI/CD",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAciF6IUrT65VNXaByHd2G7ZpmaxRL8KBTG5fdxxO4ahUIr2ZfUpKbuHH35r_7HdPe5F0Z1vUsOj3V23FRzGYJ6bHTPi57D2s8px0CsIN-_ZarcQq3Lyybkb-GAVblLB1TdpHFD3cbHPZi96C_eVjx0C9g1rmUQ5oki88TNSAhDdpSOMEKQLhkzOMs1_MxH0hihZEJtSZXi_VqIsMc512TCXD_ovnS35VxL3VOIXkwf",
  previewAlt:
    "Smart Campus Operations Hub dashboard showing resource bookings, maintenance ticketing workflows, and RBAC controls",
  previewMetaLeft: "Spring Boot 3 • Java 17",
  previewMetaRight: "JWT & OAuth2 RBAC",
  links: {
    github:
      "https://github.com/livisarani/it3030-paf-2026-smart-campus-group_WE_163_3.2",
    live: "/projects/smart-campus-operations-hub",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A full-stack campus operations platform built with a Spring Boot 3 (Java 17) & MySQL backend and a React frontend, centralizing campus Resource & Booking management, Maintenance Ticketing workflows (technician assignment, status history, comments), Role-Based Access Control (JWT & OAuth2), notifications, and PDF reporting.",
    role: "Full-Stack Software Engineer",
    duration: "Academic Semester Project",
    status: "Completed & CI/CD Verified",
    highlights: [
      "Clean layered, modular architecture (Controller → Service → Repository → Entity) with strict DTO decoupling.",
      "Centralized exception handling via GlobalExceptionHandler and stateless Spring Security JWT filters.",
      "Automated CI/CD pipelines via GitHub Actions (ci.yml) with unit and integration testing.",
    ],
  },
  objectives: [
    {
      title: "Centralized Resource & Booking Management",
      description:
        "Unify lecture halls, labs, and campus equipment scheduling with conflict detection and approval workflows.",
      icon: "event_available",
    },
    {
      title: "End-to-End Maintenance Ticketing",
      description:
        "Track facility issues with technician assignment, status history auditing, comments, and PDF summary reports.",
      icon: "build_circle",
    },
    {
      title: "Enterprise-Grade Security & CI/CD",
      description:
        "Enforce stateless JWT & OAuth2 Role-Based Access Control backed by automated GitHub Actions build and test pipelines.",
      icon: "verified_user",
    },
  ],
  features: [
    {
      title: "Resource & Facility Booking Engine",
      description:
        "Enables students and staff to reserve campus facilities with real-time availability validation and notifications.",
      tag: "Bookings",
    },
    {
      title: "Maintenance Ticketing Workflow",
      description:
        "Full lifecycle ticketing with technician assignment, granular status history tracking, and collaborative comments.",
      tag: "Operations",
    },
    {
      title: "Stateless JWT & OAuth2 Security",
      description:
        "Spring Security filter chain protecting endpoints by role (Admin, Technician, Staff, Student).",
      tag: "Security",
    },
    {
      title: "Automated PDF Reporting & Notifications",
      description:
        "Generates downloadable operational PDF reports and dispatches real-time status notifications.",
      tag: "Reporting",
    },
  ],
  architecture: {
    summary:
      "Engineered on a clean layered architecture (Controller → Service → Repository → Entity) with strict DTO decoupling and automated GitHub Actions CI/CD.",
    layers: [
      {
        name: "01. React Client Application",
        tech: "React.js • REST Client • Role Dashboards",
        description:
          "Interactive UI for resource reservations, ticket tracking, technician queues, and PDF report exports.",
      },
      {
        name: "02. Security & Controller Layer",
        tech: "Spring Security • JWT Filter • OAuth2 • GlobalExceptionHandler",
        description:
          "Stateless authentication filters, request validation, strict DTO mapping, and standardized error responses.",
      },
      {
        name: "03. Domain Service & Repository Layer",
        tech: "Spring Boot 3 (Java 17) • Spring Data JPA",
        description:
          "Encapsulates booking rules, ticket state transitions, notification dispatch, and transactional persistence.",
      },
      {
        name: "04. Relational Store & CI/CD Pipeline",
        tech: "MySQL • GitHub Actions (ci.yml) • JUnit",
        description:
          "Normalized relational schema verified continuously by automated unit and integration test suites.",
      },
    ],
  },
  keyDecisions: [
    {
      decision: "Strict DTO Decoupling & GlobalExceptionHandler",
      rationale:
        "Exposing JPA entities directly to controllers causes serialization loops and tight coupling between API contracts and database tables.",
      tradeOff:
        "Requires dedicated DTO mappers, but ensures clean API contracts and centralized error formatting.",
    },
    {
      decision: "Automated GitHub Actions CI Pipeline (ci.yml)",
      rationale:
        "Multi-developer collaboration required automated verification on every push and pull request.",
      tradeOff:
        "Caught regressions early through automated unit and integration test execution.",
    },
  ],
  evaluation: {
    summary:
      "Verified through automated JUnit unit/integration test suites and GitHub Actions CI workflows.",
    metrics: [
      {
        label: "Architecture Pattern",
        value: "4-Layer",
        delta: "DTO Decoupled",
        description: "Controller → Service → Repository → Entity separation.",
      },
      {
        label: "Authentication",
        value: "JWT + OAuth2",
        delta: "Stateless RBAC",
        description: "Role-based access control across all campus endpoints.",
      },
      {
        label: "CI/CD Automation",
        value: "100%",
        delta: "GitHub Actions",
        description: "Automated build, unit, and integration testing via ci.yml.",
      },
    ],
  },
  learnings: [
    "Layered Spring Boot architecture with centralized exception handling makes debugging and team collaboration significantly cleaner.",
    "Integrating GitHub Actions CI/CD early ensures every feature branch meets build and test standards.",
  ],
};
