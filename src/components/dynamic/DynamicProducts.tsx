import { useState, useEffect } from 'react';
import { queryByFields } from '../../lib/queryByFields';
import SectionHeading from '../common/SectionHeading';

const COMPANY_ID = '291975556';

interface Product {
  id: number;
  subject: string;
  imageUrl: string;
  price: string;
  moq: string;
  url: string;
}

interface ApiResponse {
  productsByRecommendStrategy?: {
    value?: Array<{
      id: number;
      subject: string;
      imageUrls?: { x350?: string };
      imageUrlList?: Array<{ x350?: string }>;
      fobPriceWithoutUnit?: string;
      fobPrice?: string;
      moq?: string;
      url?: string;
    }>;
  };
}

export default function DynamicProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    queryByFields<ApiResponse>({
      minisiteId: COMPANY_ID,
      fieldNames: 'productsByRecommendStrategy',
      extendParams: { strategyName: 'modifyTimeDesc' },
    })
      .then((data) => {
        const items = data?.productsByRecommendStrategy?.value ?? [];
        setProducts(
          items.map((p) => ({
            id: p.id,
            subject: p.subject,
            imageUrl: p.imageUrls?.x350 || p.imageUrlList?.[0]?.x350 || '',
            price: p.fobPriceWithoutUnit || p.fobPrice || '',
            moq: p.moq || '',
            url: p.url || '',
          }))
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6" style={{ background: 'var(--surface-off)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden animate-pulse" style={{ borderRadius: 'var(--radius-card)', border: '1px solid var(--border-light)' }}>
                <div className="aspect-square" style={{ background: 'var(--border-light)' }} />
                <div className="p-4 space-y-2">
                  <div className="h-4 rounded" style={{ background: 'var(--border-light)', width: '75%' }} />
                  <div className="h-4 rounded" style={{ background: 'var(--border-light)', width: '50%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--surface-off)' }}
      data-component="DynamicProductsSection"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Our Products"
          title="Browse Our Full Die-Cutting Catalog"
          subtitle="Live product listings from our Alibaba storefront — updated in real time."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <a
              key={product.id}
              href={product.url ? `https:${product.url}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden block"
              style={{ borderRadius: 'var(--radius-card)', border: '1px solid var(--border-light)', background: 'var(--surface-light)' }}
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                {product.imageUrl && (
                  <img
                    src={product.imageUrl.startsWith('//') ? `https:${product.imageUrl}` : product.imageUrl}
                    alt={product.subject}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4">
                <h3
                  className="text-sm font-medium leading-snug mb-2 line-clamp-2"
                  style={{ color: 'var(--text-primary-light)' }}
                >
                  {product.subject}
                </h3>
                {product.price && (
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                    {product.price}
                  </p>
                )}
                {product.moq && (
                  <p className="text-xs" style={{ color: 'var(--text-caption)' }}>
                    MOQ: {product.moq}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
