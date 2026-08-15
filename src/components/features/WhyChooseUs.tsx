import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { useLang } from '../../lib/langContext';

// Real factory / product photos (no stock images)
const factoryImg = 'https://sc04.alicdn.com/kf/A682f3864e4c8452c980ab05b8b838acav.jpg';
const assemblyImg = 'https://sc04.alicdn.com/kf/Af48914e40109426d8a81a6cfaaa34cd93.jpg';
const qcImg = 'https://sc04.alicdn.com/kf/A6d1184c19bb34453927f5a9490c580ee1.jpg';
const dieImg = 'https://sc04.alicdn.com/kf/H6eef69bc31724dbfb7591058588adef1j.jpg';

export default function WhyChooseUs() {
  const { t } = useLang();

  const pillars = [
    { id: 'p1', headline: t.why_p1_title, body: t.why_p1_body, image: factoryImg, alt: 'Zhongcheng factory building in Jinan', imageLeft: true },
    { id: 'p2', headline: t.why_p2_title, body: t.why_p2_body, image: qcImg, alt: 'Quality control inspection of die-cutting tools', imageLeft: false },
    { id: 'p3', headline: t.why_p3_title, body: t.why_p3_body, image: dieImg, alt: 'Precision die-cutting mold engineering', imageLeft: true },
    { id: 'p4', headline: t.why_p4_title, body: t.why_p4_body, image: assemblyImg, alt: 'Hand assembly of custom die-cutting tooling', imageLeft: false },
  ];

  return (
    <section className="py-20 px-6" style={{ background: 'var(--surface-off)' }} data-component="WhyChooseUs">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label={t.why_label} title={t.why_title} subtitle={t.why_sub} center />
        <div className="space-y-16 mt-4">
          {pillars.map((p) => (
            <motion.div
              key={p.id}
              className={`flex flex-col ${p.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="w-full md:w-1/2 overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
                <img src={p.image} alt={p.alt} className="w-full object-cover" style={{ maxHeight: '340px', objectPosition: 'center' }} />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)' }}>
                  {p.headline}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
