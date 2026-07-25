import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

const categories = [
  {
    name: 'Die Cutting Mold',
    image: 'https://sc04.alicdn.com/kf/H6eef69bc31724dbfb7591058588adef1j.jpg',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960408657-1/Die_cutting_mold.html',
    desc: 'Sandwich & wooden cutting dies for all major platforms',
  },
  {
    name: 'Stripping & Blanking Tools',
    image: 'https://sc04.alicdn.com/kf/Hcd49147845ca4d1e88b2f9b04dd8f259w.jpg',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959189053-1/Stripping_and_blanking_tools.html',
    desc: 'High-speed stripping systems up to 9,000 cuts/hr',
  },
  {
    name: 'Engraving Blade',
    image: 'https://sc04.alicdn.com/kf/H9ce535bf321645499ff84b6567ba8adem.jpg',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960360025-1/Engraving_blade.html',
    desc: 'Precision creasing and cutting rule blades',
  },
  {
    name: 'Hot Stamping & Embossing Die',
    image: 'https://sc04.alicdn.com/kf/H2d638583cefb45cab73f0c5b3ce34e3aa.png',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959193840-1/Hot_stamping_and_embossing_die.html',
    desc: 'Magnesium, copper & brass dies for luxury packaging',
  },
  {
    name: 'Die Making Materials & Equipment',
    image: 'https://sc04.alicdn.com/kf/He9b0814fa0d44ee88c1ceb0bd5f13b5cF.jpg',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-959189043-1/Die_making_materials_and_equipment.html',
    desc: 'Pertinax boards, ejection rubber, and consumables',
  },
  {
    name: 'Die Cutting Equipment & Accessories',
    image: 'https://sc04.alicdn.com/kf/H1e0b6eef0d654767b00ea21c3339525fk.png',
    url: 'https://jinanzhongcheng.en.alibaba.com/productgrouplist-960883216-1/Die_cutting_equipment_and_accessories.html',
    desc: 'Accessories and retrofit parts for cutting machines',
  },
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
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-light)' }}
      data-component="ProductCategories"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Product Lines"
          title="Six Core Product Families"
          subtitle="Precision-engineered solutions for every stage of the die-cutting process — from mold to finished box."
          center
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.name}
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden"
              style={{ borderRadius: 'var(--radius-card)', border: '1px solid var(--border-light)' }}
              variants={cardVariants}
            >
              <div className="overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-base font-600 mb-1 transition-colors duration-150"
                  style={{ color: 'var(--text-primary-light)', fontFamily: 'var(--font-body)', fontWeight: 600 }}
                >
                  {cat.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary-light)' }}>
                  {cat.desc}
                </p>
                <span
                  className="inline-block mt-3 text-xs font-500 transition-colors duration-150"
                  style={{ color: 'var(--accent)', fontWeight: 500 }}
                >
                  View Products →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
