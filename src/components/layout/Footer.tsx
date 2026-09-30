import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLang } from '../../lib/useLang';
import LOGO_URL from '../../assets/zhongcheng-logo-transparent-white.png';
import { products } from '../../data/products';

const PHONE = '+8613402211941';
const PHONE_DISPLAY = '+86 134 0221 1941';
const EMAIL = 'zc.zhongcheng009@gmail.com';
const WHATSAPP = 'https://wa.me/8613402211941';

export default function Footer() {
  const { t, lang } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-12 px-6 border-t"
      style={{
        background: 'var(--surface-dark)',
        borderColor: 'var(--border-dark)',
        color: 'var(--text-secondary-dark)',
      }}
      data-component="Footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="inline-block" aria-label="Zhongcheng Cutting Die">
              <span className="relative block" style={{ width: '220px', height: '50px' }}>
                <img
                  src={LOGO_URL}
                  alt="Zhongcheng Cutting Die logo"
                  className="block w-full h-full object-contain object-left"
                />
              </span>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
              {t.footer_desc}
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded"
                style={{ background: '#25D366', color: '#fff' }}
              >
                <MessageCircle size={14} />
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {t.footer_quick_links}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/#products"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--text-secondary-dark)' }}
                >
                  {t.nav_products}
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--text-secondary-dark)' }}
                >
                  {t.nav_about}
                </a>
              </li>
              <li>
                <a
                  href="/#inquiry"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--text-secondary-dark)' }}
                >
                  {t.nav_quote}
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--text-secondary-dark)' }}
                >
                  {t.nav_contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {t.footer_products}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="hover:underline transition-colors line-clamp-1"
                    style={{ color: 'var(--text-secondary-dark)' }}
                  >
                    {lang === 'zh' ? p.nameZh : p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {t.footer_contact_info}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span>{t.footer_address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
                <a href={`tel:${PHONE}`} className="hover:underline" style={{ color: 'var(--text-secondary-dark)' }}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
                <a href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: 'var(--text-secondary-dark)' }}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'var(--text-caption)' }}
        >
          <p>
            © {currentYear} Jinan Zhongcheng Precision Mould Co., Ltd. {t.footer_rights}
          </p>
          <div className="flex items-center gap-6">
            <span>±0.05mm Precision Standard</span>
            <span>·</span>
            <span>ISO Quality Control</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
