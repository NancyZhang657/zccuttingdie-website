import heroBg from '../../assets/images/hero-die-cutting.jpg';

const LOGO_URL = 'https://sc01.alicdn.com/kf/H809175b98cec480ca7cac89df28effe41.png';
const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center py-24 px-6"
      style={{ background: 'var(--surface-void)' }}
      data-component="HeroSection"
    >
      {/* Ken Burns background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Precision die cutting manufacturing"
          className="w-full h-full object-cover ken-burns opacity-40"
          style={{ maxHeight: '700px', objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={LOGO_URL}
            alt="Jinan Zhongcheng Precision Mould Co., Ltd."
            className="h-16 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Label */}
        <p className="section-label mb-6" style={{ color: 'var(--accent)' }}>
          Est. 1994 · 30 Years of Precision Engineering
        </p>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)' }}
        >
          Precision Die Cutting,<br />
          <span style={{ color: 'var(--accent)' }}>Built for Your Production Line</span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
          style={{ color: 'var(--text-secondary-dark)' }}
        >
          30 years manufacturing die-cutting molds for BOBST, Heidelberg, Masterwork &amp; Sanwa —
          trusted by RR Donnelley, LEO Paper Group, and YUTO Group.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request a Quote
          </a>
          <a
            href={ALIBABA_PRODUCTS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-dark"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
