import React from "react";
import { CaseStudyDecision } from "@/data/case-studies";

export default function KeyDecisions({
  decisions,
}: {
  decisions?: CaseStudyDecision[];
}) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section className="w-full py-space-2xl bg-surface-container-lowest border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            05 / Key Engineering Decisions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {decisions.map((item, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm"
            >
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {item.decision}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="text-primary">Rationale:</strong>{" "}
                {item.rationale}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="text-secondary">Trade-off:</strong>{" "}
                {item.tradeOff}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
