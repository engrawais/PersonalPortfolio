export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface CTA {
  resumeUrl: string;
  primaryActionText: string;
  secondaryActionText: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  summary: string;
  focusAreas: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  achievements: string[];
  lookingFor: string[];
  cta: CTA;
}
