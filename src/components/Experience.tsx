import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="w-full py-space-3xl bg-surface" id="experience">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col mb-space-2xl">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
              {experience.sectionLabel}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            {experience.headline}
          </h2>
        </div>

        {/* Chronological Roadmap Timeline */}
        <div className="space-y-space-xl relative">
          {experience.items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"
            >
              <div className="lg:col-span-3 flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                  {item.period}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  {item.location}
                </span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold mt-1">
                  {item.type}
                </span>
              </div>

              <div className="lg:col-span-9 p-space-lg md:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {item.role} • {item.organization}
                  </h3>
                  <span className="px-space-sm py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm">
                    {item.badge}
                  </span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                  {item.summary}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
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
