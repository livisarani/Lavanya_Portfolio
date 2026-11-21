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
    <article className="w-full bg-background pt-[86px]">
      <CaseStudyHero project={project} />
      <Overview project={project} />
      <Objectives objectives={project.objectives} />
      <Features features={project.features} />
      <Architecture architecture={project.architecture} />
      <KeyDecisions decisions={project.keyDecisions} />
      <Challenges challenges={project.challenges} />
      <Evaluation evaluation={project.evaluation} />

      {(project.learnings?.length || project.futureWork?.length) && (
        <section className="w-full py-20 border-b border-border">
          <div className="max-w-content mx-auto px-[23px] md:px-[43px]">
            <span className="block text-[12px] font-medium uppercase tracking-[1.44px] text-primary mb-8">
              08 / Reflections &amp; Roadmap
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Learnings learnings={project.learnings} />
              <FutureWork futureWork={project.futureWork} />
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
