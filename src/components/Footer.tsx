import resume from '../data/resume';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {resume.name}
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
