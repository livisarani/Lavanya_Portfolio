"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { identity, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      className="w-full py-space-3xl bg-surface-container-low relative overflow-hidden"
      id="contact"
    >
      {/* Subtle Oceanic Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[480px] h-[480px] bg-secondary-fixed/25 blur-3xl rounded-full" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-2xl bg-surface-container-lowest p-space-xl md:p-space-3xl shadow-[0_20px_50px_rgba(6,59,99,0.08)] border border-surface-container">
          {/* Header Block */}
          <div className="max-w-3xl mb-space-2xl">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
                {contact.sectionLabel}
              </span>
            </div>

            <h2 className="font-display text-display-mobile md:text-headline-lg text-primary tracking-tight mb-space-sm">
              {contact.headline}
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {contact.description}
            </p>
          </div>

          {/* Two-Column Connect Layout: "Get in touch" (Left) & "Elsewhere" (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl items-start pt-space-md">
            {/* Left Column: Get in touch */}
            <div className="md:col-span-6 flex flex-col items-start">
              <span className="font-label-md text-label-md text-on-surface-variant mb-space-sm">
                Get in touch
              </span>

              <div className="inline-flex flex-wrap items-center gap-space-sm border-b-2 border-primary/20 hover:border-secondary pb-2 transition-colors group">
                <a
                  href={`mailto:${identity.email}`}
                  className="font-headline-sm md:font-headline-md text-lg sm:text-xl md:text-2xl text-primary font-bold group-hover:text-secondary transition-colors break-all"
                >
                  {identity.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-secondary-fixed/50 transition-colors inline-flex items-center"
                >
                  <span className="material-symbols-outlined text-base">
                    {copied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>

              {copied && (
                <span className="mt-2 font-label-sm text-label-sm text-secondary font-semibold">
                  Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Right Column: Elsewhere */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col">
              <span className="font-label-md text-label-md text-on-surface-variant mb-space-sm">
                Elsewhere
              </span>

              <div className="flex flex-col gap-space-sm">
                {/* LinkedIn Card */}
                <a
                  href={identity.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-space-lg py-space-md rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 hover:border-secondary transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-body-md text-body-md text-primary font-semibold group-hover:text-secondary transition-colors">
                    LinkedIn
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-lg">
                    open_in_new
                  </span>
                </a>

                {/* GitHub Card */}
                <a
                  href={identity.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-space-lg py-space-md rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 hover:border-secondary transition-all flex items-center justify-between group shadow-xs"
                >
                  <span className="font-body-md text-body-md text-primary font-semibold group-hover:text-secondary transition-colors">
                    GitHub
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-lg">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
