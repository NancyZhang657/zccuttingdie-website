import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const LOGO_URL = 'https://sc04.alicdn.com/kf/Abd04c375b27b4694a6aa9e2b5b0076beB.jpg';
const NAV_BG_SOLID = 'rgba(14,13,12,0.97)';
const NAV_BG_TRANSPARENT = 'rgba(14,13,12,0.72)';
const PHONE = '+8615066159371';
const PHONE_DISPLAY = '+86 150 6615 9371';
const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';

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
        background: scrolled ? NAV_BG_SOLID : NAV_BG_TRANSPARENT,
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '2px solid var(--accent)' : `2px solid var(--border-light)`,
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      }}
      data-component="Navbar"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Jinan Zhongcheng Precision Mould"
            className="h-14 object-contain px-2 py-1.5"
            style={{ background: '#FFFFFF', borderRadius: '2px' }}
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
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
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

          {/* Get a Quote button */}
          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-150"
            style={{
              background: 'var(--accent)',
              color: '#fff',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            {t.nav_quote}
          </a>

          {/* Lang switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-xs font-medium px-3 py-1.5 transition-colors duration-150"
            style={{
              border: '1px solid var(--border-dark)',
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
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: NAV_BG_SOLID }}
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
          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wide inline-block px-4 py-2 w-fit"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {t.nav_quote}
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
