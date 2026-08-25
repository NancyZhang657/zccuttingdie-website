import { useEffect, useMemo, useState, type CSSProperties, type FormEvent, type MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  ChevronRight,
  Crosshair,
  MessageCircle,
  Package,
  Plus,
  Truck,
} from 'lucide-react';
import { useLang } from '../lib/langContext';
import { getProductBySlug, products, WHATSAPP_URL, type Product } from '../data/products';

const WHATSAPP_NUMBER = '8613402211941';
const SALES_EMAIL = 'sales@zccuttingdie.com';

const COPY = {
  en: {
    home: 'Home',
    products: 'Products',
    category: 'Cutting Dies · Precision Tooling',
    valueProp:
      'Precision die-cutting tooling engineered to keep your packaging line running at full speed.',
    precisionValue: '±0.05mm',
    precisionLabel: 'Precision',
    deliveryValue: '5-7 Days',
    deliveryLabel: 'Delivery',
    moqValue: '1 Set',
    moqLabel: 'MOQ',
    experienceValue: '30 Years',
    experienceLabel: 'Experience',
    quoteWhatsApp: 'Get a Quote via WhatsApp',
    viewSpecs: 'View Specifications',
    specsTitle: 'Technical Specifications',
    highlightsTitle: 'Key Highlights',
    industriesTitle: 'Industries We Serve',
    sopTitle: 'Production Process (SOP)',
    faqTitle: 'Frequently Asked Questions',
    inquiryTitle: 'Get a Specification-Based Quote',
    inquirySub: 'Send us your requirements — our technical team replies within 24 hours.',
    fieldName: 'Name',
    fieldCompany: 'Company',
    fieldEmail: 'Email',
    fieldCountry: 'Country',
    fieldMessage: 'Message',
    messagePlaceholder:
      'Tell us about your die specifications: material, size, quantity, target date…',
    submit: 'Send Inquiry',
    emailHint: 'Prefer email?',
    relatedTitle: 'You May Also Need',
    viewDetails: 'View Details',
    notFound: 'Product not found.',
    backHome: 'Back to Home',
  },
  zh: {
    home: '首页',
    products: '产品中心',
    category: '刀模 · 精密工具',
    valueProp: '为高速包装生产线量身定制的精密模切工具，助您产线全速运转。',
    precisionValue: '±0.05mm',
    precisionLabel: '加工精度',
    deliveryValue: '5-7天',
    deliveryLabel: '标准交期',
    moqValue: '1套',
    moqLabel: '起订量',
    experienceValue: '30年',
    experienceLabel: '行业经验',
    quoteWhatsApp: '通过WhatsApp获取报价',
    viewSpecs: '查看规格参数',
    specsTitle: '技术规格',
    highlightsTitle: '产品亮点',
    industriesTitle: '适用行业',
    sopTitle: '生产流程（SOP）',
    faqTitle: '常见问题',
    inquiryTitle: '获取按规格定制的报价',
    inquirySub: '发送您的需求，技术团队将在24小时内回复。',
    fieldName: '姓名',
    fieldCompany: '公司',
    fieldEmail: '邮箱',
    fieldCountry: '国家/地区',
    fieldMessage: '留言内容',
    messagePlaceholder: '请描述您的刀模需求：材质、尺寸、数量、期望交期……',
    submit: '提交询盘',
    emailHint: '偏好邮件沟通？',
    relatedTitle: '您可能还需要',
    viewDetails: '查看详情',
    notFound: '未找到该产品。',
    backHome: '返回首页',
  },
} as const;

