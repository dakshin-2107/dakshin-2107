interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-[var(--width-content)] mx-auto">
        <h2 className="text-heading font-bold text-primary mb-10 flex items-center gap-4">
          {title}
          <span className="flex-1 h-px bg-line" />
        </h2>
        {children}
      </div>
    </section>
  );
}
