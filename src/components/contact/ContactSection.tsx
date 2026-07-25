import { Phone, MessageCircle } from 'lucide-react';
import ContactButton from './ContactButton';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const PHONE = '+8615066159371';
const PHONE_DISPLAY = '+86 150 6615 9371';
const WHATSAPP = 'https://wa.me/8615066159371';

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section
      className="py-20 px-6 text-center"
      style={{ background: 'var(--surface-void)' }}
      data-component="ContactSection"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>{t.contact_label}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)' }}>
          {t.contact_title}
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
          {t.contact_sub}
        </p>

        {/* Phone / WeChat / WhatsApp block */}
        <div
          className="inline-flex flex-col items-center gap-2 mb-8 px-6 py-4"
          style={{ border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)', background: 'rgba(255,255,255,0.04)' }}
        >
          <p className="section-label" style={{ color: 'var(--text-secondary-dark)' }}>{t.contact_phone_label}</p>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-xl font-semibold"
            style={{ color: 'var(--text-primary-dark)', fontFamily: 'var(--font-display)' }}
          >
            <Phone size={18} />
            {PHONE_DISPLAY}
          </a>
          <p className="text-xs" style={{ color: 'var(--text-secondary-dark)' }}>
            📱 WeChat · WhatsApp · Call — same number
          </p>
          <p className="text-xs" style={{ color: 'var(--accent)' }}>✓ {t.contact_response}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm text-white rounded-sm"
            style={{ background: '#25D366', borderRadius: 'var(--radius-btn)' }}
          >
            <MessageCircle size={16} />
            WhatsApp / WeChat
          </a>
          <ContactButton />
          <a href={ALIBABA_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
            {t.contact_alibaba}
          </a>
        </div>
      </div>
    </section>
  );
}
