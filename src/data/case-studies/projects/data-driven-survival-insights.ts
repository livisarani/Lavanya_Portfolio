import { ProjectCaseStudy } from "../types";

export const dataDrivenSurvivalInsights: ProjectCaseStudy = {
  slug: "data-driven-survival-insights",
  title: "Data-Driven Survival Insights",
  category: "Data Science",
  status: "Predictive Analytics",
  featured: true,
  order: 3,
  problem:
    "Standard classification models fail to account for right-censored longitudinal clinical data and time-to-event risk trajectories.",
  solution:
    "Engineered a statistical and machine learning survival analysis pipeline combining Kaplan-Meier estimators, Cox Proportional Hazards, and tree-based survival models with SHAP interpretability.",
  techStack: [
    "Python",
    "Scikit-Survival",
    "Lifelines",
    "Pandas",
    "SHAP",
    "Matplotlib",
  ],
  metric: {
    value: "0.84",
    label: "Concordance Index (C-Index) on Holdout Cohort",
  },
  previewImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXUJrYb_Snhdy5pDLNAHlRHrfgnkzv8iJ2qpMx0PHDtA0Hb3jZOR95blxiVtgnUN3153T7pUxkegdeyJFIiYEcZoC_Vfp8RVaAXVg6KxJ7CYxFFygKq6aFeWGaE15ZweX1ew_IZEQwlcvZuQ5ejyLiQgxgiUNSozcuCkIEJrJN8OQCmNd5wqN7BATjU8FMR5wMSCPkVHjxCpd2Zw35ZWR1zrb-T66XtmIn0gcujsCb",
  previewAlt:
    "Analytical visualization of survival probability curves, hazard ratios, and feature attribution heatmaps rendered in deep marine tones and glowing cyan",
  previewMetaLeft: "Censored Data Aware",
  previewMetaRight: "Calibrated Hazard Ratios",
  links: {
    github: "https://github.com/lavanya-kothalawala",
    live: "#projects",
    showCaseStudy: true,
  },
  overview: {
    summary:
      "A rigorous time-to-event predictive modeling study that uncovers key clinical and demographic risk factors while properly handling censored observations across longitudinal patient cohorts.",
    role: "Data Scientist & ML Researcher",
    duration: "10 Weeks",
    status: "Completed Research & Pipeline",
    highlights: [
      "Non-parametric Kaplan-Meier survival curve stratification with log-rank hypothesis testing.",
      "Multivariate Cox Proportional Hazards and Random Survival Forest modeling.",
      "Clinician-friendly risk stratification profiles and time-dependent AUC evaluation.",
    ],
  },
  objectives: [
    {
      title: "Handle Censored Longitudinal Data Accurately",
      description:
        "Avoid bias introduced by dropping or misclassifying right-censored subjects in follow-up studies.",
      icon: "timeline",
    },
    {
      title: "Quantify Covariate Hazard Ratios",
      description:
        "Identify statistically significant risk factors and protective covariates with confidence intervals.",
      icon: "analytics",
    },
    {
      title: "Deliver Explainable Risk Cohorts",
      description:
        "Segment subjects into Low, Medium, and High risk tiers with transparent feature attributions.",
      icon: "insights",
    },
  ],
  features: [
    {
      title: "Automated Cohort Cleaning & Imputation",
      description:
        "Domain-aware preprocessing pipeline handling missing covariates, outliers, and collinearity diagnostics (VIF).",
      tag: "Data Engineering",
    },
    {
      title: "Kaplan-Meier & Log-Rank Stratification",
      description:
        "Visualizes survival probability over time across demographic and clinical subgroups with p-value significance.",
      tag: "Statistical Analysis",
    },
    {
      title: "Cox PH & Random Survival Forests",
      description:
        "Benchmarks linear proportional hazards against non-linear ensemble survival trees to capture complex interactions.",
      tag: "Machine Learning",
    },
    {
      title: "Time-Dependent ROC & SHAP Attribution",
      description:
        "Explains individual survival predictions and evaluates model calibration across multiple time horizons.",
      tag: "Interpretability",
    },
  ],
  architecture: {
    summary:
      "A reproducible data science pipeline structured into data validation, exploratory statistical testing, survival model training, and interpretability reporting.",
    layers: [
      {
        name: "01. Cohort Ingestion & Schema Validation",
        tech: "Python • Pandas • NumPy",
        description:
          "Validates event indicators, follow-up durations, and covariate distributions while flagging data leakage.",
      },
      {
        name: "02. Non-Parametric & Semi-Parametric Modeling",
        tech: "Lifelines • Statsmodels",
        description:
          "Computes Kaplan-Meier curves, Nelson-Aalen cumulative hazards, and Schoenfeld residual tests for proportional hazards.",
      },
      {
        name: "03. Machine Learning Survival Ensembles",
        tech: "Scikit-Survival • Random Survival Forests • Gradient Boosting",
        description:
          "Captures non-linear covariate interactions with nested cross-validation and hyperparameter tuning.",
      },
      {
        name: "04. Explainability & Visual Reporting",
        tech: "SHAP • Matplotlib • Seaborn",
        description:
          "Generates hazard forest plots, partial dependence curves, and calibrated survival trajectories.",
      },
    ],
  },
  keyDecisions: [
    {
      decision: "Combining Cox PH with Random Survival Forests",
      rationale:
        "Cox PH provides interpretable hazard ratios, whereas Random Survival Forests capture non-linear feature interactions.",
      tradeOff:
        "Dual-model maintenance, but provides both statistical rigor and higher predictive C-index.",
    },
    {
      decision: "Schoenfeld Residuals Verification",
      rationale:
        "Blindly applying Cox PH violates model assumptions when covariate hazards vary over time.",
      tradeOff:
        "Led to stratifying time-varying variables, significantly improving model calibration.",
    },
  ],
  challenges: [
    {
      challenge: "High Percentage of Right-Censored Observations",
      resolution:
        "Applied Inverse Probability of Censoring Weighting (IPCW) and evaluated Integrated Brier Score across time windows.",
      impact: "Preserved full cohort sample size without introducing survival bias.",
    },
    {
      challenge: "Multicollinearity Among Clinical Biomarkers",
      resolution:
        "Conducted Variance Inflation Factor (VIF) filtering and L1/L2 penalized Cox regression (ElasticNet).",
      impact: "Stabilized hazard ratio confidence intervals and improved generalization.",
    },
  ],
  evaluation: {
    summary:
      "Evaluated via 5-fold stratified cross-validation using Harrell's C-index, Time-Dependent AUC, and Integrated Brier Score.",
    metrics: [
      {
        label: "Harrell's C-Index",
        value: "0.84",
        delta: "+0.09 vs baseline Cox",
        description: "Strong rank-order discrimination of time-to-event risk.",
      },
      {
        label: "Integrated Brier Score",
        value: "0.11",
        delta: "Well-calibrated",
        description: "Low mean squared prediction error across follow-up horizons.",
      },
      {
        label: "Risk Group Separation",
        value: "p < 0.0001",
        delta: "Log-Rank Test",
        description: "Statistically significant stratification between risk tiers.",
      },
    ],
  },
  learnings: [
    "Checking proportional hazards assumptions via Schoenfeld residuals is essential before reporting Cox hazard ratios.",
    "Pairing statistical survival curves with SHAP attributions makes ML findings immediately actionable for domain experts.",
  ],
  futureWork: [
    "Explore DeepSurv neural survival architectures for high-dimensional multimodal inputs.",
    "Package the survival risk calculator as an interactive web microservice.",
  ],
};
