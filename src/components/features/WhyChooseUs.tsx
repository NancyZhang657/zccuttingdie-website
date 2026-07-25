import { motion } from 'framer-motion';
import factoryPrecisionImg from '../../assets/images/factory-precision.jpg';
import qualityImg from '../../assets/images/quality-inspection.jpg';
import patentsImg from '../../assets/images/patents-innovation.jpg';
import oemImg from '../../assets/images/oem-custom.jpg';
import SectionHeading from '../common/SectionHeading';
import { useLang } from '../../lib/langContext';

export default function WhyChooseUs() {
  const { t } = useLang();

  const pillars = [
    { id: 'p1', headline: t.why_p1_title, body: t.why_p1_body, image: factoryPrecisionImg, alt: 'Precision manufacturing factory floor', imageLeft: true },
    { id: 'p2', headline: t.why_p2_title, body: t.why_p2_body, image: qualityImg, alt: 'Quality inspection of industrial components', imageLeft: false },
    { id: 'p3', headline: t.why_p3_title, body: t.why_p3_body, image: patentsImg, alt: 'Innovation and patent development laboratory', imageLeft: true },
    { id: 'p4', headline: t.why_p4_title, body: t.why_p4_body, image: oemImg, alt: 'Custom OEM manufacturing production line', imageLeft: false },
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