const FAQS: { q: string; qZh: string; a: string; aZh: string }[] = [
  {
    q: 'What is the minimum order quantity?',
    qZh: '最低起订量是多少？',
    a: 'Our standard MOQ is 1 set for custom cutting dies, so you can test a single die before committing to volume. Tube punches and consumable accessories carry an MOQ of 100 pieces. Larger orders receive tiered pricing and priority production slots.',
    aZh:
      '定制刀模的起订量为1套，您可以先试做一套验证效果再批量下单。管冲及耗材类配件起订量为100件。批量订单享受阶梯价格与优先排产。',
  },
  {
    q: 'How long does production take?',
    qZh: '生产需要多长时间？',
    a: 'Standard production takes 5-7 days after drawing confirmation, depending on complexity. Urgent orders can be prepared in as little as 3 days, and die-making materials or standard accessories ship even faster from factory stock.',
    aZh:
      '图纸确认后标准交期为5-7天，视复杂程度而定。急单最快3天备料生产；刀模材料与标准配件可从工厂现货更快发出。',
  },
  {
    q: 'What file formats do you accept for die drawings?',
    qZh: '刀模图纸接受哪些文件格式？',
    a: 'We accept CAD files in .DWG and .DXF, plus .PDF, .AI and .CDR formats. If you only have a physical sample or a photo, our engineering team can reverse-engineer the geometry and confirm the drawing with you before production.',
    aZh:
      '我们接受.DWG、.DXF等CAD格式，以及.PDF、.AI、.CDR格式。若您仅有实物样品或照片，工程团队可逆向还原几何尺寸，并在生产前与您确认图纸。',
  },
  {
    q: 'Do you offer sample/prototype before mass production?',
    qZh: '批量生产前是否可以打样？',
    a: 'Yes. We can build a prototype or pre-production sample so you can verify cutting quality, creasing lines and machine fit first. Sample orders go through the same QC process as full production runs.',
    aZh:
      '可以。我们可以先制作打样或试产样品，让您先行验证切割质量、压痕效果及设备适配性。样品订单与批量订单执行同样的质检流程。',
  },
  {
    q: 'What machines are your dies compatible with?',
    qZh: '刀模适配哪些机型？',
    a: 'Our dies are manufactured to exact tolerances for BOBST, Masterwork, Heidelberg and Sanwa platforms, as well as major domestic machines such as Changrong, Sanhe and Guowang. Send us your machine model and we will confirm compatibility.',
    aZh:
      '我们的刀模按BOBST、长荣MK、海德堡、三和等平台精确公差制造，同时兼容长荣、三和、国望等国内主流机型。提供机器型号即可确认适配性。',
  },
];

const SOP_STEPS: { title: string; titleZh: string; desc: string; descZh: string }[] = [
  {
    title: 'Drawing Review',
    titleZh: '图纸评审',
    desc: 'Our engineers review your artwork, material and machine specs, then confirm all dimensions before any steel is cut.',
    descZh: '工程师审核您的图稿、材质与设备参数，在开料前确认所有尺寸。',
  },
  {
    title: 'Precision Manufacturing',
    titleZh: '精密制造',
    desc: 'CNC-machined boards, laser-cut steel rules and hand-assembled knife lines built to ±0.05mm tolerance.',
    descZh: 'CNC加工板材、激光切割钢刀线，手工装配，公差控制在±0.05mm以内。',
  },
  {
    title: 'Quality Inspection',
    titleZh: '质量检验',
    desc: 'Every die is checked against the approved drawing by our QC team before it leaves the floor.',
    descZh: '每套刀模出厂前均由质检团队对照确认图纸逐项检验。',
  },
  {
    title: 'Packaging & Delivery',
    titleZh: '包装发货',
    desc: 'Dies are securely export-packed and dispatched within 5-7 days with full tracking.',
    descZh: '刀模按出口标准加固包装，5-7天内发货并提供全程物流跟踪。',
  },
];

const INDUSTRIES: { icon: string; name: string; nameZh: string; desc: string; descZh: string }[] = [
  {
    icon: '💊',
    name: 'Pharmaceutical Packaging',
    nameZh: '药品包装',
    desc: 'Precision dies for blister cards, pill boxes and medical cartons.',
    descZh: '药板卡、药盒及医药纸盒精密刀模。',
  },
  {
    icon: '🚬',
    name: 'Tobacco Packaging',
    nameZh: '烟草包装',
    desc: 'High-speed dies for cigarette packs and double-tab cartons.',
    descZh: '烟包及双开翻盖烟盒高速模切刀模。',
  },
  {
    icon: '🍱',
    name: 'Food Packaging',
    nameZh: '食品包装',
    desc: 'Food-safe tooling for cartons, cups and folding boxes.',
    descZh: '食品纸盒、纸杯及折叠盒安全级模具。',
  },
  {
    icon: '💎',
    name: 'Premium Packaging',
    nameZh: '高端包装',
    desc: 'Fine creasing and hot stamping for luxury cosmetic and gift boxes.',
    descZh: '高端化妆品盒与礼盒精密压痕与烫金。',
  },
];

