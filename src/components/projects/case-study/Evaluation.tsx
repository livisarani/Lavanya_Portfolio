import React from "react";
import { CaseStudyEvaluation } from "@/data/case-studies";

export default function Evaluation({
  evaluation,
}: {
  evaluation?: CaseStudyEvaluation;
}) {
  if (!evaluation) return null;

  return (
    <section className="w-full py-20 border-b border-border bg-surface-elevated">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
          07 / Empirical Evaluation
        </span>
        <p className="text-[15px] leading-[27px] font-light text-muted-foreground max-w-2xl mb-10">
          {evaluation.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {evaluation.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-8 border border-border bg-background flex flex-col"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] uppercase tracking-[1.38px] text-muted-foreground">
                  {m.label}
                </span>
                {m.delta && (
                  <span className="text-[11px] uppercase tracking-[1.2px] text-primary font-medium">
                    {m.delta}
                  </span>
                )}
              </div>
              <span className="font-display text-[36px] text-foreground leading-tight">
                {m.value}
              </span>
              <p className="text-[14px] leading-[24px] font-light text-muted-foreground mt-3">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
