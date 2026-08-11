import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

const slides = [
  {
    image: 'https://sc04.alicdn.com/kf/A6d1184c19bb34453927f5a9490c580ee1.jpg',
    labelEn: 'Est. 1994 · Jinan, China',
    labelZh: '创立于1994年 · 中国济南',
    titleEn: 'We manufacture die-cutting tools to keep your automatic die-cutting machine running at full speed.',
    titleZh: '我们制造让您的自动模切机全速运转的模切工具。',
    subEn: 'Sandwich cutting dies, stripping tools, blanking tools, and engraving dies precision-built for BOBST, Heidelberg, Masterwork & Sanwa — trusted by packaging plants across three continents.',
    subZh: '三明治刀模、清废工具、分盒工具及电雕版，精准适配BOBST、海德堡、长荣MK、三和——全球三大洲包装工厂的信赖之选。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/Af48914e40109426d8a81a6cfaaa34cd93.jpg',
    labelEn: 'Precision & Innovation',
    labelZh: '精密与创新',
    titleEn: 'Precision meets innovation with ZC cutting edge solutions.',
    titleZh: '精密与创新的完美结合——ZC尖端解决方案。',
    subEn: 'Every die assembled by hand. Every detail verified.',
    subZh: '每一套刀模，手工精装，逐一核验。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/A682f3864e4c8452c980ab05b8b838acav.jpg',
    labelEn: 'Quality Control',
    labelZh: '出厂质检',
    titleEn: 'Zero unplanned downtime. Guaranteed.',
    titleZh: '零计划外停机，这是我们的承诺。',
    subEn: '30 years of refining die architecture across pharmaceuticals, tobacco, food, cosmetics, and electronics packaging. Precision that speaks for itself.',
    subZh: '三十年深耕医药、烟草、食品、化妆品及电子包装领域，以精度说话。',
  },
];

export default function Hero() {
  const { t, lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    /* 
      aspect-ratio 16/7 keeps the proportions locked at any viewport width.
      min/max-height prevents extremes on very wide or very narrow screens.
      overflow-hidden clips the images cleanly.
    */
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '560px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-component="HeroSection"
    >
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={lang === 'zh' ? s.titleZh : s.titleEn}
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Left gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(95deg, rgba(20,15,10,0.86) 0%, rgba(20,15,10,0.58) 52%, rgba(20,15,10,0.12) 100%)',
            }}
          />
          {/* Orange bottom accent */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '4px', background: 'var(--accent)' }} />
        </div>
      ))}

      {/* Text — percentage padding + clamp font sizes scale with viewport */}
      <div
        className="absolute inset-0 flex flex-col justify-center z-10"
        style={{ padding: '0 5% 3%' }}
      >
        <div style={{ maxWidth: '55%', minWidth: '280px' }}>
          <p
            key={`label-${current}`}
            className="section-label flex items-center gap-2"
            style={{
              color: 'var(--accent)',
              marginBottom: '2%',
              animation: 'fadeUp 0.5s ease forwards',
            }}
          >
            <span style={{ display: 'inline-block', width: '24px', height: '3px', background: 'var(--accent)', flexShrink: 0 }} />
            {lang === 'zh' ? slide.labelZh : slide.labelEn}
          </p>

          <h1
            key={`title-${current}`}
            style={{
              fontFamily: 'var(--font-display)',
              color: '#FFFFFF',
              fontWeight: 400,
              fontSize: 'clamp(1.2rem, 2.8vw, 2.8rem)',
              lineHeight: 1.1,
              marginBottom: '1.5%',
              animation: 'fadeUp 0.6s ease 0.1s both',
            }}
          >
            {lang === 'zh' ? slide.titleZh : slide.titleEn}
          </h1>

          <p
            key={`sub-${current}`}
            style={{
              color: 'rgba(255,255,255,0.76)',
              fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)',
              lineHeight: 1.6,
              marginBottom: '3%',
              animation: 'fadeUp 0.6s ease 0.2s both',
            }}
          >
            {lang === 'zh' ? slide.subZh : slide.subEn}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={ALIBABA_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)', padding: 'clamp(8px,1vw,14px) clamp(12px,1.8vw,28px)' }}>
              {t.hero_cta1}
            </a>
            <a href={ALIBABA_PRODUCTS} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark"
              style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)', padding: 'clamp(8px,1vw,14px) clamp(12px,1.8vw,28px)' }}>
              {t.hero_cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev} aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-150 hover:scale-110"
        style={{ width: '5%', maxWidth: '44px', minWidth: '32px', aspectRatio: '1', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-150 hover:scale-110"
        style={{ width: '5%', maxWidth: '44px', minWidth: '32px', aspectRatio: '1', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
        <ChevronRight size={18} />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-4 z-20 flex items-center gap-4" style={{ left: '5%' }}>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? '28px' : '8px',
                height: '4px',
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.35s ease',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '1px' }}>
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
