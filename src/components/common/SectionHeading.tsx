interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, dark = false, center = false }: SectionHeadingProps) {
  const labelColor = dark ? 'text-[var(--text-label-dark)] border-[var(--border-dark)]' : 'text-[var(--accent)] border-[var(--border-light)]';
  const titleColor = dark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]';
  const subtitleColor = dark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]';
  const align = center ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${align}`} data-component="section-heading">
      {label && (
        <span className={`section-label inline-block mb-4 pb-1 border-b ${labelColor}`}>
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${titleColor}`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
