const SITE_ORIGIN = 'https://zccuttingdie.com';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  lang: 'en' | 'zh';
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function updatePageMeta({ title, description, path, lang }: PageMeta) {
  const url = `${SITE_ORIGIN}${path}`;

  document.title = title;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', url);
}
