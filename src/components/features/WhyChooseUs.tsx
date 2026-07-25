import { motion } from 'framer-motion';
import factoryPrecisionImg from '../../assets/images/factory-precision.jpg';
import qualityImg from '../../assets/images/quality-inspection.jpg';
import patentsImg from '../../assets/images/patents-innovation.jpg';
import oemImg from '../../assets/images/oem-custom.jpg';
import SectionHeading from '../common/SectionHeading';

const pillars = [
  {
    id: 'p1',
    headline: '30 Years of Precision',
    body: 'Established in 1994, Zhongcheng has spent three decades refining die-cutting technology across pharmaceuticals, cigarettes, cosmetics, food, and electronics packaging.',
    image: factoryPrecisionImg,
    alt: 'Precision manufacturing factory floor',
    imageLeft: true,
  },
  {
    id: 'p2',
    headline: 'Zero Unplanned Downtime',
    body: 'Every die ships with dimensional verification. Our 5–10 QC inspectors test each mold before dispatch. No surprises on your production floor.',
    image: qualityImg,
    alt: 'Quality inspection of industrial components',
    imageLeft: false,
  },
  {
    id: 'p3',
    headline: '20+ National Patents',
    body: 'Our 31–40 R&D staff continuously develop new die architectures. The result: cutting-edge solutions that keep your line ahead of the market.',
    image: patentsImg,
    alt: 'Innovation and patent development laboratory',
    imageLeft: true,
  },
  {
    id: 'p4',
    headline: 'OEM Flexibility',
    body: 'Custom die architectures for any box geometry. 3-day standard preparation time. From prototype to full production run.',
    image: oemImg,
    alt: 'Custom OEM manufacturing production line',
    imageLeft: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-off)' }}
      data-component="WhyChooseUs"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Why Zhongcheng"
          title="Precision That Speaks for Itself"
          subtitle="Four capabilities that define our position as the technical choice for packaging manufacturers worldwide."
          center
        />

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
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full object-cover"
                  style={{ maxHeight: '340px', objectPosition: 'center' }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)' }}
                >
                  {p.headline}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
