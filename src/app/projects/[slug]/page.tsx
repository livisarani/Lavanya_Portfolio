import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/data/case-studies";
import CaseStudy from "@/components/projects/CaseStudy";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} — Case Study | Lavanya Kothalawala`,
    description: project.solution,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
