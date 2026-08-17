import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../lib/langContext';

const categoryMeta = [
  { image: 'https://sc04.alicdn.com/kf/Ha65df70cbe6e443a8d78dc5ebe2f63c28.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959529859/Wooden_die.html' },
  { image: 'https://sc04.alicdn.com/kf/Hf792fb32976a4cf98a58612e5fe046f1L.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960508916/Partinax_counter_plate.html' },
  { image: 'https://sc04.alicdn.com/kf/H94aa5f591a6243248c1d8ded953931bfm.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960955578/Sandwich_die.html' },
  { image: 'https://sc04.alicdn.com/kf/Hf068cdcd49184a0094b572e97aff96bbg.jpg', url: 'https://www.alibaba.com/product-detail/Customizable-Size-Steel-Counter-Plate-for_1601697311529.html' },
  { image: 'https://sc04.alicdn.com/kf/Hdcb6072a95a846d5ac7a7565c26d1526v.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959558602/Stripping_tools.html' },
  { image: 'https://sc04.alicdn.com/kf/H4a293ae78b3e45549ea78b35bd95de35v.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959549037/Blanking_tools.html' },
  { image: 'https://sc04.alicdn.com/kf/H2d638583cefb45cab73f0c5b3ce34e3aa.png', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959193840/Hot_stamping_and_embossing_die.html' },
  { image: 'https://sc04.alicdn.com/kf/H9ce535bf321645499ff84b6567ba8adem.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960360025/Engraving_blade.html' },
  { image: 'https://sc04.alicdn.com/kf/He9b0814fa0d44ee88c1ceb0bd5f13b5cF.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959189043/Die_making_materials_and_equipment.html' },
  { image: 'https://sc04.alicdn.com/kf/Af48914e40109426d8a81a6cfaaa34cd93.jpg', url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959198636/Die_cutting_consumables.html' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              style={{
                background: 'var(--surface-light)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-card)',
              }}
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
