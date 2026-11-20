import { ProjectCaseStudy } from "../types";

export const clinicWorkflowManagement: ProjectCaseStudy = {
  slug: "clinic-workflow-management",
  title: "Clinical Workflow Management System (MERN)",
  category: "Full-Stack Systems",
  status: "MERN Healthcare Platform",
  featured: true,
  order: 2,
  problem:
    "Siloed outpatient clinic operations, fragmented patient scheduling, paper prescriptions, and manual pharmacy/lab inventory tracking.",
  solution:
    "Built a full-stack MERN (MongoDB, Express.js, React, Node.js) healthcare management platform uniting patient appointment scheduling, electronic prescriptions, medical records, and pharmacy/lab inventory management (medicines, chemicals, equipment, and dispensing).",
  techStack: [
    "MongoDB",
    "Express.js",
    "React (Vite)",
    "Node.js",
    "Mongoose",
    "FullCalendar",
    "jsPDF",
  ],
  metric: {
    value: "4-Domain",
    label: "Modular Healthcare Architecture (MERN + jsPDF)",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBuLTeGuVtuMxLqCofdvJMyt7Gz_sZetVo5qzzMW3xeTrV1oGHJiyv3IzGvMnLblqllyTqZOMnttV9d-2l52ZX52sGfOZ72zfV44oSRPNdgDeHBEchs3iet_se7NiuP8RnyJkrHsY3s-uRqQw2m_cMkFEvVi5hvmenPp0YLdHIdKWQnFtP6nqzDpkc1HufPbpPPe6kpD0gzqdKk4SV8exCnqJBnKdUNtOJJMYggPWQR",
  previewAlt:
    "Clinical Workflow Management System visualizing patient appointment scheduling, prescriptions, and pharmacy inventory in oceanic blue tones",
  previewMetaLeft: "FullCalendar Integration",
  previewMetaRight: "Automated jsPDF Reports",
  links: {
    github:
      "https://github.com/AnusaraSen/Clinic-Appointment-and-Prescription-Management-System.git",
    live: "/projects/clinic-workflow-management",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A full-stack MERN healthcare management platform that streamlines clinic operations by uniting patient appointment scheduling, electronic prescriptions, medical records, and pharmacy/lab inventory management (medicines, chemicals, equipment, and dispensing) into a cohesive web application.",
    role: "Full-Stack MERN Developer",
    duration: "University Group Project",
    status: "Production Ready",
    highlights: [
      "Modular, domain-driven backend architecture across clinical-workflow, pharmacy-inventory, patient-interaction, and workforce-facility.",
      "RESTful APIs with Mongoose schema modeling and custom validation/authentication middleware.",
      "Component-based React (Vite) frontend featuring client-side routing, FullCalendar integration, and automated PDF report generation (jsPDF).",
    ],
  },
  objectives: [
    {
      title: "Unified Clinical & Pharmacy Operations",
      description:
        "Connect appointment scheduling, doctor consultations, electronic prescriptions, and pharmacy dispensing in one flow.",
      icon: "clinical_notes",
    },
    {
      title: "Granular Pharmacy & Lab Inventory",
      description:
        "Track medicines, laboratory chemicals, medical equipment, stock thresholds, and dispensing logs.",
      icon: "medication",
    },
    {
      title: "Interactive Calendar & PDF Reporting",
      description:
        "Provide visual appointment management with FullCalendar and instant clinical/inventory PDF exports via jsPDF.",
      icon: "calendar_month",
    },
  ],
  features: [
    {
      title: "Clinical Workflow & Electronic Prescriptions",
      description:
        "Manages consultation records, longitudinal medical histories, and digital prescription issuance.",
      tag: "Clinical Workflow",
    },
    {
      title: "Pharmacy & Lab Inventory Management",
      description:
        "Tracks medicines, lab chemicals, and equipment stock levels alongside automated prescription dispensing.",
      tag: "Pharmacy Inventory",
    },
    {
      title: "FullCalendar Appointment Scheduling",
      description:
        "Interactive calendar scheduling for patient interactions and doctor availability slots.",
      tag: "Patient Interaction",
    },
    {
      title: "Workforce, Facility & jsPDF Reporting",
      description:
        "Manages clinic staff/facilities and generates downloadable PDF prescriptions and operational reports on the client.",
      tag: "Reporting",
    },
  ],
  architecture: {
    summary:
      "Engineered as a modular, domain-driven MERN architecture separating four core healthcare domains behind RESTful APIs and a Vite + React SPA.",
    layers: [
      {
        name: "01. React (Vite) Component Frontend",
        tech: "React.js • Vite • FullCalendar • jsPDF",
        description:
          "Client-side routed workspace providing interactive calendar views, inventory tables, and instant PDF report generation.",
      },
      {
        name: "02. Domain-Driven Express.js REST API",
        tech: "Node.js • Express.js • Custom Middleware",
        description:
          "Structured into 4 domain modules: clinical-workflow, pharmacy-inventory, patient-interaction, and workforce-facility.",
      },
      {
        name: "03. Mongoose Schema & Document Store",
        tech: "MongoDB • Mongoose Models",
        description:
          "Enforces schema validation for patients, appointments, prescriptions, medicines, chemicals, and equipment.",
      },
    ],
  },
  evaluation: {
    summary:
      "Validated across end-to-end clinical, appointment, and pharmacy inventory workflows.",
    metrics: [
      {
        label: "Core Domains",
        value: "4 Modules",
        delta: "Domain-Driven",
        description:
          "Clinical workflow, pharmacy inventory, patient interaction, and workforce facility.",
      },
      {
        label: "Report Export",
        value: "jsPDF",
        delta: "Instant PDF",
        description: "Automated client-side PDF generation for prescriptions and reports.",
      },
      {
        label: "Scheduling UI",
        value: "FullCalendar",
        delta: "Interactive",
        description: "Visual appointment and roster management.",
      },
    ],
  },
  learnings: [
    "Structuring the backend around clear domain boundaries prevents route and controller sprawl in large MERN applications.",
    "Integrating FullCalendar and jsPDF directly in the React (Vite) frontend delivers a smooth, responsive practitioner experience.",
  ],
};
