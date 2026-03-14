import resume from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          Education
          <span className="flex-1 h-px bg-slate-700" />
        </h2>
        <div className="space-y-4">
          {resume.education.map((edu, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-slate-100">{edu.institution}</p>
                <p className="text-sm text-slate-400">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-sky-400 font-mono">{edu.year}</p>
                <p className="text-sm text-slate-500">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
