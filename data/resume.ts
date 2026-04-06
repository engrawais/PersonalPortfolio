import { Resume } from "@/types/resume";

export const resume: Resume = {
  name: "Muhammad Awais",
  title: "Senior Backend Engineer (.NET | AI Systems)",
  location: "Remote",
  email: "awais.cns@gmail.com",
  phone: "+92 331-5669169",
  linkedin: "https://www.linkedin.com/in/awais-eng/",
  github: "https://github.com/engrawais",
  portfolioUrl: "https://your-vercel-link.vercel.app",
  summary:
    "Senior Backend Engineer with 9+ years of experience building scalable SaaS systems, microservices, and AI-powered backend platforms. I specialize in designing and owning backend systems using .NET 8, ASP.NET Core, and Clean Architecture, and have built and managed distributed microservices, AI pipelines, and high-scale API systems with 99.9% uptime.",
  focusAreas: [
    "Scalable backend architecture",
    "Microservices & distributed systems",
    "AI-powered backend pipelines (LLMs)",
    "Performance optimization & reliability",
  ],
  experience: [
    {
      company: "Codonomy",
      role: "Senior .NET Developer",
      location: "Remote",
      start: "2023",
      end: "Present",
      bullets: [
        "Owned backend architecture for SaaS platform using .NET 8",
        "Designed 14+ microservices with scalable architecture",
        "Built AI-powered pipelines with LLM integrations",
        "Developed reusable libraries across services",
        "Managed CI/CD, Docker, and Kubernetes infrastructure",
      ],
      stack: [
        ".NET 8",
        "ASP.NET Core",
        "Microservices",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "LLM integrations",
      ],
    },
    {
      company: "RemoteBase / Cloudtek",
      role: "Senior .NET Developer",
      location: "Remote",
      start: "2014",
      end: "2023",
      bullets: [
        "Built enterprise-grade APIs with ASP.NET Core",
        "Optimized performance (60% latency reduction)",
        "Deployed systems using Docker & Kubernetes",
        "Designed scalable systems for 500+ users",
      ],
      stack: [
        "ASP.NET Core",
        "Web APIs",
        "Docker",
        "Kubernetes",
        "SQL Server",
      ],
    },
  ],
  education: [
    {
      school: "COMSATS University Islamabad",
      degree: "Bachelors in Computer Engineering",
      start: "2007",
      end: "2012",
    },
  ],
  skills: [
    {
      group: "Backend",
      items: [
        ".NET 6/7/8",
        "ASP.NET Core",
        "Web APIs",
        "Entity Framework Core",
        "Dapper",
      ],
    },
    {
      group: "Architecture",
      items: [
        "Microservices",
        "Clean Architecture",
        "CQRS",
        "DDD",
        "Event-driven systems",
        "Serverless (AWS Lambda)",
      ],
    },
    {
      group: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, Lambda)",
        "Azure (AKS, Functions)",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "ElasticSearch",
      ],
    },
    {
      group: "Databases",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      group: "AI Systems",
      items: [
        "LLM integrations",
        "Prompt orchestration",
        "Background jobs",
        "Batching",
        "Rate limiting",
      ],
    },
  ],
  projects: [
    {
      name: "OptifyNow – OTP SaaS Platform",
      description:
        "Scalable OTP delivery system using Node.js, MongoDB, and Socket.IO with payments (Stripe/Crypto), supporting 1,000+ users with 99.9% uptime.",
    },
    {
      name: "VestureMe – AI Virtual Try-On",
      description:
        "GPU-based AI pipeline using PyTorch and FastAPI enabling real-time virtual try-on (5–30s response).",
    },
    {
      name: "HRMS – Workforce System",
      description:
        "ASP.NET MVC HRMS for 10,000+ users with 50% performance improvement.",
    },
  ],
  achievements: [
    "Maintained 99.9%+ system uptime",
    "Reduced deployment failures by 50%",
    "Designed scalable distributed systems",
    "Built production-ready AI backend pipelines",
  ],
  lookingFor: [
    "Senior Backend Engineer roles",
    "Scalable SaaS / AI-driven systems",
    "Remote-first engineering teams",
  ],
  cta: {
    resumeUrl: "/resume.pdf",
    primaryActionText: "Download resume",
    secondaryActionText: "LinkedIn",
  },
};
