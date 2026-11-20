import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="w-full py-space-3xl" id="skills">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col mb-space-2xl">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
              {skills.sectionLabel}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            {skills.headline}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs">
            {skills.description}
          </p>
        </div>

        {/* 6 Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {skills.categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_8px_24px_rgba(6,59,99,0.04)] flex flex-col hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">
                    {cat.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                    {cat.title}
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={
                      skill.highlighted
                        ? "px-space-sm py-1 rounded bg-secondary-fixed/50 text-on-secondary-fixed font-label-md text-label-md font-semibold"
                        : "px-space-sm py-1 rounded bg-surface-container-low text-primary font-label-md text-label-md"
                    }
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
