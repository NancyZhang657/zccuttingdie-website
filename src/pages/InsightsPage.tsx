import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Layers, 
  Settings, 
  HelpCircle, 
  Search,
  Sparkles
} from 'lucide-react';
import { useLang } from '../lib/useLang';
import { updatePageMeta, buildBreadcrumbSchema } from '../lib/seo';
import { ARTICLES, type ArticleCategory } from '../data/articles';
import SectionHeading from '../components/common/SectionHeading';
import HomeInquiryForm from '../components/contact/HomeInquiryForm';

export default function InsightsPage() {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isZh = lang === 'zh';

  useEffect(() => {
    updatePageMeta({
      title: isZh 
        ? '行业洞察、机型兼容与客户案例（Insights & Case Studies）| 众诚刀模'
        : 'Insights, Case Studies & Technical Blog | Zhongcheng Cutting Die',
      description: isZh
        ? '众诚刀模技术知识中心：涵盖 BOBST/海德堡机型适配规范、烟包/药包高速模切 9,000 压/小时真实案例、模切压痕爆线排障与三明治刀模维护指南。'
        : 'Zhongcheng Technical Insights & Cases: BOBST/Heidelberg compatibility specifications, tobacco & pharma packaging case studies (9,000 cuts/hr), creasing troubleshooting, and die maintenance.',
      path: '/insights',
      lang,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          buildBreadcrumbSchema({
            name: isZh ? '行业洞察与案例' : 'Insights & Cases',
            path: '/insights',
            lang
          }),
          {
            '@type': 'Blog',
            '@id': 'https://zccuttingdie.com/insights#blog',
            name: isZh ? '众诚刀模技术洞察与案例库' : 'Zhongcheng Cutting Die Technical Insights & Cases',
            description: isZh 
              ? '工业模切技术、设备适配规范与包装案例文章库' 
              : 'Industrial die-cutting engineering articles, machine fitment specs, and packaging case studies.',
            publisher: {
              '@type': 'Organization',
              name: 'Jinan Zhongcheng Precision Mould Co., Ltd.',
              url: 'https://zccuttingdie.com'
            }
          }
        ]
      }
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [lang, isZh]);

  const categories = [
    { 
      id: 'all' as ArticleCategory, 
      label: isZh ? '全部内容' : 'All Insights', 
      icon: Sparkles 
    },
    { 
      id: 'compatibility' as ArticleCategory, 
      label: isZh ? '模切机型兼容' : 'Machine Compatibility', 
      icon: Settings 
    },
    { 
      id: 'solutions' as ArticleCategory, 
      label: isZh ? '行业方案与客户案例' : 'Case Studies & Solutions', 
      icon: Layers 
    },
    { 
      id: 'tech-guide' as ArticleCategory, 
      label: isZh ? '技术科普与排障' : 'Technical Guides', 
      icon: HelpCircle 
    },
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerptZh.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-dark)', color: 'var(--text-primary-light)' }}>
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 border-b border-[var(--border-dark)] overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(217, 83, 30, 0.08) 0%, rgba(18, 16, 15, 0.95) 70%)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
            <Link to="/" className="hover:underline hover:text-[var(--text-primary-dark)]">
              {isZh ? '首页' : 'Home'}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>
              {isZh ? '行业洞察 (Blog & Cases)' : 'Insights (Blog & Cases)'}
            </span>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4"
              style={{
                background: 'rgba(217, 83, 30, 0.15)',
                color: 'var(--accent)',
                border: '1px solid rgba(217, 83, 30, 0.3)',
              }}
            >
              <Sparkles size={14} />
              {isZh ? '技术专栏 · 落地案例 · 设备规范' : 'Technical Insights · Case Studies · Fitment Specs'}
            </span>
            <h1 
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {isZh ? '行业洞察、机型兼容与客户案例' : 'Insights, Case Studies & Technical Blog'}
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
              {isZh
                ? '汇聚近 30 年工业刀模制造经验：涵盖卷烟、医药、高端化妆品及食品包装的机型对齐标准（Centerline II）、9,000 压/小时高速实战案例、压痕排障及工装选型指南。'
                : 'Decades of die-making engineering: machine alignment standards (Centerline II), high-speed packaging case studies (9,000 cuts/hr across tobacco, pharma, cosmetics & food), creasing troubleshooting, and tooling selection guides.'}
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary-dark)]" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isZh ? '搜索文章、机型或工艺关键词...' : 'Search articles, press models, troubleshooting...'}
                className="w-full pl-10 pr-4 py-2.5 rounded text-xs focus:outline-none transition-all"
                style={{
                  background: 'var(--surface-mid)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary-light)',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-secondary-dark)] hover:text-white"
                >
                  {isZh ? '清除' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Article Cards Grid */}
      <section className="py-12 px-6 border-b border-[var(--border-dark)]">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter Pills (Matching user reference layout) */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--surface-mid)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary-dark)',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border-light)',
                    boxShadow: isActive ? '0 4px 12px rgba(217, 83, 30, 0.25)' : 'none'
                  }}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Article Cards Grid (Styled per User Reference Image) */}
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-[var(--surface-mid)] border border-[var(--border-light)]">
              <p className="text-sm text-[var(--text-secondary-dark)]">
                {isZh ? '未找到匹配的文章，请尝试其他关键词。' : 'No articles matched your filter. Try another keyword.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <article
                  key={art.slug}
                  className="group flex flex-col justify-between p-6 rounded-xl transition-all duration-200"
                  style={{
                    background: 'var(--surface-mid)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(217, 83, 30, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    {/* Top Tag & Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      {/* Pill Tag (Gold/Orange matching reference screenshot) */}
                      <span
                        className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider"
                        style={{
                          background: 'rgba(217, 83, 30, 0.15)',
                          color: 'var(--accent)',
                          border: '1px solid rgba(217, 83, 30, 0.3)',
                        }}
                      >
                        {isZh ? art.tagZh : art.tag}
                      </span>

                      {/* Date & Read Time */}
                      <div className="flex items-center gap-3 text-[11px]" style={{ color: 'var(--text-secondary-dark)' }}>
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {art.date}
                        </span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} />
                          {art.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-bold leading-snug mb-3 transition-colors" style={{ color: 'var(--text-primary-dark)' }}>
                      <Link 
                        to={`/insights/${art.slug}`}
                        className="group-hover:text-[var(--accent)] transition-colors"
                      >
                        {isZh ? art.titleZh : art.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs leading-relaxed line-clamp-3 mb-6" style={{ color: 'var(--text-secondary-dark)' }}>
                      {isZh ? art.excerptZh : art.excerpt}
                    </p>
                  </div>

                  {/* Read Article Action Link (Orange Button/Text matching reference screenshot) */}
                  <div className="pt-4 border-t border-[var(--border-dark)] flex items-center justify-between">
                    <Link
                      to={`/insights/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
                      style={{ color: 'var(--accent)' }}
                    >
                      <span>{isZh ? '阅读全文' : 'Read Article'}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label={isZh ? '工程技术咨询' : 'Direct Engineering Consultation'}
            title={isZh ? '有具体机型或模具工艺难题？发送图纸获取方案' : 'Have a Specific Press or Tooling Challenge?'}
            subtitle={isZh ? '上传您的包装设计图纸（DXF/DWG/AI/PDF），我们的模具工程师将在 24 小时内出具量身定制的技术建议与报价单。' : 'Submit your packaging drawings and machine specs. Our tooling engineering team will reply with a detailed recommendation within 24 hours.'}
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
