export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  showCaseStudy?: boolean;
}

export interface CaseStudyOverview {
  summary: string;
  role: string;
  duration: string;
  status: string;
  highlights: string[];
}

export interface CaseStudyObjective {
  title: string;
  description: string;
  icon?: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface CaseStudyArchitectureLayer {
  name: string;
  tech: string;
  description: string;
}

export interface CaseStudyArchitecture {
  summary: string;
  diagramUrl?: string;
  layers: CaseStudyArchitectureLayer[];
}

export interface CaseStudyDecision {
  decision: string;
  rationale: string;
  tradeOff: string;
}

export interface CaseStudyChallenge {
  challenge: string;
  resolution: string;
  impact: string;
}

export interface CaseStudyEvaluationMetric {
  label: string;
  value: string;
  delta?: string;
  description: string;
}

export interface CaseStudyEvaluation {
  summary: string;
  metrics: CaseStudyEvaluationMetric[];
}

/**
 * Modular Project & Case Study Schema.
 * To add a new project:
 * 1. Create a file in `src/data/case-studies/projects/<your-project-slug>.ts`
 * 2. Export a `ProjectCaseStudy` object
 * 3. Register it in `src/data/case-studies/index.ts`
 *
 * All deep-dive case study sections (`overview`, `objectives`, `features`, etc.)
 * are optional—only the populated sections will be rendered on `/projects/[slug]`.
 */
export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  status: string;
  featured?: boolean;
  order?: number;
  problem: string;
  solution: string;
  techStack: string[];
  metric: ProjectMetric;
  previewImage: string;
  previewAlt: string;
  previewMetaLeft: string;
  previewMetaRight: string;
  links: ProjectLinks;

  // Modular Case Study Deep-Dive Sections (all optional)
  overview?: CaseStudyOverview;
  objectives?: CaseStudyObjective[];
  features?: CaseStudyFeature[];
  architecture?: CaseStudyArchitecture;
  keyDecisions?: CaseStudyDecision[];
  challenges?: CaseStudyChallenge[];
  evaluation?: CaseStudyEvaluation;
  learnings?: string[];
  futureWork?: string[];
}
