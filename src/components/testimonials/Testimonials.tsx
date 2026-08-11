import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

export default function Testimonials() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const items = t.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const goto = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  const current = items[index];

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-off)' }}
      data-component="Testimonials"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label mb-4 flex items-center justify-center gap-3" style={{ color: 'var(--accent)' }}>
          <span className="accent-bar" />
          {t.testimonials_label}
          <span className="accent-bar" />
        </p>
        <h2
          className="text-3xl md:text-4xl leading-tight mb-12"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)', fontWeight: 400 }}
        >
          {t.testimonials_title}
        </h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full"
            >
              <Quote size={32} style={{ color: 'var(--accent)', margin: '0 auto 20px' }} />
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)', fontWeight: 400 }}
              >
                "{current.text}"
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary-dark)' }}>{current.name}</p>
              <p className="text-xs mt-1 section-label" style={{ color: 'var(--accent)' }}>{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => goto(-1)}
            aria-label="Previous testimonial"
            className="w-9 h-9 flex items-center justify-center transition-colors duration-150"
            style={{ border: '1px solid var(--border-dark)', color: 'var(--text-secondary-dark)' }}
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-200"
                style={{
                  width: i === index ? '24px' : '8px',
                  height: '4px',
                  background: i === index ? 'var(--accent)' : 'var(--border-dark)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => goto(1)}
            aria-label="Next testimonial"
            className="w-9 h-9 flex items-center justify-center transition-colors duration-150"
            style={{ border: '1px solid var(--border-dark)', color: 'var(--text-secondary-dark)' }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
