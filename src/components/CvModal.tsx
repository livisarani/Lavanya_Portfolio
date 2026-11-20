"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export const CV_MODAL_EVENT = "open-lavanya-cv-modal";

export function triggerCvViewAndDownload() {
  if (typeof window === "undefined") return;

  // 1. Dispatch event to show the CV Preview Modal immediately
  window.dispatchEvent(new CustomEvent(CV_MODAL_EVENT));

  // 2. Programmatically trigger download of Lavanya_Kothalawala_CV.pdf
  const link = document.createElement("a");
  link.href = portfolioData.identity.resumeUrl;
  link.setAttribute("download", "Lavanya_Kothalawala_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function CvModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"pdf" | "formatted">("pdf");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener(CV_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(CV_MODAL_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const { identity } = portfolioData;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/60 backdrop-blur-sm p-3 md:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-5xl h-[90vh] rounded-2xl bg-surface-container-lowest shadow-2xl border border-surface-container flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Toolbar */}
        <div className="px-space-lg py-space-md bg-primary text-on-primary flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary-fixed">
              description
            </span>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold leading-tight">
                Lavanya Kothalawala — Curriculum Vitae
              </h3>
              <span className="font-label-sm text-label-sm text-on-primary-container">
                Download started automatically • Lavanya_Kothalawala_CV.pdf
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs">
            {/* Toggle between PDF Embed & Formatted View */}
            <div className="hidden sm:flex items-center rounded-lg bg-primary-container p-0.5 mr-2">
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`px-2.5 py-1 rounded-md font-label-sm text-label-sm transition-colors ${
                  viewMode === "pdf"
                    ? "bg-secondary-fixed text-on-secondary-fixed font-bold"
                    : "text-on-primary-container hover:text-white"
                }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode("formatted")}
                className={`px-2.5 py-1 rounded-md font-label-sm text-label-sm transition-colors ${
                  viewMode === "formatted"
                    ? "bg-secondary-fixed text-on-secondary-fixed font-bold"
                    : "text-on-primary-container hover:text-white"
                }`}
              >
                Interactive Text
              </button>
            </div>

            <a
              href={identity.resumeUrl}
              download="Lavanya_Kothalawala_CV.pdf"
              className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors font-label-md text-label-md font-bold"
            >
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              <span>Download PDF</span>
            </a>

            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-tertiary-container transition-colors font-label-md text-label-md"
              title="Open PDF in New Tab"
            >
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
              <span className="hidden md:inline">New Tab</span>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close CV Preview"
              className="p-1.5 rounded-lg text-on-primary-container hover:text-white hover:bg-primary-container transition-colors ml-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-surface-container-low overflow-y-auto">
          {viewMode === "pdf" ? (
            <iframe
              src={`${identity.resumeUrl}#view=FitH`}
              title="Lavanya Kothalawala CV PDF"
              className="w-full h-full border-0"
            />
          ) : (
            <div className="max-w-3xl mx-auto my-space-lg p-space-xl rounded-xl bg-white shadow-md text-on-surface space-y-space-lg">
              {/* Header */}
              <div className="text-center border-b border-surface-container pb-space-md">
                <h1 className="font-headline-lg text-headline-lg text-primary font-bold tracking-wide">
                  LAVANYA KOTHALAWALA
                </h1>
                <p className="font-headline-sm text-headline-sm text-secondary font-medium mt-1">
                  IT Undergraduate Student
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Mobile – 0766247606 | Email –{" "}
                  <a
                    href="mailto:jayasikothalawala@gmail.com"
                    className="text-secondary underline"
                  >
                    jayasikothalawala@gmail.com
                  </a>
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  GitHub –{" "}
                  <a
                    href="https://github.com/livisarani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline"
                  >
                    livisarani (KOTHALAWALA J.L.L)
                  </a>{" "}
                  | LinkedIn –{" "}
                  <a
                    href="https://www.linkedin.com/in/lavanya-kothalawala-3b170333a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline"
                  >
                    Lavanya Kothalawala
                  </a>
                </p>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider border-b-2 border-primary pb-1 mb-space-sm">
                  Professional Summary
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Motivated Information Technology undergraduate at Sri Lanka
                  Institute of Information Technology (SLIIT) with a strong
                  foundation in{" "}
                  <strong className="text-primary">
                    software development, web technologies, and database
                    management
                  </strong>
                  . Experienced in developing{" "}
                  <strong className="text-primary">
                    full-stack applications using Java, JavaScript, React.js,
                    Node.js, Spring Boot, MySQL, and MongoDB
                  </strong>{" "}
                  through academic and group projects. Familiar with{" "}
                  <strong className="text-primary">
                    REST API development, software design, version control, and
                    application testing
                  </strong>
                  . Possess strong problem-solving, analytical thinking,
                  teamwork, and communication skills. Eager to apply technical
                  knowledge, gain industry experience, and contribute to
                  developing reliable and scalable software solutions as a
                  Software Engineering Intern.
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider border-b-2 border-primary pb-1 mb-space-sm">
                  Core Skills
                </h2>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
                  <li>
                    <strong className="text-primary">
                      Programming Languages:
                    </strong>{" "}
                    Java, JavaScript, Python, PHP, C++, Kotlin
                  </li>
                  <li>
                    <strong className="text-primary">
                      Backend Development:
                    </strong>{" "}
                    Node.js, Express.js, Spring Boot, REST APIs
                  </li>
                  <li>
                    <strong className="text-primary">
                      Frontend Development:
                    </strong>{" "}
                    React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap
                  </li>
                  <li>
                    <strong className="text-primary">
                      Database Technologies:
                    </strong>{" "}
                    MySQL, MongoDB, PostgreSQL
                  </li>
                  <li>
                    <strong className="text-primary">
                      Mobile Development:
                    </strong>{" "}
                    React Native, Kotlin, Java, Android Studio
                  </li>
                  <li>
                    <strong className="text-primary">
                      Software Development:
                    </strong>{" "}
                    Object-Oriented Programming (OOP), Full-Stack Development,
                    API Integration, Software Testing
                  </li>
                  <li>
                    <strong className="text-primary">Tools & Platforms:</strong>{" "}
                    Git, GitHub, Postman, IntelliJ IDEA, Figma, Trello, Draw.io
                  </li>
                  <li>
                    <strong className="text-primary">Soft Skills:</strong>{" "}
                    Problem Solving, Critical Thinking, Teamwork, Communication,
                    Quick Learning, Time Management
                  </li>
                </ul>
              </div>

              {/* Certifications & Education */}
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider border-b-2 border-primary pb-1 mb-space-sm">
                  Certifications
                </h2>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
                  <li>
                    <strong className="text-primary">
                      Cloud Strategy Professional Certificate
                    </strong>{" "}
                    – Issuer: LinkedIn Learning | Completed: September 9, 2026
                    (9 courses • 12 hours 18 minutes • Passed final exam)
                    <br />
                    <span className="text-xs">
                      Skills Covered: Enterprise Architecture, Cloud
                      Administration, Cloud Security, Sustainable Systems, Cloud
                      Strategy
                    </span>
                  </li>
                  <li>
                    <strong className="text-primary">
                      Intermediate English Course
                    </strong>{" "}
                    – Issuer: Kekirawa English Academy | Duration: 10 weeks
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider border-b-2 border-primary pb-1 mb-space-sm">
                  Education
                </h2>
                <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
                  <li>
                    <strong className="text-primary">
                      Sri Lanka Institute of Information Technology (SLIIT) |
                      2023 – Present
                    </strong>
                    <br />
                    BSc.(Hons) in Information Technology Specialization in
                    Information Technology (Undergraduate)
                  </li>
                  <li>
                    <strong className="text-primary">
                      Sri Sumangala Balika Maha Vidyalaya - Panadura | 2009 –
                      2022
                    </strong>
                  </li>
                </ul>
              </div>

              {/* University Projects */}
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider border-b-2 border-primary pb-1 mb-space-sm">
                  University Projects
                </h2>
                <div className="space-y-space-md font-body-sm text-body-sm text-on-surface-variant">
                  <div>
                    <h3 className="font-bold text-primary">
                      Smart Campus Operations Hub
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        A full-stack campus operations platform built with a
                        Spring Boot 3 (Java 17) & MySQL backend and a React
                        frontend, centralizing campus Resource & Booking
                        management, Maintenance Ticketing workflows (technician
                        assignment, status history, comments), Role-Based Access
                        Control (JWT & OAuth2), notifications, and PDF
                        reporting.
                      </li>
                      <li>
                        Clean layered, modular architecture (Controller →
                        Service → Repository → Entity) with strict DTO
                        decoupling, centralized exception handling
                        (GlobalExceptionHandler), stateless Spring Security JWT
                        filters, automated CI/CD pipelines via GitHub Actions
                        (ci.yml), and automated unit/integration testing.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Clinical Workflow Management System (MERN)
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        Built a full-stack MERN (MongoDB, Express.js, React,
                        Node.js) healthcare management platform that streamlines
                        clinic operations by uniting patient appointment
                        scheduling, electronic prescriptions, medical records,
                        and pharmacy/lab inventory management (medicines,
                        chemicals, equipment, and dispensing) into a cohesive
                        web application.
                      </li>
                      <li>
                        Engineered a modular, domain-driven backend architecture
                        (clinical-workflow, pharmacy-inventory,
                        patient-interaction, and workforce-facility) exposing
                        RESTful APIs with Mongoose schema modeling and custom
                        middleware, paired with a component-based React (Vite)
                        frontend featuring client-side routing, calendar
                        integration (FullCalendar), and automated PDF report
                        generation (jsPDF).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      Volunteer-Based Academic Support & Smart Matching Platform
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        Collaborative educational platform bridging the gap
                        between students and volunteer tutors by enabling smart
                        subject-based matching, scheduled academic support
                        sessions (StudentDashboard.jsx, RequestForm.jsx),
                        interactive real-time assistance, and transparent
                        community reputation scoring (Volunteer.js).
                      </li>
                      <li>
                        Built on a decoupled client-server MERN architecture
                        applying modular MVC design patterns, reusable React and
                        Tailwind CSS components, JWT authentication middleware,
                        and event-driven WebSockets (Socket.io).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      TutorMate Mobile Application
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        Built a full-stack, cross-platform mobile tutoring
                        platform using React Native (Expo) and Supabase,
                        enabling students and tutors to manage profiles,
                        schedule and track tutoring sessions, communicate via
                        real-time messaging, and receive automated push and
                        in-app notifications.
                      </li>
                      <li>
                        Architected a modular, event-driven system utilizing
                        Expo Router for file-based navigation, reusable UI
                        abstractions, and an automated backend pipeline using
                        PostgreSQL triggers, Row-Level Security (RLS), Supabase
                        Realtime WebSockets, and Deno Edge Functions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
