import React from "react";
import { CaseStudyObjective } from "@/data/case-studies";

export default function Objectives({
  objectives,
}: {
  objectives?: CaseStudyObjective[];
}) {
  if (!objectives || objectives.length === 0) return null;

  return (
    <section className="w-full py-space-2xl border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            02 / Design Objectives
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-sm">
                <span className="material-symbols-outlined">
                  {obj.icon || "flag"}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-space-xs">
                {obj.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
