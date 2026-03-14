import resume from '../data/resume';
import Section from './Section';

const CATEGORIES: { label: string; key: keyof typeof resume.skills }[] = [
  { label: 'Languages', key: 'languages' },
  { label: 'AI/ML', key: 'aiml' },
  { label: 'Databases', key: 'infrastructure' },
  { label: 'Other', key: 'other' },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {CATEGORIES.map(({ label, key }) => (
          <div key={key}>
            <h3 className="text-ui font-semibold text-accent mb-3 uppercase tracking-widest">
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills[key].map((skill) => (
                <span
                  key={skill}
                  className="badge-skill"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
