import resume from '../data/resume';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 px-6">
      <div className="max-w-[var(--width-content)] mx-auto w-full">
        <p className="text-accent text-ui font-mono mb-4">Hi, my name is</p>
        <h1 className="text-name font-bold text-primary mb-2">
          {resume.name}
        </h1>
        <h2 className="text-subtitle font-semibold text-dim mb-6">
          {resume.title}
        </h2>
        <p className="text-dim max-w-xl leading-relaxed mb-10">
          {resume.summary}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
