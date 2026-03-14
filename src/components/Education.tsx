import resume from '../data/resume';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
          {resume.education.map((edu, i) => (
            <div
              key={i}
              className="card px-6 py-4 flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-primary">{edu.institution}</p>
                <p className="text-ui text-dim">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-ui text-accent font-mono">{edu.year}</p>
                <p className="text-ui text-muted">{edu.grade}</p>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
