import { useState, type ReactNode } from 'react';
import { Send, MessageCircle, Phone, QrCode, ChevronUp } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://wa.me/8615066159371';
const WHATSAPP = 'https://wa.me/8615066159371';
const PHONE = '+8615066159371';
const PHONE_DISPLAY = '+86 150 6615 9371';

interface RailItem {
  key: string;
  icon: ReactNode;
  label: string;
  href?: string;
  hoverContent?: 'phone' | 'wechat';
}

export default function QuoteRail() {
  const { t } = useLang();
  const [hovered, setHovered] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setShowTop(window.scrollY > 600), { passive: true });
  }

  const items: RailItem[] = [
    { key: 'quote', icon: <Send size={19} />, label: t.rail_quote, href: ALIBABA_CONTACT },
    { key: 'whatsapp', icon: <MessageCircle size={19} />, label: t.rail_whatsapp, href: WHATSAPP },
    { key: 'phone', icon: <Phone size={19} />, label: t.rail_phone, hoverContent: 'phone' },
    { key: 'wechat', icon: <QrCode size={19} />, label: t.rail_wechat, hoverContent: 'wechat' },
  ];

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col"
      data-component="QuoteRail"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className="relative"
          onMouseEnter={() => setHovered(item.key)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-16 h-16 transition-colors duration-150"
              style={{
                background: hovered === item.key ? 'var(--accent-hover)' : 'var(--accent)',
                color: '#fff',
                borderBottom: '1px solid rgba(0,0,0,0.2)',
              }}
            >
              {item.icon}
              <span className="text-[10px] mt-1 font-medium leading-none text-center px-1">{item.label}</span>
            </a>
          ) : (
            <div
              className="flex flex-col items-center justify-center w-16 h-16 cursor-pointer transition-colors duration-150"
              style={{
                background: hovered === item.key ? 'var(--accent)' : 'var(--surface-mid)',
                color: hovered === item.key ? '#fff' : 'var(--text-primary-dark)',
                borderBottom: '1px solid var(--border-dark)',
              }}
            >
              {item.icon}
              <span className="text-[10px] mt-1 font-medium leading-none text-center px-1">{item.label}</span>
            </div>
          )}

          {/* Hover flyout */}
          {hovered === item.key && item.hoverContent === 'phone' && (
            <div
              className="absolute right-full top-0 mr-2 px-4 py-3 whitespace-nowrap"
              style={{ background: 'var(--surface-mid)', border: '1px solid var(--border-dark)', borderRadius: '2px' }}
            >
              <p className="text-xs mb-1" style={{ color: 'var(--text-secondary-dark)' }}>{t.contact_phone_label}</p>
              <a href={`tel:${PHONE}`} className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{PHONE_DISPLAY}</a>
            </div>
          )}
          {hovered === item.key && item.hoverContent === 'wechat' && (
            <div
              className="absolute right-full top-0 mr-2 px-4 py-3 whitespace-nowrap text-center"
              style={{ background: 'var(--surface-mid)', border: '1px solid var(--border-dark)', borderRadius: '2px' }}
            >
              <p className="text-xs mb-1" style={{ color: 'var(--text-secondary-dark)' }}>WeChat / WhatsApp</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{PHONE_DISPLAY}</p>
            </div>
          )}
        </div>
      ))}

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center w-16 h-12 transition-colors duration-150"
          style={{ background: 'var(--surface-mid)', color: 'var(--text-primary-dark)', borderTop: '1px solid var(--border-dark)' }}
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
