"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export const CV_MODAL_EVENT = "open-lavanya-cv-modal";

export function triggerCvViewAndDownload() {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent(CV_MODAL_EVENT));

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-sm p-3 md:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-5xl h-[90vh] bg-background border border-border flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editorial Modal Toolbar */}
        <div className="px-6 py-4 bg-surface-elevated border-b border-border flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-[22px] text-foreground leading-tight">
              {identity.name} — Curriculum Vitae
            </h3>
            <span className="text-[11px] uppercase tracking-[1.38px] text-primary">
              Download started automatically · Lavanya_Kothalawala_CV.pdf
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden sm:flex items-center border border-border">
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[1.38px] transition-colors ${
                  viewMode === "pdf"
                    ? "bg-primary text-on-primary font-semibold"
                    : "text-foreground/75 hover:text-primary"
                }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode("formatted")}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[1.38px] transition-colors ${
                  viewMode === "formatted"
                    ? "bg-primary text-on-primary font-semibold"
                    : "text-foreground/75 hover:text-primary"
                }`}
              >
                Interactive Text
              </button>
            </div>

            <a
              href={identity.resumeUrl}
              download="Lavanya_Kothalawala_CV.pdf"
              className="px-4 py-1.5 bg-primary text-on-primary hover:bg-foreground transition-colors text-[11px] font-semibold uppercase tracking-[1.38px]"
            >
              Download PDF
            </a>

            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-[11px] uppercase tracking-[1.38px]"
            >
              New Tab ↗
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close CV Preview"
              className="p-1.5 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-surface-elevated overflow-y-auto">
          {viewMode === "pdf" ? (
            <iframe
              src={`${identity.resumeUrl}#view=FitH`}
              title="Lavanya Kothalawala CV PDF"
              className="w-full h-full border-0"
            />
          ) : (
            <div className="max-w-3xl mx-auto my-8 p-8 md:p-12 bg-background border border-border text-foreground space-y-8">
              <div className="text-center border-b border-border pb-6">
                <h1 className="font-display text-[36px] text-foreground tracking-wide">
                  LAVANYA KOTHALAWALA
                </h1>
                <p className="text-[12px] uppercase tracking-[1.44px] text-primary mt-1">
                  IT Undergraduate Student
                </p>
                <p className="text-[13px] text-muted-foreground mt-3">
                  Mobile – 0766247606 &nbsp;|&nbsp; Email –{" "}
                  <a
                    href="mailto:jayasikothalawala@gmail.com"
                    className="text-primary underline"
                  >
                    jayasikothalawala@gmail.com
                  </a>
                </p>
                <p className="text-[13px] text-muted-foreground mt-1">
                  GitHub –{" "}
                  <a
                    href="https://github.com/livisarani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    livisarani (KOTHALAWALA J.L.L)
                  </a>{" "}
                  &nbsp;|&nbsp; LinkedIn –{" "}
                  <a
                    href="https://www.linkedin.com/in/lavanya-kothalawala-3b170333a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Lavanya Kothalawala
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-primary border-b border-border pb-2 mb-3">
                  Professional Summary
                </h2>
                <p className="text-[14px] leading-[25px] font-light text-foreground/85">
                  Motivated Information Technology undergraduate at Sri Lanka
                  Institute of Information Technology (SLIIT) with a strong
                  foundation in software development, web technologies, and
                  database management. Experienced in developing full-stack
                  applications using Java, JavaScript, React.js, Node.js, Spring
                  Boot, MySQL, and MongoDB through academic and group projects.
                  Eager to contribute to reliable and scalable software
                  solutions as a Software Engineering Intern.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-primary border-b border-border pb-2 mb-3">
                  Certifications
                </h2>
                <ul className="space-y-2 text-[14px] font-light text-foreground/85 list-disc pl-5">
                  <li>
                    <strong className="text-foreground font-medium">
                      Cloud Strategy Professional Certificate
                    </strong>{" "}
                    – LinkedIn Learning | Completed: September 9, 2026 (9
                    courses · 12h 18m · Passed final exam)
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Intermediate English Course
                    </strong>{" "}
                    – Kekirawa English Academy | Duration: 10 weeks
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[22px] text-primary border-b border-border pb-2 mb-3">
                  Education
                </h2>
                <ul className="space-y-2 text-[14px] font-light text-foreground/85 list-disc pl-5">
                  <li>
                    <strong className="text-foreground font-medium">
                      Sri Lanka Institute of Information Technology (SLIIT) |
                      2023 – Present
                    </strong>{" "}
                    — BSc. (Hons) in Information Technology
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">
                      Sri Sumangala Balika Maha Vidyalaya - Panadura | 2009 –
                      2022
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
