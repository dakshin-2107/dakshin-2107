import resume from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          Projects
          <span className="flex-1 h-px bg-slate-700" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {resume.projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col hover:border-sky-400/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-100">{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-sky-400 transition-colors text-xs"
                    aria-label="GitHub link"
                  >
                    ↗
                  </a>
                )}
              </div>
              <ul className="space-y-1.5 flex-1 mb-4">
                {project.description.map((line, j) => (
                  <li key={j} className="text-sm text-slate-400 flex gap-2">
                    <span className="text-sky-400 mt-0.5 shrink-0">▸</span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-sky-400/10 text-sky-400 border border-sky-400/20 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
