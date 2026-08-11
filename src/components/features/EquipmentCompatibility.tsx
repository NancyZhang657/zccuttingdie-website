import equipBg from '../../assets/images/equipment-workshop.jpg';
import SectionHeading from '../common/SectionHeading';
import { useLang } from '../../lib/langContext';

const equipment = ['BOBST', 'Heidelberg', 'Masterwork (MK)', 'Sanwa', 'ETERNA'];

export default function EquipmentCompatibility() {
  const { t } = useLang();

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'var(--surface-off)' }}
      data-component="EquipmentCompatibility"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={equipBg}
          alt="Industrial manufacturing workshop"
          className="w-full h-full object-cover"
          style={{ maxHeight: '700px', opacity: 0.08 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          label={t.eq_label}
          title={t.eq_title}
          subtitle={t.eq_sub}
          center
        />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {equipment.map((name) => (
            <div
              key={name}
              className="px-6 py-3 font-medium text-sm"
              style={{
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-btn)',
                color: 'var(--text-primary-light)',
                background: 'var(--surface-light)',
                letterSpacing: '0.3px',
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: 'var(--text-secondary-light)' }}
        >
          {t.eq_also}
        </p>
      </div>
    </section>
  );
}
