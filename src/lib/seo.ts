const SITE_ORIGIN = 'https://zccuttingdie.com';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  lang: 'en' | 'zh';
  schema?: Record<string, unknown>;
}

export interface ProductSeo {
  title: string;
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeo> = {
  'sandwich-die': {
    title: 'Sandwich Cutting Die | Zhongcheng',
    description: 'Custom sandwich cutting dies for cigarette, pharma, cosmetic and specialty packaging. Send your drawing for a tailored quote.',
  },
  'wooden-die': {
    title: 'Wooden Cutting Die | Zhongcheng',
    description: 'Custom wooden steel-rule dies for cartons, corrugated boxes, tags and leather. Built to your shape, size and machine requirements.',
  },
  'steel-counter-plate': {
    title: 'Steel Counter Plate | Zhongcheng',
    description: 'Custom hardened steel counter plates for sandwich die cutting, box creasing and punching. Matched to your die and drawing.',
  },
  'pertinax-counter-plate': {
    title: 'Pertinax Counter Plate | Zhongcheng',
    description: 'Custom resin-based Pertinax counter plates for die cutting and clean creasing. Size and thickness matched to your steel-rule die.',
  },
  'stripping-tools': {
    title: 'Stripping Tools | Zhongcheng',
    description: 'Manual and pneumatic stripping tools for removing inner-hole waste from cartons, gift boxes and food packaging production lines.',
  },
  'blanking-tools': {
    title: 'Blanking Tools | Zhongcheng',
    description: 'Pneumatic and automatic blanking tools for separating die-cut box blanks from cardboard waste in packaging production.',
  },
  'hot-stamping-embossing-die': {
    title: 'Hot Stamping & Embossing Die | Zhongcheng',
    description: 'Custom brass, aluminum and magnesium dies for foil stamping and embossing on paper, leather, fabric and premium packaging.',
  },
  'engraving-die': {
    title: 'Engraving Die & Blade | Zhongcheng',
    description: 'High-hardness engraving blades and cutters for logos, patterns and packaging applications. Custom sizes and blade sets available.',
  },
  'die-making-materials': {
    title: 'Die Making Materials & Tube Punches | Zhongcheng',
    description: 'Precision steel tube punches and spring punches for die making, labels, cardboard, leather and optical film hole processing.',
  },
};

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

function setSchema(schema?: Record<string, unknown>) {
  const existing = document.getElementById('site-schema');
  existing?.remove();
  if (!schema) return;

  const script = document.createElement('script');
  script.id = 'site-schema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${SITE_ORIGIN}${path}`;
}

export function updatePageMeta({ title, description, path, lang, schema }: PageMeta) {
  const url = `${SITE_ORIGIN}${path}`;

  document.title = title;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setSchema(schema);
}

export function buildSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'Jinan Zhongcheng Precision Mould',
        alternateName: 'Zhongcheng Cutting Die',
        url: `${SITE_ORIGIN}/`,
        logo: absoluteUrl('/assets/images/zhongcheng-logo-transparent-white.png'),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        name: 'Zhongcheng Cutting Die',
        url: `${SITE_ORIGIN}/`,
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
        inLanguage: 'en',
      },
    ],
  };
}

export function buildBreadcrumbSchema({
  name,
  path,
  lang,
}: {
  name: string;
  path: string;
  lang: 'en' | 'zh';
}) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'Jinan Zhongcheng Precision Mould',
        alternateName: 'Zhongcheng Cutting Die',
        url: `${SITE_ORIGIN}/`,
        logo: absoluteUrl('/assets/images/zhongcheng-logo-transparent-white.png'),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首页' : 'Home', item: `${SITE_ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '产品中心' : 'Products', item: `${SITE_ORIGIN}/#products` },
          { '@type': 'ListItem', position: 3, name, item: url },
        ],
      },
    ],
  };
}
