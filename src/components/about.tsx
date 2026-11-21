"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { triggerCvViewAndDownload } from "./CvModal";

export default function About() {
  const { identity, about } = portfolioData;

  return (
    <section
      id="about"
      className="w-full bg-background py-24 md:py-32 border-b border-border"
    >
      <div className="max-w-content mx-auto px-[23px] md:px-[43px] space-y-24 md:space-y-32">
        {/* Row 1: Asymmetric Editorial Split (Portrait Left / Story Right — matches region-r2-context.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <div className="w-full aspect-[3/4] max-h-[680px] overflow-hidden border border-border bg-surface-elevated">
              <img
                src={about.profileCard.portraitUrl}
                alt={identity.name}
                className="w-full h-full object-cover object-center transition-opacity duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-5">
              {about.sectionLabel}
            </span>

            <h2 className="font-display text-[34px] md:text-[43.6px] leading-[1.2] text-foreground mb-7">
              {about.headline}
            </h2>

            <div className="space-y-5 text-[15.136px] leading-[27.24px] font-light text-foreground/85 max-w-xl mb-10">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <button
              type="button"
              onClick={triggerCvViewAndDownload}
              className="btn-editorial-outline-sm"
            >
              <span>View Resume &amp; CV</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Row 2: Reversed Split (Quick Facts & Core Values Left / Code Window Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-8 border-t border-border">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[12px] font-medium uppercase tracking-[1.44px] text-muted-foreground mb-6">
              Engineering Principles &amp; Profile
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {about.values.map((val) => (
                <div
                  key={val.title}
                  className="p-6 border border-border bg-background hover:border-primary/60 transition-colors duration-500 ease-editorial"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {val.icon}
                    </span>
                    <h3 className="font-display text-[22px] text-foreground">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[24px] font-light text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Facts Hairline Table */}
            <div className="border border-border p-8 bg-surface-elevated">
              <div className="pb-4 mb-4 border-b border-border flex items-baseline justify-between">
                <span className="font-display text-[24px] text-foreground">
                  {identity.name}
                </span>
                <span className="text-[11px] uppercase tracking-[1.38px] text-primary">
                  {identity.timezone}
                </span>
              </div>
              <div className="space-y-3 text-[13px]">
                {about.profileCard.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between gap-4 py-2 border-b border-border/60 last:border-b-0"
                  >
                    <span className="text-muted-foreground uppercase tracking-[1.2px] text-[11px] font-medium">
                      {fact.label}
                    </span>
                    <span
                      className={
                        fact.highlight
                          ? "text-primary font-medium text-right"
                          : "text-foreground font-light text-right"
                      }
                    >
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Code Block */}
            <div className="border border-border bg-surface-elevated p-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-[11px] uppercase tracking-[1.44px]">
                <span className="text-foreground font-semibold">
                  {about.codeSnippet.filename}
                </span>
                <span className="text-primary">
                  {about.codeSnippet.language}
                </span>
              </div>
              <pre className="text-[12px] leading-[21.6px] font-mono text-foreground/85 overflow-x-auto">
                <code>{about.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
