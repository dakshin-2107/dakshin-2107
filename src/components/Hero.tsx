import resume from '../data/resume';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sky-400 text-sm font-mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-2">
          {resume.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400 mb-6">
          {resume.title}
        </h2>
        <p className="text-slate-400 max-w-xl leading-relaxed mb-10">
          {resume.summary}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-sky-400 text-sky-400 rounded text-sm hover:bg-sky-400/10 transition-colors"
          >
            GitHub
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-sky-400 text-sky-400 rounded text-sm hover:bg-sky-400/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="px-5 py-2.5 bg-sky-400 text-slate-900 rounded text-sm font-medium hover:bg-sky-300 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
