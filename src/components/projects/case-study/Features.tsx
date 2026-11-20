import React from "react";
import { CaseStudyFeature } from "@/data/case-studies";

export default function Features({
  features,
}: {
  features?: CaseStudyFeature[];
}) {
  if (!features || features.length === 0) return null;

  return (
    <section className="w-full py-space-2xl bg-surface-container-lowest border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            03 / Core Capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                {feat.tag && (
                  <span className="inline-block px-2 py-0.5 rounded bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-semibold mb-space-xs">
                    {feat.tag}
                  </span>
                )}
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-space-xs">
                  {feat.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
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
