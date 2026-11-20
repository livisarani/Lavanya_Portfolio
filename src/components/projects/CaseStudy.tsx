import React from "react";
import { ProjectCaseStudy } from "@/data/case-studies";
import CaseStudyHero from "./case-study/CaseStudyHero";
import Overview from "./case-study/Overview";
import Objectives from "./case-study/Objectives";
import Features from "./case-study/Features";
import Architecture from "./case-study/Architecture";
import KeyDecisions from "./case-study/KeyDecisions";
import Challenges from "./case-study/Challenges";
import Evaluation from "./case-study/Evaluation";
import Learnings from "./case-study/Learnings";
import FutureWork from "./case-study/FutureWork";

export default function CaseStudy({ project }: { project: ProjectCaseStudy }) {
  return (
    <article className="w-full bg-surface">
      <CaseStudyHero project={project} />
      <Overview project={project} />
      <Objectives objectives={project.objectives} />
      <Features features={project.features} />
      <Architecture architecture={project.architecture} />
      <KeyDecisions decisions={project.keyDecisions} />
      <Challenges challenges={project.challenges} />
      <Evaluation evaluation={project.evaluation} />

      {(project.learnings?.length || project.futureWork?.length) && (
        <section className="w-full py-space-2xl">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
                08 / Reflections & Roadmap
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <Learnings learnings={project.learnings} />
              <FutureWork futureWork={project.futureWork} />
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
