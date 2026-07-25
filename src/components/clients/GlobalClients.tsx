import { useEffect, useRef, useState } from 'react';
import globalMapImg from '../../assets/images/global-clients-map.jpg';
import SectionHeading from '../common/SectionHeading';

const clients = ['RR Donnelley', 'LEO Paper Group', 'YUTO Group', 'Shengtong Packaging', 'Global Printing'];
const industries = ['Pharmaceuticals', 'Cigarettes', 'Food', 'Cosmetics', 'Electronics'];

const markets = [
  { label: 'Domestic Market', pct: 80 },
  { label: 'North America', pct: 8 },
  { label: 'Middle East', pct: 5 },
  { label: 'Africa', pct: 5 },
  { label: 'Southeast Asia', pct: 2 },
];

function MarketBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: 'var(--text-primary-light)' }}>{label}</span>
        <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border-light)' }}>
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: 'var(--accent)',
            transition: 'width 1s ease-out',
          }}
        />
      </div>
    </div>
  );
}

export default function GlobalClients() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-light)' }}
      data-component="GlobalClients"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Trusted by Industry Leaders"
          title="From Jinan to Global Packaging Plants"
          center
        />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: clients + industries + map */}
          <div className="w-full lg:w-1/2">
            {/* Client names */}
            <div className="flex flex-wrap gap-3 mb-8">
              {clients.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 text-sm font-medium"
                  style={{
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-btn)',
                    color: 'var(--text-primary-light)',
                    background: 'var(--surface-off)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Industries */}
            <p className="section-label mb-3" style={{ color: 'var(--text-caption)' }}>Industries Served</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1 text-xs font-medium"
                  style={{
                    background: 'var(--accent-light)',
                    color: 'var(--accent)',
                    borderRadius: 'var(--radius-btn)',
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>

            {/* Map image */}
            <div className="overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
              <img
                src={globalMapImg}
                alt="Global client distribution map"
                className="w-full object-cover"
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>

          {/* Right: market bars */}
          <div className="w-full lg:w-1/2">
            <p className="section-label mb-6" style={{ color: 'var(--text-caption)' }}>Market Distribution</p>
            {markets.map((m, i) => (
              <MarketBar key={m.label} label={m.label} pct={m.pct} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
