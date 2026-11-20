export interface SkillItem {
  name: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  period: string;
  location: string;
  type: string;
  role: string;
  organization: string;
  badge: string;
  summary: string;
  highlights?: string[];
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface TelemetryMetric {
  id: string;
  label: string;
  badge: string;
  target: number;
  startValue: number;
  decimals: number;
  unit: string;
  sublabel: string;
}
