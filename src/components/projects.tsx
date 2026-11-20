"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { getAllProjects, getProjectCategories } from "@/data/case-studies";
import Filters from "./filters";

export default function Projects() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const categories = useMemo(() => getProjectCategories(), []);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allProjects]);

  return (
    <section
      className="w-full py-space-3xl bg-surface-container-low"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
                03 / Selected Implementations
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Production Architectures
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Modular, production-hardened AI, data science, and full-stack
            systems resolving real operational bottlenecks.
          </p>
        </div>

        {/* Category Filter Bar */}
        <Filters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          totalCount={filteredProjects.length}
        />

        {/* Project Cards Stack */}
        <div className="space-y-space-xl">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="w-full rounded-xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-[0_16px_40px_rgba(6,59,99,0.06)] hover:shadow-[0_24px_48px_rgba(6,59,99,0.12)] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                {/* Left Info (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-space-sm mb-space-xs font-label-sm text-label-sm">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-on-surface-variant">•</span>
                      <span className="text-on-surface-variant">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-secondary transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <div className="space-y-space-sm mb-space-md font-body-md text-body-md">
                      <p className="text-on-surface-variant">
                        <strong className="text-primary">Problem:</strong>{" "}
                        {project.problem}
                      </p>
                      <p className="text-on-surface-variant">
                        <strong className="text-primary">Solution:</strong>{" "}
                        {project.solution}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-space-md">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metric & Links Row */}
                  <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md border-t border-surface-container">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                        {project.metric.value}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {project.metric.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-space-sm">
                      {project.links.github && (
                        <a
                          className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="material-symbols-outlined text-base">
                            code
                          </span>
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.links.showCaseStudy !== false && (
                        <Link
                          className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors font-label-md text-label-md"
                          href={`/projects/${project.slug}`}
                        >
                          <span className="material-symbols-outlined text-base">
                            menu_book
                          </span>
                          <span>Case Study</span>
                        </Link>
                      )}
                      {project.links.live && (
                        <a
                          className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-md text-label-md"
                          href={
                            project.links.live.startsWith("#")
                              ? `/projects/${project.slug}`
                              : project.links.live
                          }
                        >
                          <span className="material-symbols-outlined text-base">
                            open_in_new
                          </span>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Graphic / Preview (5 cols) */}
                <div className="lg:col-span-5 relative rounded-lg overflow-hidden bg-primary p-space-md flex flex-col justify-between text-on-primary">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block overflow-hidden rounded-md mb-space-sm group/img"
                  >
                    <img
                      alt={project.previewAlt}
                      className="w-full h-48 object-cover rounded-md opacity-90 group-hover/img:scale-105 group-hover/img:opacity-100 transition-all duration-500"
                      src={project.previewImage}
                    />
                  </Link>
                  <div className="flex justify-between items-center text-on-primary-container font-label-sm text-label-sm">
                    <span>{project.previewMetaLeft}</span>
                    <span className="text-secondary-fixed">
                      {project.previewMetaRight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
