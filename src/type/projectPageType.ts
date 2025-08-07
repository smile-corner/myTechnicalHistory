export interface Technology {
  name: string;
  color: string;
}

export interface Feature {
  title: string;
  items: string[];
  color: string;
}

export interface DevelopmentStep {
  number: number;
  title: string;
  description: string;
  color: string;
}

export interface Learning {
  title: string;
  items: string[];
  color: string;
}

export interface ProjectLink {
  href: string;
  text: string;
  isPrimary?: boolean;
  color?: string;
  isExternal?: boolean;
}

export interface ProjectPageData {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  overview: {
    purpose: string;
    background?: string;
    features?: string[];
  };
  technical: {
    technologies: Technology[];
    developmentPeriod: string;
    developmentTeam: string;
    deployment: string;
  };
  features: Feature[];
  development: DevelopmentStep[];
  learnings: Learning[];
  links: ProjectLink[];
} 