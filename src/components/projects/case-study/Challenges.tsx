import React from "react";
import { CaseStudyChallenge } from "@/data/case-studies";

export default function Challenges({
  challenges,
}: {
  challenges?: CaseStudyChallenge[];
}) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="w-full py-20 border-b border-border">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
          06 / Bottlenecks &amp; Resolutions
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((c, idx) => (
            <div
              key={idx}
              className="p-8 border border-border bg-surface-elevated flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="font-display text-[24px] text-foreground mb-2">
                  {c.challenge}
                </h3>
                <p className="text-[14px] leading-[25px] font-light text-muted-foreground">
                  {c.resolution}
                </p>
              </div>
              <div className="pt-4 border-t border-border text-[12px] uppercase tracking-[1.3px] text-primary font-medium">
                Impact: {c.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
