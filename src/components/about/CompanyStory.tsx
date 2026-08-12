import { motion } from 'framer-motion';
import { useLang } from '../../lib/langContext';

const factoryImg = 'https://sc04.alicdn.com/kf/A682f3864e4c8452c980ab05b8b838acav.jpg';

const ALIBABA_PRODUCTS = 'https://jinanzhongcheng.en.alibaba.com/';

export default function CompanyStory() {
  const { t } = useLang();

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-off)' }}
      data-component="CompanyStory"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        <motion.div
          className="w-full md:w-[42%] overflow-hidden relative"
          style={{ borderRadius: 'var(--radius-card)' }}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src={factoryImg}
            alt="Zhongcheng factory in Jinan, China"
            className="w-full object-cover"
            style={{ maxHeight: '460px', objectPosition: 'center' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-2"
            style={{ background: 'var(--accent)' }}
          />
        </motion.div>

        {/* Story text */}
        <motion.div
          className="w-full md:w-[58%]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="section-label mb-4 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
            <span className="accent-bar" />
            {t.story_label}
          </p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
          >
            {t.story_title}
          </h2>

          <div className="space-y-4 mb-8">
            {t.story_body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
                {para}
              </p>
            ))}
          </div>

          <a
            href={ALIBABA_PRODUCTS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
            style={{ color: 'var(--accent)' }}
          >
            {t.story_cta} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
