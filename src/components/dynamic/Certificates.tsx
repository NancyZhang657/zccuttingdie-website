import { useState, useEffect } from 'react';
import { queryByFields } from '../../lib/queryByFields';

const COMPANY_ID = '291975556';

interface Certificate {
  certificateName: string;
  certificatNo?: string;
  certificateIssuedBy?: string;
  certificateValidityPeriod?: string;
  certLogo?: string;
  description?: string;
}

interface ApiResponse {
  authCertificates?: {
    value?: {
      authCertificates?: Certificate[];
    };
  };
}

export default function Certificates() {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    queryByFields<ApiResponse>({
      minisiteId: COMPANY_ID,
      fieldNames: 'authCertificates',
    })
      .then((data) => {
        const items = data?.authCertificates?.value?.authCertificates ?? [];
        setCerts(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6" style={{ background: 'var(--surface-dark)' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 w-48 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.08)' }} />
          ))}
        </div>
      </section>
    );
  }

  if (certs.length === 0) return null;

  return (
    <section
      className="py-16 px-6"
      style={{ background: 'var(--surface-dark)' }}
      data-component="Certificates"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-6" style={{ color: 'var(--text-secondary-dark)' }}>
          Certifications &amp; Quality
        </p>
        <div className="flex flex-wrap gap-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="p-4 flex items-center gap-3"
              style={{
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-card)',
                background: 'rgba(255,255,255,0.04)',
                minWidth: '180px',
              }}
            >
              {cert.certLogo && (
                <img src={cert.certLogo} alt={cert.certificateName} className="w-10 h-10 object-contain" />
              )}
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary-dark)' }}>
                  {cert.certificateName}
                </p>
                {cert.certificateIssuedBy && (
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary-dark)' }}>
                    {cert.certificateIssuedBy}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
