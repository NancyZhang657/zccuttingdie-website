import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const categoryMeta = [
  { image: 'https://sc04.alicdn.com/kf/H6eef69bc31724dbfb7591058588adef1j.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960408657-1/Die_cutting_mold.html' },
  { image: 'https://sc04.alicdn.com/kf/Hcd49147845ca4d1e88b2f9b04dd8f259w.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959189053-1/Stripping_and_blanking_tools.html' },
  { image: 'https://sc04.alicdn.com/kf/H9ce535bf321645499ff84b6567ba8adem.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960360025-1/Engraving_blade.html' },
  { image: 'https://sc04.alicdn.com/kf/H2d638583cefb45cab73f0c5b3ce34e3aa.png', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959193840-1/Hot_stamping_and_embossing_die.html' },
  { image: 'https://sc04.alicdn.com/kf/He9b0814fa0d44ee88c1ceb0bd5f13b5cF.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959189043-1/Die_making_materials_and_equipment.html' },
  { image: 'https://sc04.alicdn.com/kf/H1e0b6eef0d654767b00ea21c3339525fk.png', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960883216-1/Die_cutting_equipment_and_accessories.html' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ProductCategories() {
  const { t } = useLang();

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-light)' }}
      data-component="ProductCategories"
      id="products"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label mb-3 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
              <span className="accent-bar" />
              {t.services_label}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight max-w-xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
            >
              {t.services_title}
            </h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'var(--border-light)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {t.services.map((svc, i) => (
            <motion.a
              key={svc.name}
              href={categoryMeta[i].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden relative"
              style={{ background: 'var(--surface-light)' }}
              variants={cardVariants}
            >
              <div className="overflow-hidden aspect-[4/3] bg-gray-100 relative">
                <img
                  src={categoryMeta[i].image}
                  alt={svc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(217,96,26,0.5), transparent 60%)' }}
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg mb-2 transition-colors duration-150"
                  style={{ color: 'var(--text-primary-light)', fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  {svc.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary-light)' }}>
                  {svc.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ color: 'var(--accent)' }}
                >
                  {svc.cta}
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
