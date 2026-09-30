import inquiryBg from '../../assets/images/inquiry-cta-bg.jpg';
import { useLang } from '../../lib/useLang';

const WHATSAPP_CONTACT = 'https://wa.me/8613402211941';
const INQUIRY_ANCHOR = '/#inquiry';

export default function InquiryCTA() {
  const { t } = useLang();

  return (
    <section
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{ background: 'var(--surface-light)' }}
      data-component="InquiryCTA"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={inquiryBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ opacity: 0.06, maxHeight: '500px' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>
          {t.inquiry_label}
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)' }}
        >
          {t.inquiry_title}
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-light)' }}>
          {t.inquiry_sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={INQUIRY_ANCHOR} className="btn-primary">
            {t.inquiry_cta}
          </a>
          <a
            href={WHATSAPP_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-dark"
          >
            {t.contact_whatsapp}
          </a>
        </div>


      </div>
    </section>
  );
}
