import heroBg from '../../assets/images/hero-die-cutting.jpg';
import { useLang } from '../../lib/langContext';

const LOGO_URL = 'https://sc04.alicdn.com/kf/Ad2527bc70a8944bd81317d2385e11400M.jpg';
const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ background: 'var(--surface-void)', paddingTop: '140px', paddingBottom: '96px', minHeight: '600px' }}
      data-component="HeroSection"
    >
      {/* Ken Burns background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Precision die cutting manufacturing"
          className="w-full h-full object-cover ken-burns"
          style={{ maxHeight: '700px', objectPosition: 'center', opacity: 0.38 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.88) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={LOGO_URL}
            alt="Jinan Zhongcheng Precision Mould Co., Ltd."
            className="h-24 object-contain px-4 py-3"
            style={{ background: '#FFFFFF', borderRadius: '6px' }}
          />
        </div>

        <p className="section-label mb-5" style={{ color: 'var(--accent)' }}>
          {t.hero_label}
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)' }}
        >
          {t.hero_title1}<br />
          <span style={{ color: 'var(--accent)' }}>{t.hero_title2}</span>
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
          style={{ color: 'var(--text-secondary-dark)' }}
        >
          {t.hero_sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={ALIBABA_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.hero_cta1}
          </a>
          <a href={ALIBABA_PRODUCTS} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
            {t.hero_cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
