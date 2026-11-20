import React from "react";
import { ProjectCaseStudy } from "@/data/case-studies";

export default function Overview({ project }: { project: ProjectCaseStudy }) {
  return (
    <section className="w-full py-space-2xl border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="h-px w-8 bg-secondary" />
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
            01 / Executive Overview
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-space-xs">
                The Problem
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {project.problem}
              </p>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-space-xs">
                The Architectural Solution
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {project.solution}
              </p>
            </div>
          </div>

          {project.overview && (
            <div className="lg:col-span-5 p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div className="space-y-space-sm mb-space-md font-label-md text-label-md">
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Role</span>
                  <span className="text-primary font-semibold">
                    {project.overview.role}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Timeline</span>
                  <span className="text-primary font-semibold">
                    {project.overview.duration}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Status</span>
                  <span className="text-secondary font-semibold">
                    {project.overview.status}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-space-xs font-semibold">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
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
