import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="w-full bg-background py-24 md:py-32 border-b border-border"
    >
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        {/* Centered Editorial Heading (matches "Everything Squarespace." band) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
            {skills.sectionLabel}
          </span>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.15] text-foreground mb-5">
            {skills.headline}.
          </h2>
          <p className="text-[15.136px] leading-[27.24px] font-light text-muted-foreground">
            {skills.description}
          </p>
        </div>

        {/* Signature 3x2 Outlined Grid (.list-item-outlined with 5px left border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((cat) => {
            const highlightedSkills = cat.skills
              .filter((s) => s.highlighted)
              .map((s) => s.name);

            return (
              <div
                key={cat.id}
                className="card-editorial-outlined p-8 md:p-[42px] flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <h3 className="font-display text-[28px] md:text-[32px] leading-[1.2] text-foreground mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[12px] uppercase tracking-[1.38px] text-muted-foreground mb-5">
                    {cat.subtitle}
                  </p>

                  <p className="text-[14.5px] leading-[26px] font-light text-foreground/80 mb-8">
                    {cat.skills.map((s) => s.name).join(" · ")}
                  </p>
                </div>

                {/* Bottom Ghost Primary Accent Label (.button-ghost-primary-sm) */}
                <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {highlightedSkills.length > 0 ? (
                    highlightedSkills.map((name) => (
                      <span
                        key={name}
                        className="text-[11.5px] font-semibold uppercase tracking-[1.44px] text-primary"
                      >
                        {name}
                      </span>
                    ))
                  ) : (
                    <span className="text-[11.5px] font-semibold uppercase tracking-[1.44px] text-primary">
                      {cat.skills[0]?.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
