import heroBg from '../../assets/images/hero-die-cutting.jpg';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center px-6"
      style={{ background: 'var(--surface-off)', paddingTop: '150px', paddingBottom: '100px', minHeight: '640px' }}
      data-component="HeroSection"
    >
      {/* Background image, right-aligned, light wash so dark text stays readable */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Precision die cutting manufacturing"
          className="w-full h-full object-cover ken-burns"
          style={{ objectPosition: 'right center', opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(250,246,241,0.97) 0%, rgba(250,246,241,0.9) 42%, rgba(250,246,241,0.55) 100%)' }}
        />
        {/* Orange accent diagonal stripe */}
        <div
          className="absolute"
          style={{
            top: 0, bottom: 0, right: '-4%',
            width: '10px',
            background: 'var(--accent)',
            transform: 'skewX(-8deg)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <p className="section-label mb-5 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
          <span className="accent-bar" />
          {t.hero_label}
        </p>

        {/* Bold Glenmore-style statement headline */}
        <h1
          className="text-4xl md:text-6xl leading-[1.08] mb-7 max-w-3xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
        >
          {t.hero_title}
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          style={{ color: 'var(--text-secondary-light)' }}
        >
          {t.hero_sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={ALIBABA_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.hero_cta1}
          </a>
          <a href={ALIBABA_PRODUCTS} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
            {t.hero_cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
