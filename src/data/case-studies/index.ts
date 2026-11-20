import { ProjectCaseStudy } from "./types";
import { smartCampusOperationsHub } from "./projects/smart-campus-operations-hub";
import { clinicWorkflowManagement } from "./projects/clinic-workflow-management";
import { volunteerAcademicSupport } from "./projects/volunteer-academic-support";
import { tutorMateMobileApp } from "./projects/tutormate-mobile-app";

/**
 * Modular Project Registry
 * ------------------------
 * Registered with the 4 University Projects from Lavanya Kothalawala's CV.
 * Additional project modules in `./projects/` can be added here anytime.
 */
export const PROJECTS_REGISTRY: ProjectCaseStudy[] = [
  smartCampusOperationsHub,
  clinicWorkflowManagement,
  volunteerAcademicSupport,
  tutorMateMobileApp,
];

export function getAllProjects(): ProjectCaseStudy[] {
  return [...PROJECTS_REGISTRY].sort(
    (a, b) => (a.order ?? 99) - (b.order ?? 99)
  );
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return getAllProjects().filter((project) => project.featured !== false);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS_REGISTRY.find((project) => project.slug === slug);
}

export function getProjectCategories(): string[] {
  const categories = new Set<string>(["All"]);
  for (const project of getAllProjects()) {
    if (project.category) {
      categories.add(project.category);
    }
  }
  return Array.from(categories);
}

export * from "./types";
