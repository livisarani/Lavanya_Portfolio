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
      id="projects"
      className="w-full bg-background py-24 md:py-32 border-b border-border"
    >
      <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
        {/* Editorial Section Header (matches "Latest Squarespace projects" region) */}
        <div className="max-w-3xl mb-14">
          <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-muted-foreground mb-4">
            03 / Latest Engineering Projects
          </span>
          <h2 className="font-display text-[34px] md:text-[43.65px] leading-[1.22] text-foreground">
            As a full-stack developer, here are some of the latest systems and
            applications I&apos;ve built.
          </h2>
        </div>

        {/* Modular Category Filters */}
        <Filters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          totalCount={filteredProjects.length}
        />

        {/* Staggered Asymmetric 2-Column Editorial Grid (matches region-r3-context.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-14 items-start">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.slug}
                className={
                  isEven
                    ? "lg:col-span-7 flex flex-col group"
                    : "lg:col-span-5 lg:mt-24 flex flex-col group"
                }
              >
                {/* Sharp 0px Editorial Image Frame */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden border border-border bg-surface-elevated mb-6"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.previewImage}
                      alt={project.previewAlt}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-editorial"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-background/85 backdrop-blur-sm border-t border-border flex items-center justify-between text-[11px] uppercase tracking-[1.38px]">
                      <span className="text-foreground/80">
                        {project.previewMetaLeft}
                      </span>
                      <span className="text-primary font-medium">
                        {project.previewMetaRight}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Underlined Copper Accent Title (.link-underlined-accent-2) */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="link-editorial-accent"
                  >
                    {project.title}
                  </Link>
                  <span className="text-[11px] uppercase tracking-[1.38px] text-muted-foreground">
                    {project.status}
                  </span>
                </div>

                {/* Problem / Solution Copy */}
                <p className="text-[14.5px] leading-[26px] font-light text-foreground/80 mb-5">
                  {project.solution}
                </p>

                {/* Minimal Tech Stack Hairline Row */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6 text-[11px] uppercase tracking-[1.2px] text-muted-foreground">
                  {project.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      {tIdx > 0 && <span className="text-border">/</span>}
                      <span>{tech}</span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Metric & Links Footer */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[22px] text-primary">
                      {project.metric.value}
                    </span>
                    <span className="text-[12px] text-muted-foreground font-light">
                      {project.metric.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11.5px] font-medium uppercase tracking-[1.38px] text-foreground/80 hover:text-primary transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[11.5px] font-semibold uppercase tracking-[1.38px] text-primary hover:text-foreground transition-colors"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
