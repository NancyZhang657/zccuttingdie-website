import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';
const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

// 3 real factory/production photos — no stock car images
const slides = [
  {
    image: 'https://sc04.alicdn.com/kf/A682f3864e4c8452c980ab05b8b838acav.jpg',
    labelEn: 'Est. 1994 · Jinan, China',
    labelZh: '创立于1994年 · 中国济南',
    titleEn: 'We manufacture die-cutting tools that keep your line running.',
    titleZh: '我们制造让您的生产线持续运转的模切工具。',
    subEn: 'Sandwich dies, stripping tools, and engraving dies precision-built for BOBST, Heidelberg, Masterwork & Sanwa — trusted by packaging plants across three continents.',
    subZh: '三明治刀模、清废分盒工具、精密电雕版，精准适配BOBST、海德堡、长荣MK、三和——全球三大洲包装工厂的信赖之选。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/Af48914e40109426d8a81a6cfaaa34cd93.jpg',
    labelEn: 'Precision Assembly',
    labelZh: '精密装配',
    titleEn: 'Every die assembled by hand. Every detail verified.',
    titleZh: '每一套刀模，手工精装，逐一核验。',
    subEn: 'Ejection rubber precisely placed by skilled technicians. 5–10 QC inspectors test each mold before dispatch — no surprises on your production floor.',
    subZh: '弹力胶条由熟练技术工人逐一精准安装，5至10名质检员出厂前逐套核验，杜绝生产线意外停机。',
  },
  {
    image: 'https://sc04.alicdn.com/kf/A6d1184c19bb34453927f5a9490c580ee1.jpg',
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

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '640px', height: '90vh', maxHeight: '800px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-component="HeroSection"
    >
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={lang === 'zh' ? slide.titleZh : slide.titleEn}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Left-to-right gradient so text is legible on left side */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(95deg, rgba(23,19,16,0.82) 0%, rgba(23,19,16,0.55) 50%, rgba(23,19,16,0.15) 100%)',
            }}
          />
          {/* Orange bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '4px', background: 'var(--accent)' }}
          />
        </div>
      ))}

      {/* Text content — always on top */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10"
        style={{ paddingTop: '80px' }}
      >
        <div className="max-w-3xl">
          {/* Animated label */}
          <p
            key={`label-${current}`}
            className="section-label mb-5 flex items-center gap-3"
            style={{ color: 'var(--accent)', animation: 'fadeUp 0.5s ease forwards' }}
          >
            <span style={{ display: 'inline-block', width: '32px', height: '3px', background: 'var(--accent)', flexShrink: 0 }} />
            {lang === 'zh' ? slides[current].labelZh : slides[current].labelEn}
          </p>

          {/* Main headline */}
          <h1
            key={`title-${current}`}
            className="text-4xl md:text-6xl leading-[1.08] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#FFFFFF',
              fontWeight: 400,
              animation: 'fadeUp 0.6s ease 0.1s both',
            }}
          >
            {lang === 'zh' ? slides[current].titleZh : slides[current].titleEn}
          </h1>

          {/* Sub-copy */}
          <p
            key={`sub-${current}`}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{
              color: 'rgba(255,255,255,0.78)',
              animation: 'fadeUp 0.6s ease 0.2s both',
            }}
          >
            {lang === 'zh' ? slides[current].subZh : slides[current].subEn}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={ALIBABA_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.hero_cta1}
            </a>
            <a
              href={ALIBABA_PRODUCTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              {t.hero_cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center transition-all duration-150 hover:scale-110"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff',
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center transition-all duration-150 hover:scale-110"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff',
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom controls bar */}
      <div className="absolute bottom-6 left-8 md:left-16 z-20 flex items-center gap-5">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? '32px' : '8px',
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

        {/* Counter */}
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '1px' }}>
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
