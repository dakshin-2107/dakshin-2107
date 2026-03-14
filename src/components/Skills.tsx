import resume from '../data/resume';

const CATEGORIES: { label: string; key: keyof typeof resume.skills }[] = [
  { label: 'Languages', key: 'languages' },
  { label: 'Databases', key: 'databases' },
  { label: 'Frameworks & Tools', key: 'tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          Skills
          <span className="flex-1 h-px bg-slate-700" />
        </h2>
        <div className="space-y-8">
          {CATEGORIES.map(({ label, key }) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-sky-400 mb-3 uppercase tracking-widest">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded border border-slate-700"
                  >
                    {skill}
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
