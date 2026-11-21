import React from "react";
import { CaseStudyObjective } from "@/data/case-studies";

export default function Objectives({
  objectives,
}: {
  objectives?: CaseStudyObjective[];
}) {
  if (!objectives || objectives.length === 0) return null;

  return (
    <section className="w-full py-20 border-b border-border">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
          02 / Design Objectives
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {objectives.map((obj, idx) => (
            <div key={idx} className="card-editorial-outlined p-8 flex flex-col">
              <span className="material-symbols-outlined text-primary text-2xl mb-4">
                {obj.icon || "flag"}
              </span>
              <h3 className="font-display text-[24px] text-foreground mb-3">
                {obj.title}
              </h3>
              <p className="text-[14px] leading-[25px] font-light text-muted-foreground">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
