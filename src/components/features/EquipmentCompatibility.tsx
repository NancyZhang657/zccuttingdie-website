import equipBg from '../../assets/images/equipment-workshop.jpg';
import SectionHeading from '../common/SectionHeading';

const equipment = ['BOBST', 'Heidelberg', 'Masterwork (MK)', 'Sanwa', 'ETERNA'];

export default function EquipmentCompatibility() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'var(--surface-dark)' }}
      data-component="EquipmentCompatibility"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={equipBg}
          alt="Industrial manufacturing workshop"
          className="w-full h-full object-cover"
          style={{ maxHeight: '700px', opacity: 0.18 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          label="Compatible With Your Equipment"
          title="Engineered for the World's Leading Die-Cutting Machines"
          subtitle="From BOBST to Heidelberg, Masterwork to Sanwa — our dies are precision-manufactured to exact tolerance specs for each platform."
          dark
          center
        />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {equipment.map((name) => (
            <div
              key={name}
              className="px-6 py-3 font-medium text-sm"
              style={{
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-btn)',
                color: 'var(--text-primary-dark)',
                background: 'rgba(255,255,255,0.05)',
                letterSpacing: '0.3px',
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: 'var(--text-secondary-dark)' }}
        >
          Also compatible with Changrong · Sanhe · Guowang · Dayuan · Huatai and all major domestic platforms.
        </p>
      </div>
    </section>
  );
}
