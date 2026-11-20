import React from "react";
import { CaseStudyArchitecture } from "@/data/case-studies";

export default function Architecture({
  architecture,
}: {
  architecture?: CaseStudyArchitecture;
}) {
  if (!architecture) return null;

  return (
    <section className="w-full py-space-2xl border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-xs">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            04 / System Architecture
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mb-space-xl">
          {architecture.summary}
        </p>

        <div className="space-y-space-md">
          {architecture.layers.map((layer, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm border-l-4 border-secondary flex flex-col md:flex-row md:items-center justify-between gap-space-md"
            >
              <div className="max-w-2xl">
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {layer.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {layer.description}
                </p>
              </div>
              <div className="px-space-md py-space-xs rounded-lg bg-surface-container font-label-sm text-label-sm text-primary font-semibold whitespace-nowrap self-start md:self-center">
                {layer.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
