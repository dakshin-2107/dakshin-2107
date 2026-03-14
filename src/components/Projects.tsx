import resume from '../data/resume';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-6">
          {resume.projects.map((project, i) => (
            <div
              key={i}
              className="card p-6 flex flex-col hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-primary">{project.name}</h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="link-faint text-label" aria-label="GitHub repository">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="link-faint text-label" aria-label="Live site">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <ul className="space-y-1.5 flex-1 mb-4">
                {project.description.map((line, j) => (
                  <li key={j} className="bullet">
                    <span className="bullet-marker">▸</span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="badge"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
