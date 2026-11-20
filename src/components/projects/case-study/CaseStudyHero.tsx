import React from "react";
import Link from "next/link";
import { ProjectCaseStudy } from "@/data/case-studies";

export default function CaseStudyHero({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  return (
    <section className="relative w-full overflow-hidden py-space-2xl bg-surface-container-low border-b border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-primary transition-colors mb-space-lg"
        >
          <span className="material-symbols-outlined text-base">
            arrow_back
          </span>
          <span>Back to All Architectures</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap items-center gap-space-sm mb-space-sm font-label-sm text-label-sm">
              <span className="px-space-sm py-0.5 rounded bg-secondary-fixed/50 text-on-secondary-fixed font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-on-surface-variant">•</span>
              <span className="text-on-surface-variant">{project.status}</span>
            </div>

            <h1 className="font-display text-display-mobile md:text-headline-lg text-primary tracking-tight mb-space-md">
              {project.title}
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
              {project.overview?.summary || project.solution}
            </p>

            <div className="flex flex-wrap gap-2 mb-space-lg">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-md text-label-md shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-space-md">
              <div className="px-space-md py-space-sm rounded-lg bg-surface-container-lowest border border-secondary/20 flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                  {project.metric.value}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {project.metric.label}
                </span>
              </div>

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg"
                >
                  <span className="material-symbols-outlined text-base">
                    code
                  </span>
                  <span>View Source on GitHub</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden bg-primary p-space-md shadow-xl text-on-primary">
              <img
                src={project.previewImage}
                alt={project.previewAlt}
                className="w-full h-56 object-cover rounded-lg mb-space-sm"
              />
              <div className="flex justify-between items-center text-on-primary-container font-label-sm text-label-sm">
                <span>{project.previewMetaLeft}</span>
                <span className="text-secondary-fixed">
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
