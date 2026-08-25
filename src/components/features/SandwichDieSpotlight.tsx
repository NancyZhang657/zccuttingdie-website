import sandwichImg from '../../assets/images/sandwich-die-showcase.jpg';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://wa.me/8615066159371';

export default function SandwichDieSpotlight() {
  const { t } = useLang();

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-light)' }}
      data-component="SandwichDieSpotlight"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Image — 60% on desktop */}
        <div className="w-full md:w-[58%] overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <img
            src={sandwichImg}
            alt="Precision sandwich die cutting mold close-up"
            className="w-full object-cover"
            style={{ maxHeight: '480px', objectPosition: 'center' }}
          />
        </div>

        {/* Text panel — 40% on desktop */}
        <div className="w-full md:w-[42%]">
          <p className="section-label mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
            <span className="accent-bar" />
            {t.sandwich_label}
          </p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-5"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
          >
            {t.sandwich_title}
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary-light)' }}>
            {t.sandwich_body}
          </p>

          {/* Spec tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {t.sandwich_specs.map((s) => (
              <span key={s} className="spec-tag">{s}</span>
            ))}
          </div>

          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            {t.sandwich_cta}
          </a>
        </div>
      </div>
    </section>
  );
}
