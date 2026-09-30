import { useEffect, useState, useRef, type CSSProperties, type FormEvent, type MouseEvent, type ChangeEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  ChevronDown,
  ChevronRight,
  Crosshair,
  MessageCircle,
  Package,
  Truck,
  UploadCloud,
  FileCheck,
  X,
} from 'lucide-react';
import { useLang } from '../lib/useLang';
import { getProductBySlug, products, WHATSAPP_URL } from '../data/products';
import { buildProductSchema, PRODUCT_SEO, updatePageMeta } from '../lib/seo';

const INQUIRY_API_URL = import.meta.env.VITE_INQUIRY_API_URL || '/api/inquiries';

const COPY = {
  en: {
    home: 'Home',
    products: 'Products',
    category: 'Cutting Dies · Precision Tooling',
    valueProp:
      'Precision die-cutting tools ensure that your packaging line runs at high standards and full speed.',
    precisionValue: '±0.05mm',
    precisionLabel: 'Precision',
    deliveryLabel: 'Delivery',
    moqValue: '1 Set',
    moqLabel: 'MOQ',
    experienceValue: '30 Years',
    experienceLabel: 'Experience',
    quoteWhatsApp: 'Get a Quote via WhatsApp',
    viewSpecs: 'View Specifications',
    specsTitle: 'Technical Specifications',
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
    fieldAttachment: 'Upload Drawings / Files (Max 5, Optional)',
    attachmentHint:
      'Supports up to 5 files: DXF, DWG, AI, PDF, CDR, STEP, STP, ZIP, RAR, PNG, JPG (Max 20MB each). You can also send files directly via WhatsApp / Email.',
    attachmentSelected: 'Files selected:',
    attachmentRemove: 'Remove',
    submit: 'Send Inquiry',
    submitting: 'Sending…',
    successMessage: 'Thank you. Your inquiry has been sent to our team.',
    errorMessage: 'We could not send your inquiry. Please try again or contact us on WhatsApp.',
    emailHint: 'Your inquiry will be sent securely. You do not need to open an email app.',
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
    deliveryLabel: '标准交期',
    moqValue: '1套',
    moqLabel: '起订量',
    experienceValue: '30年',
    experienceLabel: '行业经验',
    quoteWhatsApp: '通过WhatsApp获取报价',
    viewSpecs: '查看规格参数',
    specsTitle: '技术规格',
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
    fieldAttachment: '上传图纸 / 文件（最多5个，选填）',
    attachmentHint:
      '最多支持5个文件：支持 DXF, DWG, AI, PDF, CDR, STEP, STP, ZIP, RAR, PNG, JPG 格式（单个最大 20MB）。亦可直接通过 WhatsApp / 邮箱发送。',
    attachmentSelected: '已选择文件：',
    attachmentRemove: '移除',
    submit: '提交询盘',
    submitting: '正在发送……',
    successMessage: '感谢您的询盘，信息已发送给我们的团队。',
    errorMessage: '询盘发送失败，请重试或通过 WhatsApp 联系我们。',
    emailHint: '询盘将通过网站安全发送，无需打开邮件应用。',
    relatedTitle: '您可能还需要',
    viewDetails: '查看详情',
    notFound: '未找到该产品。',
    backHome: '返回首页',
  },
} as const;

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
  const ACCEPTED_FILE_TYPES = '.dxf,.dwg,.ai,.pdf,.cdr,.step,.stp,.zip,.rar,.png,.jpg,.jpeg';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setFileError(null);
    if (!files.length) return;

    if (selectedFiles.length + files.length > 5) {
      setFileError('You can upload a maximum of 5 files in total.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    for (const file of files) {
      if (file.size > 20 * 1024 * 1024) {
        setFileError(`File "${file.name}" exceeds 20MB limit.`);
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
    }

    setSelectedFiles((prev) => [...prev, ...files]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveSingleFile = (indexToRemove: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
    setFileError(null);
  };

  const handleClearAllFiles = () => {
    setSelectedFiles([]);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {

    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [slug]);

  useEffect(() => {
    const isZh = lang === 'zh';
    const productName = product ? (isZh ? product.nameZh : product.name) : 'Product Not Found';
    const productDescription = product
      ? (isZh ? product.descriptionZh : product.description)
      : 'The requested Zhongcheng Laser Die product page could not be found.';

    const productPath = `/products/${product?.slug ?? slug ?? ''}`;
    const seo = product?.slug ? PRODUCT_SEO[product.slug] : undefined;
    const seoTitle = isZh ? `${productName} | 众诚精密刀模` : (seo?.title ?? `${productName} | Zhongcheng Cutting Die`);
    const seoDescription = isZh ? productDescription : (seo?.description ?? productDescription);

    updatePageMeta({
      title: seoTitle,
      description: seoDescription,
      path: productPath,
      lang,
      schema: product
        ? buildProductSchema({
            name: productName,
            description: productDescription,
            path: productPath,
            image: product.images[0],
            lang,
          })
        : undefined,
    });
  }, [lang, product, slug]);

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
  const galleryBackground = product.slug === 'steel-counter-plate' ? '#424242' : '#ffffff';
  const galleryImageBackground = (index: number) => (
    product.slug === 'sandwich-die' && (index === 1 || index === 2) ? '#171717' : galleryBackground
  );
  const galleryImageFit = (index: number) => {
    if (product.slug === 'pertinax-counter-plate' && [0, 1, 2].includes(index)) return 'object-cover';
    if (product.slug === 'wooden-die' && [1, 2, 3].includes(index)) return 'object-cover';
    if (product.slug === 'hot-stamping-embossing-die' && [2, 3].includes(index)) return 'object-cover';
    return 'object-contain';
  };
  const relatedSlugs: Record<string, string[]> = {
    'sandwich-die': ['steel-counter-plate', 'stripping-tools', 'blanking-tools'],
    'wooden-die': ['blanking-tools', 'stripping-tools', 'die-making-materials'],
    'steel-counter-plate': ['sandwich-die', 'pertinax-counter-plate', 'wooden-die'],
    'pertinax-counter-plate': ['steel-counter-plate', 'sandwich-die', 'wooden-die'],
    'stripping-tools': ['blanking-tools', 'sandwich-die', 'wooden-die'],
    'blanking-tools': ['stripping-tools', 'wooden-die', 'sandwich-die'],
    'hot-stamping-embossing-die': ['engraving-die', 'wooden-die', 'sandwich-die'],
    'engraving-die': ['hot-stamping-embossing-die', 'die-making-materials', 'wooden-die'],
    'die-making-materials': ['engraving-die', 'wooden-die', 'stripping-tools'],
  };
  const relatedProducts = (relatedSlugs[product.slug] ?? []).flatMap((relatedSlug) => {
    const related = products.find(item => item.slug === relatedSlug);
    return related ? [related] : [];
  });
  const deliverySpec = product.specs.find(spec => spec.key === 'Delivery');
  const deliveryValue = deliverySpec ? (isZh ? deliverySpec.valueZh : deliverySpec.value) : 'On request';
  const deliveryStep = {
    title: 'Packaging & Delivery',
    titleZh: '包装发货',
    desc: `Dies are securely export-packed and dispatched according to the quoted lead time: ${deliveryValue}.`,
    descZh: `刀模按出口标准加固包装，并按报价确认的交期发货：${deliveryValue}。`,
  };

  const stats = [
    { Icon: Crosshair, value: copy.precisionValue, label: copy.precisionLabel },
    { Icon: Truck, value: deliveryValue, label: copy.deliveryLabel },
    { Icon: Package, value: copy.moqValue, label: copy.moqLabel },
    { Icon: Award, value: copy.experienceValue, label: copy.experienceLabel },
  ];

  const scrollToSpecs = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const readFileAsBase64 = (file: File): Promise<{ filename: string; content: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64Content = result.split(',')[1] || '';
        resolve({
          filename: file.name,
          content: base64Content,
        });
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const attachments = await Promise.all(selectedFiles.map(readFileAsBase64));

      const payload = {
        name: String(fd.get('name') ?? '').trim(),
        company: String(fd.get('company') ?? '').trim(),
        email: String(fd.get('email') ?? '').trim(),
        country: String(fd.get('country') ?? '').trim(),
        message: String(fd.get('message') ?? '').trim(),
        product: product.name,
        productSlug: product.slug,
        pageUrl: window.location.href,
        website: String(fd.get('website') ?? '').trim(),
        attachments: attachments.length > 0 ? attachments : undefined,
      };

      const response = await fetch(INQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Inquiry request failed');

      setSubmitState('success');
      form.reset();
      handleClearAllFiles();
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
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
              className="overflow-hidden relative mb-4 aspect-[4/3] lg:aspect-auto lg:h-[400px]"
              style={{
                background: galleryImageBackground(activeImage),
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <img
                key={product.images[activeImage]}
                src={product.images[activeImage]}
                alt={`${name} product image`}
                className={`w-full h-full ${galleryImageFit(activeImage)}`}
                loading={activeImage === 0 ? 'eager' : 'lazy'}
                fetchPriority={activeImage === 0 ? 'high' : 'auto'}
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
                       background: galleryImageBackground(i),

                      border: i === activeImage ? '2px solid var(--accent)' : '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-card)',
                      opacity: i === activeImage ? 1 : 0.6,
                    }}

                  >
                    <img
                      src={img}
                      alt={`${name} thumbnail ${i + 1}`}
                      className={`w-full h-full ${galleryImageFit(i)}`}
                      loading="lazy"
                    />
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
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
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
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
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
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {copy.sopTitle}
            </h2>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {[...SOP_STEPS, deliveryStep].map((step, i) => (
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
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
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

        {/* Related products strengthen product discovery and application context. */}
        {relatedProducts.length > 0 && (
          <section className="mt-20" data-section="related-products">
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-bar" />
              <h2
                className="text-2xl md:text-3xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                {copy.relatedTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/products/${related.slug}`}
                  className="p-5 transition-transform duration-200 hover:-translate-y-1"
                  style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}
                >
                  <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary-light)' }}>
                    {isZh ? related.nameZh : related.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary-light)' }}>
                    {isZh ? related.descriptionZh : related.description}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
                    {copy.viewDetails} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                {copy.inquiryTitle}
              </h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--text-secondary-light)' }}>
              {copy.inquirySub}
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
                  rows={4}
                  placeholder={copy.messagePlaceholder}
                  className={`${inputClass} resize-y`}
                  style={inputStyle}
                />
              </label>

              {/* File Attachment Slot */}
              <div className="sm:col-span-2 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
                  {copy.fieldAttachment}
                </span>
                <div
                  className="p-4 rounded border border-dashed flex flex-col gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: 'var(--border-light)',
                    borderRadius: 'var(--radius-card)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--surface-mid)', color: 'var(--accent)' }}
                      >
                        <UploadCloud size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: 'var(--text-primary-light)' }}>
                          {selectedFiles.length > 0 ? (
                            <span className="text-emerald-400 font-semibold">
                              {selectedFiles.length} / 5 files selected
                            </span>
                          ) : (
                            copy.fieldAttachment
                          )}
                        </p>
                        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-caption)' }}>
                          {copy.attachmentHint}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept={ACCEPTED_FILE_TYPES}
                        onChange={handleFileChange}
                        className="hidden"
                        id="product-drawing-file"
                        disabled={selectedFiles.length >= 5}
                      />
                      <label
                        htmlFor="product-drawing-file"
                        className={`px-4 py-2 text-xs font-semibold rounded cursor-pointer transition-colors ${
                          selectedFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        style={{
                          background: 'var(--surface-mid)',
                          border: '1px solid var(--border-light)',
                          color: 'var(--text-primary-light)',
                        }}
                      >
                        {selectedFiles.length === 0 ? 'Browse Files' : selectedFiles.length < 5 ? 'Add More Files' : 'Max 5 Files'}
                      </label>
                      {selectedFiles.length > 0 && (
                        <button
                          type="button"
                          onClick={handleClearAllFiles}
                          className="px-3 py-2 text-xs rounded hover:opacity-80 transition-colors"
                          style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                          title="Clear All Files"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Render selected files list */}
                  {selectedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-dark)]">
                      {selectedFiles.map((file, idx) => (
                        <div
                          key={`${file.name}-${idx}`}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs"
                          style={{
                            background: 'var(--surface-mid)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-primary-light)',
                          }}
                        >
                          <FileCheck size={13} className="text-emerald-400 flex-shrink-0" />
                          <span className="truncate max-w-[200px]" title={file.name}>
                            {file.name}
                          </span>
                          <span className="text-[10px] text-stone-400 flex-shrink-0">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSingleFile(idx)}
                            className="p-1 hover:text-red-400 text-stone-400 transition-colors ml-1"
                            title="Remove file"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {fileError && <p className="text-xs text-red-400">{fileError}</p>}
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-4 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ fontSize: 13, cursor: isSubmitting ? 'wait' : 'pointer' }}
                >
                  {isSubmitting ? copy.submitting : copy.submit}
                </button>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I would like a quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark px-8 py-4"
                  style={{ fontSize: 13 }}
                >
                  <MessageCircle size={16} />
                  {copy.quoteWhatsApp}
                </a>
              </div>
              <p
                className="sm:col-span-2 text-xs leading-relaxed"
                style={{ color: submitState === 'error' ? '#f08a72' : submitState === 'success' ? '#86c98b' : 'var(--text-caption)' }}
                role="status"
                aria-live="polite"
              >
                {submitState === 'success' ? copy.successMessage : submitState === 'error' ? copy.errorMessage : copy.emailHint}
              </p>
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
        title="WhatsApp: +86 134 0221 1941"
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
