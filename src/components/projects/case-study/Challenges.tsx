import React from "react";
import { CaseStudyChallenge } from "@/data/case-studies";

export default function Challenges({
  challenges,
}: {
  challenges?: CaseStudyChallenge[];
}) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="w-full py-space-2xl border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            06 / Bottlenecks & Resolutions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {challenges.map((c, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm"
            >
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                  {c.challenge}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {c.resolution}
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-container font-label-sm text-label-sm text-secondary font-semibold">
                Impact: {c.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
