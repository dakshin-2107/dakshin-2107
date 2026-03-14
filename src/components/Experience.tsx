import resume from '../data/resume';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative space-y-10 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-px before:bg-line">
        {resume.experience.map((job, i) => (
          <div key={i} className="pl-8 relative">
            <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-base" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <div>
                <span className="font-semibold text-primary">{job.role}</span>
                <span className="text-dim mx-2">·</span>
                <span className="text-dim">{job.company}</span>
              </div>
              <span className="text-label text-muted font-mono">{job.period}</span>
            </div>
            {job.highlight && (
              <span className="inline-block mb-2 badge">
                {job.highlight}
              </span>
            )}
            <ul className="mt-2 space-y-1.5">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="bullet">
                  <span className="bullet-marker text-label">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
