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
      id="contact"
      className="w-full bg-background py-24 md:py-32 relative overflow-hidden border-b border-border"
    >
      {/* Subtle Warm Copper Editorial Glow */}
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,168,122,0.55) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-[23px] md:px-[43px]">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
            {contact.sectionLabel}
          </span>
          <h2 className="font-display text-[44px] md:text-[64px] leading-[1.1] text-foreground mb-5">
            {contact.headline}.
          </h2>
          <p className="text-[16px] leading-[28.8px] font-light text-muted-foreground">
            {contact.description}
          </p>
        </div>

        {/* Two-Column Connect Layout: "Get in touch" (Left) & "Elsewhere" (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start pt-4">
          {/* Left Column: Get in touch */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="text-[12px] font-medium uppercase tracking-[1.38px] text-muted-foreground mb-4">
              Get in touch
            </span>

            <div className="inline-flex flex-wrap items-center gap-3 border-b border-border hover:border-primary pb-2 transition-colors duration-300 group">
              <a
                href={`mailto:${identity.email}`}
                className="font-display text-[24px] sm:text-[30px] md:text-[34px] text-foreground group-hover:text-primary transition-colors break-all"
              >
                {identity.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email address"
                className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
              >
                <span className="material-symbols-outlined text-base">
                  {copied ? "check" : "content_copy"}
                </span>
              </button>
            </div>

            {copied && (
              <span className="mt-3 text-[11.5px] uppercase tracking-[1.38px] text-primary font-medium">
                Email copied to clipboard
              </span>
            )}
          </div>

          {/* Right Column: Elsewhere */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col">
            <span className="text-[12px] font-medium uppercase tracking-[1.38px] text-muted-foreground mb-4">
              Elsewhere
            </span>

            <div className="flex flex-col gap-4">
              <a
                href={identity.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-7 py-5 bg-transparent hover:bg-primary border border-border hover:border-primary text-foreground hover:text-on-primary transition-all duration-200 flex items-center justify-between group"
              >
                <span className="text-[12px] font-medium uppercase tracking-[1.44px]">
                  LinkedIn
                </span>
                <span className="material-symbols-outlined text-lg text-primary group-hover:text-on-primary transition-colors">
                  open_in_new
                </span>
              </a>

              <a
                href={identity.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-7 py-5 bg-transparent hover:bg-primary border border-border hover:border-primary text-foreground hover:text-on-primary transition-all duration-200 flex items-center justify-between group"
              >
                <span className="text-[12px] font-medium uppercase tracking-[1.44px]">
                  GitHub
                </span>
                <span className="material-symbols-outlined text-lg text-primary group-hover:text-on-primary transition-colors">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
