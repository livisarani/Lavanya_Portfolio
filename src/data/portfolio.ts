import {
  CoreValue,
  SkillCategory,
  TelemetryMetric,
  TimelineItem,
} from "@/utils/interface";

export const portfolioData = {
  identity: {
    name: "Lavanya Kothalawala",
    shortName: "Lavanya",
    roleSubtitle: "Full-Stack & Software Engineering",
    phone: "0766247606",
    email: "jayasikothalawala@gmail.com",
    location: "Panadura / Colombo, Sri Lanka",
    timezone: "IST / UTC+5:30",
    availabilityStatus:
      "IT Undergraduate at SLIIT • Seeking Software Engineering Intern Roles",
    resumeUrl: "/Lavanya_Kothalawala_CV.pdf",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPt-Kc_MEJs97buNaa26UMCSvWIyogBjzz2Wv9sFYmkfHI6uZWPqKDN_cIIOXqr8ZgqPv-IOicvoILl0e6x19pYArtTw2Yhkq7X2CVQKy61oKsMEuV1ZajxgLlXO34_LL_rNVMVKCV_SVtbXlad3Uuf17inL69lLBOJRR-lDGb1bRpm4bZrRQFbQ0Kw5W_qF7t1dsrt6ydDxYFeqQVDatoYBLXZ6c6M1UjMuWtIr44",
    logoUrl:
      "https://lh3.googleusercontent.com/aida/ALJJyrARZVsM44WT3R1cMy-Zry4avhxFYLyKWqZbZeB69HQaaSrF-wQu5ilDluA-PEEQXGHKjzEcEzqqhfJMQDcYkLxdsGjnb9X6RqhACx3dubayVe4EJ1GsWC6vDNE_A5VR8k5krpMmDbEGBKxgZI-NpzZJcQdImBKWZC_-z5BFt_XTkQNsiaJd4O40u5KuuDEl4y4sCs6B46zKMlwAjX_RE2fkDmiBE0cN-LjPYhhWIunEeg",
    socials: {
      github: "https://github.com/livisarani",
      githubHandle: "livisarani (KOTHALAWALA J.L.L)",
      linkedin: "https://www.linkedin.com/in/lavanya-kothalawala-3b170333a/",
      email: "mailto:jayasikothalawala@gmail.com",
    },
  },

  hero: {
    eyebrow: "Full-Stack Architecture & Software Engineering",
    headline:
      "Building Reliable & Scalable Software Solutions Across Web, Mobile & Cloud.",
    description:
      "Motivated Information Technology undergraduate at SLIIT with a strong foundation in software development, web technologies, and database management—experienced in building full-stack applications using Java, Spring Boot, React.js, Node.js, React Native, MySQL, and MongoDB.",
    telemetry: {
      daemonName: "telemetry.daemon.v4",
      substrateTitle: "Full-Stack System Substrate",
      baseLatencyMs: 14.2,
      activeStack: ["Spring Boot 3", "React / Next.js", "Node.js"],
      metrics: [
        {
          id: "metric-accuracy",
          label: "Architecture",
          badge: "CI/CD Verified",
          target: 100,
          startValue: 70,
          decimals: 0,
          unit: "%",
          sublabel: "Modular MVC",
        },
        {
          id: "metric-throughput",
          label: "Full-Stack",
          badge: "▲ Web & Mobile",
          target: 4,
          startValue: 1,
          decimals: 0,
          unit: "+",
          sublabel: "Core Platforms",
        },
        {
          id: "metric-efficiency",
          label: "Tech Stack",
          badge: "⚡ Polyglot",
          target: 6,
          startValue: 1,
          decimals: 0,
          unit: "+",
          sublabel: "Languages",
        },
      ] as TelemetryMetric[],
    },
  },

  about: {
    sectionLabel: "01 / Engineering Profile",
    headline:
      "From clean layered backends to responsive web and cross-platform mobile systems.",
    paragraphs: [
      "I am a motivated Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT) with a strong foundation in software development, web technologies, and relational/NoSQL database management.",
      "Experienced in developing full-stack applications using Java, JavaScript, React.js, Node.js, Spring Boot, React Native (Expo), MySQL, PostgreSQL, and MongoDB through academic and collaborative projects. I am eager to apply my technical knowledge in REST API development, software design, version control, and application testing as a Software Engineering Intern.",
    ],
    values: [
      {
        icon: "layers",
        title: "Clean Layered Design",
        description:
          "Strict Controller → Service → Repository → Entity separation, DTO decoupling, and modular MVC design patterns.",
      },
      {
        icon: "security",
        title: "Secure & Tested APIs",
        description:
          "Stateless JWT & OAuth2 Role-Based Access Control, PostgreSQL Row-Level Security (RLS), and automated GitHub Actions CI/CD.",
      },
      {
        icon: "devices",
        title: "Responsive Web & Mobile",
        description:
          "Component-driven frontends with React.js, Next.js, Tailwind CSS, and cross-platform mobile apps with React Native (Expo).",
      },
      {
        icon: "groups",
        title: "Collaborative Execution",
        description:
          "Strong problem-solving, analytical thinking, teamwork, and agile communication across multi-developer projects.",
      },
    ] as CoreValue[],
    profileCard: {
      portraitUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAh20Om0XkW5_h9cCziPomFPn_1_rbEofP1nxdZYSU4qe0jUBxA4u6K2GLemyswHID8dcM4gp27vFmIQ_jrID0vcqLdCFKTOaT3-9p3Zk8cVe3G-SdbeeuyikAkjwYMHUET77xbeGyicffwTTvIc2SsBlvMdI7f83v7I6TPlm3o1RX_iTlIVkMSSwfnBMZpc4t_cluu6LXCTA1GaBmHM6PZXcFsGspzNCbyu9NtFvmA",
      roleTag: "IT Undergraduate • Full-Stack Developer",
      quickFacts: [
        {
          label: "University",
          value: "SLIIT (BSc Hons in IT)",
        },
        {
          label: "Core Stack",
          value: "Spring Boot, MERN & React Native",
        },
        {
          label: "Mobile / Contact",
          value: "0766247606",
        },
        {
          label: "GitHub",
          value: "github.com/livisarani",
          highlight: true,
        },
      ],
    },
    codeSnippet: {
      filename: "SecurityConfig.java",
      language: "Spring Boot 3 • Java 17",
      code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http.csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
        .build();
}`,
    },
  },

  skills: {
    sectionLabel: "02 / Technical Taxonomy",
    headline: "Core Skills & Infrastructure",
    description:
      "Full-stack software engineering capabilities across object-oriented backends, modern frontend frameworks, relational/document databases, and cross-platform mobile development.",
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        subtitle: "Polyglot Foundations & OOP",
        icon: "code",
        skills: [
          { name: "Java (Java 17)", highlighted: true },
          { name: "JavaScript (ES6+)", highlighted: true },
          { name: "Python" },
          { name: "PHP" },
          { name: "C++" },
          { name: "Kotlin" },
        ],
      },
      {
        id: "backend",
        title: "Backend Development",
        subtitle: "REST APIs & Microservices",
        icon: "lan",
        skills: [
          { name: "Spring Boot 3", highlighted: true },
          { name: "Node.js", highlighted: true },
          { name: "Express.js" },
          { name: "REST APIs" },
          { name: "Spring Security (JWT & OAuth2)" },
          { name: "Socket.io (WebSockets)" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend Development",
        subtitle: "Component-Driven Web UI",
        icon: "palette",
        skills: [
          { name: "React.js (Vite)", highlighted: true },
          { name: "Next.js", highlighted: true },
          { name: "Tailwind CSS" },
          { name: "HTML5 & CSS3" },
          { name: "Bootstrap" },
          { name: "FullCalendar & jsPDF" },
        ],
      },
      {
        id: "databases",
        title: "Database & Cloud Backend",
        subtitle: "Relational, NoSQL & Serverless",
        icon: "dataset",
        skills: [
          { name: "MySQL", highlighted: true },
          { name: "MongoDB (Mongoose)", highlighted: true },
          { name: "PostgreSQL (RLS & Triggers)" },
          { name: "Supabase & Realtime" },
          { name: "Deno Edge Functions" },
        ],
      },
      {
        id: "mobile",
        title: "Mobile Development",
        subtitle: "Cross-Platform & Native Android",
        icon: "smartphone",
        skills: [
          { name: "React Native (Expo)", highlighted: true },
          { name: "Expo Router" },
          { name: "Kotlin" },
          { name: "Java (Android)" },
          { name: "Android Studio" },
          { name: "Push Notifications" },
        ],
      },
      {
        id: "tools-practices",
        title: "Tools, Platforms & Practices",
        subtitle: "Delivery, Testing & Design",
        icon: "terminal",
        skills: [
          { name: "Git & GitHub" },
          { name: "GitHub Actions (CI/CD)", highlighted: true },
          { name: "OOP & MVC Architecture", highlighted: true },
          { name: "Postman & API Testing" },
          { name: "IntelliJ IDEA" },
          { name: "Figma, Trello & Draw.io" },
        ],
      },
    ] as SkillCategory[],
  },

  experience: {
    sectionLabel: "04 / Chronology",
    headline: "Education, Projects & Certifications",
    items: [
      {
        id: "edu-sliit",
        period: "2023 — Present",
        location: "Malabe, Sri Lanka",
        type: "Undergraduate Degree",
        role: "BSc. (Hons) in Information Technology",
        organization: "Sri Lanka Institute of Information Technology (SLIIT)",
        badge: "Specialization in IT",
        summary:
          "Undergraduate degree specializing in Information Technology with hands-on academic and group projects in full-stack web, enterprise Java (Spring Boot), MERN stack, and cross-platform mobile development.",
        highlights: [
          "Smart Campus Operations Hub: Architected a 4-layer Spring Boot 3 (Java 17), MySQL, and React platform with JWT/OAuth2 RBAC and GitHub Actions CI/CD.",
          "Clinical Workflow Management System: Engineered a 4-domain MERN platform with FullCalendar scheduling, pharmacy inventory, and jsPDF report generation.",
          "Volunteer Academic Support & TutorMate Mobile App: Built real-time Socket.io MERN and React Native (Expo) + Supabase platforms.",
        ],
      },
      {
        id: "cert-english",
        period: "10 Weeks",
        location: "Sri Lanka",
        type: "Certification",
        role: "Intermediate English Course",
        organization: "Kekirawa English Academy",
        badge: "Certified",
        summary:
          "Completed intensive 10-week professional and academic English communication certification.",
      },
      {
        id: "edu-school",
        period: "2009 — 2022",
        location: "Panadura, Sri Lanka",
        type: "Secondary Education",
        role: "Primary & Secondary Education",
        organization: "Sri Sumangala Balika Maha Vidyalaya - Panadura",
        badge: "Foundation",
        summary:
          "Completed primary and secondary academic education with active participation in technology and collaborative activities.",
      },
    ] as TimelineItem[],
  },

  contact: {
    sectionLabel: "05 / Initiate Channel",
    headline: "Let's Connect",
    description:
      "Open to Software Engineering, Full-Stack, and AI/ML internships and early-career roles.",
    responseLatency: "< 24 Hours",
  },
};
