import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { useLang } from '../../lib/langContext';

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6" style={{ background: 'var(--surface-light)' }} data-component="Testimonials">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label={t.testimonials_label} title={t.testimonials_title} center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 flex flex-col gap-4"
              style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)', background: 'var(--surface-off)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Quote size={20} style={{ color: 'var(--accent)', opacity: 0.7 }} />
              <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-secondary-light)' }}>
                "{item.text}"
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary-light)' }}>{item.name}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-caption)' }}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
