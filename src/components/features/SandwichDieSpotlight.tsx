import sandwichImg from '../../assets/images/sandwich-die-showcase.jpg';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';

const specs = [
  'Speed: up to 9,000 cuts/hr (BOBST ideal conditions)',
  'Material: HSS + precision-ground board',
  'Compat: BOBST · Masterwork · Heidelberg',
  'Standard prep: 3 days',
];

export default function SandwichDieSpotlight() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-void)' }}
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
          <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>Flagship Product</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)' }}
          >
            Sandwich Die —<br />The German-Quality Choice
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary-dark)' }}>
            Our sandwich die system delivers superior cut quality at the highest machine speeds.
            Precision-machined channels, interchangeable knife strips, and seamless compatibility
            with leading international platforms.
          </p>

          {/* Spec tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {specs.map((s) => (
              <span key={s} className="spec-tag">{s}</span>
            ))}
          </div>

          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Get Sandwich Die Quote
          </a>
        </div>
      </div>
    </section>
  );
}
