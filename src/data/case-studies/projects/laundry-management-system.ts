import { ProjectCaseStudy } from "../types";

export const laundryManagementSystem: ProjectCaseStudy = {
  slug: "laundry-management-system",
  title: "Smart Laundry Management System",
  category: "Full-Stack Systems",
  status: "Operational Platform",
  featured: true,
  order: 4,
  problem:
    "Manual order tracking, misplaced garments, delayed pickup notifications, and opaque revenue reconciliation in high-volume laundry operations.",
  solution:
    "Architected an end-to-end digital order lifecycle and inventory platform with barcode/tag tracking, automated pricing tariffs, customer status portals, and analytics dashboards.",
  techStack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB / SQL",
    "Tailwind CSS",
    "REST API",
  ],
  metric: {
    value: "3.5x",
    label: "Faster Order Processing & Dispatch Turnaround",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAciF6IUrT65VNXaByHd2G7ZpmaxRL8KBTG5fdxxO4ahUIr2ZfUpKbuHH35r_7HdPe5F0Z1vUsOj3V23FRzGYJ6bHTPi57D2s8px0CsIN-_ZarcQq3Lyybkb-GAVblLB1TdpHFD3cbHPZi96C_eVjx0C9g1rmUQ5oki88TNSAhDdpSOMEKQLhkzOMs1_MxH0hihZEJtSZXi_VqIsMc512TCXD_ovnS35VxL3VOIXkwf",
  previewAlt:
    "Clean operational dashboard displaying real-time order pipelines, garment batch tracking, and revenue telemetry in oceanic navy and cyan",
  previewMetaLeft: "Zero Lost Garments",
  previewMetaRight: "Automated Invoice Engine",
  links: {
    github: "https://github.com/lavanya-kothalawala",
    live: "#projects",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A full-stack operational management system that digitizes every stage of commercial laundry workflows—from customer drop-off and garment tagging to machine batch assignment, quality check, billing, and delivery.",
    role: "Full-Stack Developer",
    duration: "12 Weeks",
    status: "Production Ready",
    highlights: [
      "End-to-end order state pipeline: Received → Washing → Drying → Ironing → Ready → Delivered.",
      "Dynamic tariff engine supporting per-weight, per-garment, and express surcharge rules.",
      "Role-based views for Customers, Counter Staff, Floor Operators, and Management.",
    ],
  },
  objectives: [
    {
      title: "100% Garment Traceability",
      description:
        "Tag and track every item from drop-off intake to final customer pickup with zero mix-ups.",
      icon: "qr_code_2",
    },
    {
      title: "Automated Pricing & Invoicing",
      description:
        "Eliminate manual calculation errors with configurable service categories and instant digital receipts.",
      icon: "receipt_long",
    },
    {
      title: "Live Customer Status Transparency",
      description:
        "Enable customers to check order progress and receive instant ready-for-pickup notifications.",
      icon: "notifications_active",
    },
  ],
  features: [
    {
      title: "Multi-Stage Order Kanban & Tracker",
      description:
        "Operators update garment batch stages with one click, immediately reflecting on customer portals.",
      tag: "Operations",
    },
    {
      title: "Configurable Tariff & Billing Engine",
      description:
        "Supports wash-and-fold, dry cleaning, express turnaround multipliers, and discount vouchers.",
      tag: "Billing",
    },
    {
      title: "Customer Self-Service Portal",
      description:
        "Allows customers to schedule pickups, view active order status, and download past invoices.",
      tag: "Customer UX",
    },
    {
      title: "Revenue & Throughput Analytics",
      description:
        "Management dashboard charting daily order volume, turnaround SLAs, and service category revenue.",
      tag: "Analytics",
    },
  ],
  architecture: {
    summary:
      "Designed as a clean decoupled full-stack application with a responsive React client, modular RESTful backend controllers, and persistent database models.",
    layers: [
      {
        name: "01. Responsive Multi-Role Frontend",
        tech: "React • Tailwind CSS • State Hooks",
        description:
          "Provides fast POS-style intake forms for counter staff and mobile-friendly tracking views for customers.",
      },
      {
        name: "02. REST API & Business Logic Layer",
        tech: "Node.js • Express • JWT Auth",
        description:
          "Enforces order lifecycle rules, calculates invoice totals, and manages role authentication.",
      },
      {
        name: "03. Persistence & Reporting Store",
        tech: "Relational / Document Database",
        description:
          "Stores customer profiles, itemized order lines, tariff tables, and payment status logs.",
      },
    ],
  },
  keyDecisions: [
    {
      decision: "Itemized Order-Line Data Model",
      rationale:
        "Storing orders only as aggregate weights prevented tracking individual delicate or dry-clean items.",
      tradeOff:
        "Slightly more detailed intake form, optimized via quick-select garment presets for counter speed.",
    },
  ],
  challenges: [
    {
      challenge: "Counter Intake Bottlenecks During Peak Hours",
      resolution:
        "Built a single-screen POS quick-add interface with keyboard shortcuts and instant customer phone lookup.",
      impact: "Cut average order creation time at the counter to under 30 seconds.",
    },
  ],
  evaluation: {
    summary:
      "Tested across simulated peak daily order volumes and multi-role operator workflows.",
    metrics: [
      {
        label: "Order Intake Speed",
        value: "3.5x",
        delta: "<30s per order",
        description: "Faster checkout and garment logging vs manual ledger entry.",
      },
      {
        label: "Billing Accuracy",
        value: "100%",
        delta: "Automated tariffs",
        description: "Eliminated manual pricing discrepancies and lost invoices.",
      },
      {
        label: "SLA Visibility",
        value: "Real-Time",
        delta: "6 lifecycle stages",
        description: "Instant status tracking for both staff and customers.",
      },
    ],
  },
  learnings: [
    "Operational software succeeds when the high-frequency intake screen is optimized for speed and minimal typing.",
    "Clear status transparency significantly reduces inbound customer support calls.",
  ],
  futureWork: [
    "Add QR barcode label printing and mobile scanner integration.",
    "Integrate automated route optimization for pickup and delivery drivers.",
  ],
};
