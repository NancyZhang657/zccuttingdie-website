import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { useLang } from '../lib/useLang';
import { updatePageMeta, buildBreadcrumbSchema } from '../lib/seo';
import { ARTICLES } from '../data/articles';
import { products, WHATSAPP_URL } from '../data/products';
import HomeInquiryForm from '../components/contact/HomeInquiryForm';
import SectionHeading from '../components/common/SectionHeading';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const navigate = useNavigate();

  const isZh = lang === 'zh';
  const article = ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    if (!article) {
      navigate('/insights', { replace: true });
      return;
    }

    const titleText = isZh ? `${article.titleZh} | 众诚刀模技术中心` : `${article.title} | Zhongcheng Cutting Die`;
    const descText = isZh ? article.excerptZh : article.excerpt;

    const faqSchema = article.faqs && article.faqs.length > 0 ? {
      '@type': 'FAQPage',
      'mainEntity': article.faqs.map(f => ({
        '@type': 'Question',
        'name': isZh ? f.qZh : f.qEn,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': isZh ? f.aZh : f.aEn
        }
      }))
    } : null;

    updatePageMeta({
      title: titleText,
      description: descText,
      path: `/insights/${article.slug}`,
      lang,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          buildBreadcrumbSchema({
            name: isZh ? article.titleZh : article.title,
            path: `/insights/${article.slug}`,
            lang
          }),
          {
            '@type': 'TechArticle',
            '@id': `https://zccuttingdie.com/insights/${article.slug}#article`,
            headline: isZh ? article.titleZh : article.title,
            description: isZh ? article.excerptZh : article.excerpt,
            datePublished: '2026-09-15',
            dateModified: '2026-10-20',
            publisher: {
              '@type': 'Organization',
              name: 'Jinan Zhongcheng Precision Mould Co., Ltd.',
              url: 'https://zccuttingdie.com'
            }
          },
          ...(faqSchema ? [faqSchema] : [])
        ]
      }
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article, lang, isZh, navigate]);

  if (!article) return null;

  const relatedProducts = products.filter((p) => article.relatedProductSlugs.includes(p.slug));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: isZh ? article.titleZh : article.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isZh ? '文章链接已复制到剪贴板！' : 'Article URL copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-dark)', color: 'var(--text-primary-light)' }}>
      {/* Top Header & Breadcrumb */}
      <section className="relative pt-32 pb-16 px-6 border-b border-[var(--border-dark)] overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
            <Link to="/" className="hover:underline hover:text-[var(--text-primary-dark)]">
              {isZh ? '首页' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/insights" className="hover:underline hover:text-[var(--text-primary-dark)]">
              {isZh ? '行业洞察 (Blog & Cases)' : 'Insights (Blog & Cases)'}
            </Link>
            <span>/</span>
            <span className="truncate max-w-[200px] sm:max-w-xs" style={{ color: 'var(--accent)' }}>
              {isZh ? article.titleZh : article.title}
            </span>
          </nav>

          {/* Tag & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
              style={{
                background: 'rgba(217, 83, 30, 0.15)',
                color: 'var(--accent)',
                border: '1px solid rgba(217, 83, 30, 0.3)',
              }}
            >
              {isZh ? article.tagZh : article.tag}
            </span>

            <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-secondary-dark)' }}>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {article.date}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6" style={{ color: 'var(--text-primary-dark)' }}>
            {isZh ? article.titleZh : article.title}
          </h1>

          {/* Lead Excerpt Box */}
          <div 
            className="p-5 rounded-lg border text-sm leading-relaxed mb-6"
            style={{
              background: 'var(--surface-mid)',
              borderColor: 'var(--border-light)',
              color: 'var(--text-primary-light)',
              borderLeft: '4px solid var(--accent)'
            }}
          >
            {isZh ? article.excerptZh : article.excerpt}
          </div>

          {/* Share & Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors"
              style={{
                background: 'var(--surface-mid)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary-dark)'
              }}
            >
              <Share2 size={13} />
              <span>{isZh ? '分享此文' : 'Share'}</span>
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-semibold transition-colors"
              style={{
                background: 'rgba(37, 211, 102, 0.12)',
                color: '#25D366',
                border: '1px solid rgba(37, 211, 102, 0.3)'
              }}
            >
              <MessageCircle size={13} />
              <span>{isZh ? '技术探讨' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="py-16 px-6 border-b border-[var(--border-dark)]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2.5 pb-3 border-b border-[var(--border-dark)]" style={{ color: 'var(--text-primary-dark)' }}>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span>{isZh ? sec.headingZh : sec.heading}</span>
                </h2>

                <div className="space-y-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
                  {(isZh ? sec.contentZh : sec.content).map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Table if present */}
                {sec.table && (
                  <div className="my-6 overflow-x-auto rounded-lg border border-[var(--border-light)]" style={{ background: 'var(--surface-mid)' }}>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[var(--border-light)] bg-neutral-900/60 text-[var(--text-primary-dark)]">
                          {(isZh ? sec.table.headersZh : sec.table.headers).map((h, hIdx) => (
                            <th key={hIdx} className="p-3.5 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-dark)]">
                        {(isZh ? sec.table.rowsZh : sec.table.rows).map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-neutral-800/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 text-[var(--text-secondary-dark)]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

            {/* FAQ Section if present */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-14 pt-8 border-t border-[var(--border-dark)] space-y-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle size={20} className="text-[var(--accent)]" />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary-dark)' }}>
                    {isZh ? '常见技术与选型问答 (FAQ)' : 'Frequently Asked Questions (FAQ)'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {article.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-lg border border-[var(--border-light)] transition-all"
                      style={{ background: 'var(--surface-mid)' }}
                    >
                      <h4 className="text-sm md:text-base font-bold text-[var(--accent)] mb-2 flex items-start gap-2">
                        <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] mt-0.5">Q{fIdx + 1}</span>
                        <span>{isZh ? faq.qZh : faq.qEn}</span>
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-[var(--text-secondary-dark)] pl-7">
                        {isZh ? faq.aZh : faq.aEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Insights button */}
            <div className="mt-16 pt-8 border-t border-[var(--border-dark)] flex items-center justify-between">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary-dark)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>{isZh ? '返回全部文章与案例列表' : 'Back to All Insights & Cases'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Relevant Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-6 border-b border-[var(--border-dark)]" style={{ background: 'var(--surface-mid)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  {isZh ? '匹配工装产品' : 'Matched Tooling Products'}
                </span>
                <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text-primary-dark)' }}>
                  {isZh ? '本案涉及的相关模具与耗材' : 'Featured Products in This Article'}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.slug}
                  to={`/products/${prod.slug}`}
                  className="p-4 rounded-lg bg-[var(--surface-dark)] border border-[var(--border-dark)] hover:border-[var(--accent)] transition-all group block"
                >
                  <div className="aspect-video w-full rounded overflow-hidden mb-3 bg-neutral-900">
                    <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary-dark)] group-hover:text-[var(--accent)] transition-colors truncate">
                    {isZh ? prod.nameZh : prod.name}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary-dark)] line-clamp-1 mt-1">
                    {isZh ? prod.descriptionZh : prod.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--accent)] mt-3">
                    {isZh ? '查看产品详情' : 'View Product'}
                    <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Direct Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label={isZh ? '在线方案定制' : 'Direct Inquiry & Quotation'}
            title={isZh ? '发送包装图纸，获取专属刀模与底模配置方案' : 'Request a Custom Tooling Quote for Your Press'}
            subtitle={isZh ? '支持 DXF, DWG, AI, PDF, STEP 等主流图纸格式（最大 20MB），模具工程师 24 小时内出具详细方案与报价。' : 'Upload your CAD drawings (DXF, DWG, AI, PDF up to 20MB). Our tooling engineers will respond within 24 hours.'}
            center
          />
          <div className="mt-10">
            <HomeInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
