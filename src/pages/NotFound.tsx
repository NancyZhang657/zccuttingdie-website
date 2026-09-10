import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/useLang';
import { updatePageMeta } from '../lib/seo';

export default function NotFound() {
  const { lang } = useLang();

  useEffect(() => {
    updatePageMeta({
      title: lang === 'zh' ? '页面未找到 | 众诚激光刀模' : 'Page Not Found | Zhongcheng Cutting Die',
      description: lang === 'zh' ? '您访问的众诚激光刀模页面不存在。' : 'The requested Zhongcheng Laser Die page could not be found.',
      path: window.location.pathname,
      lang,
    });
  }, [lang]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: '80px' }}>
      <div className="text-center max-w-md">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>
          404
        </p>
        <h1
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          {lang === 'zh' ? '页面未找到' : 'Page not found'}
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-light)' }}>
          {lang === 'zh' ? '您访问的页面不存在或已经移动。' : 'The page you requested does not exist or has moved.'}
        </p>
        <Link to="/" className="btn-primary">
          {lang === 'zh' ? '返回首页' : 'Back to Home'}
        </Link>
      </div>
    </main>
  );
}
