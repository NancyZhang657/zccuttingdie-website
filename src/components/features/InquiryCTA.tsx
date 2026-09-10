import inquiryBg from '../../assets/images/inquiry-cta-bg.jpg';

const WHATSAPP_CONTACT = 'https://wa.me/8613402211941';

export default function InquiryCTA() {
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
          className="w-full h-full object-cover"
          style={{ opacity: 0.06, maxHeight: '500px' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>
          Ready to Optimize Your Line?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)' }}
        >
          Ready to Optimize Your Die-Cutting Line?
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-light)' }}>
          Send us your specifications — we'll respond within 24 hours with a tailored quote and technical recommendation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={WHATSAPP_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
Start an Inquiry on WhatsApp
          </a>
        </div>


      </div>
    </section>
  );
}
