import React from "react";
import { CaseStudyFeature } from "@/data/case-studies";

export default function Features({
  features,
}: {
  features?: CaseStudyFeature[];
}) {
  if (!features || features.length === 0) return null;

  return (
    <section className="w-full py-20 border-b border-border bg-surface-elevated">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
          03 / Core Capabilities
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 border border-border bg-background flex flex-col justify-between"
            >
              <div>
                {feat.tag && (
                  <span className="inline-block text-[11px] uppercase tracking-[1.44px] text-primary font-semibold mb-3">
                    {feat.tag}
                  </span>
                )}
                <h3 className="font-display text-[24px] text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-[14px] leading-[25px] font-light text-muted-foreground">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
