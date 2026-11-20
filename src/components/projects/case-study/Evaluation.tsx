import React from "react";
import { CaseStudyEvaluation } from "@/data/case-studies";

export default function Evaluation({
  evaluation,
}: {
  evaluation?: CaseStudyEvaluation;
}) {
  if (!evaluation) return null;

  return (
    <section className="w-full py-space-2xl bg-surface-container-low border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-xs">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            07 / Empirical Evaluation
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-space-xl">
          {evaluation.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {evaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {m.label}
                </span>
                {m.delta && (
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    {m.delta}
                  </span>
                )}
              </div>
              <span className="font-headline-lg text-headline-lg text-primary font-bold font-mono">
                {m.value}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
