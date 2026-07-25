import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const LOGO_URL = 'https://sc01.alicdn.com/kf/H809175b98cec480ca7cac89df28effe41.png';
const PHONE = '+8615066159371';
const PHONE_DISPLAY = '+86 150 6615 9371';
const WHATSAPP = 'https://wa.me/8615066159371';

const navLinks = [
  { key: 'nav_products', href: '#products' },
  { key: 'nav_about', href: '#about' },
  { key: 'nav_contact', href: '#contact' },
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
      data-component="Navbar"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '64px' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Jinan Zhongcheng Precision Mould"
            className="h-9 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: 'var(--text-secondary-dark)', letterSpacing: '0.3px' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary-dark)')}
            >
              {t[key]}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 text-sm"
            style={{ color: 'var(--text-secondary-dark)' }}
          >
            <Phone size={14} />
            <span>{PHONE_DISPLAY}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium"
            style={{
              background: '#25D366',
              color: '#fff',
              borderRadius: 'var(--radius-btn)',
            }}
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>

          {/* Lang switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-xs font-medium px-3 py-1.5 transition-colors duration-150"
            style={{
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-btn)',
              color: 'var(--text-secondary-dark)',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            {t.nav_lang}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,10,0.97)' }}
        >
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium"
              style={{ color: 'var(--text-secondary-dark)' }}
              onClick={() => setMenuOpen(false)}
            >
              {t[key]}
            </a>
          ))}
          <a href={`tel:${PHONE}`} className="text-sm" style={{ color: 'var(--text-secondary-dark)' }}>
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: '#25D366' }}>
            WhatsApp / WeChat: {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setMenuOpen(false); }}
            className="text-sm text-left"
            style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {t.nav_lang}
          </button>
        </div>
      )}
    </nav>
  );
}
