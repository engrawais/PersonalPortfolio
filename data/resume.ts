import { Resume } from "@/types/resume";

export const resume: Resume = {
  name: "Muhammad Awais",
  title: "Software Engineering Manager",
  location: "Islamabad, Pakistan",
  email: "awais.cns@gmail.com",
  phone: "+92 331-5669169",
  linkedin: "https://www.linkedin.com/in/muhammadawais-developer/",
  summary: `Dynamic Software Engineer with 14 years of experience driving technical innovation and team excellence across software development projects. Expertise in leading high-performing teams, implementing robust technology strategies, and delivering high-quality solutions aligned with business goals. Strong in Agile, risk analysis, and stakeholder management, fostering cross-functional collaboration to accelerate product life-cycles. Hands-on with .NET, C#, React, and modern web frameworks—focused on performance, scalability, and innovation.`,
  experience: [
    {
      company: "Codonomy",
      role: "Software Engineering Manager",
      location: "Islamabad",
      start: "Nov 2023",
      end: "Present",
      bullets: [
        "Collaborated with the CTO to define and execute technical strategy aligned with long-term vision.",
        "Led recruitment, training, and performance management to drive productivity and engineering excellence.",
        "Provided technical guidance across the product life-cycle to ensure innovation, quality, and timely delivery.",
        "Maintained and improved stability, security, and scalability of the tech stack; proactively mitigated risks.",
        "Partnered with product, sales, and support to ensure technology solutions met business and market needs."
      ],
      stack: [".NET", "C#", "React", "Azure", "Docker", "CI/CD"]
    },
    {
      company: "Remotebase",
      role: "Senior Software Engineer",
      location: "Remote",
      start: "Jan 2022",
      end: "Nov 2023",
      bullets: [
        "Developed and maintained web applications using C#, Web API, JavaScript, and jQuery.",
        "Applied OOP and design patterns for scalable, maintainable solutions.",
        "Built dynamic, interactive UI components with Angular 17.",
        "Practiced TDD with robust unit tests; hosted on IIS.",
        "Worked in Agile (Scrum) with Git for version control and code integrity."
      ],
      stack: ["C#", "Web API", "Angular 17", "TDD", "IIS", "Git"]
    },
    {
      company: "Cloudtek",
      role: "Software Engineer",
      location: "Islamabad",
      start: "Jan 2020",
      end: "Jan 2022",
      bullets: [
        "Delivered solutions for 12–15 clients across diverse architectures and frameworks.",
        "Led teams of 5–10 engineers; drove Agile SDLC practices and Jira-based tracking.",
        "Owned project setup via Jira, Slack, and Azure Boards; facilitated standups and retros.",
        "Conducted technical defenses with clients and onboarded projects/environment.",
        "Implemented Clean Architecture, N-Layer, Options Pattern; enforced code quality with SonarQube and NUnit.",
        "Set up GitHub Actions, Docker, CI/CD; developed job worker services and Camunda (Zeebe Client) APIs.",
        "Built apps with .NET 6 and Angular 17; integrated Azure Key Vault, OAuth/JWT auth.",
        "Used AWS Lambda, QuickSight, CloudWatch, API Gateway; mixed LINQ and stored procedures."
      ],
      stack: [".NET 6", "Angular 17", "Camunda (Zeebe)", "Docker", "CI/CD", "Azure", "AWS"]
    },
    {
      company: "Computer & Networking Services",
      role: "Software Developer",
      location: "Islamabad",
      start: "Jan 2017",
      end: "Dec 2019",
      bullets: [
        "Built HRMS with Razor Pages, MVC, SQL, Web & WinForms, and REST APIs.",
        "Developed background services in C#; practiced TDD with NUnit.",
        "Frontend with HTML/JS/jQuery/Ajax, Bootstrap 4, ADO.NET, LINQ.",
        "Created Windows Services utilities; authored Software Development Plans.",
        "Deployed to VPS/IIS."
      ],
      stack: ["C#", "ASP.NET MVC", "WinForms", "SQL Server", "Bootstrap"]
    },
    {
      company: "Computer & Networking Services",
      role: "Technical Project Manager",
      location: "Islamabad",
      start: "Jan 2012",
      end: "Dec 2016",
      bullets: [
        "Drafted SDPs (scope, constraints, limitations, flows, layouts).",
        "Prepared budgets per scope/resources; tracked execution vs. budget.",
        "Reported status, strategy, and adjustments; managed vendor contracts.",
        "Applied industry best practices and standards; measured performance for continuous improvement."
      ],
      stack: ["PMBOK/Agile", "Budgeting", "Vendor Management"]
    }
  ],
  education: [
    {
      school: "COMSATS University Islamabad",
      degree: "Bachelors in Computer Engineering",
      start: "2007",
      end: "2012"
    }
  ],
  skills: [
    {
      group: "Backend & Platforms",
      items: [".NET 6", "ASP.NET", "C#", "Web API", "Windows Services", "IIS", "Azure", "AWS", "GCP", "Docker", "CI/CD"]
    },
    {
      group: "Frontend",
      items: ["React 18", "Angular 17", "Next.js", "TypeScript", "HTML", "CSS/SASS/LESS", "RxJS", "jQuery", "Bootstrap 4/5"]
    },
    {
      group: "Databases",
      items: ["SQL Server", "Azure Cosmos DB", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      group: "Security & Auth",
      items: ["OAuth 2.0", "JWT", "Authentication/Authorization", "Azure Key Vault", "Active Directory", "IAM"]
    },
    {
      group: "DevOps & Quality",
      items: ["Git", "GitHub Actions", "Bitbucket", "Azure Boards/Pipelines", "Jenkins", "SonarQube", "TDD", "NUnit"]
    },
    {
      group: "Workflow/Orchestration",
      items: ["Camunda (Zeebe Client)"]
    },
    {
      group: "Programming Languages",
      items: ["C#", "JavaScript/TypeScript", "Python", "Java", "Ruby", "SQL"]
    },
    {
      group: "Other",
      items: ["XML", "REST", "SOAP", "ECMAScript", "Jira/Kanban", "UI/UX basics", "Data-driven decision making", "Cross-functional collaboration"]
    }
  ],
  cta: {
    resumeUrl: "/resume.pdf",
    primaryActionText: "Download Resume",
    secondaryActionText: "Connect on LinkedIn"
  }
};