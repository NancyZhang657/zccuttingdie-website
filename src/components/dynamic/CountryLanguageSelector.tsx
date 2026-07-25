import { useState, useEffect } from 'react';
import { queryByFields } from '../../lib/queryByFields';

const COMPANY_ID = '291975556';

interface Language {
  code: string;
  name: string;
  countryFlagIcon: string;
  url: string;
}

interface ApiResponse {
  countryLanguageList?: {
    value?: {
      languages?: Language[];
    };
  };
}

export default function CountryLanguageSelector() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    queryByFields<ApiResponse>({
      minisiteId: COMPANY_ID,
      fieldNames: 'countryLanguageList',
    })
      .then((data) => {
        const langs = data?.countryLanguageList?.value?.languages ?? [];
        setLanguages(langs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-6" style={{ background: 'var(--surface-off)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-32 rounded animate-pulse" style={{ background: 'var(--border-light)' }} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (languages.length === 0) return null;

  return (
    <section
      className="py-12 px-6"
      style={{ background: 'var(--surface-off)' }}
      data-component="CountryLanguageSelector"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-5" style={{ color: 'var(--text-caption)' }}>
          Available In
        </p>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={lang.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-150"
              style={{
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-btn)',
                color: 'var(--text-primary-light)',
                background: 'var(--surface-light)',
              }}
            >
              {lang.countryFlagIcon && (
                <img src={lang.countryFlagIcon} alt={lang.name} className="w-5 h-4 object-cover" />
              )}
              {lang.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
