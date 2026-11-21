import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="w-full bg-background py-24 md:py-32 border-b border-border"
    >
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
            {experience.sectionLabel}
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.15] text-foreground">
            {experience.headline}.
          </h2>
        </div>

        {/* Hairline Chronological Rows */}
        <div className="divide-y divide-border border-t border-b border-border">
          {experience.items.map((item) => (
            <div
              key={item.id}
              className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start hover:bg-surface-elevated/60 transition-colors duration-300 px-2 md:px-4"
            >
              {/* Left Column: Period & Meta */}
              <div className="lg:col-span-3 flex flex-col">
                <span className="font-display text-[26px] text-primary leading-tight">
                  {item.period}
                </span>
                <span className="text-[12px] uppercase tracking-[1.38px] text-muted-foreground mt-2">
                  {item.location}
                </span>
                <span className="text-[11px] uppercase tracking-[1.44px] text-foreground/70 mt-1">
                  {item.type}
                </span>
              </div>

              {/* Right Column: Role, Organization & Highlights */}
              <div className="lg:col-span-9 flex flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-display text-[26px] md:text-[32px] leading-[1.25] text-foreground">
                    {item.role}
                  </h3>
                  <span className="px-3 py-1 border border-border text-[11px] uppercase tracking-[1.38px] text-primary">
                    {item.badge}
                  </span>
                </div>

                <p className="text-[12px] uppercase tracking-[1.38px] text-muted-foreground mb-4">
                  {item.organization}
                </p>

                <p className="text-[15.136px] leading-[27.24px] font-light text-foreground/85 mb-4 max-w-3xl">
                  {item.summary}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 text-[14px] leading-[24px] font-light text-muted-foreground list-disc pl-5 max-w-3xl">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
