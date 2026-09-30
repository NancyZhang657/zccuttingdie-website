import { useState, useEffect, type MouseEvent } from 'react';
import { MessageCircle, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../../lib/useLang';
import LOGO_URL from '../../assets/zhongcheng-logo-transparent-white.png';

const INQUIRY_ANCHOR = '/#inquiry';
const WHATSAPP_CONTACT = 'https://wa.me/8613402211941';

const navLinks = [
  { key: 'nav_products', href: '/#products' },
  { key: 'nav_about', href: '/#about' },
  { key: 'nav_contact', href: '/#contact' },
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) return;
    event.preventDefault();
    const hash = href.slice(1);
    setMenuOpen(false);

    if (location.pathname === '/') {
      window.history.replaceState(null, '', href);
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    navigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(18, 16, 15, 0.82)' : 'rgba(18, 16, 15, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: scrolled ? '0 8px 24px rgba(0, 0, 0, 0.25)' : 'none',
      }}
      data-component="Navbar"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo - Refined & Proportional */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Zhongcheng Cutting Die home">
          <span
            className="relative block"
            style={{ width: '180px', height: '40px' }}
          >
            <img
              src={LOGO_URL}
              alt="Jinan Zhongcheng Cutting Die"
              className="block w-full h-full object-contain object-left"
            />
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={event => handleAnchorClick(event, href)}
              className="text-sm font-medium tracking-wide transition-colors duration-150"
              style={{ color: 'var(--text-secondary-dark)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary-dark)')}
            >
              {t[key]}
            </a>
          ))}
        </div>

        {/* Right controls - Structured hierarchy */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Primary CTA button */}
          <a
            href={INQUIRY_ANCHOR}
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-150 shadow-sm"
            style={{
              background: 'var(--accent)',
              color: '#ffffff',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            {t.nav_quote}
          </a>

          {/* WhatsApp Direct */}
          <a
            href={WHATSAPP_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-all duration-150"
            style={{
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              color: '#25D366',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#25D366';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)';
              e.currentTarget.style.color = '#25D366';
            }}
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>

          {/* Lang switch pill */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded transition-colors duration-150"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--text-secondary-dark)',
              background: 'rgba(255, 255, 255, 0.03)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.color = 'var(--text-primary-light)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = 'var(--text-secondary-dark)';
            }}
            title={lang === 'en' ? 'Switch to Chinese' : '切换为英文'}
          >
            <Globe size={13} />
            <span>{t.nav_lang}</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          style={{ background: 'rgba(255, 255, 255, 0.05)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text-primary-light)' }} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-3.5 border-t"
          style={{
            background: 'rgba(18, 16, 15, 0.98)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={event => handleAnchorClick(event, href)}
              className="text-sm font-medium py-1"
              style={{ color: 'var(--text-secondary-dark)' }}
            >
              {t[key]}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={INQUIRY_ANCHOR}
              className="text-xs font-bold uppercase tracking-wider text-center py-2.5 rounded"
              style={{ background: 'var(--accent)', color: '#fff' }}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav_quote}
            </a>
            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded"
              style={{
                background: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                color: '#25D366',
              }}
            >
              <MessageCircle size={14} />
              WhatsApp Direct
            </a>
            <button
              onClick={() => {
                setLang(lang === 'en' ? 'zh' : 'en');
                setMenuOpen(false);
              }}
              className="inline-flex items-center justify-center gap-1.5 text-xs py-2 rounded text-left"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-secondary-dark)',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <Globe size={13} />
              <span>{t.nav_lang}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
