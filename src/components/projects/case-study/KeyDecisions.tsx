import React from "react";
import { CaseStudyDecision } from "@/data/case-studies";

export default function KeyDecisions({
  decisions,
}: {
  decisions?: CaseStudyDecision[];
}) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section className="w-full py-20 border-b border-border bg-surface-elevated">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
          05 / Key Engineering Decisions
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 border border-border bg-background flex flex-col gap-3"
            >
              <h3 className="font-display text-[24px] text-foreground">
                {item.decision}
              </h3>
              <p className="text-[14px] leading-[25px] font-light text-foreground/80">
                <strong className="text-foreground font-medium">
                  Rationale:
                </strong>{" "}
                {item.rationale}
              </p>
              <p className="text-[14px] leading-[25px] font-light text-muted-foreground">
                <strong className="text-primary font-medium">Trade-off:</strong>{" "}
                {item.tradeOff}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