const inputClass =
  'w-full text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-shadow duration-150';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const product = getProductBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number>(0);

  // Scroll to top whenever the slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Pick 3 random related products, excluding the current one
  const related = useMemo(() => {
    const others = products.filter(p => p.slug !== product?.slug);
    return [...others].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [product?.slug]);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: '80px' }}>
        <div className="text-center">
          <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary-light)' }}>
            {COPY[lang].notFound}
          </p>
          <Link to="/" className="btn-primary">
            {COPY[lang].backHome}
          </Link>
        </div>
      </main>
    );
  }

  const isZh = lang === 'zh';
  const copy = COPY[lang];
  const name = isZh ? product.nameZh : product.name;
  const description = isZh ? product.descriptionZh : product.description;
  const highlights = isZh ? product.highlightsZh : product.highlights;

  const stats = [
    { Icon: Crosshair, value: copy.precisionValue, label: copy.precisionLabel },
    { Icon: Truck, value: copy.deliveryValue, label: copy.deliveryLabel },
    { Icon: Package, value: copy.moqValue, label: copy.moqLabel },
    { Icon: Award, value: copy.experienceValue, label: copy.experienceLabel },
  ];

  const scrollToSpecs = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `New Quote Request — ${product.name}`,
      '',
      `Name: ${String(fd.get('name') ?? '')}`,
      `Company: ${String(fd.get('company') ?? '')}`,
      `Email: ${String(fd.get('email') ?? '')}`,
      `Country: ${String(fd.get('country') ?? '')}`,
      '',
      'Message:',
      String(fd.get('message') ?? ''),
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main style={{ paddingTop: '80px' }} data-component="ProductDetail">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 1. Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide">
          <Link to="/" style={{ color: 'var(--text-secondary-dark)' }} className="hover:opacity-80 transition-opacity">
            {copy.home}
          </Link>
          <ChevronRight size={12} style={{ color: 'var(--text-label-dark)' }} />
          <Link to="/#products" style={{ color: 'var(--text-secondary-dark)' }} className="hover:opacity-80 transition-opacity">
            {copy.products}
          </Link>
          <ChevronRight size={12} style={{ color: 'var(--text-label-dark)' }} />
          <span style={{ color: 'var(--text-label-dark)' }} className="truncate">{name}</span>
        </nav>

        {/* 2. Two-column layout: gallery + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: image gallery */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div
              className="overflow-hidden relative mb-4 h-[400px]"
              style={{
                background: 'var(--surface-mid)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <img
                key={product.images[activeImage]}
                src={product.images[activeImage]}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(0, 4).map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className="overflow-hidden aspect-square cursor-pointer p-0 transition-all duration-150"
                    style={{
                      background: 'var(--surface-mid)',
                      border: i === activeImage ? '2px solid var(--accent)' : '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-card)',
                      opacity: i === activeImage ? 1 : 0.6,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = i === activeImage ? '1' : '0.6')}
                  >
                    <img src={img} alt={`${name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: product info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          >
            <span className="spec-tag inline-block mb-4 uppercase tracking-wider">{copy.category}</span>

            <h1
              className="text-3xl md:text-4xl leading-tight mb-3"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
            >
              {name}
            </h1>

            {!isZh && (
              <p className="text-sm mb-3" style={{ color: 'var(--text-label-dark)' }}>
                {product.nameZh}
              </p>
            )}

            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary-light)' }}>
              {copy.valueProp}
            </p>

            {/* Core data badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-start gap-1.5 p-4"
                  style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                  <span
                    className="text-lg leading-none"
                    style={{ color: 'var(--text-primary-light)', fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {value}
                  </span>
                  <span className="text-[11px] uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Above-the-fold dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center px-8 py-4"
                style={{ fontSize: 13 }}
              >
                <MessageCircle size={18} />
                {copy.quoteWhatsApp}
              </a>
              <a href="#specs" onClick={scrollToSpecs} className="btn-ghost-dark justify-center px-8 py-4" style={{ fontSize: 13 }}>
                <ChevronDown size={16} />
                {copy.viewSpecs}
              </a>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
              {description}
            </p>
          </motion.div>
        </div>

        {/* 3. Specifications */}
        <section id="specs" className="mt-20 scroll-mt-24" data-section="specs">
          <div className="flex items-center gap-3 mb-8">
            <span className="accent-bar" />
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
            >
              {copy.specsTitle}
            </h2>
          </div>
          <div
            className="overflow-hidden"
            style={{ border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}
          >
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr
                    key={spec.key}
                    style={{
                      background: i % 2 === 0 ? 'var(--surface-dark)' : 'var(--surface-mid)',
                      borderBottom: i < product.specs.length - 1 ? '1px solid var(--border-light)' : 'none',
                    }}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left align-top font-semibold whitespace-nowrap w-56"
                      style={{ color: 'var(--accent)', letterSpacing: '0.3px' }}
                    >
                      {isZh ? spec.keyZh : spec.key}
                    </th>
                    <td className="px-5 py-4 leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
                      {isZh ? spec.valueZh : spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Highlights */}
        <motion.section
          className="mt-20"
          data-section="highlights"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="accent-bar" />
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
            >
              {copy.highlightsTitle}
            </h2>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={containerVariants}>
            {highlights.map(h => (
              <motion.div
                key={h}
                variants={itemVariants}
                className="flex items-start gap-3 p-5 h-full"
                style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}
              >
                <span
                  className="flex items-center justify-center w-6 h-6 mt-0.5 flex-shrink-0"
                  style={{ background: 'rgba(224,122,46,0.15)', borderRadius: 'var(--radius-btn)' }}
                >
                  <Check size={14} style={{ color: 'var(--accent)' }} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
                  {h}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>



        {/* 6. Production SOP */}
        <motion.section
          className="mt-20"
          data-section="sop"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="accent-bar" />
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
            >
              {copy.sopTitle}
            </h2>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {SOP_STEPS.map((step, i) => (
              <motion.div key={step.title} variants={itemVariants} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex items-center justify-center w-10 h-10 text-white font-bold flex-shrink-0"
                    style={{ background: 'var(--accent)', borderRadius: '50%' }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="text-base"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
                  >
                    {isZh ? step.titleZh : step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-[52px]" style={{ color: 'var(--text-secondary-light)' }}>
                  {isZh ? step.descZh : step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>



        {/* 8. Inquiry form */}
        <section className="mt-20" data-section="inquiry">
          <div
            className="p-6 md:p-10"
            style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-bar" />
              <h2
                className="text-2xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 400 }}
              >
                {copy.inquiryTitle}
              </h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--text-secondary-light)' }}>
              {copy.inquirySub}
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldName} *
                </span>
                <input
                  name="name"
                  required
                  placeholder={copy.fieldName}
                  className={inputClass}
                  style={inputStyle}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldCompany}
                </span>
                <input name="company" placeholder={copy.fieldCompany} className={inputClass} style={inputStyle} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldEmail} *
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={copy.fieldEmail}
                  className={inputClass}
                  style={inputStyle}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldCountry}
                </span>
                <input name="country" placeholder={copy.fieldCountry} className={inputClass} style={inputStyle} />
              </label>
              <label className="flex flex-col gap-1.5 sm:col-span-2">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldMessage} *
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={copy.messagePlaceholder}
                  className={`${inputClass} resize-y`}
                  style={inputStyle}
                />
              </label>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                <button type="submit" className="btn-primary px-8 py-4" style={{ fontSize: 13, cursor: 'pointer' }}>
                  {copy.submit}
                </button>

              </div>
            </form>
          </div>
        </section>


      </div>

      {/* Floating WhatsApp button (desktop; mobile already has a global float) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{ background: '#25D366' }}
        aria-label="Contact via WhatsApp"
        title="WhatsApp: +86 150 6615 9371"
      >
        <MessageCircle size={26} color="#fff" />
      </a>
    </main>
  );
}

const inputStyle: CSSProperties = {
  background: 'var(--surface-mid)',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-card)',
  color: 'var(--text-primary-light)',
  padding: '12px 14px',
  fontSize: 14,
  width: '100%',
};
