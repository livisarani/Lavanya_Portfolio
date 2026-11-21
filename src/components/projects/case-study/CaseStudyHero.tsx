import React from "react";
import Link from "next/link";
import { ProjectCaseStudy } from "@/data/case-studies";

export default function CaseStudyHero({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[1.38px] text-primary hover:text-foreground transition-colors mb-10"
        >
          <span aria-hidden="true">←</span>
          <span>Back to All Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-[11.5px] uppercase tracking-[1.44px]">
              <span className="text-primary font-semibold">
                {project.category}
              </span>
              <span className="text-border">/</span>
              <span className="text-muted-foreground">{project.status}</span>
            </div>

            <h1 className="font-display text-[38px] md:text-[56px] leading-[1.12] text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-[15.5px] leading-[28px] font-light text-foreground/85 mb-8 max-w-2xl">
              {project.overview?.summary || project.solution}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 border border-border text-[11px] uppercase tracking-[1.3px] text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="px-5 py-3 border border-border bg-surface-elevated flex items-baseline gap-3">
                <span className="font-display text-[24px] text-primary">
                  {project.metric.value}
                </span>
                <span className="text-[12px] text-muted-foreground font-light">
                  {project.metric.label}
                </span>
              </div>

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-outline-sm"
                >
                  <span>View Source on GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-border bg-surface-elevated">
              <img
                src={project.previewImage}
                alt={project.previewAlt}
                className="w-full aspect-[16/11] object-cover"
              />
              <div className="px-5 py-4 border-t border-border flex justify-between items-center text-[11px] uppercase tracking-[1.38px]">
                <span className="text-muted-foreground">
                  {project.previewMetaLeft}
                </span>
                <span className="text-primary font-medium">
                  {project.previewMetaRight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
