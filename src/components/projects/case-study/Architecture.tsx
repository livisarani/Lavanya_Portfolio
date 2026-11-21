import React from "react";
import { CaseStudyArchitecture } from "@/data/case-studies";

export default function Architecture({
  architecture,
}: {
  architecture?: CaseStudyArchitecture;
}) {
  if (!architecture) return null;

  return (
    <section className="w-full py-20 border-b border-border">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-4">
          04 / System Architecture
        </span>
        <p className="text-[15px] leading-[27px] font-light text-muted-foreground max-w-3xl mb-10">
          {architecture.summary}
        </p>

        <div className="space-y-4">
          {architecture.layers.map((layer, idx) => (
            <div
              key={idx}
              className="card-editorial-outlined p-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-2xl">
                <h3 className="font-display text-[24px] text-foreground">
                  {layer.name}
                </h3>
                <p className="text-[14px] leading-[24px] font-light text-muted-foreground mt-2">
                  {layer.description}
                </p>
              </div>
              <div className="px-4 py-2 border border-border text-[11px] uppercase tracking-[1.38px] text-primary font-medium whitespace-nowrap self-start md:self-center">
                {layer.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
