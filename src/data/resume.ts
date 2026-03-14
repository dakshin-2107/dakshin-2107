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
  link?: string;
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
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: {
    languages: string[];
    databases: string[];
    tools: string[];
  };
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
}

const resume: ResumeData = {
  name: 'Your Name',
  title: 'Your Title',
  summary: 'Your summary goes here.',
  contact: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://linkedin.com/in/your-handle',
    email: 'your@email.com',
  },
  skills: {
    languages: ['Language 1', 'Language 2', 'Language 3'],
    databases: ['Database 1', 'Database 2'],
    tools: ['Tool 1', 'Tool 2', 'Tool 3'],
  },
  experience: [
    {
      company: 'Company Name',
      role: 'Your Role',
      period: 'Month Year – Present',
      bullets: [
        'Accomplishment or responsibility 1.',
        'Accomplishment or responsibility 2.',
      ],
      highlight: 'Optional award or callout',
    },
    {
      company: 'Another Company',
      role: 'Previous Role',
      period: 'Month Year – Month Year',
      bullets: [
        'Accomplishment or responsibility 1.',
        'Accomplishment or responsibility 2.',
      ],
    },
  ],
  projects: [
    {
      name: 'Project Name',
      tech: ['Tech 1', 'Tech 2', 'Tech 3'],
      description: [
        'What the project does.',
        'Technical detail or highlight.',
      ],
      link: 'https://github.com/your-handle/project',
    },
  ],
  education: [
    {
      institution: 'Your University',
      degree: 'Your Degree',
      year: '20XX',
      grade: 'GPA: X.X',
    },
  ],
};

export default resume;
