import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const slides = [
  {
    image: 'https://sc04.alicdn.com/kf/A682f3864e4c8452c980ab05b8b838acav.jpg',
    labelEn: 'Our Factory',
    titleEn: '3,500 m² Precision Manufacturing Facility',
    subEn: 'Built in Jinan, Shandong — producing die-cutting tools for global packaging plants since 1994.',
    labelZh: '我们的工厂',
    titleZh: '3500平方米精密制造基地',
    subZh: '坐落于山东济南，自1994年起为全球包装企业生产模切工具。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/Af48914e40109426d8a81a6cfaaa34cd93.jpg',
    labelEn: 'Precision Assembly',
    titleEn: 'Every Die Assembled by Hand',
    subEn: 'Ejection rubber precisely placed by our skilled technicians — no shortcuts, no compromises.',
    labelZh: '精密装配',
    titleZh: '每一套刀模，手工精装',
    subZh: '弹力胶条由熟练技术工人逐一精准安装，零妥协，零捷径。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/A6d1184c19bb34453927f5a9490c580ee1.jpg',
    labelEn: 'Quality Control',
    titleEn: 'Verified Before Every Shipment',
    subEn: '5–10 QC inspectors check each die against specification. Zero unplanned downtime — guaranteed.',
    labelZh: '出厂质检',
    titleZh: '每批出厂，逐一核验',
    subZh: '5至10名质检人员按规格逐套检验，确保零计划外停机。',
  },
];

export default function HeroGallery() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '480px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-component="HeroGallery"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <img
            src={s.image}
            alt={lang === 'zh' ? s.titleZh : s.titleEn}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Gradient overlay — left side for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(23,19,16,0.78) 0%, rgba(23,19,16,0.45) 55%, rgba(23,19,16,0.1) 100%)',
            }}
          />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end px-10 pb-12 md:px-16 z-10">
        <div className="max-w-xl">
          <p
            className="section-label mb-3 flex items-center gap-2"
            style={{ color: 'var(--accent)' }}
          >
            <span style={{ display: 'inline-block', width: '28px', height: '3px', background: 'var(--accent)' }} />
            {lang === 'zh' ? slide.labelZh : slide.labelEn}
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontWeight: 400 }}
          >
            {lang === 'zh' ? slide.titleZh : slide.titleEn}
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '420px' }}
          >
            {lang === 'zh' ? slide.subZh : slide.subEn}
          </p>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-colors duration-150"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff',
        }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-colors duration-150"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff',
        }}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '28px' : '8px',
              height: '4px',
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-4 right-10 z-20 text-xs font-medium"
        style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '1px' }}
      >
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
