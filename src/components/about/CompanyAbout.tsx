import factoryImg from '../../assets/images/factory-exterior.jpg';
import SectionHeading from '../common/SectionHeading';

const stats = [
  { value: '3,500 m²', label: 'Factory Area' },
  { value: '101–200', label: 'Employees' },
  { value: '31–40', label: 'R&D Staff' },
  { value: '20+', label: 'National Patents' },
];

const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CNY', 'CAD', 'AUD'];

export default function CompanyAbout() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-dark)' }}
      data-component="CompanyAbout"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <SectionHeading
            label="Company Profile"
            title="A Manufacturer Built on Three Decades of Innovation"
            subtitle="Since 1994, Jinan Zhongcheng Precision Mould has led the die-cutting industry through technological innovation — serving pharmaceutical, cigarette, food, cosmetics, and electronics packaging clients worldwide."
            dark
          />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4"
                style={{ border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary-dark)', fontFamily: 'var(--font-display)' }}>
                  {s.value}
                </p>
                <p className="text-xs section-label" style={{ color: 'var(--text-secondary-dark)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Export info */}
          <div className="space-y-2 mb-6">
            <p className="text-sm" style={{ color: 'var(--text-secondary-dark)' }}>
              <span className="font-medium" style={{ color: 'var(--text-primary-dark)' }}>Nearest export port:</span> Qingdao
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary-dark)' }}>
              <span className="font-medium" style={{ color: 'var(--text-primary-dark)' }}>Exporting since:</span> 2020
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary-dark)' }}>
              <span className="font-medium" style={{ color: 'var(--text-primary-dark)' }}>Accepted currencies:</span>{' '}
              {currencies.join(' · ')}
            </p>
          </div>
        </div>

        {/* Factory image */}
        <div className="w-full md:w-1/2 overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <img
            src={factoryImg}
            alt="Jinan Zhongcheng factory building"
            className="w-full object-cover"
            style={{ maxHeight: '480px', objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  );
}
