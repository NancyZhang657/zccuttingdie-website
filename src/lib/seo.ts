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
  descriptionZh: string;
}

export const PRODUCT_SEO: Record<string, ProductSeo> = {
  'sandwich-die': {
    title: 'Sandwich Cutting Die | Zhongcheng',
    description: 'Custom sandwich cutting dies for cigarette, pharma, cosmetic and specialty packaging. Send your drawing for a tailored quote.',
    descriptionZh: '三明治刀模，适用于烟盒、药盒、化妆品盒及异形包装，支持按图定制，交期 3-7 天。',
  },
  'wooden-die': {
    title: 'Wooden Cutting Die | Zhongcheng',
    description: 'Custom wooden steel-rule dies for cartons, corrugated boxes, tags and leather. Built to your shape, size and machine requirements.',
    descriptionZh: '木板钢线刀模，适用于纸箱、瓦楞纸盒、吊牌及皮革，形状和厚度可按图定制，交期 2-5 天。',
  },
  'steel-counter-plate': {
    title: 'Steel Counter Plate | Zhongcheng',
    description: 'Custom hardened steel counter plates for sandwich die cutting, box creasing and punching. Matched to your die and drawing.',
    descriptionZh: '淬硬钢底模，匹配三明治刀模用于纸盒压痕与冲切，尺寸和厚度按订单定制，交期 2-5 天。',
  },
  'pertinax-counter-plate': {
    title: 'Pertinax Counter Plate | Zhongcheng',
    description: 'Custom resin-based Pertinax counter plates for die cutting and clean creasing. Size and thickness matched to your steel-rule die.',
    descriptionZh: 'Pertinax 树脂底模，用于钢线刀模压痕与模切，尺寸和厚度可定制，适用于包装生产，交期 2-3 天。',
  },
  'stripping-tools': {
    title: 'Stripping Tools | Zhongcheng',
    description: 'Manual and pneumatic stripping tools for removing inner-hole waste from cartons, gift boxes and food packaging production lines.',
    descriptionZh: '手动与气动清废工具，用于清除纸盒内孔废料，适用于礼盒、食品包装盒及通用纸盒生产线。',
  },
  'blanking-tools': {
    title: 'Blanking Tools | Zhongcheng',
    description: 'Pneumatic and automatic blanking tools for separating die-cut box blanks from cardboard waste in packaging production.',
    descriptionZh: '气动与自动分盒工具，用于将模切盒坯与纸板骨架分离，适用于食品及多材质包装生产，交期 3-7 天。',
  },
  'hot-stamping-embossing-die': {
    title: 'Hot Stamping & Embossing Die | Zhongcheng',
    description: 'Custom brass, aluminum and magnesium dies for foil stamping and embossing on paper, leather, fabric and premium packaging.',
    descriptionZh: '黄铜、铝和镁板烫金压纹版，适用于纸张、皮革、布料、礼盒、烟包及化妆品盒，支持按图定制。',
  },
  'engraving-die': {
    title: 'Engraving Die & Blade | Zhongcheng',
    description: 'High-hardness engraving blades and cutters for logos, patterns and packaging applications. Custom sizes and blade sets available.',
    descriptionZh: '高硬度雕刻刀与刀片，用于包装盒、瓦楞纸箱及礼盒的 Logo 和图案雕刻，尺寸和刀片套装可定制。',
  },
  'die-making-materials': {
    title: 'Die Making Materials & Tube Punches | Zhongcheng',
    description: 'Precision steel tube punches and spring punches for die making, labels, cardboard, leather and optical film hole processing.',
    descriptionZh: '精密钢制管冲与弹簧冲，用于纸板、标签、皮革和光学膜打孔，适合刀模制作及精密孔加工。',
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
