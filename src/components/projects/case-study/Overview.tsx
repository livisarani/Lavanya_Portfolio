import React from "react";
import { ProjectCaseStudy } from "@/data/case-studies";

export default function Overview({ project }: { project: ProjectCaseStudy }) {
  return (
    <section className="w-full py-20 border-b border-border">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
          01 / Executive Overview
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 border border-border bg-surface-elevated">
              <h3 className="font-display text-[26px] text-foreground mb-3">
                The Problem
              </h3>
              <p className="text-[15px] leading-[27px] font-light text-foreground/80">
                {project.problem}
              </p>
            </div>
            <div className="p-8 border border-border bg-surface-elevated">
              <h3 className="font-display text-[26px] text-foreground mb-3">
                The Architectural Solution
              </h3>
              <p className="text-[15px] leading-[27px] font-light text-foreground/80">
                {project.solution}
              </p>
            </div>
          </div>

          {project.overview && (
            <div className="lg:col-span-5 p-8 border border-border bg-background flex flex-col justify-between">
              <div className="space-y-3 mb-8 text-[13px]">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-[1.2px] text-[11px]">
                    Role
                  </span>
                  <span className="text-foreground font-medium">
                    {project.overview.role}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-[1.2px] text-[11px]">
                    Timeline
                  </span>
                  <span className="text-foreground font-medium">
                    {project.overview.duration}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground uppercase tracking-[1.2px] text-[11px]">
                    Status
                  </span>
                  <span className="text-primary font-medium">
                    {project.overview.status}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-[1.44px] text-primary font-semibold mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-[14px] leading-[24px] font-light text-foreground/80 list-disc pl-5">
                  {project.overview.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
