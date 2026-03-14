import resume from '../data/resume';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-surface">
      <div className="max-w-[var(--width-content)] mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-ui text-muted">
          © {new Date().getFullYear()} {resume.name}
        </p>
        <div className="flex gap-6 text-ui">
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-faint"
          >
            GitHub
          </a>
          <a
            href={resume.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-faint"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="link-faint"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
