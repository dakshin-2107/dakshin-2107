const resume: ResumeData = {
  name: 'Dakshin',
  title: 'Sr. Software Developer',
  blog: 'https://github.com/dakshin-2107',
  summary: `I'm a full-stack developer with 4 years of experience building scalable end to end web-based solutions with
    proficiency in Java/Spring, Go, Python and React. Proven track record of integrating AI/ML services to
    automate manual workflows, reducing user task-time by 60%.`,
  contact: {
    github: 'https://github.com/dakshin-2107',
    linkedin: 'https://www.linkedin.com/in/dak-shin/',
    email: 'dakshinsa2107@gmail.com',
  },
  skills: {
    languages: ['Python', 'Java', 'Spring boot', 'GO', 'Typescript', 'Node.js', 'React'],
    infrastructure: ['PostgresSQL', 'MongoDB', 'Redis'],
    aiml: ['LLMs(Claude,GPT-5,Gemini)', 'Claude Code', 'AI Agents', 'Agent Orchestration', 'RAG', 'MCP', 'Context Engineering', 'LangGraph'],
    other: ['AWS', 'Docker', 'CI/CD', 'Prometheus', 'Grafana'],
  },
  experience: [
    {
      company: 'Applied Materials',
      role: 'Senior Software Developer',
      period: 'Jan 2025 - Present',
      bullets: [
        `Architected a generic-based LRU caching provider using redis, achieving a throughput of 10,000+ RPS for a REST API and reducing database load by 75%`,
        `Delivered an end to end error-code dashboard (Java/Spring, ReactJS, MySQL, MongoDB) along with a productiongrade
        RAG pipeline using Weaviate and Claude Sonnet, to index unstructured error documentation, reducing
        process engineer troubleshooting time by 50% via automated semantic search and response generation.`,
        `Designed a modular and configurable rules framework powering high fidelity execution plan screens, allowing
        seamless addition/removal of editability rules, reducing development efforts by 25+ hours.`,
        `Enhanced the testing framework with user action recording & script generation, reducing manual testing, with 30%
        improvement in code coverage and easier adoption of test driven development.`
      ],
    },
    {
      company: 'Applied Materials',
      role: 'Software Developer',
      period: 'Aug 2022 - Dec 2024',
      bullets: [
        `Engineered and maintained self-hosted enterprise systems using Spring Boot, optimizing on-premise server resources
        with 99.9% service availability.`,
        `Developed framework improvement by creating 35+ resuable and extensible React components, improving efficiency and saving 50+ hours of development time. Authored 20+ framework unit tests in JUnit/Mockito, reducing critical bugs by 30% per month.`,
      ],
      highlight: 'Rookie of the Year 2023',
    },
    {
      company: 'Ellipsonic',
      role: 'Backend Intern',
      period: 'Aug 2021 - Sep 2021',
      bullets: [
        `Developed 7+ RESTful API endpoints in Python/Django using Postman, implemented secure user authentication
        and authorization flows by integrating Firebase.`,
        `Optimized SQL query execution plans and integrated ORM library to support CRUD operations resulting in a 30%
        decrease in execution time.`,
      ],
    },
  ],
  projects: [
    {
      name: 'Splitzy',
      tech: ['Gin/Go', 'React/TypeScript', 'Redis', 'WebSockets', 'Prometheus', 'Grafana'],
      description: [
        `An end to end collaborative bill-splitting application, allowing multi-user sessions for faster individual item resolutions
        and tally computation`,
        `Integrated with Google Gemini API for intelligent receipt parsing, automating the extraction of itemized bill items
        from user uploaded images eliminating manual data entry.`,
        `Powered by an event-driven architecture with live tally calculations and real-time state synchronization via websockets,
        along with an automated CI/CD testing/deployment via GitHub Actions and monitoring using Prometheus/Grafana.`
      ],
      github: 'https://github.com/dakshin-2107/BillSplitterLite',
      liveUrl: 'https://github.com/dakshin-2107/BillSplitterLite',
    },
  ],
  education: [
    {
      institution: 'BNM Institute of Technology',
      degree: 'BE',
      year: '2022',
      grade: 'GPA: 8.7',
    },
  ],
};

export default resume;

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  highlight?: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string[];
  github?: string;
  liveUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  blog: string;
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: {
    languages: string[];
    infrastructure: string[];
    aiml: string[];
    other: string[];
  };
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
}