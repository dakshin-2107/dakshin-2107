import resume from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          Experience
          <span className="flex-1 h-px bg-slate-700" />
        </h2>
        <div className="relative space-y-10 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-px before:bg-slate-700">
          {resume.experience.map((job, i) => (
            <div key={i} className="pl-8 relative">
              <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-slate-900" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="font-semibold text-slate-100">{job.role}</span>
                  <span className="text-slate-400 mx-2">·</span>
                  <span className="text-slate-400">{job.company}</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">{job.period}</span>
              </div>
              {job.highlight && (
                <span className="inline-block mb-2 text-xs px-2 py-0.5 bg-sky-400/10 text-sky-400 border border-sky-400/30 rounded">
                  {job.highlight}
                </span>
              )}
              <ul className="mt-2 space-y-1.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-slate-400 flex gap-2">
                    <span className="text-sky-400 mt-0.5 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
